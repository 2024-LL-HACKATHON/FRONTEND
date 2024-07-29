import React from "react";
import styled, { keyframes } from "styled-components";
import { ReactComponent as LandingSection2ImgSVG } from "../../assets/images/LandingSection2Img.svg";
import circleImageURL from "../../assets/images/LandingSection2Circle.svg";

export default function LandingSection2() {
  return (
    <LandingSection2Container>
      <LandingSection2Title>
        <LandingSection2TitleSpan>
          <CharacterWithCircle>프</CharacterWithCircle>
          <CharacterWithCircle>롬</CharacterWithCircle>
          <CharacterWithCircle>프</CharacterWithCircle>
          <CharacterWithCircle>렌</CharacterWithCircle>
        </LandingSection2TitleSpan>
        은 효과적인
        <LandingSection2TitleSpan>AI 사용</LandingSection2TitleSpan>을
        도와줍니다
      </LandingSection2Title>
      <LandingSection2SubTitle>
        방대한 양의 데이터를 학습한 생성형 AI는 자율적인 판단없이 지시한대로
        결과물을 출<br />
        력하기 때문에 프롬프트를 개발할 때 정교한 구성이 필요합니다.
      </LandingSection2SubTitle>
      <LandingSection2BottomText>
        프롬프트는 프롬프렌과 함께 작성해보세요.
      </LandingSection2BottomText>
      <StyledLandingSection2Img />
    </LandingSection2Container>
  );
}

const LandingSection2Container = styled.div`
  max-width: 80rem; // 1280px
  text-align: center;
  margin: 0 auto;
  margin-bottom: 12.56rem;
`;

const LandingSection2Title = styled.div`
  color: #000;
  font-family: "Gmarket Sans TTF";
  font-size: 2.25rem; // 36px
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  margin-top: 12rem; // 192px

  @media (max-width: 768px) {
    font-size: 1.5rem; // 24px
    margin-top: 4rem; // 64px
  }
`;

const LandingSection2TitleSpan = styled.span`
  display: inline-block;
  color: #000;
  text-align: center;
  font-family: "Gmarket Sans TTF";
  font-size: 2.25rem; // 36px
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  box-shadow: inset 0 -1.25rem 0 rgba(66, 208, 159, 0.39); // 0 -20px

  @media (max-width: 768px) {
    font-size: 1.5rem; // 24px
  }
`;

const CharacterWithCircle = styled.span`
  position: relative;
  display: inline-block;
  margin: 0 0.125rem; // 2px

  &::before {
    content: "";
    position: absolute;
    top: -0.75rem; // -12px
    left: 50%;
    transform: translateX(-50%);
    width: 0.5rem; // 8px
    height: 0.5rem; // 8px
    background: url(${circleImageURL}) no-repeat center center;
    background-size: contain;

    @media (max-width: 768px) {
      top: -0.5rem; // -8px
      width: 0.375rem; // 6px
      height: 0.375rem; // 6px
    }
  }
`;

const LandingSection2SubTitle = styled.div`
  color: #000;
  text-align: center;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 0.875rem; // 14px
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 1.875rem; // 30px

  @media (max-width: 768px) {
    font-size: 0.75rem; // 12px
    margin-top: 1rem; // 16px
  }
`;

const LandingSection2BottomText = styled.div`
  color: #42d09f;
  text-align: center;
  font-family: "Gmarket Sans TTF";
  font-size: 0.875rem; // 14px
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 4.3125rem; // 69px

  @media (max-width: 768px) {
    font-size: 0.75rem; // 12px
    margin-top: 2rem; // 32px
  }
`;

const swayAnimation2 = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-0.3125rem); // -5px
  }
`;

const StyledLandingSection2Img = styled(LandingSection2ImgSVG)`
  margin-top: 1rem; // 16px
  animation: ${swayAnimation2} 3s ease-in-out infinite;

  @media (max-width: 768px) {
    width: 80%;
    margin: 1rem auto;
  }
`;
