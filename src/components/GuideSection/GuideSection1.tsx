import styled from 'styled-components';
import { ReactComponent as Guide_Main } from "../../assets/images/Guide_Main.svg";


const GuideSection1 = () => {
  return (
    <Page1>
    <PageTitle>
      <BigTitle>"프롬프렌 가이드"</BigTitle>와 함께 <br/>
      나의 지적 즐거움을 <br/>
      키워가세요
    </PageTitle>
    {/*첫 페이지 오른쪽 이미지*/}
    <StyledIcon />
    </Page1>
  );
};

export default GuideSection1;

const Page1 = styled.div`
  font-family: "Gmarket Sans TTF";
   width : 100%;
    height : 100%;
`

const PageTitle = styled.div`
    font-size: 48px;
    margin-left: 114px;
    margin-top: 220px;

`;

const BigTitle = styled.text`
  font-weight: 700;
  color: #42D09F;
  font-size: 55px;
`;

const StyledIcon = styled(Guide_Main)`
  z-index: 1;
  position: absolute;
  right: 0;
  bottom: 0;
`;