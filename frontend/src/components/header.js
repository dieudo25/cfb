import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const header = {
  
}

const container = {
  
}

const h1 = {
  
}

const link = {
  
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
