import React, { useState } from 'react';
import styled from 'styled-components';
import Prompt_Item from './Prompt_Item';
import { ReactComponent as PageButton1 } from "../../assets/images/MainSection3_Page.svg";
import { ReactComponent as PageButton2 } from "../../assets/images/MainSection3_Page2.svg";


export default function MainSection3() {
  const [selectedButton, setSelectedButton] = useState('전체'); // item 종류
  
  const itemsToShow = 9;
  // Prompt_Item을 렌더링하는 함수
  const renderPromptItems = (count: number) => {
    return Array.from({ length: count }, (_, index) => (
      <Prompt_Item key={index} />
    ));
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
                <PageButton1 />
                <PageButton2 />
            </PageButton>
    </Section3>
  );
}
/* 타입선정 */
interface StyledButtonProps {
    isSelected: boolean;
  }

const Section3 = styled.div`
`;

const ButtonList = styled.div`
    display: flex;
    margin-top: 36px;
    margin-left: 106px;
    gap: 20px;
`;

const StyledButton = styled.button<StyledButtonProps>`
    width: 90px;
    height: 44px;
    border-radius: 7px;
    border: 1px solid #72D49B;
    background: ${props => props.isSelected ? '#72D49B' : '#FFF'};
    color: ${props => props.isSelected ? '#FFF' : '#000'};
    cursor: pointer;

    &:hover {
        background: #72D49B;
        color: #FFF;
    }
`;

const PromptList = styled.div`
  margin-left: 106px;
  margin-top: 28px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 35px;
`;

const PageButton = styled.div`
    width: 20px;
    height: 20px;
    margin: 71px 589px 62px 589px;
    gap: 62px;
`;

