/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import tw, { styled } from "twin.macro"

import Header from "./header"
import Footer from "./footer"

import "../../style/layout.css"

const SPageContainer = styled.div`
  ${ tw`
    overflow-hidden
  ` }

  header {
    ${ tw`
      row-start-1 min-h-[80px]
    ` }
  }

  main {
    scroll-behavior: smooth;
    ${ tw`
      row-start-2 grid overflow-x-hidden 
    ` }

    section.home-section-cta {
      ${ tw`
        row-start-3 row-end-7 row-span-2 min-h-[35vh]
      ` }


    }

    section.home-slider {
      ${ tw`
        row-start-3 row-end-7 row-span-2 min-h-[65vh]
    ` }
    }
  }

  main.page-accueil {
    ${ tw`
      max-h-screen overflow-y-scroll
    ` }
  }

  footer {
    ${ tw`
      h-[500px]
    ` }
  }
`

const Layout = ({ slug, children }) => {
  console.log('slug', slug)
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <SPageContainer id="page_layout">
      <Header siteTitle={ slug || `Title`}/>
      <main className={`page-${ slug } snap snap-y snap-mandatory`} >
        {children}
        <Footer/>
      </main>
    </SPageContainer>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
