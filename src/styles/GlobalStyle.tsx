import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Noto Sans';
    src: url('./assets/NotoSansKR-Regular.otf') format('otf');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
  * {
    margin: 0;
    padding: 0;
  }
  html {
    margin: 0;
    padding: 0;
    height: 100%;
    min-width: 20rem;
    max-width: 80rem;
    display: flex;
    justify-content: center;
  }
`;

export default GlobalStyle;
