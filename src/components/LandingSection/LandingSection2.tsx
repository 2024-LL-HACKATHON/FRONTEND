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
  text-align: center;
`;

const LandingSection2Title = styled.div`
  color: #000;
  font-family: "Gmarket Sans TTF";
  font-size: 36px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  margin-top: 192px;
`;

const LandingSection2TitleSpan = styled.span`
  display: inline-block;
  color: #000;
  text-align: center;
  font-family: "Gmarket Sans TTF";
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  box-shadow: inset 0 -20px 0 rgba(66, 208, 159, 0.39);
`;

const CharacterWithCircle = styled.span`
  position: relative;
  display: inline-block;
  margin: 0 2px;

  &::before {
    content: "";
    position: absolute;
    top: -12px;
    left: 50%;
    transform: translateX(-50%);
    width: 8px;
    height: 8px;
    background: url(${circleImageURL}) no-repeat center center;
    background-size: contain;
  }
`;

const LandingSection2SubTitle = styled.div`
  color: #000;
  text-align: center;
  font-family: "Noto Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 30px;
`;

const LandingSection2BottomText = styled.div`
  color: #42d09f;
  text-align: center;
  font-family: "Gmarket Sans TTF";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 69px;
`;

const swayAnimation2 = keyframes`
  50% {
    transform: translateY(0);
  }
  70% {
    transform: translateY(-5px);
  }
  50% {
    transform: translateY(0);
  }
`;

const StyledLandingSection2Img = styled(LandingSection2ImgSVG)`
  margin-top: 16px;
  animation: ${swayAnimation2} 3s ease-in-out infinite;
`;
