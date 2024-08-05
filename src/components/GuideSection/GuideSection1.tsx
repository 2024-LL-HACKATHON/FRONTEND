import styled, { keyframes } from 'styled-components';
import { ReactComponent as Guide_Main } from "../../assets/images/Guide_Main.svg";
import Typewritter from 'typewriter-effect';

const GuideSection1 = () => {
  return (
    <Page1>
      <PageTitle>
        <BigTitle>
          <Typewritter
            options={{
              strings: ['"프롬프렌 가이드"'],
              autoStart: true,
              loop: true,
            }} />
        </BigTitle>와 함께 <br/>
        나의 지적 즐거움을 <br/>
        키워가세요
      </PageTitle>
      {/* 첫 페이지 오른쪽 이미지 */}
      <StyledIcon />
    </Page1>
  );
};

export default GuideSection1;

const Page1 = styled.div`
  font-family: "Gmarket Sans TTF";
  width: 100%;
  height: 100%;
`;

const PageTitle = styled.div`
  font-size: 48px;
  margin-left: 114px;
  margin-top: 220px;
`;

const BigTitle = styled.div`
  display: inline-block;
  font-weight: 700;
  color: #42D09F;
  font-size: 55px;
  font-family: 'Gmarket Sans TTF';
`;

// Define the bounce animation
const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
`;

const StyledIcon = styled(Guide_Main)`
  z-index: 1;
  position: absolute;
  right: 0;
  bottom: 0;
  animation: ${bounce} 2s ease infinite;
`;
