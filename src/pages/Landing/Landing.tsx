import styled from "styled-components";
import LandingSection1 from "../../components/LandingSection/LandingSection1";
import LandingSection2 from "../../components/LandingSection/LandingSection2";
import LandingSection3 from "../../components/LandingSection/LandingSection3";
import LandingSection4 from "../../components/LandingSection/LandingSection4";
import LandingSection5 from "../../components/LandingSection/LandingSection5";
import LandingSection6 from "../../components/LandingSection/LandingSection6";
import Footer from "../../components/Footer/Footer";

export default function Landing() {
  return (
    <LandingContainer>
      <LandingSection1 />
      <LandingSection2 />
      <LandingSection3 />
      <LandingSection4 />
      <LandingSection5 />
      <LandingSection6 />
      <Footer />
    </LandingContainer>
  );
}

const LandingContainer = styled.div`
  width: 100%;
  height: 100vh;
`;
