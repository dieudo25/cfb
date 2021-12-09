import * as React from "react"
import { graphql } from "gatsby"

import Seo from "../components/seo"
import Page from "../components/page"


// markup
const IndexPage = ({ data }) => {
  return (
    <>
      <Seo title="Home" />   
      <Page
        id={ props.pageContext.id }
        slug={ props.pageContext.slug }
        title={ props.pageContext.title }
        full_width={ props.pageContext.full_width }
      />  
    </>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query MyQuery {
    allStrapiPages {
      nodes {
        id
        slug
        title
        full_width
      }
    }
  }
`