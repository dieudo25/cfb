import React, { useState } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import tw, { styled } from "twin.macro"
import { useStaticQuery, graphql } from "gatsby"

import MenuList from "../basic/menuList"
import Image from "../basic/image"

const SSection = styled.section`
  ${ tw`
    z-10 top-0 left-0 right-0 w-full bg-white min-h-[80px] border-t-0 border-b-4 border-l-0 border-r-0 border-second-500 border-solid
  ` }

  div.nav-container{
    ${ tw`
      flex flex-col w-10/12 max-w-[960px]  mx-auto 
      md:items-center md:justify-between md:flex-row
    ` }

    .nav-logo {
      ${ tw`
        py-4 flex flex-row items-center justify-between
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
            bg-white bg-contain bg-no-repeat w-10 h-10 border-0 cursor-pointer
            md:hidden
            focus:outline-none
        ` }
      }
    }

    nav {
      ${ tw`
        max-mdd:h-0 transition ease-in-out transition-all
      ` }

      a {
        ${ tw`
          max-mdd:hidden transition ease-in-out transition-all
        ` }
      }

      &.menu.is-visible {
        ${ tw`
          max-mdd:h-[calc(100vh - 84px)]
        ` }

        a {
          ${ tw`
            max-mdd:block
          ` }
        }
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
        <MenuList menu={ menu } isMenuActive={ isMenuActive } className="header-nav" />
      </div>
    </SSection>
  )
}


Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header;
