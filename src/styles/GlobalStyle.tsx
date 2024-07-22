import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Noto Sans KR";
    src: url('../assets/fonts/NotoSansKR-Regular.otf') format('opentype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Gmarket Sans';
    src: url('../assets/fonts/GmarketSansMedium.otf') format('otf');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Noto Sans', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    padding: 0;
  }

  #root 
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 80rem;
  }
  html {
  scroll-behavior: smooth;
}
`;

export default GlobalStyle;
