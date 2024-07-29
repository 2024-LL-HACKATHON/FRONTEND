import React, { useState } from 'react';
import styled from 'styled-components';
import PromptReview from './PromptReview';

export default function DetailSection2() {
  const [showAllReviews, setShowAllReviews] = useState(false);

  const handleShowMoreClick = () => {
    setShowAllReviews(true);
  };

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
      <ReviewList>
        <PromptReview />
        <PromptReview />
        <PromptReview />
        <PromptReview />
        {showAllReviews && (
          <>
            <PromptReview />
            <PromptReview />
            {/* 추가적인 숨겨진 리뷰들 */}
          </>
        )}
      </ReviewList>
      {!showAllReviews && (
        <ReviewMore onClick={handleShowMoreClick}>리뷰 더보기</ReviewMore>
      )}
    </DetailSection2Layout>
  );
}

const DetailSection2Layout = styled.div`
  margin-top: 184px;
  margin-bottom: 98px;
`;

const ReviewTitle = styled.div`
  font-family: "Gmarket Sans TTF";
  font-size: 20px;
  font-weight: 500;
  span {
    color: #42d09f;
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
  background: rgba(66, 208, 159, 0.2);
  margin-top: 22px;
  margin-bottom: 62px;
  padding: 23px 28px;
  input {
    flex-grow: 1;
    border-style: none;
    background: none;
    color: #7e7e7e;
    font-family: "Noto Sans KR";
    font-size: 20px;
  }
`;

const WriteButton = styled.button`
  width: 106px;
  height: 43.271px;
  margin-left: 15px;
  border: 1px solid #42d09f;
  border-radius: 16px;
  background: none;
  float: bottom;
  text-align: center;
  font-family: "Noto Sans KR";
  font-size: 14px;
`;

const ReviewList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  margin: 62px 250px 81px 16px;
  gap: 34px;
`;

const ReviewMore = styled.button`
  font-family: "Gmarket Sans TTF";
  font-size: 20px;
  font-weight: 500;
  margin-left: 450px;
  margin-top: 20px;
  background: linear-gradient(to top, rgba(66, 208, 159, 0.39) 50%, transparent 50%);
  border: none;
  cursor: pointer;
`;
