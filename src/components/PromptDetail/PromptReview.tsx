import React from 'react';
import styled from 'styled-components';

export default function PromptReview() {
  return (
    <PromptReviewLayout>
      <User>
        <UserProfile>
          
        </UserProfile>
        <UserName>홍**님</UserName>
      </User>
      <ReviewContent>
        <Quote>"지금까지 이런 프롬프트는 없었다."</Quote>
        <ReviewText>
          제가 비전공생이어서 인공지능에 대해 잘 모르지만 프롬프렌을 통해 인공지능을 똑똑하게 사용할 수 있어서 너무 좋아요.
          똑똑하게 질문하는 것의 중요성은 인공지능이나 사람이나 마찬가지더라구요.
        </ReviewText>
      </ReviewContent>
    </PromptReviewLayout>
  );
}

const PromptReviewLayout = styled.div`
  display: flex;
  align-items: center;
  width: 485px;
  height: 146px;
  border-radius: 16px;
  border: 2px solid #42D09F;
  background: rgba(66, 208, 159, 0.20);
  box-shadow: 4px 3px 10px 1px #ECECEC;
`;

const User = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 28px;
`;

const UserProfile = styled.div`
  width: 68.118px;
  height: 68.118px;
  border-radius: 16px;
  margin-bottom: 10px;
  background-color: #D9D9D9;
`;

const UserName = styled.div`
  font-family: 'Noto Sans KR';
  font-size: 12px;
`;

const ReviewContent = styled.div`
  flex: 1;
`;

const Quote = styled.p`
  font-family: 'Noto Sans KR';
  font-size: 16px;
  margin-bottom: 7px;
`;

const ReviewText = styled.p`
    width: 331px;
    height: 63px;
  font-family: 'Noto SansKR';
  font-size: 12px;
`;
