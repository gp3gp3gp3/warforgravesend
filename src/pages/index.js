import React from "react"
import Emblem from "../components/emblem"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div
      style={{
        margin: "0 auto",
        maxWidth: "30%",
      }}
    >
      <Emblem />
    </div>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <a
        href="mailto:gpaul.empyrean@gmail.com"
        style={{ fontSize: 10, color: "white" }}
      >
        gravesend@gmail.com
      </a>
    </div>
  </Layout>
)

export default IndexPage
