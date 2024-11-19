import styled from 'styled-components';
import { ReactComponent as Persona } from "../../assets/images/Persona.svg";
import { ReactComponent as Example } from "../../assets/images/Example.svg";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import React, { useContext, useEffect, useState } from "react";
import { ResponseContext } from '../../pages/Guide/Guide';

const GuideSection4 = () => {
  const { response } = useContext(ResponseContext);
  const [highlightPersona, setHighlightCommand] = useState(false);
  const [highlightExample, setHighlightContext] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: false,  // 요소가 한 번만 애니메이션되도록 설정
    threshold: 0.2,     // 요소의 10%가 화면에 보일 때 애니메이션 시작
  });

  useEffect(() => {
    if (response) {
      setHighlightCommand(response.includes("페르소나"));
      setHighlightContext(response.includes("예"));
    }
  }, [response]);

  return (
    <Page4 ref={ref}>
      <AnimatedContentLeft
        initial={{ y: '100vw', opacity: 0 }} // 아래에서 올라오는 애니메이션
        animate={{ y: inView ? 0 : '70px', opacity: inView ? 1 : 0 }}
        transition={{ type: 'spring', stiffness: 70, damping: 20, duration: 1 }}
      >
        <Tip highlighted={highlightPersona}>페르소나 [persona]</Tip>
        <br />
        해당 문제를 가장 잘 해결할 수 있을 만한 사람이 누구인지 가정하고, <br />
        그 역할을 맡아서 대화하라고 하면 좋아요. <br />
        예를 들어 '회계사 입장에서 답변해줘'라고 하면 <br/>
        회계 전문 용어로 답변해줄 거예요. <br/>
        페르소나가 구체적일수록 전문영역에 가까운 답을 제공해줘요.
      </AnimatedContentLeft>
      <AnimatedPersonaImg
        initial={{ x: '100vw', opacity: 0 }}
        animate={{ x: inView ? 0 : '100vw', opacity: inView ? 1 : 0 }}
        transition={{ type: 'spring', stiffness: 70, damping: 20, duration: 1 }}
      />

      <AnimatedContentRight
        initial={{ y: '100px', opacity: 0 }} // 아래에서 올라오는 애니메이션
        animate={{ y: inView ? 0 : '70px', opacity: inView ? 1 : 0 }}
        transition={{ type: 'spring', stiffness: 70, damping: 20, duration: 5 }}
      >
        <Tip highlighted={highlightExample}>예시 [example]</Tip>
        <br />
        문제와 관련된 예시를 1-2개 정도 프롬프트에  <br />
        넣어주면 생성형 ai가 예시를 기반으로  <br />
        답변을 작성해요.
      </AnimatedContentRight>
      <AnimatedExampleImg
        initial={{ x: '-100vw', opacity: 0 }}
        animate={{ x: inView ? 0 : '-100vw', opacity: inView ? 1 : 0 }}
        transition={{ type: 'spring', stiffness: 70, damping: 20, duration: 1 }}
      />
    </Page4>
  );
};

export default GuideSection4;

const Page4 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  background: rgba(114, 212, 155, 0.05);
  position: relative;
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

const AnimatedPersonaImg = styled(motion(Persona))`
  position: absolute;
  top: 80px;
  right: 250px;
`;

const AnimatedExampleImg = styled(motion(Example))`
  position: absolute;
  bottom: 80px;
  left: 250px;
`;
