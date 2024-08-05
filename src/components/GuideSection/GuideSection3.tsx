import styled from 'styled-components';
import { ReactComponent as Task } from "../../assets/images/Task.svg";
import { ReactComponent as Context } from "../../assets/images/Context.svg";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const GuideSection3 = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,  // 요소가 한 번만 애니메이션되도록 설정
    threshold: 0.2,  
  });

  return (
    <Page3 ref={ref}>
      <AnimatedContentRight 
        initial={{ y: '100vw', opacity: 0 }} // 아래에서 올라오는 애니메이션
        animate={{ y: inView ? 0 : '70px', opacity: inView ? 1 : 0 }}
        transition={{ type: 'spring', stiffness: 70, damping: 20, duration: 1 }}
      >
        <Tip>명령 [task]</Tip>
        <br />
        '명령'은 꼭 포함되어야 해요. <br />
        '~작성해줘', '~해줘', '찾아봐 줘'처럼 서술어로 기술해주세요. <br />
        자세한 답변을 원한다면 한 번에 한 가지 명령만 주는 게 좋아요.
      </AnimatedContentRight>
      {/* 명령 이미지 */}
      <AnimatedTaskImg 
        initial={{ x: '100vw', opacity: 0 }}
        animate={{ x: inView ? 0 : '100vw', opacity: inView ? 1 : 0 }}
        transition={{ type: 'spring', stiffness: 70, damping: 20, duration: 1 }}
      />
      <AnimatedContentLeft 
         initial={{ y: '100px', opacity: 0 }} // 아래에서 올라오는 애니메이션
         animate={{ y: inView ? 0 : '70px', opacity: inView ? 1 : 0 }}
         transition={{ type: 'spring', stiffness: 70, damping: 20, duration: 5 }}
      >
        <Tip>맥락 [context]</Tip>
        <br />
        어떤 배경인지, 어떤 조건이나 규칙이 있는지, 최종적으로 <br />
        어떤 결과물이 나와야 하는지를 자세히 알려주세요. <br />
        상황을 구체적으로 잡아줄수록 생성형ai가 맥락을 <br />
        이해하기 쉬워져서 좋은 답변을 해줄 거예요.
      </AnimatedContentLeft>
      {/* 맥락 이미지 */}
      <AnimatedContextImg 
        initial={{ x: '-100vw', opacity: 0 }}
        animate={{ x: inView ? 0 : '-100vw', opacity: inView ? 1 : 0 }}
        transition={{ type: 'spring', stiffness: 70, damping: 20, duration: 1 }}
      />
    </Page3>
  );
};

export default GuideSection3;

const Page3 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  position: relative;
`;

const Tip = styled.div`
  font-family: "Gmarket Sans TTF";
  font-size: 40px;
  font-weight: 700;
`;

const AnimatedContentRight = styled(motion.div)`
  width: 518px;
  height: auto;
  font-size: 16px;
  font-weight: 300;
  align-items: flex-start;
  margin-top: 122px;
  margin-left: 110px;
`;

const AnimatedContentLeft = styled(motion.div)`
  margin-bottom: 122px;
  margin-left: 750px;
  font-size: 16px;
  font-weight: 300;
`;

// 명령 이미지
const AnimatedTaskImg = styled(motion(Task))`
  position: absolute;
  top: 80px;
  right: 160px;
`;

// 맥락 이미지
const AnimatedContextImg = styled(motion(Context))`
  position: absolute;
  bottom: 80px;
  left: 160px;
`;
