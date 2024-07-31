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
    font-family: "Noto Sans KR Thin";
    src: url('../assets/fonts/NotoSansKR-Thin.otf') format('opentype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Gmarket Sans TTF';
    src: url('../assets/fonts/GmarketSansMedium.otf') format('opentype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
      @font-face {
    font-family: 'Gmarket Sans TTF Light';
    src: url('../assets/fonts/GmarketSansLight.otf') format('opentype');
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
    font-family: 'Noto Sans KR', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
  }

  #root 
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1280px;
  }
  html {
  scroll-behavior: smooth;
}
`;

export default GlobalStyle;
