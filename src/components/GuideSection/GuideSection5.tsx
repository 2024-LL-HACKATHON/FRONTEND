import styled from 'styled-components';
import { ReactComponent as Format } from "../../assets/images/Format.svg";
import { ReactComponent as Tone } from "../../assets/images/Tone.svg";

const GuideSection5 = () => {
  return (
    <Page5>
      <ContentLeft>
        <Tip>포맷 [format]</Tip>
        <br />
        결과물의 형식이나 분량, 내용 구성을 미리 지정해주면 좋아요. <br />
        표 형식으로 정리해달라거나, 마크다운으로 작성하라고 하거나, <br />
        아웃라인을 주면서 어떤 식으로 구성하라고 말해주는 거죠.
      </ContentLeft>
      {/*포맷 이미지*/}
      <FormatImg />

      <ContentRight>
        <Tip>어조 [tone]</Tip>
        <br />
        결과물의 어조도 정할 수 있어요. <br />
        '간단명료하게', '친근한 말투로' 같은  <br />
        형용사를 주거나, 어떤 예시 텍스트의 어조를 <br />
        따라하라고 하면 돼요.
      </ContentRight>
      {/*어조 이미지*/}
      <ToneImg />
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

// 포맷 이미지
const FormatImg = styled(Format)`
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

// 어조 이미지
const ToneImg = styled(Tone)`
  position: absolute;
  bottom: 80px;
  left: 160px;
`;