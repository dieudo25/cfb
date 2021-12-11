/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Header from "./header"
import Footer from "./footer"

import "../../style/layout.css"

const SPageContainer = styled.div`
  display: grid;
  grid-template-columns: 100vw;
  grid-template-rows: 80px 1fr 500px;
  grid-template-areas:
    "header"
    "main"
    "footer";
  overflow: hidden;
`

const SHeader = styled(Header)`
  grid-area: header;
`

const SMain = styled.main`
  grid-area: main;
`

const SFooter = styled(Footer)`
  grid-area: footer;
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
      <SHeader siteTitle={data.site.siteMetadata?.title || `Title`}/>
      <SMain>{children}</SMain>
      <SFooter/>
    </SPageContainer>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
