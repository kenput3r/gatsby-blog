import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import SEO from "../components/seo"
import styled from "styled-components"

const Post = styled.article`
  background-color: #FFFFFF;
  box-shadow: 0px 3px 10px rgba(25, 17, 34, 0.05);
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1rem;
  p {
    font-size: 0.8rem;
  }
  h2 {
    margin-bottom: 0;
  }
`

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
      {data.allMarkdownRemark.edges.map(edge => (
        <Post key={edge.node.frontmatter.slug}>
          <h2>{edge.node.frontmatter.title}</h2>
          <p>{edge.node.frontmatter.date}</p>
          <p>{edge.node.excerpt}</p>
          <Link to={`/posts${edge.node.frontmatter.slug}`}>Read More</Link>
        </Post>
      ))}
    </div>
  )
}

export default Listing
