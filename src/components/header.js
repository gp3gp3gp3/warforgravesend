import PropTypes from "prop-types"
import React from "react"
import Logo from "../images/logo.svg"

const Header = () => (
  <header
    style={{
      background: `#101010`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
      }}
    >
      <img
        src={Logo}
        style={{ width: "100%", height: "100%", margin: "5px" }}
      />
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
