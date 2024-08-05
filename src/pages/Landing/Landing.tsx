import React from "react";
import styled from "styled-components";
import Footer from "../../components/Footer/Footer";
import LandingSection1 from "../../components/LandingSection/LandingSection1";
import LandingSection2 from "../../components/LandingSection/LandingSection2";
import LandingSection3 from "../../components/LandingSection/LandingSection3";
import LandingSection4 from "../../components/LandingSection/LandingSection4";
import LandingSection5 from "../../components/LandingSection/LandingSection5";
import LandingSection6 from "../../components/LandingSection/LandingSection6";
import Header from "../../components/Header/Header";
import { FullPage, Slide } from "react-full-page";

interface StyledSlideProps {
  height?: string;
}

const Landing = () => {
  return (
    <StyledFullPage>
      <Header isLoggedIn={false} fixed={true} />
      <FullPage>
        <Slide>
          <StyledSlide height="">
            <LandingSection1 />
          </StyledSlide>
        </Slide>
        <Slide>
          <StyledSlide height="">
            <LandingSection2 />
          </StyledSlide>
        </Slide>
        <Slide>
          <StyledSlide height="">
            <LandingSection3 />
          </StyledSlide>
        </Slide>
        <Slide>
          <StyledSlide height="">
            <LandingSection4 />
          </StyledSlide>
        </Slide>
        <Slide>
          <StyledSlide height="">
            <LandingSection5 />
          </StyledSlide>
        </Slide>
        <Slide>
          <StyledSlide height="">
            <LandingSection6 />
          </StyledSlide>
        </Slide>
        <Slide>
          <Footer />
        </Slide>
      </FullPage>
    </StyledFullPage>
  );
};

export default Landing;

const StyledFullPage = styled.div`
  position: relative;
  font-family: "Noto Sans KR";
  width: 100%;
  height: 100vh;
`;

const StyledSlide = styled.div<StyledSlideProps>`
  max-width: 80rem;
  height: 100vh;
  height: ${(props) => props.height || "auto"};
  box-sizing: border-box;
  position: relative;
`;
