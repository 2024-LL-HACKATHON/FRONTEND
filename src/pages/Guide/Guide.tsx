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
import React, { createContext, useState, useEffect, useRef } from "react";

// Context 타입
type ResponseContextType = {
  response: string | null;
  setResponse: React.Dispatch<React.SetStateAction<string | null>>;
};
export const ResponseContext = createContext<ResponseContextType>({
  response: null,
  setResponse: () => {},
});

export default function Guide() {
  const [response, setResponse] = useState<string | null>(null);
  const fullPageRef = useRef<any>(null); // FullPage 인스턴스를 참조

  useEffect(() => {
    if (!response || !fullPageRef.current) return;

    if (response.includes("맥락") || response.includes("명령")) {
      fullPageRef.current.scrollToSlide(2);
    } else if (response.includes("페르소나") || response.includes("예시")) {
      fullPageRef.current.scrollToSlide(3);
    } else if (response.includes("포맷") || response.includes("어조")) {
      fullPageRef.current.scrollToSlide(4); 
    }
  }, [response]);

  return (
    <ResponseContext.Provider value={{ response, setResponse }}>
      <StyledFullPage>
        <Background>
          <StyledGuideCircle1 />
          <StyledGuideCircle2 />
          <StyledGuideCircle3 />
          <StyledGuideCircle4 />
        </Background>
        <FullPage ref={fullPageRef}>
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
    </ResponseContext.Provider>
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
