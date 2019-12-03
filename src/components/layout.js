/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Archive from "./archive"
import "./layout.css"
import styled from "styled-components"
import Img from "gatsby-image"
import { useSpring, animated } from "react-spring"

const MainLayout = styled.main`
  max-width: 90%;
  margin: 1rem auto;
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: 40px
`

const Layout = ({ children, location }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
      file(relativePath: {
        regex: "/bg/"
      }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const spring = useSpring({
    height: location.pathname === '/' ? 300 : 100, 
    from: {height: location.pathname === '/' ? 100 : 200}
  });
  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <animated.div style={{overflow: 'hidden', ...spring}}>
        <Img fluid={data.file.childImageSharp.fluid} />
      </animated.div>
      <MainLayout>
        <div>{children}</div>
        <Archive />
        </MainLayout>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
