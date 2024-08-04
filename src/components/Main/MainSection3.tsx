import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ReactComponent as PageButtonLeft } from "../../assets/images/MainSection3_Page.svg";
import { ReactComponent as PageButtonRight } from "../../assets/images/MainSection3_Page2.svg";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import defaultImage from '../../assets/images/image-alt.svg';

interface StyledButtonProps {
  isSelected: boolean;
}

interface PromptItem {
  category: string;
  content: string;
  image: string;
  output: string;
  prompt_id: number;
  prompt_writer: string;
  summary: string;
  title: string;
  review?: number; // 리뷰 수를 선택적 속성으로 추가
}

type Params = {
  prompt_id?: string; 
};

const MainSection3: React.FC = () => {
  const { prompt_id: paramPromptId } = useParams<Params>(); 
  const [selectedButton, setSelectedButton] = useState("전체");
  const [currentPage, setCurrentPage] = useState(1);
  const [promptItems, setPromptItems] = useState<PromptItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState<string | null>(localStorage.getItem("token"));
  const itemsToShow = 9;

  useEffect(() => {
    fetchPromptItems();
  }, [selectedButton, currentPage, paramPromptId]);

  const fetchPromptItems = async () => {
    setLoading(true);
    try {
      const url =
        selectedButton === "전체"
          ? `/api/v1/main/getPromptByCategory?page=${currentPage}&size=${itemsToShow}`
          : `/api/v1/main/getPromptByCategory?category=${selectedButton}&page=${currentPage}&size=${itemsToShow}`;

      const response = await axios.get(url, {
        headers: {
          "X-AUTH-TOKEN": token || "",
        }
      });

      const prompts = response.data.content;

      const promptsWithReviews = await Promise.all(
        prompts.map(async (prompt: PromptItem) => {
          if (prompt.prompt_id === undefined || prompt.prompt_id === null) {
            console.warn(`Prompt ID is undefined or null for prompt: ${JSON.stringify(prompt)}`);
            return { ...prompt, review: 0 }; 
          }

          try {
            const reviewResponse = await axios.get(`/api/v1/review/countReview/${prompt.prompt_id}`, {
              headers: {
                accept: "*/*",
                "Content-Type": "application/json",
                "X-AUTH-TOKEN": token || "",
              }
            });

            // 리뷰 수 문자열로 변환 및 숫자 추출
            const reviewCountString = reviewResponse.data;
            const reviewCount = typeof reviewCountString === 'string'
              ? parseInt(reviewCountString.replace(/[^0-9]/g, ''), 10)
              : 0;

            return { ...prompt, review: isNaN(reviewCount) ? 0 : reviewCount };
          } catch (error) {
            if (axios.isAxiosError(error) && error.response?.status === 404) {
              console.warn(`리뷰 수를 가져오는 중 prompt_id ${prompt.prompt_id}에 대해 404 에러 발생`);
              return { ...prompt, review: 0 };
            } else {
              console.error(`리뷰 수를 가져오는 중 에러 발생 (prompt_id: ${prompt.prompt_id}):`, error);
              return { ...prompt, review: 0 };
            }
          }
        })
      );

      setPromptItems(promptsWithReviews);
    } catch (error) {
      console.error("프롬프트 데이터를 가져오는 중 에러 발생:", error);
    } finally {
      setLoading(false);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    event.currentTarget.src = defaultImage; 
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Section3>
      <ButtonList>
        <StyledButton
          isSelected={selectedButton === "전체"}
          onClick={() => {
            setSelectedButton("전체");
            setCurrentPage(1);
          }}
        >
          전체
        </StyledButton>
        <StyledButton
          isSelected={selectedButton === "GPT"}
          onClick={() => {
            setSelectedButton("GPT");
            setCurrentPage(1);
          }}
        >
          GPT
        </StyledButton>
        <StyledButton
          isSelected={selectedButton === "DALLE"}
          onClick={() => {
            setSelectedButton("DALLE");
            setCurrentPage(1);
          }}
        >
          DALL-E
        </StyledButton>
      </ButtonList>

      <PromptList>
        {promptItems.map(({ prompt_id, title, image, review = 0, category }) => (
          <Item key={prompt_id}>
            <Img>
              <img
                id="imgbox"
                src={image || defaultImage} 
                alt={title}
                onError={handleImageError} 
              />
            </Img>
            <Title>{title}</Title>
            <Review>리뷰 {review}</Review>
            <Category>{category}</Category>
            <StyledLink to={`/detail_page/${prompt_id}`}>
              <StyleButton>상세보기</StyleButton>
            </StyledLink>
          </Item>
        ))}
      </PromptList>

      <PageButton>
        <PageButton1 onClick={handlePreviousPage} />
        <PageButton2 onClick={handleNextPage} />
      </PageButton>

      <ReviewList></ReviewList>
    </Section3>
  );
};

export default MainSection3;



const Img = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 17.4375rem;
  height: 9.375rem;
  border-radius: 0.3125rem;
  background: #eee;
  #imgbox {
    max-width: 17.4375rem;
    max-height: 9.375rem;
  }
`;

const Title = styled.div`
  color: #000;
  font-family: "Gmarket Sans TTF";
  font-size: 20px;
  font-weight: 500;
  margin-top: 14px;
`;

const Review = styled.div`
  color: #a0a0a0;
  font-family: "Noto Sans KR";
  font-size: 12px;
  font-weight: 300;
  margin-top: 8px;
`;

const Category = styled.div`
  display: inline-block;
  color: #72d49b;
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
  background: #72d49b;
  border: none;
  color: #fff;
  font-family: "Inter";
  font-size: 11px;
  cursor: pointer;
`;

const Section3 = styled.div`
  width: 100%;
`;

const ButtonList = styled.div`
  display: flex;
  margin-top: 36px;
  margin-left: 106px;
  margin-bottom: 20px;
`;

const StyledButton = styled.button<StyledButtonProps>`
  width: 90px;
  height: 44px;
  border-radius: 7px;
  border: 1px solid #72d49b;
  background: ${(props) => (props.isSelected ? "#72D49B" : "#FFF")};
  color: ${(props) => (props.isSelected ? "#FFF" : "#000")};
  margin-right: 20px;
  cursor: pointer;

  &:hover {
    background: #72d49b;
    color: #fff;
  }
`;

const PromptList = styled.div`
  margin-left: 106px;
  margin-top: 28px;
  margin-right: 107px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 35px;
`;

const PageButton = styled.div`
  height: 20px;
  text-align: center;
  margin-top: 71px;
  margin-bottom: 62px;
`;

const PageButton1 = styled(PageButtonLeft)`
  margin-right: 156px;
  cursor: pointer;
`;

const PageButton2 = styled(PageButtonRight)`
  cursor: pointer;
`;

const ReviewList = styled.div`
  margin-bottom: 107px;
  margin-left: 187px;
`;

const Item = styled.div`
  width: 20.3125rem;
  height: 18.625rem;
  background: #f0f0f0;
  padding: 20px;
  border-radius: 10px;
  border-radius: 0.6875rem;
  border: 1px solid #72d49b;
  background: #fff;
`;