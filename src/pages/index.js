import React from "react"
import { GlobalStyle } from "../theme/globalStyle"

const IndexPage = () => (
  <>
    <GlobalStyle />
    <div
      style={{
        backgroundImage: "url(images/background.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "repeat",
        height: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <img
        src={"images/logo-black.svg"}
        style={{
          width: "90%",
          marginLeft: "5%",
          marginRight: "5%",
        }}
      />
      <div
        style={{
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
          marginBottom: 10,
        }}
      >
        <a
          href="mailto:warforgravesend@gmail.com"
          style={{
            fontSize: "10vw",
            textShadow: "4px 4px black",
            color: "#353839",
            WebkitTextStroke: "0.75px white",
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
            fontSize: "10vw",
            textShadow: "4px 4px black",
            color: "#353839",
            WebkitTextStroke: "0.75px white",
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
            fontSize: "10vw",
            textShadow: "4px 4px black",
            color: "#353839",
            WebkitTextStroke: "0.75px white",
          }}
        >
          Instagram
        </a>
      </div>
    </div>
  </>
)

export default IndexPage
