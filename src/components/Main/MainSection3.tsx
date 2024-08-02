import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as PageButton1 } from "../../assets/images/MainSection3_Page.svg";
import { ReactComponent as PageButton2 } from "../../assets/images/MainSection3_Page2.svg";
import Prompt_Item from './Prompt_Item';
import axios from 'axios';

// MainSection3 컴포넌트
const MainSection3: React.FC = () => {
  const [selectedButton, setSelectedButton] = useState('전체'); // item 종류
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 번호
  const [promptItems, setPromptItems] = useState<{ id: number; category: string }[]>([]);
  const [loading, setLoading] = useState(true);
  const itemsToShow = 9;

  useEffect(() => {
    const fetchPromptItems = async () => {
      try {
        const response = await axios.get('/api/v1/main/getPrompt'); // 적절한 API 엔드포인트 사용
        setPromptItems(response.data);
      } catch (error) {
        console.error("프롬프트 데이터를 가져오는 중 에러 발생:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPromptItems();
  }, []);

  // Filter items based on selected category
  const filteredItems = selectedButton === '전체'
    ? promptItems
    : promptItems.filter(item => item.category === selectedButton);

  // Prompt_Item을 렌더링하는 함수
  const renderPromptItems = (items: { id: number; category: string }[]) => {
    return items.map(item => (
      <Prompt_Item key={item.id} prompt_id={item.id.toString()} />
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
    if ((currentPage * itemsToShow) < filteredItems.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Calculate the items to display based on the current page
  const startIndex = (currentPage - 1) * itemsToShow;
  const paginatedItems = filteredItems.slice(startIndex, startIndex + itemsToShow);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Section3>
      <ButtonList>
        <StyledButton 
          isSelected={selectedButton === '전체'}
          onClick={() => { setSelectedButton('전체'); setCurrentPage(1); }}
        >
          전체
        </StyledButton>
        <StyledButton 
          isSelected={selectedButton === 'GPT'}
          onClick={() => { setSelectedButton('GPT'); setCurrentPage(1); }}
        >
          GPT
        </StyledButton>
        <StyledButton 
          isSelected={selectedButton === 'DALL-E'}
          onClick={() => { setSelectedButton('DALL-E'); setCurrentPage(1); }}
        >
          DALL-E
        </StyledButton>
      </ButtonList>

      <PromptList>
        {renderPromptItems(paginatedItems)}
      </PromptList>

      <PageButton>
        <PageButton_1 onClick={handlePreviousPage} />
        <PageButton_2 onClick={handleNextPage} />
      </PageButton>

      <ReviewList>
        {/* Review 컴포넌트 위치 */}
      </ReviewList>
    </Section3>
  );
}

/* 타입선정 */
interface StyledButtonProps {
  isSelected: boolean;
}

// 스타일드 컴포넌트 정의
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
  grid-template-columns: repeat(3, 1fr);
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

const Item = styled.div`
  background: #f0f0f0;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
`;

export default MainSection3;
