import styled from "styled-components";
import Header from "../../components/Header/Header";
import GuideSection1 from "../../components/GuideSection/GuideSection1";
import GuideSection2 from "../../components/GuideSection/GuideSection2";
import GuideSection3 from "../../components/GuideSection/GuideSection3";
import GuideSection5 from "../../components/GuideSection/GuideSection5";
import GuideSection4 from "../../components/GuideSection/GuideSection4";
import GuideSection6 from "../../components/GuideSection/GuideSection6";

export default function Guide() {
  return (
      <StyledFullPage >
        
        {/*배경의 반원*/}
        <Background>
        </Background>

        {/*가이드 페이지 슬라이드*/}
        <StyledSlide>
          <Header isLoggedIn={false} />
          <GuideSection1 />
        </StyledSlide>

        <StyledSlide>
          <GuideSection2 />
        </StyledSlide>

        <StyledSlide>
          <GuideSection3 />
        </StyledSlide>

        <StyledSlide>
          <GuideSection4 />
        </StyledSlide>

        <StyledSlide>
          <GuideSection5 />
        </StyledSlide>
        
        <StyledSlide>
          <GuideSection6 />
        </StyledSlide>
      </StyledFullPage>
  );
}

const StyledFullPage = styled.div`
  position: relative;
  font-family: "Noto Sans KR";
  width: 100%;
  height: 100vh;
`;

const StyledSlide = styled.div`
  width: 1280px;
  height: 880px;
  box-sizing: border-box;
  position: relative;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 1;
`;