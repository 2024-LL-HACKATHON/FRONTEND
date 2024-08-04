import Header from "../../components/Header/Header";
import PromptRegister from "../../components/PromptDetail/PromptRegister";
import Footer from "../../components/Footer/Footer";

export default function PromptRegisterPage() {
  return (
    <>
      <Header isLoggedIn={false} fixed={false} />
      <PromptRegister />
      <Footer />
    </>
  );
}
