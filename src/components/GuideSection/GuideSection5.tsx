import styled from 'styled-components';
import { ReactComponent as Format } from "../../assets/images/Format.svg";
import { ReactComponent as Tone } from "../../assets/images/Tone.svg";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import React, { useContext, useEffect, useState } from "react";
import { ResponseContext } from '../../pages/Guide/Guide';

const GuideSection5 = () => {
  const { response } = useContext(ResponseContext);
  const [highlightFormat, setHighlightCommand] = useState(false);
  const [highlightTone, setHighlightContext] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2, 
  });

  useEffect(() => {
    if (response) {
      setHighlightCommand(response.includes("포맷"));
      setHighlightContext(response.includes("어조"));
    }
  }, [response]);

  return (
    <Page5 ref={ref}>
      <AnimatedContentLeft
        initial={{ y: '100vw', opacity: 0 }} // 아래에서 올라오는 애니메이션
        animate={{ y: inView ? 0 : '70px', opacity: inView ? 1 : 0 }}
        transition={{ type: 'spring', stiffness: 70, damping: 20, duration: 1 }}
      >
        <Tip highlighted={highlightFormat}>포맷 [format]</Tip>
        <br />
        결과물의 형식이나 분량, 내용 구성을 미리 지정해주면 좋아요. <br />
        표 형식으로 정리해달라거나, 마크다운으로 작성하라고 하거나, <br />
        아웃라인을 주면서 어떤 식으로 구성하라고 말해주는 거죠.
      </AnimatedContentLeft>
      {/*포맷 이미지*/}
      <FormatImg 
        initial={{ x: '100vw', opacity: 0 }}
        animate={{ x: inView ? 0 : '100vw', opacity: inView ? 1 : 0 }}
        transition={{ type: 'spring', stiffness: 70, damping: 20, duration: 1 }}
      />

      <AnimatedContentRight
          initial={{ y: '100px', opacity: 0 }} // 아래에서 올라오는 애니메이션
          animate={{ y: inView ? 0 : '70px', opacity: inView ? 1 : 0 }}
          transition={{ type: 'spring', stiffness: 70, damping: 20, duration: 5 }}
      >
        <Tip highlighted={highlightTone}>어조 [tone]</Tip>
        <br />
        결과물의 어조도 정할 수 있어요. <br />
        '간단명료하게', '친근한 말투로' 같은  <br />
        형용사를 주거나, 어떤 예시 텍스트의 어조를 <br />
        따라하라고 하면 돼요.
      </AnimatedContentRight>
      {/*어조 이미지*/}
      <ToneImg
        initial={{ x: '-100vw', opacity: 0 }}
        animate={{ x: inView ? 0 : '-100vw', opacity: inView ? 1 : 0 }}
        transition={{ type: 'spring', stiffness: 70, damping: 20, duration: 1 }} 
      />
    </Page5>
  );
};

export default GuideSection5;

const Page5 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

const Tip = styled.div<{ highlighted: boolean }>`
  font-family: "Gmarket Sans TTF";
  font-size: 40px;
  font-weight: 700;
  color: ${({ highlighted }) => (highlighted ? "red" : "black")};
  transition: color 0.3s ease, transform 0.3s ease;

  ${({ highlighted }) =>
    highlighted &&
    `animation: shake 0.5s ease-in-out infinite alternate;`}
  @keyframes shake {
    0% {transform: translateY(-5px);}
    100% {transform: translateY(5px);}
  }
`;

const AnimatedContentLeft = styled(motion.div)`
  margin-top: 122px;
  margin-left: 110px;
  font-size: 16px;
  font-weight: 300;
`;

const AnimatedContentRight = styled(motion.div)`
  margin-bottom: 122px;
  margin-left: 750px;
  font-size: 16px;
  font-weight: 300;
`;


// 포맷 이미지
const FormatImg = styled(motion(Format))`
  position: absolute;
  top: 80px;
  right: 160px;
`;

// 어조 이미지
const ToneImg = styled(motion(Tone))`
  position: absolute;
  bottom: 80px;
  left: 160px;
`;