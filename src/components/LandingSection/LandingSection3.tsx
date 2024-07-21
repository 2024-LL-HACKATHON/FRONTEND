import React, { useState } from "react";
import styled from "styled-components";
import { SideButtonProps } from "./types";
import { ReactComponent as Content1Img } from "../../assets/images/Content1Img.svg";
import { ReactComponent as Content2Img } from "../../assets/images/Content2Img.svg";
import { ReactComponent as Content3Img } from "../../assets/images/Content3Img.svg";
import { ReactComponent as Content4Img } from "../../assets/images/Content4Img.svg";

export default function LandingSection3() {
  const [selectedContent, setSelectedContent] = useState("content1");

  const renderContent = () => {
    switch (selectedContent) {
      case "content1":
        return (
          <ContentWrapper>
            <ContentNum>01</ContentNum>
            <ContentTitle>
              프롬프트 <ContentTitleSpan>공유 <Dot>•</Dot> 검색</ContentTitleSpan>
            </ContentTitle>
            <ContentSubTitle>
              프롬프렌은 커뮤니티 사용자들이 프롬프트를
              <br />
              손쉽게 검색하고 공유할 수 있도록 하는 서비스입니다.
            </ContentSubTitle>
            <ContentText>
              검색 기능을 통해 원하는 주제의 프롬프트를 빠르게 찾을 수 있으며,
              <br />
              자신이 만든 프롬프트를 커뮤니티와 공유하여 다른 사용자들과
              아이디어를 나눌 수 있습니다. <br />
              주제별 카테고리와 태그를 사용하여 필요에 맞는 프롬프트를
              효율적으로 관리하고 활용하세요.
            </ContentText>
            <ContentImgBox>
              <Content1Img />
            </ContentImgBox>
          </ContentWrapper>
        );
      case "content2":
        return (
          <ContentWrapper>
            <ContentNum>02</ContentNum>
            <ContentTitle>
              <ContentTitleSpan>도전!</ContentTitleSpan> 프롬프렌
            </ContentTitle>
            <ContentSubTitle>
              프롬프렌 경진대회에서 창의력을 겨루며 <br />
              독창적인 아이디어로 인정받을 수 있는 기회를 잡아보세요.
            </ContentSubTitle>
            <ContentText>
              프롬프렌 경진대회는 창의력을 발휘하여 독창적인 프롬프트를 작성하는
              대회입니다. 경진대회를
              <br /> 통해 자신의 프롬프트 작성 능력을 시험해보고, 커뮤니티와
              경쟁하며 성장할 수 있는 기회를 제공
              <br />
              받으세요.
            </ContentText>
            <ContentImgBox>
              <Content2Img />
            </ContentImgBox>
          </ContentWrapper>
        );
      case "content3":
        return (
          <ContentWrapper>
            <ContentNum>03</ContentNum>
            <ContentTitle>
              사용자 <ContentTitleSpan>피드백</ContentTitleSpan>
            </ContentTitle>
            <ContentSubTitle>
              PromFren 사용자들의 이야기를 통해 경험을 나누고 <br />
              프롬프트를 개선하는 창의적인 해결책을 발견해보세요.
            </ContentSubTitle>
            <ContentText>
              PromFren의 피드백을 통해 프롬프트를 개선하고 발전시킬 수 있습니다.
              사용자들은 자신이 작성
              <br />한 프롬프트에 대한 피드백을 받아볼 수 있으며, 이를 통해 더욱
              완성도 높은 프롬프트를 작성할 수<br /> 있습니다.
            </ContentText>
            <ContentImgBox>
              <Content3Img />
            </ContentImgBox>
          </ContentWrapper>
        );
      case "content4":
        return (
          <ContentWrapper>
            <ContentNum>04</ContentNum>
            <ContentTitle>
              프롬프트 <ContentTitleSpan>작성 가이드</ContentTitleSpan>
            </ContentTitle>
            <ContentSubTitle>
              효과적인 프롬프트 작성법을 배우고
              <br />
              최고의 프롬프트를 만들어보세요
            </ContentSubTitle>
            <ContentText>
              프롬프렌에서는 효과적인 프롬프트 작성법을 배우고, 최고의
              프롬프트를 만들 수 있는 다양한 도구
              <br />와 리소스를 제공합니다. 단계별 가이드를 따라가며 프롬프트를
              작성하는 방법을 익히고, 커뮤니티
              <br />의 도움을 받아 프롬프트의 질을 향상시켜보세요.
            </ContentText>
            <ContentImgBox>
              <Content4Img />
            </ContentImgBox>
          </ContentWrapper>
        );
      default:
        return <div>Select a button to display content</div>;
    }
  };

  return (
    <>
      <LandingSection3Container>
        <HeaderWrapper>
        </HeaderWrapper>
        <MainContent>
          <LandingSection3SideBox>
            <LandingSection3SideBoxTitle>
              서비스 소개
            </LandingSection3SideBoxTitle>
            <LandingSection3SideBoxSubTitle>
              프롬프렌은 AI분석 기반 <br />
              최상의 프롬프트를 경험하게 해드립니다.
            </LandingSection3SideBoxSubTitle>
            <SideButton
              onClick={() => setSelectedContent("content1")}
              isActive={selectedContent === "content1"}
            >
              01 프롬프트 공유 • 검색
            </SideButton>
            <SideButton
              onClick={() => setSelectedContent("content2")}
              isActive={selectedContent === "content2"}
            >
              02 도전 프롬프렌
            </SideButton>
            <SideButton
              onClick={() => setSelectedContent("content3")}
              isActive={selectedContent === "content3"}
            >
              03 사용자 피드백
            </SideButton>
            <SideButton
              onClick={() => setSelectedContent("content4")}
              isActive={selectedContent === "content4"}
            >
              04 프롬프트 작성 가이드
            </SideButton>
          </LandingSection3SideBox>
          <ContentContainer>{renderContent()}</ContentContainer>
        </MainContent>
      </LandingSection3Container>
    </>
  );
}

const LandingSection3Container = styled.div`
  background: rgba(114, 212, 155, 0.05);
  margin-top: 153px;
  position: relative;
`;

const HeaderWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 3;
`;

const MainContent = styled.div`
  display: flex;
`;

const LandingSection3SideBox = styled.div`
  width: 339px;
  height: 875px;
  flex-shrink: 0;
  border-radius: 0px 46px 0px 0px;
  background: #fff;
  box-shadow: 7px 7px 30px 0px rgba(66, 208, 159, 0.3);
  display: flex;
  flex-direction: column;
  padding: 20px;
  position: relative;
  z-index: 1;
`;

const LandingSection3SideBoxTitle = styled.div`
  color: #000;
  font-family: "Gmarket Sans TTF";
  font-size: 48px;
  font-weight: 700;
  margin-top: 189px;
`;

const LandingSection3SideBoxSubTitle = styled.div`
  color: #42d09f;
  font-family: "Noto Sans KR";
  font-size: 14px;
  font-weight: 400;
  margin-top: 7px;
  margin-bottom: 89px;
`;

const SideButton = styled.button<SideButtonProps>`
  width: 353px;
  height: 69px;
  background: ${(props) =>
    props.isActive
      ? "linear-gradient(95deg, #72D49B -4.4%, #2CC1BF 113.17%)"
      : "transparent"};
  color: ${(props) => (props.isActive ? "#FFF" : "#000")};
  border: none;
  border-radius: 50px 8px 8px 50px;
  padding: 10px;
  cursor: pointer;
  margin: 5px 0;
  font-family: "Gmarket Sans TTF";
  font-size: 20px;
  font-weight: ${(props) => (props.isActive ? "700" : "500")};
  transition: background 0.3s;

  &:hover {
    background: ${(props) =>
      props.isActive
        ? "linear-gradient(95deg, #72D49B -4.4%, #2CC1BF 113.17%)"
        : "linear-gradient(95deg, #72D49B -4.4%, #2CC1BF 113.17%)"};
    color: white;
  }

  &:active {
    background: ${(props) => (props.isActive ? "#3ab48b" : "#3ab48b")};
  }
`;

const ContentContainer = styled.div`
  width: calc(100% - 339px);
  margin-left: 67px;
  margin-top: 194px;
  position: relative;
`;

const ContentWrapper = styled.div`
  margin-bottom: 20px;
`;

const ContentNum = styled.div`
  color: #42d09f;
  font-family: "Gmarket Sans TTF";
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 11px;
`;

const ContentTitle = styled.div`
  color: #000;
  font-family: "Gmarket Sans TTF";
  font-size: 64px;
  font-weight: 700;
`;

const ContentTitleSpan = styled.span`
  color: #42d09f;
`;


const Dot = styled.span`
  display: inline-block;
  vertical-align: middle;
`;

const ContentSubTitle = styled.div`
  color: #000;
  font-family: "Noto Sans";
  font-size: 20px;
  font-weight: 600;
  margin-top: 47px;
`;

const ContentText = styled.div`
  color: #7e7e7e;
  font-family: "Noto Sans";
  font-size: 12px;
  font-weight: 400;
  line-height: 25px; /* 208.333% */
  margin-top: 17px;
  position: relative;
  z-index: 1;
`;

const ContentImgBox = styled.div`
  position: absolute;
  height: 541.855px;
  flex-shrink: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
`;
