import styled from 'styled-components';

const GuideSection1 = () => {
  return (
    <Page1>
    <PageTitle>
      <BigTitle>"프롬프렌 가이드"</BigTitle>와 함께 <br/>
      나의 지적 즐거움을 <br/>
      키워가세요
    </PageTitle>
    </Page1>
  );
};

export default GuideSection1;

const Page1 = styled.div`
  font-family: "Gmarket Sans";
   width : 100%;
    height : 100%;
`

const PageTitle = styled.div`
    font-size: 48px;
    margin-left: 114px;
    margin-top: 254px;

`;

const BigTitle = styled.text`
  font-weight: 700;
  color: #42D09F;
  font-size: 55px;
`;

const Img = styled.image`
  margin-top: 236px;
  margin-left: 624px;
`;