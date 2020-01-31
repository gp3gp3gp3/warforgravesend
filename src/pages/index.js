import React from "react"
import { GlobalStyle } from "../theme/globalStyle"

const IndexPage = () => (
  <>
    <GlobalStyle />
    <div
      style={{
        backgroundImage: "url(images/background_opt.jpg)",
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
          src={"images/emblem_opt.png"}
          style={{
            width: "100%",
            height: "100%",
            filter: "drop-shadow(0px 4px 4px black)",
          }}
        />
      </div>
      <div
        style={{
          paddingTop: 20,
          paddingLeft: 20,
          paddingRight: 20,
          borderRadius: "2px",
          backgroundColor: "black",
          textAlign: "center",
          alignItems: "center",
          boxShadow: "0px 2px 2px 0px rgba(0,0,0,0.75)",
        }}
      >
        <div
          style={{
            marginBottom: 10,
          }}
        >
          <a
            href={"PressKit/GRAVESEND_PRESS_KIT.zip"}
            style={{
              fontSize: "8vw",
              color: "white",
            }}
          >
            PRESS KIT
          </a>
        </div>
        <div
          style={{
            marginBottom: 10,
          }}
        >
          <a
            href="mailto:warforgravesend@gmail.com"
            style={{
              fontSize: "8vw",
              color: "white",
            }}
          >
            EMAIL
          </a>
        </div>
        <div
          style={{
            marginBottom: 10,
          }}
        >
          <a
            href="https://warforgravesend.bandcamp.com/"
            style={{
              fontSize: "8vw",
              color: "white",
            }}
          >
            BANDCAMP
          </a>
        </div>
        <div
          style={{
            marginBottom: 10,
          }}
        >
          <a
            href="https://www.instagram.com/warforgravesend/"
            style={{
              fontSize: "8vw",
              color: "white",
            }}
          >
            INSTAGRAM
          </a>
        </div>
      </div>
    </div>
  </>
)

export default IndexPage
