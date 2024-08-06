import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { PromptData } from "./types";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

type Params = Record<string, string | undefined>;

export default function DetailSection1() {
  const { prompt_id } = useParams<Params>(); // 수정된 Params 타입을 사용
  const [prompt, setPrompt] = useState<PromptData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("token") || null
  );

  useEffect(() => {
    const fetchPromptData = async () => {
      if (!prompt_id) {
        setError("Invalid prompt ID.");
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
          <Content2>{prompt.content}</Content2>
        </PromptShow>
        <PromptExample>
          <Title>프롬프트 사용 예시</Title>
          <Content3>
            {prompt.output}
            <div id="imgBox">
              <img id="promptImg" src={prompt.image} alt={prompt.title} />
            </div>
          </Content3>
        </PromptExample>
      </LayoutLeft>
      <LayoutRight>
        <PromptTry>
          "{prompt.title}" <br />
          프롬프트 사용해보기!
        </PromptTry>
        <PromptTryButton to="/main">사용하러 가기</PromptTryButton>
      </LayoutRight>
    </DetailSection1Layout>
  );
}

const DetailSection1Layout = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80rem;
  padding: 7rem;
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
  display: flex;
  flex-direction: column;
  white-space: pre-wrap;
  width: 712px;
  border-top: 1px solid #2cc1bf;
  font-family: "Gmarket Sans TTF";
  font-size: 14px;
  padding: 22px 27px;
  gap: 3rem;
  #imgBox {
    display: flex;
    justify-content: left;
  }
  #promptImg {
    max-width: 27.75rem;
    max-height: 18.27231rem;
    object-fit: contain;
  }
`;

const LayoutRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  float: right;
  margin-top: 145px;
  width: 221px;
  height: 257px;
  border-radius: 16px;
  border: 1px solid #42d09f;
  background: #fff;
  box-shadow: 4px 3px 10px 1px #ececec;
  font-weight: 400;
`;

const PromptTry = styled.div`
  color: #000;
  text-align: center;
  font-family: "Noto Sans KR";
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.2rem;
  margin-top: 6rem;
  margin-bottom: 2rem;
`;

const PromptTryButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 142.08px;
  height: 55.937px;
  font-family: "Noto Sans KR";
  font-size: 14px;
  border-radius: 16px;
  border: 1px solid #42d09f;
  cursor: pointer;
  background: #fff;
  color: #000;
  text-decoration: none;
  &:hover {
    background: linear-gradient(90deg, #42d09f 0%, #2cc1bf 100%);
  }
`;
