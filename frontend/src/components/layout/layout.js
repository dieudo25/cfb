/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"

import "../../style/layout.css"

const layout = {
  display: "grid",
  gridTemplateColumns: "100vw",
  gridTemplateAreas: `
    "header"
    "main"
    "footer"
  `
}

const header = {
  gridArea:"header" 
}

const main = {
  gridArea: "main"
}

const footer = {
  gridArea: "footer"
}

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
    <div id="page_layout" style={layout}>
      <Header 
        siteTitle={data.site.siteMetadata?.title || `Title`}
        style={header}
      />
      <main style={main}>
        {children}
      </main>
      <Footer style={footer} />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
