import styled from "styled-components";
import Footer from "../../components/Footer/Footer";
import LandingFramer from "../../components/LandingSection/LandingFramer";
import Header from "../../components/Header/Header";

export default function Landing() {
  return (
    <LandingContainer>
      <Header isLoggedIn={false} fixed={true} />
      <ContentWrapper>
        <LandingFramer />
      </ContentWrapper>
      <Footer />
    </LandingContainer>
  );
}

const LandingContainer = styled.div`
  width: 100%;
  min-height: 100vh; 
  display: flex;
  flex-direction: column;
`;

const ContentWrapper = styled.div`
  flex: 1;
  overflow-y: hidden; 
  overflow-x: hidden;
`;
