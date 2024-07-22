import styled from "styled-components";
import GuideSection1 from "../../components/GuideSection/GuideSection1";
import GuideSection2 from "../../components/GuideSection/GuideSection2";
import GuideSection3 from "../../components/GuideSection/GuideSection3";
import Header from "../../components/Header/Header";
import { FullPage, Slide } from 'react-full-page';
import GuideSection5 from "../../components/GuideSection/GuideSection5";
import GuideSection4 from "../../components/GuideSection/GuideSection4";
import GuideSection6 from "../../components/GuideSection/GuideSection6";

export default function Guide() {
  return (
    <FullPage>
      <StyledSlide hasCircle>
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
    </FullPage>
  );
}

const StyledSlide = styled(Slide)`
  width: 1280px;
  height: 880px;
  box-sizing: border-box;

    ${({ hasCircle }) =>
    hasCircle &&
    `
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 766.815px;
      height: 766.815px;
      background: linear-gradient(143deg, #3978FF 0%, rgba(57, 120, 255, 0.00) 75.83%);
      border-radius: 50%;
      opacity: 0.3;
    }
  `}

  /* Ensure that content is above the background */
  > * {
    position: relative;
    z-index: 1;
  }
`;
