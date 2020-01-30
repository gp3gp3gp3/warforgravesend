import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=UnifrakturCook:700&display=swap');
  body {
    padding: 0;
    margin: 0;
    font-family: 'UnifrakturCook';
    background-color: white;
    color: black;
  }
  a {
    text-decoration: none;
  }
  ul {
    margin: 0 auto;
    list-style-type: none;
  }
`
