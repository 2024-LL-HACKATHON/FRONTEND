import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ReactComponent as PageButtonLeft } from "../../assets/images/MainSection3_Page.svg";
import { ReactComponent as PageButtonRight } from "../../assets/images/MainSection3_Page2.svg";
import { ReactComponent as ListImg1 } from "../../assets/images/MainSection2_1.svg";
import { ReactComponent as ListImg2 } from "../../assets/images/MainSection2_2.svg";
import { ReactComponent as ListImg3 } from "../../assets/images/MainSection2_3.svg";
import { ReactComponent as ListImg4 } from "../../assets/images/MainSection2_4.svg";
import { ReactComponent as ListImg5 } from "../../assets/images/MainSection2_5.svg";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import defaultImage from "../../assets/images/image-alt.svg";

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

const conditions = [
  { label: "전체", value: "" },
  { label: "생산적인", value: "PRODUCTIVE" },
  { label: "예술적인", value: "ARTISTIC" },
  { label: "상징적인", value: "SYMBOLIC" },
  { label: "재미있는", value: "INTERESTING" }
];

// Section3에서 사용할 category
const categories = [
  { label: "전체", value: "전체" },
  { label: "GPT", value: "gpt" },
  { label: "DALL-E", value: "dalle" }
];

const MainSection3: React.FC = () => {
  const { prompt_id: paramPromptId } = useParams<Params>();
  const [selectedCondition, setSelectedCondition] = useState("전체");
  const [selectedCategory, setSelectedCategory] = useState("전체");
  const [currentPage, setCurrentPage] = useState(1);
  const [promptItems, setPromptItems] = useState<PromptItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("token")
  );
  const itemsToShow = 9;

  useEffect(() => {
    fetchPromptItems();
  }, [selectedCondition, selectedCategory, currentPage, paramPromptId]);

  const fetchPromptItems = async () => {
    setLoading(true);
    try {
      // Determine URL based on selected condition or category
      const url =
        selectedCondition !== "전체"
          ? `/api/v1/main/getPromptByCategory?condition=${selectedCondition}&page=${currentPage}&size=${itemsToShow}`
          : selectedCategory !== "전체"
          ? `/api/v1/main/getPromptByCategory?category=${selectedCategory}&page=${currentPage}&size=${itemsToShow}`
          : `/api/v1/main/getPromptByCategory?page=${currentPage}&size=${itemsToShow}`;

      const response = await axios.get(url, {
        headers: {
          "X-AUTH-TOKEN": token || "",
        },
      });

      const prompts = response.data.content;

      const promptsWithReviews = await Promise.all(
        prompts.map(async (prompt: PromptItem) => {
          if (prompt.prompt_id === undefined || prompt.prompt_id === null) {
            console.warn(
              `Prompt ID is undefined or null for prompt: ${JSON.stringify(
                prompt
              )}`
            );
            return { ...prompt, review: 0 };
          }

          try {
            const reviewResponse = await axios.get(
              `/api/v1/review/countReview/${prompt.prompt_id}`,
              {
                headers: {
                  accept: "*/*",
                  "Content-Type": "application/json",
                  "X-AUTH-TOKEN": token || "",
                },
              }
            );

            const reviewCountString = reviewResponse.data;
            const reviewCount =
              typeof reviewCountString === "string"
                ? parseInt(reviewCountString.replace(/[^0-9]/g, ""), 10)
                : 0;

            return { ...prompt, review: isNaN(reviewCount) ? 0 : reviewCount };
          } catch (error) {
            if (axios.isAxiosError(error) && error.response?.status === 404) {
              console.warn(
                `리뷰 수를 가져오는 중 prompt_id ${prompt.prompt_id}에 대해 404 에러 발생`
              );
              return { ...prompt, review: 0 };
            } else {
              console.error(
                `리뷰 수를 가져오는 중 에러 발생 (prompt_id: ${prompt.prompt_id}):`,
                error
              );
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

  const handleImageError = (
    event: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    event.currentTarget.src = defaultImage;
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Section2Wrapper>
        <Section2Title>
          다양한 장르의
          <span>
            <Section2SpanCircle>프</Section2SpanCircle>
            <Section2SpanCircle>롬</Section2SpanCircle>
            <Section2SpanCircle>프</Section2SpanCircle>
            <Section2SpanCircle>트</Section2SpanCircle>
          </span>
          를 만나보세요!
        </Section2Title>

        <Section2TypeList>
          {conditions.map(({ label, value }, index) => (
            <Section2Type key={index} onClick={() => {
              setSelectedCondition(value);
              setSelectedCategory("전체");
              setCurrentPage(1);
            }}>
              <Section2StyledImg>
                {index === 0 && <ListImg1 />}
                {index === 1 && <ListImg2 />}
                {index === 2 && <ListImg3 />}
                {index === 3 && <ListImg4 />}
                {index === 4 && <ListImg5 />}
              </Section2StyledImg>
              <Section2TypeText>{label}</Section2TypeText>
            </Section2Type>
          ))}
        </Section2TypeList>
      </Section2Wrapper>
      <Section3>
        <ButtonList>
          {categories.map(({ label, value }) => (
            <StyledButton
              key={value}
              isSelected={selectedCategory === value}
              onClick={() => {
                setSelectedCategory(value);
                setSelectedCondition("전체");
                setCurrentPage(1);
              }}
            >
              {label}
            </StyledButton>
          ))}
        </ButtonList>

        <PromptList>
          {promptItems.map(
            ({ prompt_id, title, image, review = 0, category }) => (
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
            )
          )}
        </PromptList>
        <PageButton>
          <PageButton1 onClick={handlePreviousPage} />
          <PageButton2 onClick={handleNextPage} />
        </PageButton>
        <ReviewList></ReviewList>
      </Section3>
    </>
  );
};

export default MainSection3;

const Section2Wrapper = styled.div`
  height: 331px;
  background: linear-gradient(274deg, #3ec6b7 -5.6%, #6ad2a0 80.7%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Section2Title = styled.div`
  color: #000;
  text-align: center;
  font-family: "Gmarket Sans TTF";
  font-size: 32px;
  font-style: normal;
  font-weight: 300;
  margin-top: 30px;
  margin-bottom: 20px;

  span {
    font-weight: 700;
    display: inline-block;
    box-shadow: inset 0 -30px 0 #ffffff;
    text-emphasis: filled #ffffff;
  }
`;

const Section2SpanCircle = styled.div`
  display: inline-block;
`;

const Section2TypeList = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 0 50px;
`;
const Section2Type = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  &:hover {
    transform: scale(1.25);
  }
`;
const Section2StyledImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 141px;
  height: 145px;
  border-radius: 113px;
  background: #fff;
  margin-bottom: 21px;
`;

const Section2TypeText = styled.p`
  color: #fff;
  text-align: center;
  font-family: "Gmarket Sans TTF";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

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
