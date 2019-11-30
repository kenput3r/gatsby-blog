import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Image from "../components/image"
import SEO from "../components/seo"

const LISTING_QUERY = graphql`
  query BlogPostListing {
    allMarkdownRemark(limit: 5, sort: {
      order: DESC,
      fields: [frontmatter___date]
    }) {
      edges {
        node {
          excerpt
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            slug
          }
        }
      }
    }
  }
`

const Listing = () => {
  const data = useStaticQuery(LISTING_QUERY);
  return (
    <div>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      {data.allMarkdownRemark.edges.map(edge => (
        <article key={edge.node.frontmatter.slug}>
          <h2>{edge.node.frontmatter.title}</h2>
          <p>{edge.node.frontmatter.date}</p>
          <p>{edge.node.excerpt}</p>
          <Link to={`/posts${edge.node.frontmatter.slug}`}>Read More</Link>
        </article>
      ))}
    </div>
  )
}

export default Listing
