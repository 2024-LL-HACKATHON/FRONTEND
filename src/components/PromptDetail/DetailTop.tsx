import React from 'react';
import styled from 'styled-components';
import Header from '../Header/Header';

export default function PromptDetailTop() {
  return (
    <TopLayout>
      <Background>
        <Header isLoggedIn={false} fixed={false} />
        </Background>
        {/*불투명*/}
        <TitleLayout>
          <Title>몽환적인 애니메이션 장면</Title>
          <CategoryLayout>
            <Category>예술적인</Category>
            <Category>DALL-E</Category>
            <Category>리뷰</Category>
          </CategoryLayout>
          <Writer>작성자 홍길동</Writer>
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
  background: linear-gradient(90deg, #42D09F 0%, #2CC1BF 100%);
  z-index: 1;
`;

const TitleLayout = styled.div`
  width: 1127px;
  height: 267px;
  fill: rgba(255, 255, 255, 0.60);
  stroke-width: 2px;
  stroke: rgba(44, 193, 191, 0.30);
  box-shadow: 50px 50px 200px 0px rgba(255, 255, 255, 0.25) inset;
  filter: drop-shadow(3px 4px 11px rgba(114, 212, 155, 0.25));
  backdrop-filter: blur(15px);

  border-radius: 30px;
  margin-top: 184px;
  padding: 47px 38px 44px 44px;
  position: relative;
  z-index: 2;
`;

const Title = styled.text`
  font-family: 'Gmarket Sans TTF';
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
  font-family: 'Gmarket Sans TTF';
  font-size: 14px;
  font-weight: 500;
  margin-right: 38px;
`;

const Writer = styled.div`
  float: right;
  font-family: 'Gmarket Sans TTF';
  font-size: 18px;
  font-weight: 500;
  color: #333;
`;
