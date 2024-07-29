import styled from 'styled-components';
import { ReactComponent as Persona } from "../../assets/images/Persona.svg";
import { ReactComponent as Example } from "../../assets/images/Example.svg";

const GuideSection4 = () => {
  return (
    <Page4>

      <ContentLeft>
        <Tip>페르소나 [persona]</Tip>
        <br />
        해당 문제를 가장 잘 해결할 수 있을 만한 사람이 누구인지 가정하고, <br />
        그 역할을 맡아서 대화하라고 하면 좋아요. <br />
        예를 들어 '회계사 입장에서 답변해줘'라고 하면 <br/>
        회계 전문 용어로 답변해줄 거예요. <br/>
        페르소나가 구체적일수록 전문영역에 가까운 답을 제공해줘요.
      </ContentLeft>
      {/*페르소나 이미지*/}
      <PersonaImg />

      <ContentRight>
        <Tip>예시 [example]</Tip>
        <br />
        문제와 관련된 예시를 1-2개 정도 프롬프트에  <br />
        넣어주면 생성형 ai가 예시를 기반으로  <br />
        답변을 작성해요.
      </ContentRight>
      {/*예시 이미지*/}
      <ExampleImg />
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

const Tip = styled.div`
  font-family: "Gmarket Sans TTF";
  font-size: 40px;
  font-weight: 700;
`;

const ContentLeft = styled.div`
  margin-top: 122px;
  margin-left: 110px;
  font-size: 16px;
  font-weight: 300;
`;

// 페르소나 이미지
const PersonaImg = styled(Persona)`
  position: absolute;
  top: 80px;
  right: 160px;
`;

const ContentRight = styled.div`
  margin-bottom: 122px;
  margin-left: 750px;
  font-size: 16px;
  font-weight: 300;
`;

// 예시 이미지
const ExampleImg = styled(Example)`
  position: absolute;
  bottom: 80px;
  left: 160px;
`;
