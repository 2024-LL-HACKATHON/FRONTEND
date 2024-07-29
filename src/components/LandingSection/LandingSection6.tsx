import React from "react";
import { ReactComponent as LandingSection6Logo } from "../../assets/images/LandingSection6Logo.svg";
import { ReactComponent as LandingSection6Togo } from "../../assets/images/LandingSection6Togo.svg";
import styled from "styled-components";
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
    </LandingSection6Box>
  );
}

const LandingSection6Box = styled.div`
  width: 80rem;
  height: 40rem;
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
  margin-top: 0.875rem; // 14px
`;

const LandingSection6Span = styled.span`
  color: #42d09f;
  font-family: "Gmarket Sans TTF";
  font-size: 4rem; // 64px
  font-style: normal;
  font-weight: 700;
  line-height: 3.6875rem; // 59px
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

const LandingSection6TogoLayout = styled.div`
  margin-left: 1.25rem; // 20px
`;
