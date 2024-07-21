import styled from 'styled-components';

const GuideSection3 = () => {
  return (
    <Page3>
      <ContentRight>
        <Tip>명령 [task]</Tip>
        <br />
        '명령'은 꼭 포함되어야 해요. <br />
        '~작성해줘', '~해줘', '찾아봐 줘'처럼 서술어로 기술해주세요. <br />
        자세한 답변을 원한다면 한 번에 한 가지 명령만 주는 게 좋아요.
      </ContentRight>
      <ContentLeft>
        <Tip>맥락 [context]</Tip>
        <br />
        어떤 배경인지, 어떤 조건이나 규칙이 있는지, 최종적으로 <br />
        어떤 결과물이 나와야 하는지를 자세히 알려주세요. <br />
        상황을 구체적으로 잡아줄수록 생성형ai가 맥락을 <br />
        이해하기 쉬워져서 좋은 답변을 해줄 거예요.
      </ContentLeft>
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
`;

const Tip = styled.div`
  font-family: "Gmarket Sans";
  font-size: 40px;
  font-weight: 700;
`;

const ContentRight = styled.div`
  margin-top: 122px;
  margin-left: 110px;
  font-family: "Noto Sans";
  font-size: 20px;
`;

const ContentLeft = styled.div`
  margin-bottom: 122px;
  margin-left: 750px;
  font-family: "Noto Sans";
  font-size: 20px;
`;
