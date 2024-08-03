import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Review } from "./types";

type Params = Record<string, string | undefined>;

export default function PromptReview() {
  const { prompt_id } = useParams<Params>();
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("token") || null
  );

  useEffect(() => {
    const fetchReviews = async () => {
      if (!prompt_id) {
        setError('Invalid prompt ID.');
        setLoading(false);
        return;
      }

      try {
        console.log(`Fetching reviews for prompt_id: ${prompt_id}`); // Debug log
        const response = await axios.get<{ items: Review[] }>(
          `/api/v1/review/getTop4ReviewList/${prompt_id}`,
          {
            headers: {
              accept: "*/*",
              "X-AUTH-TOKEN": token || "",
            },
          }
        );
        console.log(response.data); 
        setReviews(response.data.items);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          setError("Failed to fetch reviews.");
        } else {
          setError("Unexpected error occurred.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [prompt_id, token]); 

  if (loading) {
    return <div>리뷰를 불러오고 있어요.</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (reviews.length === 0) {
    return <div>작성된 리뷰가 없어요. 첫 리뷰어가 되어주세요!</div>;
  }

  return (
    <ReviewsContainer>
      {reviews.map((review) => (
        <PromptReviewLayout key={review.review_id}>
          <User>
            <UserProfile>
              <img src={review.writer_thumbnail} alt="Profile" />
            </UserProfile>
            <UserName>{review.review_writer}</UserName>
          </User>
          <ReviewContent>
            <Quote>{review.title}</Quote>
            <ReviewText>{review.content}</ReviewText>
          </ReviewContent>
        </PromptReviewLayout>
      ))}
    </ReviewsContainer>
  );
}

const ReviewsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  margin: 62px 250px 81px 16px;
  gap: 34px;
`;

const PromptReviewLayout = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 485px;
  height: 146px;
  border-radius: 16px;
  border: 2px solid #42d09f;
  background: rgba(66, 208, 159, 0.2);
  box-shadow: 4px 3px 10px 1px #ececec;
`;

const User = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 28px;
`;

const UserProfile = styled.div`
  width: 68px;
  height: 68px;
  border-radius: 16px;
  margin-bottom: 10px;
  background-color: #d9d9d9;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const UserName = styled.div`
  font-family: "Noto Sans KR";
  font-size: 12px;
`;

const ReviewContent = styled.div`
  flex: 1;
`;

const Quote = styled.p`
  font-family: "Noto Sans KR";
  font-size: 16px;
  margin-bottom: 7px;
`;

const ReviewText = styled.p`
  width: 331px;
  height: 63px;
  font-family: "Noto Sans KR";
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;
