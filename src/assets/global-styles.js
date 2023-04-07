import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body, html {
    height: 100%;
  }

  body {
    overflow-y: scroll;
    line-height: 1.4;
  }
  a {
    cursor: pointer;
  }
`;

export default GlobalStyle;
