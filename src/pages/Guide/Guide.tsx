import styled from "styled-components";
import Header from "../../components/Header/Header";
import GuideSection1 from "../../components/GuideSection/GuideSection1";
import GuideSection2 from "../../components/GuideSection/GuideSection2";
import GuideSection3 from "../../components/GuideSection/GuideSection3";
import GuideSection5 from "../../components/GuideSection/GuideSection5";
import GuideSection4 from "../../components/GuideSection/GuideSection4";
import GuideSection6 from "../../components/GuideSection/GuideSection6";
import { FullPage, Slide } from "react-full-page";
import { ReactComponent as Guide_Circle1 } from "../../assets/images/Guide_Circle1.svg";
import { ReactComponent as Guide_Circle2 } from "../../assets/images/Guide_Circle2.svg";

export default function Guide() {
  return (
    <StyledFullPage>
      <Background>
        <StyledGuideCircle1 />
        <StyledGuideCircle2 />
        <StyledGuideCircle3 />
        <StyledGuideCircle4 />
      </Background>
      <FullPage>
        <Slide>
          <StyledSlide>
            <Header isLoggedIn={false} fixed={false} />
            <GuideSection1 />
          </StyledSlide>
        </Slide>
        <Slide>
          <StyledSlide>
            <GuideSection2 />
          </StyledSlide>
        </Slide>
        <Slide>
          <StyledSlide>
            <GuideSection3 />
          </StyledSlide>
        </Slide>
        <Slide>
          <StyledSlide>
            <GuideSection4 />
          </StyledSlide>
        </Slide>
        <Slide>
          <StyledSlide>
            <GuideSection5 />
          </StyledSlide>
        </Slide>
        <Slide>
          <StyledSlide>
            <GuideSection6 />
          </StyledSlide>
        </Slide>
      </FullPage>
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

/*작은 반원 두 개*/
const StyledGuideCircle1 = styled(Guide_Circle1)`
  position: absolute;
  top: 443px;

  right: 0;
  z-index: 1;
`;
const StyledGuideCircle3 = styled(Guide_Circle1)`
  position: absolute;
  top: 2577px;

  right: 0;
  z-index: 1;
`;
/*큰 반원*/
const StyledGuideCircle2 = styled(Guide_Circle2)`
  position: absolute;
  top: 1073px;

  left: -100%;
  z-index: 1;
`;
const StyledGuideCircle4 = styled(Guide_Circle2)`
  position: absolute;
  top: 3352px;

  left: -100%;
  z-index: 1;
`;
