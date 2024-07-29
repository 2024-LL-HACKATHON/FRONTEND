import React, { useState } from 'react';
import styled from 'styled-components';
import Prompt_Item from './Prompt_Item';
import { ReactComponent as PageButton1 } from "../../assets/images/MainSection3_Page.svg";
import { ReactComponent as PageButton2 } from "../../assets/images/MainSection3_Page2.svg";
import Review from './Review';

export default function MainSection3() {
  const [selectedButton, setSelectedButton] = useState('전체'); // item 종류
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 번호
  const itemsToShow = 9;

  // Prompt_Item을 렌더링하는 함수
  const renderPromptItems = (count: number) => {
    return Array.from({ length: count }, (_, index) => (
      <Prompt_Item key={index} />
    ));
  };

  // 이전 페이지로 이동
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // 다음 페이지로 이동
  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <Section3>
      <ButtonList>
        <StyledButton 
          isSelected={selectedButton === '전체'}
          onClick={() => setSelectedButton('전체')}
        >
          전체
        </StyledButton>
        <StyledButton 
          isSelected={selectedButton === 'GPT'}
          onClick={() => setSelectedButton('GPT')}
        >
          GPT
        </StyledButton>
        <StyledButton 
          isSelected={selectedButton === 'DALL-E'}
          onClick={() => setSelectedButton('DALL-E')}
        >
          DALL-E
        </StyledButton>
      </ButtonList>

      <PromptList>
        {renderPromptItems(itemsToShow)}
      </PromptList>

      <PageButton>
        <PageButton_1 onClick={handlePreviousPage} />
        <PageButton_2 onClick={handleNextPage} />
      </PageButton>

      <ReviewList>
        <Review />
      </ReviewList>
    </Section3>
  );
}
/* 타입선정 */
interface StyledButtonProps {
  isSelected: boolean;
}

const Section3 = styled.div`
  width: 100%;
`;

const ButtonList = styled.div`
  display: flex;
  margin-top: 36px;
  margin-left: 106px;
  gap-bottom: 20px;
`;

const StyledButton = styled.button<StyledButtonProps>`
  width: 90px;
  height: 44px;
  border-radius: 7px;
  border: 1px solid #72D49B;
  background: ${props => props.isSelected ? '#72D49B' : '#FFF'};
  color: ${props => props.isSelected ? '#FFF' : '#000'};
  cursor: pointer;
  margin-right: 20px;

  &:hover {
    background: #72D49B;
    color: #FFF;
  }
`;

const PromptList = styled.div`
  margin-left: 106px;
  margin-top: 28px;
  margin-right: 107px;
  display: grid;
  grid-template-columns: 325px 325px 325px;
  grid-template-rows: auto auto auto;
  gap: 35px;
`;

const PageButton = styled.div`
  height: 20px;
  text-align: center;
  margin-top: 71px;
  margin-bottom: 62px;
`;

const PageButton_1 = styled(PageButton1)`
  margin-right: 156px;
  cursor: pointer;
`;

const PageButton_2 = styled(PageButton2)`
  cursor: pointer;
`;

const ReviewList = styled.div`
  margin-bottom: 107px; 
  margin-left: 187px;
`;
