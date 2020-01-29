import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import emblem from "../images/emblem.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div
      style={{
        margin: "0 auto",
        maxWidth: "30%",
      }}
    >
      <img
        src={emblem}
        style={{
          width: "100%",
          height: "100%",
          filter: "drop-shadow(0px 4px 4px black)",
        }}
      />
    </div>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <a
        href="mailto:warforgravesend@gmail.com"
        style={{ fontSize: 10, color: "white" }}
      >
        gravesend@gmail.com
      </a>
    </div>
  </Layout>
)

export default IndexPage
