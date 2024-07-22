import { ReactComponent as LandingToMainButton } from "../../assets/images/LandingToMainButton.svg";
import { ReactComponent as LandingImg1 } from "../../assets/images/LandingImg1.svg";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import Header from "../Header/Header";

export default function LandingSection1() {
  return (
    <>
      <Header isLoggedIn={false} marginTop = "34px" />
      <LandingContent>
        <LandingTexts>
          <LandingSlogan>Prom Here, Prom Now</LandingSlogan>
          <LandingMainText>프롬프렌</LandingMainText>
          <LandingSideText>
            Promfren과 함께 AI 프롬프트를 공유하고 <br /> 새로운 웰니스를
            경험하세요
          </LandingSideText>
          <StyledLink to="/main">
            <LandingToMain>
              지금 시작하기
              <LandingToMainButton />
            </LandingToMain>
          </StyledLink>
        </LandingTexts>
        <LandingImg1Styled />
      </LandingContent>
      <LandingDiv405>
        <LandingDiv405Title>프롬프트?</LandingDiv405Title>
        <LandingDiv405Stroke />
        <LandingDiv405Content>
          AI가 최상의 답을 할 수 있도록 훈련 시키고 AI로
          <br />
          부터 최상의 답을 이끌어내는 도구
        </LandingDiv405Content>
      </LandingDiv405>
    </>
  );
}

const LandingContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LandingTexts = styled.div`
  width: 500px;
  height: 275px;
  flex-shrink: 0;
  margin-top: 234px;
`;

const LandingTextBase = styled.div`
  font-family: "Gmarket Sans TTF";
  font-style: normal;
  font-weight: 700;
`;

const LandingSlogan = styled(LandingTextBase)`
  color: #7e7e7e;
  font-size: 16px;
  margin-left: 215px;
`;

const LandingMainText = styled(LandingTextBase)`
  color: #2cc1bf;
  font-size: 96px;
  line-height: 118.07%;
  margin-left: 130px;
  margin-top: 19px;
`;

const LandingSideText = styled.div`
  width: 260px;
  height: 42px;
  text-align: center;
  color: #7e7e7e;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  margin-left: 190px;
  margin-top: 19px;
`;

const LandingToMain = styled(LandingTextBase)`
  display: flex;
  align-items: center;
  color: #2cc1bf;
  font-size: 16px;
  line-height: normal;
  margin-left: 255px;
  margin-top: 56px;
  gap: 5px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const swayAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`;

const LandingImg1Styled = styled(LandingImg1)`
  margin-top: 56px;
  margin-left: 37px;
  animation: ${swayAnimation} 4s ease-in-out infinite;
`;

const LandingDiv405 = styled.div`
  display: flex;
  width: 1280px;
  height: 225px;
  flex-shrink: 0;
  background: linear-gradient(90deg, #42d09f 0%, #2cc1bf 100%);
  align-items: center;
  margin-top: 179px;
`;

const LandingDiv405Title = styled(LandingTextBase)`
  color: #fff;
  font-size: 64px;
  margin-left: 267px;
`;

const LandingDiv405Stroke = styled.div`
  width: 1.5px;
  height: 137.5px;
  background: #fff;
  flex-shrink: 0;
  margin-left: 62px;
`;

const LandingDiv405Content = styled.div`
  color: #fff;
  text-align: justify;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 144.858%;
  margin-left: 62px;
`;
