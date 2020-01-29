import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=UnifrakturCook:700&display=swap');
  body {
    padding: 0;
    margin: 0;
    font-family: 'UnifrakturCook', cursive;
    background-color: #101010;
    color: white;
  }
  a {
    text-decoration: none;
  }
  ul {
    margin: 0 auto;
    list-style-type: none;
  }
`
