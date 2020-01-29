import PropTypes from "prop-types"
import React from "react"

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
        src={"images/logo.svg"}
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
