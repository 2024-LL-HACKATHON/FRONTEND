import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { SideButtonProps } from "./types";
import { ReactComponent as Content1Img } from "../../assets/images/Content1Img.svg";
import { ReactComponent as Content2Img } from "../../assets/images/Content2Img.svg";
import { ReactComponent as Content3Img } from "../../assets/images/Content3Img.svg";
import { ReactComponent as Content4Img } from "../../assets/images/Content4Img.svg";

const debounce = (func: Function, delay: number) => {
  let timeoutId: NodeJS.Timeout;
  return (...args: any[]) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

export default function LandingSection3() {
  const [selectedContent, setSelectedContent] = useState("content1");
  const [animationKey, setAnimationKey] = useState(Date.now());
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [scrollIndex, setScrollIndex] = useState(0);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const buttons = ["content1", "content2", "content3", "content4"];

  useEffect(() => {
    setAnimationKey(Date.now());
  }, [selectedContent]);

  useEffect(() => {
    const section = sectionRef.current;
    const observerOptions = {
      threshold: 0.8,
    };

    const observerCallback = debounce(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (scrollIndex < buttons.length - 1) {
              setScrollIndex((prevIndex) => {
                const newIndex = prevIndex + 1;
                setSelectedContent(buttons[newIndex]);
                return newIndex;
              });
            }
          }
        });
      },
      1500
    );

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, [buttons, scrollIndex]);

  const renderContent = () => {
    switch (selectedContent) {
      case "content1":
        return (
          <ContentWrapper>
            <ContentTextWrapper>
              <ContentNum>01</ContentNum>
              <ContentTitle>
                프롬프트
                <ContentTitleSpan>
                  공유 <Dot>•</Dot> 검색
                </ContentTitleSpan>
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
            </ContentTextWrapper>
            <ContentImgBox height="14rem">
              <Content1Img />
            </ContentImgBox>
          </ContentWrapper>
        );
      case "content2":
        return (
          <ContentWrapper>
            <ContentTextWrapper>
              <ContentNum>02</ContentNum>
              <ContentTitle>
                <ContentTitleSpan>도전!</ContentTitleSpan> 프롬프렌
              </ContentTitle>
              <ContentSubTitle>
                프롬프렌 경진대회에서 창의력을 겨루며 <br />
                독창적인 아이디어로 인정받을 수 있는 기회를 잡아보세요.
              </ContentSubTitle>
              <ContentText>
                프롬프렌 경진대회는 창의력을 발휘하여 독창적인 프롬프트를
                작성하는 대회입니다. 경진대회를
                <br /> 통해 자신의 프롬프트 작성 능력을 시험해보고, 커뮤니티와
                경쟁하며 성장할 수 있는 기회를 제공
                <br />
                받으세요.
              </ContentText>
            </ContentTextWrapper>
            <ContentImgBox height="21rem">
              <Content2Img />
            </ContentImgBox>
          </ContentWrapper>
        );
      case "content3":
        return (
          <ContentWrapper>
            <ContentTextWrapper>
              <ContentNum>03</ContentNum>
              <ContentTitle>
                사용자 <ContentTitleSpan>피드백</ContentTitleSpan>
              </ContentTitle>
              <ContentSubTitle>
                PromFren 사용자들의 이야기를 통해 경험을 나누고 <br />
                프롬프트를 개선하는 창의적인 해결책을 발견해보세요.
              </ContentSubTitle>
              <ContentText>
                PromFren의 피드백을 통해 프롬프트를 개선하고 발전시킬 수
                있습니다. 사용자들은 자신이 작성
                <br />한 프롬프트에 대한 피드백을 받아볼 수 있으며, 이를 통해
                더욱 완성도 높은 프롬프트를 작성할 수<br /> 있습니다.
              </ContentText>
            </ContentTextWrapper>
            <ContentImgBox height="21rem">
              <Content3Img />
            </ContentImgBox>
          </ContentWrapper>
        );
      case "content4":
        return (
          <ContentWrapper>
            <ContentTextWrapper>
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
                <br />와 리소스를 제공합니다. 단계별 가이드를 따라가며
                프롬프트를 작성하는 방법을 익히고, 커뮤니티
                <br />의 도움을 받아 프롬프트의 질을 향상시켜보세요.
              </ContentText>
            </ContentTextWrapper>
            <ContentImgBox>
              <Content4Img height="79rem" />
            </ContentImgBox>
          </ContentWrapper>
        );
    }
  };

  return (
    <LandingSection3Container ref={sectionRef}>
      <MainContent>
        <LandingSection3SideBox>
          <LandingSection3SideBoxTitle>서비스 소개</LandingSection3SideBoxTitle>
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
        <ContentContainer key={animationKey}>
          {renderContent()}
        </ContentContainer>
      </MainContent>
    </LandingSection3Container>
  );
}

const LandingSection3Container = styled.div`
  max-width: 80rem;
  height: 100vh;
  background: rgba(114, 212, 155, 0.05);
  position: relative;
  margin: 0 auto;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const LandingSection3SideBox = styled.div`
  width: 21.1875rem;
  height: 48.9375rem;
  flex-shrink: 0;
  border-radius: 0px 2.875rem 0px 0px;
  background: #fff;
  box-shadow: 0.4375rem 0.4375rem 1.875rem 0 rgba(66, 208, 159, 0.3); // 7px 7px 30px
  display: flex;
  flex-direction: column;
  padding: 1.25rem;
  position: relative;
  z-index: 1;
  margin-top: 1rem;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

const LandingSection3SideBoxTitle = styled.div`
  color: #000;
  font-family: "Gmarket Sans TTF";
  font-size: 2.5rem;
  font-weight: 700;
  margin-top: 10rem;

  @media (max-width: 768px) {
    font-size: 2.25rem;
    margin-top: 3rem;
  }
`;

const LandingSection3SideBoxSubTitle = styled.div`
  color: #42d09f;
  font-family: "Noto Sans KR";
  font-size: 0.875rem;
  font-weight: 400;
  margin-top: 0.4375rem;
  margin-bottom: 5.5625rem;

  @media (max-width: 768px) {
    margin-top: 0.25rem;
    margin-bottom: 2rem;
  }
`;

const SideButton = styled.button<SideButtonProps>`
  width: 22.0625rem;
  height: 4.3125rem;
  background: ${(props) =>
    props.isActive
      ? "linear-gradient(95deg, #72D49B -4.4%, #2CC1BF 113.17%)"
      : "transparent"};
  color: ${(props) => (props.isActive ? "#FFF" : "#000")};
  border: none;
  border-radius: 3.125rem 0.5rem 0.5rem 3.125rem;
  padding: 0.625rem;
  cursor: pointer;
  margin: 0.3125rem 0;
  font-family: "Gmarket Sans TTF";
  font-size: 1.25rem;
  font-weight: ${(props) => (props.isActive ? "700" : "500")};
  transition: background 0.3s;
  text-align: left;
  padding-left: 3.125rem;
  &:hover {
    background: linear-gradient(95deg, #72d49b -4.4%, #2cc1bf 113.17%);
    color: white;
  }

  &:active {
    background: #3ab48b;
  }

  @media (max-width: 768px) {
    width: 100%;
    border-radius: 1rem;
    padding-left: 1.25rem;
  }
`;
const slideDownFromTop = keyframes`
  0% {
    transform: translateY(-20px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const ContentTextWrapper = styled.div`
  position: relative;
  z-index: 1;
  animation: ${slideDownFromTop} 0.6s ease-out forwards;
`;

const slideInFromRight = keyframes`
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const ContentContainer = styled.div`
  width: calc(100% - 21.1875rem);
  margin-left: 4.1875rem;
  margin-top: 12.125rem;
  position: relative;
  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    margin-top: 2rem;
    animation: none;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  margin-bottom: 1.25rem;
`;

const ContentNum = styled.div`
  color: #42d09f;
  font-family: "Gmarket Sans TTF";
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.6875rem;
`;

const ContentTitle = styled.div`
  color: #000;
  font-family: "Gmarket Sans TTF";
  font-size: 4rem;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
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
  font-family: "Noto Sans KR", sans-serif;
  font-size: 1.25rem;
  font-weight: 600;
  margin-top: 2.9375rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ContentText = styled.div`
  color: #7e7e7e;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1.5625rem;
  margin-top: 1.0625rem;

  @media (max-width: 768px) {
    font-size: 0.6875rem;
    line-height: 1.375rem;
  }
`;

const ContentImgBox = styled.div<{ height?: string }>`
  position: absolute;
  height: ${(props) => props.height || "33.866rem"};
  flex-shrink: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  animation: ${slideInFromRight} 0.9s ease-out forwards;

  @media (max-width: 768px) {
    height: auto;
    position: relative;
  }
`;
