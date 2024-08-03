import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PromptReview from "./PromptReview";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { useParams } from "react-router-dom";


interface FormData {
  content: string;
  star: number;
  title: string;
}

type Params = {
  prompt_id?: string; // prompt_id가 선택적일 수 있으므로
};

export default function DetailSection2() {
  const { prompt_id } = useParams<Params>();
  const [promptId, setPromptId] = useState<number | null>(null); 
  const [token, setToken] = useState<string | null>(localStorage.getItem("token"));
  const [starRating, setStarRating] = useState<number>(0); // 별점 상태 추가
  const { register, handleSubmit, reset, setValue } = useForm<FormData>();

  useEffect(() => {
    if (prompt_id) {
      setPromptId(parseInt(prompt_id, 10));
    }
  }, [prompt_id]);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    if (promptId === null) {
      alert("Invalid prompt ID.");
      return;
    }

    try {
      const response = await axios.post(
        "/api/v1/review/createReview",
        {
          promptId: promptId, 
          content: data.content,
          star: starRating, 
          title: data.title,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "X-AUTH-TOKEN": token || "",
          },
        }
      );
      console.log("Review submitted successfully:", response.data);
      alert("Review submitted successfully!");
      reset();
      setStarRating(0); // 별점 상태 초기화
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Axios error:", error.response?.data);
      } else {
        console.error("Unexpected error:", error);
      }
      alert("Failed to submit review. Please try again.");
    }
  };

  return (
    <DetailSection2Layout>
      <ReviewTitle>
        사용자 리뷰 <span>58개</span>
      </ReviewTitle>
      <ReviewWrite>
        <p>리뷰 작성하기</p>
        <WriteBox>
          <form onSubmit={handleSubmit(onSubmit)}>
            <InputWrapper>
              <label htmlFor="title">제목</label>
              <input
                id="title"
                {...register("title", { required: "Title is required" })}
                type="text"
                placeholder="Review Title"
              />
            </InputWrapper>
            <InputWrapper>
              <label htmlFor="content">내용</label>
              <input
                id="content"
                {...register("content", { required: "Content is required" })}
                type="text"
                placeholder="내용을 입력해주세요"
              />
            </InputWrapper>
            <InputWrapper>
              <label htmlFor="star">별점</label>
              <StarRating>
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    filled={star <= starRating}
                    onClick={() => setStarRating(star)}
                  />
                ))}
              </StarRating>
            </InputWrapper>
            <WriteButton type="submit">저장</WriteButton>
          </form>
        </WriteBox>
      </ReviewWrite>
      <ReviewList>
        <PromptReview />
      </ReviewList>
        <ReviewMore>리뷰 더보기</ReviewMore>
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
  border-radius: 16px;
  background: rgba(66, 208, 159, 0.2);
  margin-top: 22px;
  margin-bottom: 62px;
`;

const InputWrapper = styled.div`
  margin-bottom: 1rem;
  label {
    display: block;
    margin-bottom: 0.5rem;
    font-family: "Noto Sans KR";
    font-size: 16px;
  }
  input {
    width: 100%;
    border: none;
    border-radius: 16px;
    background: none;
    color: #7e7e7e;
    font-family: "Noto Sans KR";
    font-size: 16px;
    padding: 0.5rem;
    height: 2.5rem; 
  }
`;

const StarRating = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const Star = styled.div<{ filled: boolean }>`
  width: 24px;
  height: 24px;
  background: ${(props) => (props.filled ? "#FFD700" : "#E0E0E0")};
  clip-path: polygon(
    50% 0%,
    61% 35%,
    98% 35%,
    68% 57%,
    79% 91%,
    50% 70%,
    21% 91%,
    32% 57%,
    2% 35%,
    39% 35%
  );
  cursor: pointer;
`;

const WriteButton = styled.button`
  width: 106px;
  height: 43px;
  margin-left: 15px;
  border: 1px solid #42d09f;
  border-radius: 16px;
  background: none;
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
  background: linear-gradient(
    to top,
    rgba(66, 208, 159, 0.39) 50%,
    transparent 50%
  );
  border: none;
  cursor: pointer;
`;
