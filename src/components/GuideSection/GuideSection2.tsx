import styled from 'styled-components';
import { ReactComponent as Down_icon } from "../../assets/images/Down_icon.svg";


const GuideSection2 = () => {
  return (
    <Page2>
      <Content>
        <span>생성형 AI</span>에게 상황을 잘 설명하고 전문성을 이끌어내려면 <br />
        <span>프롬프트</span>를 잘 구성해야돼요 <br />
      </Content>

      <SubContent>
        아래 소개할 6가지 구성요소를 잘 활용하면 AI가 문제를 이해하기 쉬워지고 <br />
        좋은 결과를 얻을 수 있어요.
      </SubContent>

    </Page2>
  );
};

export default GuideSection2;

const Page2 = styled.div`
  width : 100%;
  height : 100%;
  background: rgba(114, 212, 155, 0.05);
`;

const Content = styled.div`
padding-top: 338px;
text-align: center;
font-family: "Gmarket Sans";
font-size: 30px;
font-weight: 300;
font-style: normal;
line-height: 50px;
text-align: center;

span {
  font-weight: 700;
  background: linear-gradient(to top, #42D09F 50%, transparent 50%);
  }
`;

const SubContent = styled.div`
margin-top: 33px;
text-align: center;
font-family: "Noto Sans";
font-size: 14px;
font-weight: 400;
`;
