// src/components/DetailSection1/DetailSection1.tsx
import React from 'react';
import styled from 'styled-components';

export default function DetailSection2() {
  return (
    <DetailSection2Layout>
        <ReviewTitle>
            사용자 리뷰 <span>58개</span>
        </ReviewTitle>
        <ReviewWrite>
            <p>리뷰 작성하기</p>
            <WriteBox>
                <input type="text" placeholder="내용을 입력해주세요" />
            </WriteBox>
            <WriteButton>저장</WriteButton>
        </ReviewWrite>
    </DetailSection2Layout>
  );
}

const DetailSection2Layout = styled.div`
margin-top: 184px;
`;
const ReviewTitle = styled.div`
font-family: "Gmarket Sans TTF";
font-size: 20px;
font-weight: 500;
span {
color: #42D09F;
}
`;
const ReviewWrite = styled.div`
margin-left: 16px;
margin-top: 45px;
p {
font-family: "Noto Sans KR";
font-size: 20px;
}
`;
const WriteBox = styled.div`
display: inline-block;
width: 883px;
height: 156px;
border-radius: 16px;
background: rgba(66, 208, 159, 0.20);
margin-top: 22px;
margin-bottom: 62px;
padding: 23px 28px;
    input {
        flex-grow: 1;
        border-style: none;
        background: none;
        color: #7E7E7E;
        font-family: "Noto Sans KR";
        font-size: 20px;
    }
`;
const WriteButton = styled.button`
width: 106px;
height: 43.271px;
margin-left: 15px;
border: 1px solid #42D09F;
border-radius: 16px;
background: none;
float: bottom;

text-align: center;
font-family: "Noto Sans KR";
font-size: 14px;
`;