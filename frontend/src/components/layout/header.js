import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import tw, { styled } from "twin.macro"
import { useStaticQuery, graphql } from "gatsby"
import Image from "../basic/image"

const SSection = styled.section`
  ${ tw`
    fixed z-10 top-0 left-0 right-0 w-full bg-white min-h-[80px] border-b-2 border-red-500 border-solid
  ` }

  div.nav-container{
    ${ tw`
      flex flex-col max-w-screen-xl px-4 mx-auto 
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
       uppercase
      ` }
    }


  }
`;

const Header = ({ siteTitle }) => {
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

  return (
    <SSection className="main-nav" >
      <div className="nav-container" x-data="{ open: false }">
        <div  className="nav-logo">
          <Link to='/'>
            { logo.image ? <Image image={ logo.image } /> : logo.text }
          </Link>
          <button className="small-device"></button>
        </div>
        <nav className="menu">
          { menu.map((link) => (
            <Link to={`/${link.page.title == "accueil" ? "" : link.page.title}`}>{link.page.title}</Link>
          )) }
        </nav>
      </div>
    </SSection>
  )
}



Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header;
