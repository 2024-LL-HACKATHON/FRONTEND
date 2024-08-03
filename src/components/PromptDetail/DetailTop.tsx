import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Header from "../Header/Header";
import { PromptData } from "./types";
import { useParams } from "react-router-dom";

type Params = Record<string, string | undefined>;

export default function PromptDetailTop() {
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
    <TopLayout>
      <Background>
        <Header isLoggedIn={false} fixed={false} />
      </Background>
      <TitleLayout>
        <Title>{prompt.title}</Title>
        <CategoryLayout>
          <Category>{prompt.condition}</Category>
          <Category>{prompt.category}</Category>
          <Category>리뷰</Category>
        </CategoryLayout>
        <Writer>작성자 {prompt.prompt_writer}</Writer>
      </TitleLayout>
    </TopLayout>
  );
}

const TopLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  width: 1280px;
  height: 292px;
  background: linear-gradient(90deg, #42d09f 0%, #2cc1bf 100%);
  z-index: 1;
`;

const TitleLayout = styled.div`
  width: 1127px;
  height: 267px;
  fill: rgba(255, 255, 255, 0.6);
  border: 2px solid rgba(44, 193, 191, 0.3);
  box-shadow: 50px 50px 200px 0px rgba(255, 255, 255, 0.25) inset;
  filter: drop-shadow(3px 4px 11px rgba(114, 212, 155, 0.25));
  backdrop-filter: blur(15px);

  border-radius: 30px;
  margin-top: 184px;
  padding: 47px 38px 44px 44px;
  position: relative;
  z-index: 2;
`;

const Title = styled.div`
  font-family: "Gmarket Sans TTF";
  font-size: 40px;
  font-weight: 500;
  margin-bottom: 52px;
`;

const CategoryLayout = styled.div`
  display: flex;
  margin-top: 20px;
`;

const Category = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 185px;
  height: 61px;
  border-radius: 16px;
  border: 2px solid #42d09f;
  background: #fff;
  box-shadow: 4px 3px 10px 1px #ececec;
  font-family: "Gmarket Sans TTF";
  font-size: 14px;
  font-weight: 500;
  margin-right: 38px;
`;

const Writer = styled.div`
  float: right;
  font-family: "Gmarket Sans TTF";
  font-size: 18px;
  font-weight: 500;
  color: #333;
`;
