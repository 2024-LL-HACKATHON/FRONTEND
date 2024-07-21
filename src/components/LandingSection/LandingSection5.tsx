import React from "react";
import styled from "styled-components";
import Header from "../Header/Header";

export default function LandingSection5() {
  return (
    <LandingSection5Container>
      <Header isLoggedIn={false} marginTop="" />
      <LandingSection5SubTitle>
        프롬프렌 사용 방법에 대해 궁금한 점이 있으신가요?
      </LandingSection5SubTitle>
      <LandingSection5Title>
        자주 묻는 질문에서
        <br /> 답변을 찾아보세요!
      </LandingSection5Title>
      <LandingSection5Box>
        Q1: PromFren에 가입하려면 어떻게 해야 하나요?
      </LandingSection5Box>
      <LandingSection5Box>
        Q2: PromFren의 데이터는 안전하게 보호되나요?
      </LandingSection5Box>
      <LandingSection5Box>
        Q3:고객 지원팀에 문의하려면 어떻게 해야 하나요?
      </LandingSection5Box>
    </LandingSection5Container>
  );
}

const LandingSection5Container = styled.div`
  width: 1280px;
  height: 1203px;
  background: linear-gradient(
    180deg,
    rgba(114, 212, 155, 0.35) 30%,
    rgba(217, 217, 217, 0) 80%
  );
`;

const LandingSection5SubTitle = styled.div`
  color: #7e7e7e;
  font-family: "Gmarket Sans";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const LandingSection5Title = styled.div`
  color: #000;
  font-family: "Gmarket Sans TTF";
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const LandingSection5Box = styled.div`
  width: 954px;
  height: 75.833px;
  flex-shrink: 0;
  border-radius: 16px;
  border: 1px solid #b2f909;
  background: #fff;
  box-shadow: 15px 13px 1.5px 0px rgba(97, 220, 132, 0.25);
  color: #000;
  font-family: "Gmarket Sans TTF";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
