import styled from "styled-components";

export default function Prompt_Item() {
  return (
    <Item>
        <Img />
        <Title>몽환적인 애니메이션 장면</Title>
        <Review>
            리뷰
        </Review>
        <Category>
            GPT
        </Category>
        <StyleButton>상세보기</StyleButton>

        
    </Item>
  );
}

const Item = styled.div`
    width: 325px;
    height: 298px;
    border-radius: 11px;
    border: 1px solid #72D49B;
    background: #FFF;
    padding: 22px 23px 20px 23px;
`;
const Img = styled.div`
    width: 279px;
    height: 150px;
    border-radius: 5px;
    background: #EEE;
`;

const Title = styled.div`
color: #000;
font-family: "Gmarket Sans TTF";
font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: normal;
margin-top: 14px;
`;

const Review = styled.div`
color: #A0A0A0;
font-family: "Noto Sans KR";
font-size: 12px;
font-style: normal;
font-weight: 300;
line-height: normal;
margin-top: 8px;
`;

const Category = styled.div`
display: inline-block;
color: #72D49B;
font-family: "Noto Sans KR";
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin-top: 4px;
`;
const StyleButton = styled.button`
float: right;
margin-top: 9px;
width: 74px;
height: 31px;
border-radius: 5px;
background: #72D49B;
border-style: none;

color: #FFF;
font-family: Inter;
font-size: 11px;
`;
