import styled from "styled-components";
import Header from "../../components/Header/Header";
import PromptRegister from "../../components/PromptDetail/PromptRegister";
import Footer from "../../components/Footer/Footer";

export default function PromptRegisterPage() {

    return (
        <PromptRegisterLayout>
            <Header isLoggedIn={false} marginTop="34px"  />
            <PromptRegister />
            <Footer />
        </PromptRegisterLayout>
    );
  }
;
 const PromptRegisterLayout = styled.div`
 `;
