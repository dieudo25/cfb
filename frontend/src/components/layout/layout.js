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
    ${ tw`
      row-start-2 grid
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

  footer {
    ${ tw`
      row-start-3 h-[500px]
    ` }
  }
`

const Layout = ({ children }) => {
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
      <Header siteTitle={data.site.siteMetadata?.title || `Title`}/>
      <main>{children}</main>
      <Footer/>
    </SPageContainer>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
