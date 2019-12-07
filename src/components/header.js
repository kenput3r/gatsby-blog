import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/laptop-logo.png"
import styled from "styled-components"

const HeaderWrapper = styled.header`
  background: #464866;
  img {
    margin-bottom: 0;
  }
`

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0.5rem;
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderContainer>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `#AAABB8`,
            textDecoration: `none`,
            fontWeight: `200`
          }}
        >
          <img style={{height: '50px', verticalAlign: 'text-bottom'}} src={logo} alt="Laptop icon with a k on the screen" /> Gatsby Blog
        </Link>
      </h1>
    </HeaderContainer>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
