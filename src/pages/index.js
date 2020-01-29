import React from "react"
import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <div
      style={{
        backgroundImage: "url(images/background.jpg)",
        backgroundSize: "cover",
        height: "100%",
        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
      }}
    >
      <div
        style={{
          margin: "0 auto",
          maxWidth: "30%",
        }}
      >
        <img
          src={"images/emblem.png"}
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
          marginBottom: 10,
        }}
      >
        <a
          href="mailto:warforgravesend@gmail.com"
          style={{
            fontSize: 48,
            color: "black",
            WebkitTextStroke: "0.5px white",
          }}
        >
          Gravesend@gmail.com
        </a>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 10,
        }}
      >
        <a
          href="https://warforgravesend.bandcamp.com/"
          style={{
            fontSize: 48,
            color: "black",
            WebkitTextStroke: "0.5px white",
          }}
        >
          Bandcamp
        </a>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 10,
        }}
      >
        <a
          href="https://www.instagram.com/warforgravesend/"
          style={{
            fontSize: 48,
            color: "black",
            WebkitTextStroke: "0.5px white",
          }}
        >
          Instagram
        </a>
      </div>
    </div>
  </Layout>
)

export default IndexPage
