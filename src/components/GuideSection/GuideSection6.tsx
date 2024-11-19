import styled from 'styled-components';
import Typewritter from 'typewriter-effect';


const GuideSection6 = () => {
  return (
    <Page6>
      <Content>
        <span>프롬프렌</span>과 함께 건강한
        <span className="typewriter-text">
          <Typewritter
            options={{
            strings: ["프롬포팅 생활"],
            autoStart: true,
            loop: true,
          }} />
        </span>을 즐겨보아요
      </Content>
    </Page6>
  );
};

export default GuideSection6;

const Page6 = styled.div`
  width : 100%;
  height : 100%;
  background: rgba(114, 212, 155, 0.05);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
    font-family: "Gmarket Sans TTF";
    font-size: 30px;
    font-weight: 300;

    span {
        color: #42D09F;
        font-size: 36px;
        font-weight: 700;
        display: inline-block;
    }
    .typewriter-text {
        margin-left: 10px;
    }
`;
