import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const header = {
  background: `rebeccapurple`,
  marginBottom: `1.45rem`,
}

const container = {
  margin: `0 auto`,
  maxWidth: 960,
  padding: `1.45rem 1.0875rem`,
}

const h1 = {
  margin: 0
}

const link = {
  color: `white`,
  textDecoration: `none`,
}

const Header = ({ siteTitle }) => (
  <header
    style={header}
  >
    <div
      style={container}
    >
      <h1 style={h1}>
        <Link
          to="/"
          style={link}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
