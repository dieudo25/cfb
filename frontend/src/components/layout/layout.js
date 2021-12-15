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
      w-screen overflow-hidden
  ` }

  header {
    ${ tw`
      row-start-1 h-20
    ` }
  }

  main {
    ${ tw`
      row-start-2
    ` }
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
