import React from "react";
import styled, { keyframes } from "styled-components";
import { ReactComponent as LandingSection2ImgSVG } from "../../assets/images/LandingSection2Img.svg";
import circleImageURL from "../../assets/images/LandingSection2Circle.svg";

export default function LandingSection2() {
  return (
    <Container>
      <Title>
        <TitleSpan>
          <Character>프</Character>
          <Character>롬</Character>
          <Character>프</Character>
          <Character>렌</Character>
        </TitleSpan>
        은 효과적인
        <TitleSpan>AI 사용</TitleSpan>을 도와줍니다
      </Title>
      <SubTitle>
        방대한 양의 데이터를 학습한 생성형 AI는 자율적인 판단없이 지시한대로
        결과물을 출<br />
        력하기 때문에 프롬프트를 개발할 때 정교한 구성이 필요합니다.
      </SubTitle>
      <BottomText>프롬프트는 프롬프렌과 함께 작성해보세요.</BottomText>
      <Image />
    </Container>
  );
}

const Container = styled.section`
  max-width: 80rem;
  height: 20rem;
  text-align: center;
  margin: 0 auto;
  margin-bottom: 12.56rem;
`;

const Title = styled.h2`
  color: #000;
  font-family: "Gmarket Sans TTF";
  font-size: 2.25rem;
  font-weight: 300;
  margin-top: 15.56rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-top: 4rem;
  }
`;

const TitleSpan = styled.span`
  display: inline-block;
  color: #000;
  text-align: center;
  font-family: "Gmarket Sans TTF";
  font-size: 2.25rem;
  font-weight: 700;
  box-shadow: inset 0 -1.25rem 0 rgba(66, 208, 159, 0.39);

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Character = styled.span`
  position: relative;
  display: inline-block;
  margin: 0 0.125rem;

  &::before {
    content: "";
    position: absolute;
    top: -0.75rem;
    left: 50%;
    transform: translateX(-50%);
    width: 0.5rem;
    height: 0.5rem;
    background: url(${circleImageURL}) no-repeat center center;
    background-size: contain;

    @media (max-width: 768px) {
      top: -0.5rem;
      width: 0.375rem;
      height: 0.375rem;
    }
  }
`;

const SubTitle = styled.p`
  color: #000;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  margin-top: 1.875rem;

  @media (max-width: 768px) {
    font-size: 0.75rem;
    margin-top: 1rem;
  }
`;

const BottomText = styled.p`
  color: #42d09f;
  font-family: "Gmarket Sans TTF";
  font-size: 0.875rem;
  font-weight: 500;
  margin-top: 4.3125rem;

  @media (max-width: 768px) {
    font-size: 0.75rem;
    margin-top: 2rem;
  }
`;

const swayAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-0.3125rem);
  }
`;

const Image = styled(LandingSection2ImgSVG)`
  margin-top: 1rem;
  animation: ${swayAnimation} 3s ease-in-out infinite;

  @media (max-width: 768px) {
    width: 80%;
    margin: 1rem auto;
  }
`;
