import React from "react";
import { ReactComponent as Logo } from "../../assets/images/Logo.svg";
import styled from "styled-components";

export default function Footer() {
  return (
    <>
      <FooterStroke />
      <FooterDiv>
        <FooterLogoLayout>
          <Logo />
        </FooterLogoLayout>
        <FooterText>
          강남대학교 멋쟁이 사자처럼 12기 팀 라이베어
          <br /> 경기도 용인시 기흥구 강남로 40(구갈동) 후생관 B103
        </FooterText>
      </FooterDiv>
    </>
  );
}

const FooterLogoLayout = styled(Logo)`
  margin-top: 41px;
`;
const FooterDiv = styled.div`
  width: 1280px;
  height: 248px;
  margin-left: 56px;
`;

const FooterStroke = styled.div`
  width: 1280px;
  height: 0.5px;
  background: #42d09f;
`;

const FooterText = styled.div`
  color: #989898;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
  margin-top: 14px;
`;
