import styled from "styled-components";
import MainSection1 from "../../components/Main/MainSection1";
import MainTop from "../../components/Main/Top";
import MainSection2 from "../../components/Main/MainSection2";
import MainSection3 from "../../components/Main/MainSection3";
import Footer from "../../components/Footer/Footer";

export default function Main() {
    return (
      <MainContainer>
        <MainTop />
        <MainSection1 />
        <MainSection2 />
        <MainSection3 />
        <Footer />
      </MainContainer>
    );
  }

  const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
`;
<<<<<<< HEAD
=======

>>>>>>> 12b5cf23c1136e6df3c10aac4d4377d8129eabd0
