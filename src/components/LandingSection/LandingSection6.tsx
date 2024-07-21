import React from "react";
import { ReactComponent as LandingSection6Logo } from "../../assets/images/LandingSection6Logo.svg";
import { ReactComponent as LandingSection6Togo } from "../../assets/images/LandingSection6Togo.svg";
import styled from "styled-components";

export default function LandingSection6() {
  return (
    <>
      <LandingSection6Logo />
      <LandingSection6Sub>생성형 AI의 무한한 가능성</LandingSection6Sub>
      <LandingSection6Title>
        <LandingSection6Span>“프롬프렌”</LandingSection6Span>과 함께!
      </LandingSection6Title>
      <LandingSection6Bottom>지금 시작하기</LandingSection6Bottom>
      <LandingSection6Togo />
    </>
  );
}

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
`;

const LandingSection6Span = styled.span`
  color: #42d09f;
  font-family: "Gmarket Sans TTF";
  font-size: 64px;
  font-style: normal;
  font-weight: 700;
  line-height: 59px; /* 92.188% */
`;

const LandingSection6Bottom = styled.div`
  color: #42d09f;
  font-family: "Gmarket Sans TTF";
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
