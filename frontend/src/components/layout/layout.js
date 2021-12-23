/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import tw, { styled } from "twin.macro"

import Header from "./header"
import Footer from "./footer"

import "../../style/layout.css"

const SPageContainer = styled.div`
  ${ tw`
    
  ` }

  .main-nav {
    ${ tw`
      row-start-1 min-h-[80px]
    ` }

    ${ ({ className }) => (className === "page-accueil" && tw`
      fixed
    `) }
  }

  main {
    scroll-behavior: smooth;
    scroll-padding: 50px;
    
    ${ tw`
      row-start-2 grid overflow-x-hidden 
    ` }

    ${ ({ className }) => (className === "page-accueil" && tw`
      max-h-screen overflow-y-scroll
    `) }

    > section, footer {
      ${ tw`
        mt-[80px]
      ` }
    }
  }

  footer {
    ${ tw`

    ` }
  }
`

const Layout = ({ slug, children }) => (
    <SPageContainer id="page_layout" className={`page-${ slug }`}>
      <Header siteTitle={ slug || `Title`}/>
      <main className={`snap snap-y snap-mandatory`} >
        {children}
        <Footer/>
      </main>
    </SPageContainer>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
