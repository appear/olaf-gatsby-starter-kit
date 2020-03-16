import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { PostIndexQuery } from "../../graphql-types"
import PostSection from "../components/home/post-section"

const IndexPage = ({ data }: { data: PostIndexQuery }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <PostSection data={data} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query PostIndex {
    allMarkdownRemark(
      filter: { frontmatter: { draft: { eq: false } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      pageInfo {
        pageCount
        perPage
      }
      totalCount
      edges {
        node {
          id
          html
          excerpt
          frontmatter {
            title
            category
            date
            draft
            thumbnail
          }
        }
      }
    }
  }
`

export default IndexPage
