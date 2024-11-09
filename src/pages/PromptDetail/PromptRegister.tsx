import Header from "../../components/Header/Header";
import PromptRegister from "../../components/PromptDetail/PromptRegister";
import Footer from "../../components/Footer/Footer";
import styled from "styled-components";

export default function PromptRegisterPage() {
  return (
    <PromptRegisterPageLayout>
      <Header isLoggedIn={false} fixed={false} />
      <PromptRegister />
      <Footer />
    </PromptRegisterPageLayout>
  );
}

const PromptRegisterPageLayout = styled.div`
  max-width: 100%;
`;
