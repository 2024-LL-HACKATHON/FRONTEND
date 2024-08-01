import styled from "styled-components";
import Header from "../../components/Header/Header";
import PromptRegister from "../../components/PromptDetail/PromptRegister";
import Footer from "../../components/Footer/Footer";

export default function PromptRegisterPage() {

    return (
        <PromptRegisterLayout>
            <Header isLoggedIn={false} fixed={false}/>
            <PromptRegister />
            <Footer />
        </PromptRegisterLayout>
    );
  }
;
 const PromptRegisterLayout = styled.div`
 `;
