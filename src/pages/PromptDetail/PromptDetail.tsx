import styled from "styled-components";
import PromptDetailTop from "../../components/PromptDetail/DetailTop";
import DetailSection1 from "../../components/PromptDetail/DetailSection1";
import DetailSection2 from "../../components/PromptDetail/DetailSection2";
import Footer from "../../components/Footer/Footer";

export default function PromptDetail() {
  return (
    <PromptDetailLayout>
      <PromptDetailTop />
      <DetailSection1 />
      <DetailSection2 />
      <Footer />
    </PromptDetailLayout>
  );
}
const PromptDetailLayout = styled.div``;
