import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"


// markup
const IndexPage = ({ data }) => {
  console.log('data', data)
  return (
    <Layout>
      <Seo title="Home" />   

      
    </Layout>
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