import styled from "styled-components";
import PromptDetailTop from "../../components/PromptDetail/DetailTop";
import DetailSection1 from "../../components/PromptDetail/DetailSection1";
import DetailSection2 from "../../components/PromptDetail/DetailSection2";

export default function PromptDetail() {

    return (
      <PromptDetailLayout>
        <PromptDetailTop />
        <DetailSection1 />
        <DetailSection2 />
      </PromptDetailLayout>
    );
  }
;
 const PromptDetailLayout = styled.div`
 `;
