import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import styled from "styled-components";
import { ReactComponent as CompetitionCarouselLeft } from "../../assets/images/CompetitionCarouselLeft.svg";
import { ReactComponent as CompetitionCarouselRight } from "../../assets/images/CompetitionCarouselRight.svg";
import { Box } from "../../pages/Competition/types";

const boxes: Box[] = [
  {
    id: 1,
    text: "최고의 AI 프롬프트를 찾아내는 여정에 함께해요!",
    title: "바로 이곳, 프롬프렌에서 당신의 아이디어를 펼쳐보세요!",
    image: {
      src: require("../../assets/images/CompetitionCarouselImg1.svg").default,
      alt: "프롬프트 이미지",
    },
  },
  {
    id: 2,
    text: "AI의 힘을 이용해 새로운 세상을 만들어 보세요!",
    title: "창의적인 아이디어를 현실로 만들어 드립니다!",
    image: {
      src: require("../../assets/images/CompetitionCarouselImg2.svg").default,
      alt: "프롬프트 이미지",
    },
  },
  {
    id: 3,
    text: "여러분의 꿈을 실현할 기회를 놓치지 마세요!",
    title: "여기서 당신의 꿈을 펼쳐보세요!",
    image: {
      src: require("../../assets/images/CompetitionCarouselImg3.svg").default,
      alt: "프롬프트 이미지",
    },
  },
];

function CompetitionCarousel() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === boxes.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // 3초 간격으로 자동 이동

    return () => clearInterval(interval); // 컴포넌트가 언마운트될 때 인터벌 정리
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? boxes.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === boxes.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <CompetitionHead>
        <Header isLoggedIn={false} fixed={false}/>
        <CarouselWrapper>
          <button onClick={handlePrev}>
            <CompetitionCarouselLeft />
          </button>
          <CompetitionCarouselContainer>
            {[0, 1, 2].map((offset) => {
              const boxIndex = (currentIndex + offset) % boxes.length;
              const box = boxes[boxIndex];
              return (
                <CompetitionCarouselBox key={boxIndex} active={offset === 1}>
                  <p>{box.text}</p>
                  <h1>{box.title}</h1>
                  {box.image && (
                    <img src={box.image?.src} alt={box.image?.alt} />
                  )}
                </CompetitionCarouselBox>
              );
            })}
          </CompetitionCarouselContainer>
          <button onClick={handleNext}>
            <CompetitionCarouselRight />
          </button>
        </CarouselWrapper>
      </CompetitionHead>
      <CarouselDots>
        {boxes.map((_, index) => (
          <CarouselDot
            key={index}
            active={index === currentIndex}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </CarouselDots>
    </>
  );
}

export default CompetitionCarousel;

const CompetitionHead = styled.div`
  width: 80rem;
  height: 31.3125rem;
  flex-shrink: 0;
  background: linear-gradient(
    90deg,
    rgba(114, 212, 155, 0.3) 0.07%,
    rgba(114, 212, 155, 0.3) 99.94%
  );
  margin: 0 auto;
  margin-top: -2.13rem;
`;

const CarouselWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 4.06rem;
  position: relative;

  button {
    background: transparent;
    border: none;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
  }

  button:first-of-type {
    left: 24rem;
  }

  button:last-of-type {
    right: 24rem;
  }
`;

const CompetitionCarouselContainer = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  width: 100%;
  justify-content: center;
  position: relative;
`;

const CompetitionCarouselBox = styled.div<{ active: boolean }>`
  width: 27.95975rem;
  height: 18.875rem;
  flex-shrink: 0;
  border-radius: 1rem;
  background: #fff;
  margin: 0 1rem;
  transition: opacity 0.5s ease-in-out;

  p {
    color: #000;
    font-family: "Noto Sans KR";
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-top: 4.63rem;
    margin-left: 2.25rem;
  }

  h1 {
    color: #000;
    font-family: "Gmarket Sans TTF";
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-top: 1rem;
    margin-left: 2.25rem;
  }

  img {
    max-width: 100%;
    height: 11.34944rem;
    display: block;
    margin-left: 13rem;
    margin-top: -1rem;
  }
`;

const CarouselDots = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

const CarouselDot = styled.div<{ active: boolean }>`
  width: 0.9375rem;
  height: 0.9375rem;
  background-color: ${({ active }) => (active ? "#72D49B" : "#D9D9D9")};
  border-radius: 50%;
  margin: 0 0.5rem;
  cursor: pointer;
`;

