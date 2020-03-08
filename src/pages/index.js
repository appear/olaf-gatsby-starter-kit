import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  console.log("data", data)

  const [edge] = data.allMarkdownRemark.edges

  console.log(edge.node.frontmatter.thumbnail.childImageSharp.fluid)
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
      <Img fluid={edge.node.frontmatter.thumbnail.childImageSharp.fluid} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
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
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
