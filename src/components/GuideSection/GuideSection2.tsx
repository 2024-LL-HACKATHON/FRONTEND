import styled from 'styled-components';
import { ReactComponent as Down_icon } from "../../assets/images/Down_icon.svg";
import { motion } from 'framer-motion';

const GuideSection2 = () => {
  return (
    <Page2>
      <AnimatedContent
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 70, damping: 20, duration: 1 }}
      >
        <PulseSpan>
          생성형 AI
        </PulseSpan>에게 상황을 잘 설명하고 전문성을 이끌어내려면 <br />
        <Span2>
          <ColorChangingSpan>
            프롬프트
          </ColorChangingSpan>
        </Span2>를 잘 구성해야돼요 <br />
      </AnimatedContent>

      <AnimatedSubContent
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 70, damping: 20, duration: 1 }}
      >
        아래 소개할 6가지 구성요소를 잘 활용하면 AI가 문제를 이해하기 쉬워지고 <br />
        좋은 결과를 얻을 수 있어요.
      </AnimatedSubContent>
      
      <StyledDownicon 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1, rotate: [0, 360] }}
        transition={{ type: 'spring', stiffness: 70, damping: 20, duration: 1, repeat: Infinity, ease: "linear" }}
      />
    </Page2>
  );
};

export default GuideSection2;

const Page2 = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(114, 212, 155, 0.05);
  text-align: center;
  position: relative;
`;

const AnimatedContent = styled(motion.div)`
  width: 1075px;
  height: 116px;
  margin: auto;
  padding-top: 338px;
  font-family: "Gmarket Sans TTF";
  font-size: 30px;
  font-weight: 300;
  font-style: normal;
  line-height: 50px;
`;

const PulseSpan = styled(motion.span)`
  font-weight: 700;
  background: linear-gradient(to top, rgba(66, 208, 159, 0.39) 50%, transparent 50%);
  display: inline-block;
  animation: pulse 2s infinite;

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
`;

const ColorChangingSpan = styled(motion.span)`
  font-weight: 700;
  background: linear-gradient(to top, rgba(66, 208, 159, 0.39) 50%, transparent 50%);
  display: inline-block;
  animation: colorChange 2s infinite;

  @keyframes colorChange {
    0% {
      color: black;
    }
    50% {
      color: #42D09F;
    }
    100% {
      color: black;
    }
  }
`;

const Span2 = styled.span`
  text-emphasis: filled #42D09F;
`;

const AnimatedSubContent = styled(motion.div)`
  height: 85px;
  margin: auto;
  margin-top: 150px;
  font-size: 14px;
  font-weight: 400;
`;

const StyledDownicon = styled(motion(Down_icon))`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;
