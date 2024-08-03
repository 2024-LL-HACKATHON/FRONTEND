import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { PromptData } from "./types";
import axios from "axios";
import { useParams } from "react-router-dom";

type Params = Record<string, string | undefined>;

export default function DetailSection1() {
  const { prompt_id } = useParams<Params>(); // 수정된 Params 타입을 사용
  const [prompt, setPrompt] = useState<PromptData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("token")|| null
  );

  useEffect(() => {
    const fetchPromptData = async () => {
      if (!prompt_id) {
        setError('Invalid prompt ID.');
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get<PromptData>(
          `/api/v1/main/getPrompt/${prompt_id}`,
          {
            headers: {
              accept: "*/*",
              "X-AUTH-TOKEN": token || "",
            },
          }
        );
        setPrompt(response.data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          setError("Server error: Unable to fetch data.");
        } else {
          setError("Unexpected error occurred.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchPromptData();
  }, [prompt_id, token]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!prompt) {
    return <div>No data available</div>;
  }
  return (
    <DetailSection1Layout>
      <LayoutLeft>
        <PromptExplanation>
          <Title>프롬프트 설명</Title>
          <Content1>{prompt.summary}</Content1>
        </PromptExplanation>
        <PromptShow>
          <Title>프롬프트</Title>
          <Content2>
          {prompt.content}
          </Content2>
        </PromptShow>
        <PromptExample>
          <Title>프롬프트 사용 예시</Title>
          <Content3>
          {prompt.output}
          </Content3>
        </PromptExample>
      </LayoutLeft>
      <LayoutRight>
        <PromptTry>
          “{prompt.title}” <br />
          프롬프트 사용해보기!
        </PromptTry>
        <PromptTryButton>사용하러 가기</PromptTryButton>
      </LayoutRight>
    </DetailSection1Layout>
  );
}

const DetailSection1Layout = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1280px;
  padding: 20px;
`;

const LayoutLeft = styled.div`
  float: left;
`;

const PromptExplanation = styled.div`
  margin-top: 62px;
`;

const Title = styled.div`
  font-family: "Gmarket Sans TTF";
  font-size: 32px;
  font-weight: 500;
  margin-bottom: 32px;
`;

const Content1 = styled.div`
  width: 712px;
  height: 229px;
  padding: 30px 15px;
  font-family: "Gmarket Sans TTF";
  font-size: 14px;
  color: #626060;
  border-top: 1px solid #2cc1bf;
`;

const PromptShow = styled.div`
  margin-top: 31px;
`;

const Content2 = styled.div`
  width: 712px;
  height: 234px;
  border-radius: 16px;
  border: 2px solid #42d09f;
  background: rgba(66, 208, 159, 0.2);
  box-shadow: 4px 3px 10px 1px #ececec;
  padding: 34px 27px;
`;

const PromptExample = styled.div`
  margin-top: 85px;
`;

const Content3 = styled.div`
  width: 712px;
  height: 141px;
  border-top: 1px solid #2cc1bf;
  font-family: "Gmarket Sans TTF";
  font-size: 14px;
  padding: 22px 27px;
`;

/* 오른쪽 */
const LayoutRight = styled.div`
  float: right;
  margin-right: 119px;
  margin-top: 145px;
  width: 221px;
  height: 257px;
  border-radius: 16px;
  border: 1px solid #42d09f;
  background: #fff;
  box-shadow: 4px 3px 10px 1px #ececec;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PromptTry = styled.div`
  font-family: "Noto Sans";
  font-size: 14px;
  text-align: center;
  margin-top: 98px;
  margin-bottom: 50px;
`;

const PromptTryButton = styled.button`
  width: 142.08px;
  height: 55.937px;
  font-family: "Noto Sans";
  font-size: 14px;
  border-radius: 16px;
  border: 1px solid #42D09F;
  cursor: pointer;
  background: linear-gradient(90deg, #72D49B 0%, #2CC1BF 100%);
  color: #FFF;
  }
`;
