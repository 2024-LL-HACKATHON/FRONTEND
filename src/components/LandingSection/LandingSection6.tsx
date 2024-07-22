import React from "react";
import { ReactComponent as LandingSection6Logo } from "../../assets/images/LandingSection6Logo.svg";
import { ReactComponent as LandingSection6Togo } from "../../assets/images/LandingSection6Togo.svg";
import styled from "styled-components";
import Header from "../Header/Header";
import { Link } from "react-router-dom"; // Import Link

export default function LandingSection6() {
  return (
    <>
      <Header isLoggedIn={false} />
      <LandingSection6Container>
        <LandingSection6LogoLayout>
          <LandingSection6Logo />
        </LandingSection6LogoLayout>
        <LandingSection6TextContainer>
          <LandingSection6Sub>생성형 AI의 무한한 가능성</LandingSection6Sub>
          <LandingSection6Title>
            <LandingSection6Span>“프롬프렌”</LandingSection6Span>과 함께!
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
    </>
  );
}

const StyledLink = styled(Link)`
  text-decoration: none; 
`;

const LandingSection6Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 138px;
  margin-left: 220px;
`;

const LandingSection6LogoLayout = styled.div`
  margin-right: 40px;
`;

const LandingSection6TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const LandingSection6Sub = styled.div`
  color: #000;
  font-family: "Gmarket Sans TTF";
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const LandingSection6Title = styled.div`
  color: #000;
  font-family: "Gmarket Sans TTF";
  font-size: 48px;
  font-style: normal;
  font-weight: 500;
  line-height: 59px;
  margin-top: 14px;
`;

const LandingSection6Span = styled.span`
  color: #42d09f;
  font-family: "Gmarket Sans TTF";
  font-size: 64px;
  font-style: normal;
  font-weight: 700;
  line-height: 59px;
`;

const LandingSection6BottomContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 160px;
  margin-left: 537px;
  margin-bottom: 159px;
`;

const LandingSection6Bottom = styled.div`
  color: #42d09f;
  font-family: "Gmarket Sans TTF";
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-right: 20px;
  cursor: pointer;
`;

const LandingSection6TogoLayout = styled.div`
  margin-left: 20px;
`;
