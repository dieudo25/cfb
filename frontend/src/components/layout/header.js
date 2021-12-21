import React, { useState } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import tw, { styled } from "twin.macro"
import { useStaticQuery, graphql } from "gatsby"

import MenuList from "../basic/menuList"
import Image from "../basic/image"

const SSection = styled.section`
  ${ tw`
    fixed z-10 top-0 left-0 right-0 w-full bg-white min-h-[80px] 
  ` }

  div.nav-container{
    ${ tw`
      flex flex-col w-10/12 px-4 mx-auto 
      md:items-center md:justify-between md:flex-row md:px-6 
      lg:px-8
    ` }

    .nav-logo {
      ${ tw`
        p-4 flex flex-row items-center justify-between
      ` }

      a {
        ${ tw`
          text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg 
        ` }

        .img-container {
          ${ tw`
            w-[58px]
            md:w-[80px]
          ` }
        }
      }

      button.small-device {
          background-image: url('/image/menu_icon.svg');

          ${ tw`
            bg-white bg-contain bg-no-repeat w-10 h-10 border-0
            md:hidden
            focus:outline-none
        ` }
      }
    }

    nav.menu.is-visible {
      ${ tw`
        max-mdd:h-[calc(100vh - 80px)]
      ` }
    }

    nav.menu.is-hidden {
      ${ tw`
        max-mdd:hidden max-mdd:h-0 transition ease-in-out transition-all
      ` }

      a {
        ${ tw`
          max-mdd:hidden
        ` }
      }
    }


  }
`;

const Header = () => {
  const  { strapiNavigation: { logo, menu } }  = useStaticQuery(
    graphql`
      query {
        strapiNavigation {
          logo {
            image {
              id
              name
              alternativeText
              caption
              width
              height
              url
              size
            }
          }
          menu {
            page {
              title
              slug
            }
          }
        }
      }  
    `
  )

  const [isMenuActive, setIsMenuActive] = useState(false);

  return (
    <SSection className="main-nav" >
      <div className="nav-container">
        <div  className="nav-logo">
          <Link to='/'>
            { logo.image ? <Image image={ logo.image } /> : logo.text }
          </Link>
          <button className="small-device" aria-label="toggle-nav-menu" onClick={ () => setIsMenuActive(!isMenuActive) } />
        </div>
        <MenuList menu={ menu } isMenuActive={ isMenuActive }  />
      </div>
    </SSection>
  )
}


Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header;
