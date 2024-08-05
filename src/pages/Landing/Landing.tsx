import React from "react";
import styled from "styled-components";
import Footer from "../../components/Footer/Footer";
import LandingSection1 from "../../components/LandingSection/LandingSection1";
import LandingSection2 from "../../components/LandingSection/LandingSection2";
import LandingSection3 from "../../components/LandingSection/LandingSection3";
import LandingSection4 from "../../components/LandingSection/LandingSection4";
import LandingSection5 from "../../components/LandingSection/LandingSection5";
import LandingSection6 from "../../components/LandingSection/LandingSection6";
import Header from "../../components/Header/Header";

const Landing = () => {
  return (
    <LandingContainer>
      <Header isLoggedIn={false} fixed={true} />
      <ContentWrapper>
        <section className="section">
          <LandingSection1 />
        </section>
        <section className="section">
          <LandingSection2 />
        </section>
        <section className="section">
          <LandingSection3 />
        </section>
        <section className="section">
          <LandingSection4 />
        </section>
        <section className="section">
          <LandingSection5 />
        </section>
        <section className="section">
          <LandingSection6 />
        </section>
        <section className="section footer-section">
          <Footer />
        </section>
      </ContentWrapper>
    </LandingContainer>
  );
};

export default Landing;

const LandingContainer = styled.div``;

const ContentWrapper = styled.div``;
