import React from "react";
import { ReactComponent as LandingSection6Logo } from "../../assets/images/LandingSection6Logo.svg";
import { ReactComponent as LandingSection6Togo } from "../../assets/images/LandingSection6Togo.svg";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

export default function LandingSection6() {
  return (
    <LandingSection6Box>
      <LandingSection6Container>
        <LandingSection6LogoLayout>
          <LandingSection6Logo />
        </LandingSection6LogoLayout>
        <LandingSection6TextContainer>
          <LandingSection6Sub>생성형 AI의 무한한 가능성</LandingSection6Sub>
          <LandingSection6Title>
            <BounceSpan>“</BounceSpan>
            <BounceSpan>프롬프렌</BounceSpan>
            <BounceSpan>”</BounceSpan>과 함께!
          </LandingSection6Title>
        </LandingSection6TextContainer>
      </LandingSection6Container>
      <LandingSection6BottomContainer>
        <StyledLink to="/main">
          <LandingSection6Bottom>지금 시작하기</LandingSection6Bottom>
        </StyledLink>
        <LandingSection6TogoLayout>
          <LandingSection6Togo />
        </LandingSection6TogoLayout>
      </LandingSection6BottomContainer>
    </LandingSection6Box>
  );
}

const LandingSection6Box = styled.div`
  width: 80rem;
  height: 100vh;
  margin: 0 auto;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const LandingSection6Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8.625rem; // 138px
  margin-left: 13.75rem; // 220px
`;

const LandingSection6LogoLayout = styled.div`
  margin-right: 2.5rem; // 40px
`;

const LandingSection6TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const LandingSection6Sub = styled.div`
  color: #000;
  font-family: "Gmarket Sans TTF";
  font-size: 1.5rem; // 24px
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const LandingSection6Title = styled.div`
  color: #000;
  font-family: "Gmarket Sans TTF";
  font-size: 3rem; // 48px
  font-style: normal;
  font-weight: 500;
  line-height: 3.6875rem; // 59px
  margin-top: 2rem; // 14px
`;

const bounce = keyframes`
  0% {
    transform: translateY(0);
    text-shadow: 0 1px 0 #EEEEEE,
                 0 2px 0 #EEEEEE,
                 0 3px 0 #EEEEEE,
                 0 4px 0 #EEEEEE,
                 0 5px 0 #EEEEEE,
                 0 6px 0 transparent,
                 0 7px 0 transparent,
                 0 8px 0 transparent,
                 0 9px 0 transparent,
                 0 10px 10px rgba(0, 0, 0, .2);
  }
  100% {
    transform: translateY(-20px);
    text-shadow: 0 1px 0 #EEEEEE,
                 0 2px 0 #EEEEEE,
                 0 3px 0 #EEEEEE,
                 0 4px 0 #EEEEEE,
                 0 5px 0 #EEEEEE,
                 0 6px 0 #EEEEEE,
                 0 7px 0 #EEEEEE,
                 0 8px 0 #EEEEEE,
                 0 9px 0 #EEEEEE,
                 0 50px 25px rgba(0, 0, 0, .2);
  }
`;

const BounceSpan = styled.span`
  display: inline-block;
  color: #42d09f;
  font-family: "Gmarket Sans TTF";
  font-size: 4rem;
  font-style: normal;
  font-weight: 700;
  line-height: 3.6875rem; /* 92.188% */
  animation: ${bounce} 0.3s ease infinite alternate;
  text-shadow: 0 1px 0 #ccc, 0 2px 0 #ccc, 0 3px 0 #ccc, 0 4px 0 #ccc,
    0 5px 0 #ccc, 0 6px 0 transparent, 0 7px 0 transparent, 0 8px 0 transparent,
    0 9px 0 transparent, 0 10px 10px rgba(0, 0, 0, 0.4);

  &:nth-child(2) {
    animation-delay: 0.1s;
  }
  &:nth-child(3) {
    animation-delay: 0.2s;
  }
  &:nth-child(4) {
    animation-delay: 0.3s;
  }
  &:nth-child(5) {
    animation-delay: 0.4s;
  }
  &:nth-child(6) {
    animation-delay: 0.5s;
  }
  &:nth-child(7) {
    animation-delay: 0.6s;
  }
  &:nth-child(8) {
    animation-delay: 0.7s;
  }
`;

const LandingSection6BottomContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10rem; // 160px
  margin-left: 33.4375rem; // 537px
  margin-bottom: 9.9375rem; // 159px
`;

const LandingSection6Bottom = styled.div`
  color: #42d09f;
  font-family: "Gmarket Sans TTF";
  font-size: 1.625rem; // 26px
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-right: 1.25rem; // 20px
  cursor: pointer;
`;

const moveHorizontally = keyframes`
  0% {
    transform: translateX(-10px);
  }
  50% {
    transform: translateX(10px);
  }
  100% {
    transform: translateX(-10px);
  }
`;

const LandingSection6TogoLayout = styled.div`
  margin-left: 0.5rem; // 20px
  animation: ${moveHorizontally} 2s infinite;
`;
