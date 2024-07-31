import React from 'react';
import styled from 'styled-components';

export default function DetailSection1() {
  return (
    <DetailSection1Layout>
      <LayoutLeft>
        <PromptExplanation>
          <Title>프롬프트 설명</Title>
          <Content1>
            ✨🎨 이 프롬프트는 몽환적이고 아름다운 애니메이션 장면을 담은 사진을 생성합니다. 
            사진에는 꿈과 현실이 어우러진 장면이 담겨 있어, 관람자들에게 창의적인 상상력과 감성을 자극합니다. 
            이 사진은 애니메이션의 세계에서만 느낄 수 있는 아름다움과 감동을 현실로 전달하여, 
            팬들에게 특별한 경험을 선사합니다. 
            몽환적인 분위기와 아름다운 색감으로 가득 찬 이 사진은 애니메이션을 사랑하는 이들에게 큰 인기를 얻을 것입니다. 
            이 프롬프트를 통해 몽환적인 애니메이션의 세계를 담은 사진을 만들어보세요. 📸🌟🎨
          </Content1>
        </PromptExplanation>
        <PromptShow>
          <Title>프롬프트</Title>
          <Content2>
            [원하는 이미지], hyperrealistic photography, --niji 5 --ar 16:9 --style scenic
          </Content2>
        </PromptShow>
        <PromptExample>
          <Title>프롬프트 사용 예시</Title>
          <Content3>
            [원하는 이미지], hyperrealistic photography, --niji 5 --ar 16:9 --style scenic
          </Content3>
        </PromptExample>
      </LayoutLeft>
      <LayoutRight>
        <PromptTry>
        “몽환적인 애니메이션 장면” <br />
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
  border-top: 1px solid #2CC1BF;
`;

const PromptShow = styled.div`
  margin-top: 31px;
`;

const Content2 = styled.div`
width: 712px;
height: 234px;
border-radius: 16px;
border: 2px solid #42D09F;
background: rgba(66, 208, 159, 0.20);
box-shadow: 4px 3px 10px 1px #ECECEC;
padding: 34px 27px;
`;

const PromptExample = styled.div`
  margin-top: 85px;
`;

const Content3 = styled.div`
width: 712px;
height: 141px;
border-top: 1px solid #2CC1BF;
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
 border: 1px solid #42D09F;
 background: #FFF;
 box-shadow: 4px 3px 10px 1px #ECECEC;
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
