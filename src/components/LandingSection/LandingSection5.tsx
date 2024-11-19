import React, { useState } from "react";
import styled from "styled-components";
import Typewritter from "typewriter-effect";

export default function LandingSection5() {
  const [hoveredBox, setHoveredBox] = useState<number | null>(null);
  return (
    <LandingSection5Container>
      <LandingSection5SubTitle>
        프롬프렌 사용 방법에 대해 궁금한 점이 있으신가요?
      </LandingSection5SubTitle>
      <LandingSection5Title>
        <Typewritter
          options={{
            strings: ['"자주 묻는 질문"'],
            autoStart: true,
            loop: true,
          }}
        />
        에서
      </LandingSection5Title>
      <LandingSection5Title>답변을 찾아보세요!</LandingSection5Title>
      <div id="Section5Box">
        <LandingSection5Box
          onMouseEnter={() => setHoveredBox(1)}
          onMouseLeave={() => setHoveredBox(null)}
        >
          Q1: PromFren에 가입하려면 어떻게 해야 하나요?
        </LandingSection5Box>
        {hoveredBox === 1 && (
          <HoverText>
            A1: PromFren에 가입하려면 홈페이지 상단의 '회원가입' 버튼을
            클릭하고, 이메일 주소와 비밀번호를 입력한 후, 필요한 정보를 작성하여
            가입 절차를 완료하세요. 소셜 미디어 계정을 사용하여 빠르게 가입할
            수도 있습니다.
          </HoverText>
        )}
        <LandingSection5Box
          onMouseEnter={() => setHoveredBox(2)}
          onMouseLeave={() => setHoveredBox(null)}
        >
          Q2: PromFren의 데이터는 안전하게 보호되나요?
        </LandingSection5Box>
        {hoveredBox === 2 && (
          <HoverText>
            A2: 네, PromFren은 사용자 데이터의 보안과 프라이버시를 최우선으로
            생각합니다. 모든 데이터는 암호화되어 전송되며, 최신 보안 프로토콜을
            준수합니다.
          </HoverText>
        )}
        <LandingSection5Box
          onMouseEnter={() => setHoveredBox(3)}
          onMouseLeave={() => setHoveredBox(null)}
        >
          Q3: 고객 지원팀에 문의하려면 어떻게 해야 하나요?
        </LandingSection5Box>
        {hoveredBox === 3 && (
          <HoverText>
            A3: 고객 지원팀에 문의하려면 홈페이지 하단의 '고객센터' 링크를
            클릭하여 문의 양식을 작성해 주세요. 또는
            이메일(support@promfren.com)을 통해 직접 문의하실 수 있습니다.
            가능한 한 빨리 답변드리겠습니다.
          </HoverText>
        )}
      </div>
    </LandingSection5Container>
  );
}

const LandingSection5Container = styled.div`
  max-width: 100%;
  height: 100vh;
  background: linear-gradient(
    180deg,
    rgba(114, 212, 155, 0.35) 30%,
    rgba(217, 217, 217, 0) 80%
  );
  margin: 0 auto;
  #Section5Box {
    margin-top: 3.5rem;
  }
`;

const LandingSection5SubTitle = styled.div`
  color: #7e7e7e;
  font-family: "Gmarket Sans TTF";
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-left: 8rem;
  margin-bottom: 1.25rem;
  padding-top: 2rem;
`;

const LandingSection5Title = styled.div`
  display: flex;
  color: #000;
  font-family: "Gmarket Sans TTF";
  font-size: 3rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-left: 8rem;
  #typewritter {
    display: inline;
  }
`;

const LandingSection5Box = styled.div`
  position: relative;
  width: 59.625rem;
  height: auto;
  flex-shrink: 0;
  border-radius: 1rem;
  border: 1px solid #b2f909;
  background: #fff;
  box-shadow: 0.9375rem 0.8125rem 0.09375rem 0 rgba(97, 220, 132, 0.25);
  color: #000;
  font-family: "Gmarket Sans TTF";
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-left: 8rem;
  margin-bottom: 1.3225rem;
  padding: 1rem;
`;

const HoverText = styled.div`
  width: 59.625rem;
  margin-top: 0.5rem;
  color: #555;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  margin-left: 12.0625rem;
  line-height: normal;
`;
