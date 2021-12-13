import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"

const SHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: white;
  height: 80px;
`

const Header = ({ siteTitle }) => (
  <SHeader>
    <div>
      <h1>
        <Link to="/">
          {siteTitle}
        </Link>
      </h1>
    </div>
  </SHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
