import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";

// PromptItem 정의
interface PromptItemProps {
  prompt_id: string;
}

interface PromptData {
  title: string;
  review: string;
  category: string;
}

const Prompt_Item: React.FC<PromptItemProps> = ({ prompt_id }) => {
  const [promptData, setPromptData] = useState<PromptData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/v1/main/getPrompt/${prompt_id}`);
        setPromptData(response.data);
      } catch (error) {
        console.error("프롬프트 데이터를 가져오는 중 에러 발생:", error);
      }
    };

    fetchData();
  }, [prompt_id]);

  if (!promptData) {
    return <div>Loading...</div>;
  }

  return (
    <Item>
      <Img />
      <Title>{promptData.title}</Title>
      <Review>{promptData.review}</Review>
      <Category>{promptData.category}</Category>
      <StyledLink to={`/detail_page/${prompt_id}`}>
        <StyleButton>상세보기</StyleButton>
      </StyledLink>
    </Item>
  );
};
// 스타일드 컴포넌트 정의
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
  font-weight: 500;
  margin-top: 14px;
`;

const Review = styled.div`
  color: #A0A0A0;
  font-family: "Noto Sans KR";
  font-size: 12px;
  font-weight: 300;
  margin-top: 8px;
`;

const Category = styled.div`
  display: inline-block;
  color: #72D49B;
  font-family: "Noto Sans KR";
  font-size: 14px;
  font-weight: 400;
  margin-top: 4px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const StyleButton = styled.button`
  float: right;
  margin-top: 9px;
  width: 74px;
  height: 31px;
  border-radius: 5px;
  background: #72D49B;
  border: none;
  color: #FFF;
  font-family: "Inter";
  font-size: 11px;
`;

export default Prompt_Item;
