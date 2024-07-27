import styled from "styled-components";
import { ReactComponent as ListImg1 } from "../../assets/images/MainSection2_1.svg";
import { ReactComponent as ListImg2 } from "../../assets/images/MainSection2_2.svg";
import { ReactComponent as ListImg3 } from "../../assets/images/MainSection2_3.svg";
import { ReactComponent as ListImg4 } from "../../assets/images/MainSection2_4.svg";
import { ReactComponent as ListImg5 } from "../../assets/images/MainSection2_5.svg";

export default function MainSection2() {
  return (
    <Section2>
      <Title>
        다양한 장르의 <span>프롬프트</span>를 만나보세요!
      </Title>

      <TypeList>
        <Type>
          <StyledImg>
          <ListImg1 />
          </StyledImg>
          <TypeText>전체</TypeText>
        </Type>
        <Type>
          <StyledImg>
          <ListImg2 />
          </StyledImg>
          <TypeText>생산적인</TypeText>
        </Type>
        <Type>
          <StyledImg>
          <ListImg3 />
          </StyledImg>
          <TypeText>예술적인</TypeText>
        </Type>
        <Type>
          <StyledImg>
          <ListImg4 />
          </StyledImg>
          <TypeText>상징적인</TypeText>
        </Type>
        <Type>
          <StyledImg>
          <ListImg5 />
          </StyledImg>
          <TypeText>재미있는</TypeText>
        </Type>
      </TypeList>
    </Section2>
  );
}

const Section2 = styled.div`
  width: 1280px;
  height: 331px;
  background: linear-gradient(274deg, #3ec6b7 -5.6%, #6ad2a0 80.7%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  color: #000;
  text-align: center;
  font-family: "Gmarket Sans TTF";
  font-size: 32px;
  font-style: normal;
  font-weight: 300;
  margin-top: 45px;
  margin-bottom: 20px;

  span {
    font-weight: 700;
  }
`;

const TypeList = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 0 50px;
`;

/* 카테고리의 이미지와 텍스트를 감싸고 있는 태그 */
const Type = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  &:hover {
    transform: scale(1.05);
  }
`;
const StyledImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 141px;
  height: 145px;
  border-radius: 113px;
  background: #FFF;
  margin-bottom: 21px;
`;

const TypeText = styled.p`
  color: #FFF;
  text-align: center;
  font-family: "Gmarket Sans TTF";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
