import { ReactComponent as LandingToMainButton } from "../../assets/images/LandingToMainButton.svg";
import { ReactComponent as LandingImg1 } from "../../assets/images/LandingImg1.svg";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

export default function LandingSection1() {
  return (
    <Container>
      <Content>
        <Texts>
          <Slogan>Prom Here, Prom Now</Slogan>
          <MainHeading>
            <span className="letter">프</span>
            <span className="letter">롬</span>
            <span className="letter">프</span>
            <span className="letter">렌</span>
          </MainHeading>
          <SideText>
            Promfren과 함께 AI 프롬프트를 공유하고 <br /> 새로운 웰니스를
            경험하세요
          </SideText>
          <StyledLink to="/main">
            <ToMain>
              지금 시작하기
              <LandingToMainButton />
            </ToMain>
          </StyledLink>
        </Texts>
        <Img1Styled />
      </Content>
    </Container>
  );
}

const Container = styled.section`
  max-width: 100%;
  height: 100vh;
  margin: 0 auto;
`;

const Content = styled.div`
  display: flex;
  height: 50rem;
  justify-content: space-between;
`;

const Texts = styled.div`
  width: 31.25rem;
  height: 17.1875rem;
  flex-shrink: 0;
  margin-top: 17.63rem;
`;

const Slogan = styled.p`
  font-family: "Gmarket Sans TTF";
  font-weight: 700;
  color: #7e7e7e;
  font-size: 1rem;
  margin-left: 13.4375rem;
`;

const reveal = keyframes`
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const MainHeading = styled.h1`
  font-family: "Gmarket Sans TTF";
  font-weight: 700;
  color: #2cc1bf;
  font-size: 6rem;
  line-height: 1.18;
  margin-left: 8.125rem;
  margin-top: 1.1875rem;
  display: flex;
  gap: 0.5rem;

  span {
    color: #2cc1bf;
    font-family: "Gmarket Sans TTF";
    font-size: 6rem;
    font-style: normal;
    font-weight: 700;
    line-height: 118.07%;
  }

  .letter {
    display: inline-block;
    animation: ${reveal} 1s cubic-bezier(0.77, 0, 0.175, 1) forwards;
  }

  .letter:nth-child(1) {
    animation-delay: 0.1s;
  }
  .letter:nth-child(2) {
    animation-delay: 0.2s;
  }
  .letter:nth-child(3) {
    animation-delay: 0.3s;
  }
  .letter:nth-child(4) {
    animation-delay: 0.4s;
  }

  // 모바일에서는 애니메이션을 비활성화하여 성능을 개선
  @media (max-width: 768px) {
    .letter {
      animation: none;
    }
  }
`;

const swayAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-0.625rem); // -10px
  }
  100% {
    transform: translateY(0);
  }
`;

const SideText = styled.p`
  width: 16.25rem;
  height: 2.625rem;
  text-align: center;
  color: #7e7e7e;
  font-family: "Noto Sans KR";
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.5;
  margin-left: 11.875rem;
  margin-top: 1.1875rem;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const ToMain = styled.div`
  display: flex;
  align-items: center;
  font-family: "Gmarket Sans TTF";
  font-weight: 700;
  color: #2cc1bf;
  font-size: 1rem;
  margin-left: 15.9375rem;
  margin-top: 3.5rem;
  gap: 0.3125rem;

  @media (max-width: 768px) {
    margin-left: 0;
    justify-content: center;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Img1Styled = styled(LandingImg1)`
  width: 50.375rem;
  height: 50.5625rem;
  flex-shrink: 0;
  right: 0;
  z-index: 2;
  animation: ${swayAnimation} 4s ease-in-out infinite;

  // 모바일에서는 애니메이션을 비활성화하여 성능을 개선
  @media (max-width: 768px) {
    margin-left: 0;
    display: block;
    margin: 0 auto;
    animation: none;
  }
`;
