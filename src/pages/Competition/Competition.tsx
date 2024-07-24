import React from "react";
import styled, { keyframes } from "styled-components";
import Header from "../../components/Header/Header";

export default function Competition() {
  return (
    <>
      <CompetitionHead>
        <Header isLoggedIn={false} marginTop="34px" />
        <CompetitionTitle>도전! 프롬프렌</CompetitionTitle>
        <CarouselContainer>
          <Container>
            <Carousel id="carousel">
              <Figure>1</Figure>
              <Figure>2</Figure>
              <Figure>3</Figure>
              <Figure>4</Figure>
            </Carousel>
          </Container>
        </CarouselContainer>
      </CompetitionHead>
    </>
  );
}

const CompetitionHead = styled.div`
  width: 1280px;
  height: 501px;
  flex-shrink: 0;
  background: linear-gradient(
    90deg,
    rgba(112, 138, 229, 0.7) 0.07%,
    rgba(44, 193, 191, 0.7) 99.94%
  );
  padding-top: 34px;
`;

const CompetitionTitle = styled.div`
  color: #000;
  text-align: center;
  font-family: "Gmarket Sans TTF";
  font-size: 40px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 90px;
`;

const CarouselContainer = styled.div``;

const Container = styled.div`
  width: 100%;
  position: relative;
  perspective: 3000px;
  padding: 100px;
`;

const Carousel = styled.div`
  position: relative;
`;

const rotate = keyframes`
  0%, 20%, 99.7619047619%, 100% {
    transform: rotateY(45deg) scale(0.6);
    right: 0;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    z-index: -1;
    -webkit-filter: opacity(100%) blur(3px);
  }
  24.7619047619%, 45% {
    transform: rotateY(0deg) scale(1);
    right: 40%;
    box-shadow: 0 0 20px black;
    z-index: 100;
    -webkit-filter: opacity(100%) blur(0px);
  }
  49.7619047619%, 70% {
    transform: rotateY(-45deg) scale(0.6);
    right: 81%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    z-index: -1;
    -webkit-filter: opacity(100%) blur(3px);
  }
  74.7619047619%, 95% {
    transform: rotateY(-90deg) scale(0);
    right: 0%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0);
    z-index: 0;
    -webkit-filter: opacity(0%) blur(0px);
  }
`;

const Figure = styled.div`
  display: block;
  width: 456.575px;
  -webkit-box-reflect: below 30px -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop(50%, transparent), to(rgba(255, 255, 255, 0.2)));
  height: 302px;
  border-radius: 16px;
  animation: ${rotate} 30000ms ease-in-out infinite;
  position: absolute;
  background-color: white;
  padding: 12em;
  text-align: center;
  &:nth-child(1) {
    animation-delay: -30000ms;
  }
  &:nth-child(2) {
    animation-delay: -22500ms;
  }
  &:nth-child(3) {
    animation-delay: -15000ms;
  }
  &:nth-child(4) {
    animation-delay: -7500ms;
  }
  &:nth-child(5) {
    animation-delay: 0ms;
  }
  &:nth-child(6) {
    animation-delay: 7500ms;
  }
`;
