import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import tw, { styled } from "twin.macro"

const SHeader = styled.header`
  ${ tw`
    fixed z-10 top-0 left-0 right-0 bg-white h-20 border-b-2 border-red-500 border-solid
  ` }

  div {
    ${ tw`
    ` }
  }
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
