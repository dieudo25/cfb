import React, { useState } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import tw, { styled } from "twin.macro"
import { useStaticQuery, graphql } from "gatsby"
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
            md:w-[100px]
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

    nav.menu {
      ${ tw`
        flex-col flex-grow pb-4 text-center transition ease-in-out transition-all
        md:pb-0 md:flex md:justify-end md:flex-row
      ` }

      a {
        ${ tw`
          uppercase px-4 py-2 mt-2 font-semibold no-underline text-dark-500 transition ease-in-out
          md:mt-0 
          hover:text-second-500 hover:transition ease-in-out
      ` }
      }
      
    }

    nav.menu.is-visible {
      ${ tw`
        block transition max-md:h-[calc(100vh - 80px)] ease-in-out transition-all
      ` }
    }

    nav.menu.is-hidden {
      ${ tw`
        max-md:hidden max-md:h-0 transition ease-in-out transition-all
      ` }

      a {
        ${ tw`
          max-md:hidden
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
        <nav className={ `menu ${ isMenuActive ? 'is-visible' : 'is-hidden' }` } isActive={ isMenuActive }>
          { menu.map((link) => (
            <Link to={`/${ link.page.title === "accueil" ? "" : link.page.title }`}>{ link.page.title }</Link>
          )) }
        </nav>
      </div>
    </SSection>
  )
}


Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header;
