import styled from "styled-components";

export default function Review() {
  return (
    <ReviewLayout>
      <Img />
      <Title>프롬프렌 유저의 생생한 후기</Title>
      <Star>★ 5.0</Star>
      <ReviewContent>
      "해당 프롬포트를 사용하니 정말 몽환적인 분위기의 애니메이션
      이미지가 생성되었어요. 배경 이미지 만드는 데 아주 유용했습니다!"
      </ReviewContent>
      <ItemTitle>
      몽환적인 애니메이션 장면 프롬포트 사용
      </ItemTitle>
    </ReviewLayout>
  );
}

const ReviewLayout = styled.div`
width: 829px;
height: 235px;
border: 1px solid #72D49B;
padding: 24px 50px 25px 42px;
border-radius: 16px;
margin: 0px 33px;
`;

const Img = styled.div`
float: left;
width: 321px;
height: 186px;
border-radius: 16px;
background: #F3F3F3;
margin-right: 33px;
`;

const Title = styled.div`
font-family: "Gmarket Sans TTF";
font-size: 20px;
font-weight: 500;
line-height: normal;
margin-top: 17px;
margin-bottom: 18px;
`;

const Star = styled.div`
color: #646464;
font-family: "Noto Sans KR";
font-size: 12px;
font-weight: 400;
margin-bottom: 18px;
`;

const ReviewContent = styled.div`
color: #646464;
font-family: "Noto Sans KR";
font-size: 14px;
font-weight: 300;
margin-bottom: 14px;
`;
const ItemTitle = styled.div`
color: #646464;
font-family: "Noto Sans KR";
font-size: 12px;
font-weight: 300;
`;