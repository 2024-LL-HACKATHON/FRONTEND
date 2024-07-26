import { ReactComponent as LandingToMainButton } from "../../assets/images/LandingToMainButton.svg";
import { ReactComponent as LandingImg1 } from "../../assets/images/LandingImg1.svg";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import Header from "../Header/Header";

export default function LandingSection1() {
  return (
    <>
      <Header isLoggedIn={false} marginTop="2.125rem" />
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
  max-width: 80rem; 
  justify-content: space-between;
  margin: 0 auto;
`;

const LandingTexts = styled.div`
  width: 31.25rem; // 500px
  height: 17.1875rem; // 275px
  flex-shrink: 0;
  margin-top: 14.625rem; // 234px

  @media (max-width: 768px) {
    margin-top: 5rem;
  }
`;

const LandingTextBase = styled.div`
  font-family: "Gmarket Sans TTF";
  font-style: normal;
  font-weight: 700;
`;

const LandingSlogan = styled(LandingTextBase)`
  color: #7e7e7e;
  font-size: 1rem; // 16px
  margin-left: 13.4375rem; // 215px

  @media (max-width: 768px) {
    margin-left: 0;
    text-align: center;
  }
`;

const LandingMainText = styled(LandingTextBase)`
  color: #2cc1bf;
  font-size: 6rem; // 96px
  line-height: 1.18;
  margin-left: 8.125rem; // 130px
  margin-top: 1.1875rem; // 19px

  @media (max-width: 768px) {
    margin-left: 0;
    text-align: center;
    font-size: 3rem;
  }
`;

const LandingSideText = styled.div`
  width: 16.25rem; // 260px
  height: 2.625rem; // 42px
  text-align: center;
  color: #7e7e7e;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 0.875rem; // 14px
  font-weight: 500;
  line-height: 1.5;
  margin-left: 11.875rem; // 190px
  margin-top: 1.1875rem; // 19px

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const LandingToMain = styled(LandingTextBase)`
  display: flex;
  align-items: center;
  color: #2cc1bf;
  font-size: 1rem; // 16px
  line-height: normal;
  margin-left: 15.9375rem; // 255px
  margin-top: 3.5rem; // 56px
  gap: 0.3125rem; // 5px

  @media (max-width: 768px) {
    margin-left: 0;
    justify-content: center;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const swayAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-0.625rem); // -10px
  }
  100% {
    transform: translateY(0);
  }
`;

const LandingImg1Styled = styled(LandingImg1)`
  margin-top: 3.5rem; // 56px
  margin-left: 2.3125rem; // 37px
  animation: ${swayAnimation} 4s ease-in-out infinite;

  @media (max-width: 768px) {
    margin-left: 0;
    display: block;
    margin: 0 auto;
  }
`;

const LandingDiv405 = styled.div`
  display: flex;
  width: 80rem; // 1280px
  height: 14.0625rem; // 225px
  flex-shrink: 0;
  background: linear-gradient(90deg, #42d09f 0%, #2cc1bf 100%);
  align-items: center;
  margin-top: 11.1875rem; // 179px
  padding: 0 1rem;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 2rem 1rem;
  }
`;

const LandingDiv405Title = styled(LandingTextBase)`
  color: #fff;
  font-size: 4rem; // 64px
  margin-left: 16.6875rem; // 267px

  @media (max-width: 768px) {
    margin-left: 0;
    text-align: center;
    font-size: 2rem;
  }
`;

const LandingDiv405Stroke = styled.div`
  width: 0.09375rem; // 1.5px
  height: 8.59375rem; // 137.5px
  background: #fff;
  flex-shrink: 0;
  margin-left: 3.875rem; // 62px

  @media (max-width: 768px) {
    width: 80%;
    height: 0.09375rem; // 1.5px
    margin: 1rem 0;
  }
`;

const LandingDiv405Content = styled.div`
  color: #fff;
  text-align: justify;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 1rem; // 16px
  font-weight: 500;
  line-height: 1.44858;
  margin-left: 3.875rem; // 62px

  @media (max-width: 768px) {
    margin-left: 0;
    text-align: center;
    font-size: 0.875rem;
  }
`;
