import React from "react";
import styled from "styled-components";
import { BoxProps } from "./types";
import { ReactComponent as LandingSection4Img1 } from "../../assets/images/LandingSection4Img1.svg";
import { ReactComponent as LandingSection4Img2 } from "../../assets/images/LandingSection4Img2.svg";
import { ReactComponent as LandingSection4Img3 } from "../../assets/images/LandingSection4Img3.svg";
import { ReactComponent as LandingSection4Img4 } from "../../assets/images/LandingSection4Img4.svg";
import Header from "../Header/Header";

export default function LandingSection4() {
  return (
    <LandingSection4Container>
      <Header isLoggedIn={false} marginTop="7.3125rem" />
      <LandingSection4Sub>지금 바로! 이곳에서!</LandingSection4Sub>
      <LandingSection4Title>
        <LandingSection4Span>관심사</LandingSection4Span>
        에 따른
        <br />
        <LandingSection4Span>프롬프트</LandingSection4Span>를 경험해보세요
      </LandingSection4Title>
      <LandingSection4BoxContainer>
        <LandingSection4Box borderColor="#B2F909">
          <LandingSection4ContentSub subjectColor="#B2F909">
            Productive
          </LandingSection4ContentSub>
          <LandingSection4ContentTitle titleColor="#B2F909">
            생산
            <br />
            적인
          </LandingSection4ContentTitle>
          <LandingSection4Img1 />
          <LandingSection4Content>
            생산적인 프롬프트는 업무, 학습, 자기 계발
            <br /> 등 효율성을 높이고 성과를 극대화 하는데 도<br />
            움을 줍니다. 이 카테고리의 프롬프트를 통해 목표 설정, 시간 관리,
            프로젝트 계획 등을 효<br />
            과적으로 수행 해보세요.
          </LandingSection4Content>
        </LandingSection4Box>
        <LandingSection4Box borderColor="#72D49B">
          <LandingSection4ContentSub subjectColor="#72D49B">
            Artistic
          </LandingSection4ContentSub>
          <LandingSection4ContentTitle titleColor="#72D49B">
            예술
            <br />
            적인
          </LandingSection4ContentTitle>
          <LandingSection4Img2 />
          <LandingSection4Content>
            예술적인 프롬프트는 창의력과 상상력을
            <br />
            자극하여 예술적 표현을 돕습니다.
            <br />
            글쓰기, 그림, 음악 등 다양한 예술 분야에서
            <br /> 영감을 얻고, 독창적인 작품을 만들어 보세요.
          </LandingSection4Content>
        </LandingSection4Box>
        <LandingSection4Box borderColor="#2CC1BF">
          <LandingSection4ContentSub subjectColor="#2CC1BF">
            symbolical
          </LandingSection4ContentSub>
          <LandingSection4ContentTitle titleColor="#2CC1BF">
            상징
            <br />
            적인
          </LandingSection4ContentTitle>
          <LandingSection4Img3 />
          <LandingSection4Content>
            상징적인 프롬프트는 심볼, 메타포, 추상적인
            <br /> 개념을 탐구하며 깊이 있는 사고와 통찰을 도<br />
            와줍니다. 복잡한 아이디어를 시각적이거나 상<br />
            징적으로 표현하여 새로운 관점을 발견하세요.
          </LandingSection4Content>
        </LandingSection4Box>
        <LandingSection4Box borderColor="#708AE5">
          <LandingSection4ContentSub subjectColor="#708AE5">
            Interesting
          </LandingSection4ContentSub>
          <LandingSection4ContentTitle titleColor="#708AE5">
            재미
            <br />
            있는
          </LandingSection4ContentTitle>
          <LandingSection4Img4 />
          <LandingSection4Content>
            재미있는 프롬프트는 유머와 놀이를 통해
            <br />
            창의력을 발휘하고 스트레스를 해소하는데
            <br />
            도움을 줍니다. 가벼운 마음으로 참여할 수 있<br />는 활동과 게임을
            통해 즐거움을 만끽하세요.
          </LandingSection4Content>
        </LandingSection4Box>
      </LandingSection4BoxContainer>
    </LandingSection4Container>
  );
}

const LandingSection4Container = styled.div`
  width: 80rem;
  height: 57rem;
  background: linear-gradient(
    180deg,
    rgba(217, 217, 217, 0) 30%,
    rgba(114, 212, 155, 0.35) 80%
  );
  margin: 0 auto;
`;

const LandingSection4Sub = styled.div`
  color: #8f8f8f;
  text-align: center;
  font-family: "Gmarket Sans TTF";
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 5.375rem;
`;

const LandingSection4Title = styled.div`
  color: #000;
  text-align: center;
  font-family: "Gmarket Sans TTF";
  font-size: 3rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 1.625rem;
`;

const LandingSection4Span = styled.span`
  color: #42d09f;
  text-align: center;
  font-family: "Gmarket Sans TTF";
  font-size: 3rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const LandingSection4BoxContainer = styled.div`
  display: flex;
  gap: 2.0625rem;
  margin-top: 4.4375rem;
  justify-content: center;
`;

const LandingSection4Box = styled.div<BoxProps>`
  width: 13.875rem;
  height: 22.625rem;
  flex-shrink: 0;
  border-radius: 1rem;
  border: 1px solid ${(props) => props.borderColor || "#000"};
  background: #fff;
  box-shadow: 0.9375rem 0.8125rem 0.09375rem 0 rgba(97, 220, 132, 0.25);
  padding: 1rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LandingSection4ContentSub = styled.div<BoxProps>`
  color: ${(props) => props.subjectColor || "#000"};
  text-align: center;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 0.625rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const LandingSection4ContentTitle = styled.div<BoxProps>`
  color: ${(props) => props.titleColor || "#000"};
  text-align: center;
  font-family: "Gmarket Sans TTF";
  font-size: 2.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 0.75rem;
`;

const LandingSection4Content = styled.div`
  color: #000;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 0.625rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 1.4375rem;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
