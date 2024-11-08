import React, { useContext, useState } from "react";
import styled, { keyframes } from "styled-components"; // keyframes 추가
import { ReactComponent as PencilImg } from "../../assets/images/GuidePencil.svg";
import NotoSans14px from "../text/Text";
import { ReactComponent as PointImg1 } from "../../assets/images/GuidePoint1.svg";
import { ReactComponent as PointImg2 } from "../../assets/images/GuidePoint2.svg";
import { ReactComponent as PointImg3 } from "../../assets/images/GuidePoint3.svg";
import { ReactComponent as PointPurple1 } from "../../assets/images/GuidePurple11.svg";
import { ReactComponent as PointPurple2 } from "../../assets/images/GuidePurple12.svg";
import { ReactComponent as PointPurple3 } from "../../assets/images/GuidePurple14.svg";
import { ReactComponent as PointPurple4 } from "../../assets/images/GuidePurple15.svg";
import { ReactComponent as PointBlue1 } from "../../assets/images/GuideBlue11.svg";
import { ReactComponent as PointBlue2 } from "../../assets/images/GuideBlue12.svg";
import { ReactComponent as PointBlue3 } from "../../assets/images/GuideBlue15.svg";
import { ReactComponent as PointBlueGreen1 } from "../../assets/images/GuideBlueGreen15.svg";
import { ReactComponent as PointBlueGreen2 } from "../../assets/images/GuideBlueGreen16.svg";
import { ReactComponent as PointGreen1 } from "../../assets/images/GuideGreen11.svg";
import axios from "axios";
import GuideModal from "../Modal/GuideModal";
import { ResponseContext } from "../../pages/Guide/Guide";

const GuideSection2 = () => {
  const { response, setResponse } = useContext(ResponseContext);
  const [token] = useState(localStorage.getItem("token"));
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPrompt(e.target.value);
  };

  const handleSubmit = async () => {
    if (!prompt) return;

    setLoading(true);
    try {
      const url = "/api/v1/main/makeCorrection";
      const params = { requestGuideDto: encodeURIComponent(prompt) };
      const headers = {
        accept: "*/*",
        "X-AUTH-TOKEN": token || "",
      };

      const result = await axios.post(url, {}, { params, headers });
      setResponse(result.data);
      console.log("Response body:", result.data);
    } catch (error) {
      console.error("Error making request:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Page2>
      <StyledPencil />
      <Title>
        <TitleText>
          <BoldText>AI 첨삭</BoldText>을 통해 내가 쓴{" "}
          <UnderlinedText>프롬프트</UnderlinedText>를 <BoldText>확인</BoldText>
          해보세요.
        </TitleText>
        <NotoSans14px>
          6가지 구성요소를 잘 활용하면 AI가 문제를 쉽게 이해하고 더 나은 결과를
          얻을 수 있습니다. <br />
          프롬프트 작성 시 부족한 부분을 자동으로 첨삭해주는 서비스를 이용해
          더욱 효과적으로 AI를 활용해보세요.
        </NotoSans14px>
        <InputBoxContainer>
          <InputBox
            placeholder="프롬프트를 입력하세요"
            value={prompt}
            onChange={handleInputChange}
          />
          <SubmitButton onClick={handleSubmit}>결과 보러가기</SubmitButton>
        </InputBoxContainer>
      </Title>
      {response && <GuideModal response={response} />}
      <>
        <Point1 />
        <Point2 />
        <Point3 />
        <Purple1 />
        <Purple2 />
        <Purple3 />
        <Purple4 />
        <Blue1 />
        <Blue2 />
        <Blue3 />
        <BlueGreen1 />
        <BlueGreen2 />
        <Green1 />
        <Green2 />
      </>
    </Page2>
  );
};

export default GuideSection2;

const Page2 = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(114, 212, 155, 0.05);
  text-align: center;
  position: relative;
`;

const StyledPencil = styled(PencilImg)`
  align-items: center;
  margin-top: 2.44rem;
`;

const Title = styled.div`
  text-align: center;
  margin-top: 1.56rem;
`;

const TitleText = styled.div`
  color: #000;
  font-family: "Gmarket Sans TTF Light";
  font-size: 1.875rem;
  font-weight: 300;
  margin-bottom: 2.19rem;
`;

const BoldText = styled.span`
  font-family: "Gmarket Sans TTF";
  font-weight: 500 !important;
`;

const UnderlinedText = styled(BoldText)`
  position: relative;
  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0.2rem;
    width: 100%;
    height: 1.8125rem;
    background: rgba(66, 208, 159, 0.39);
    z-index: -1;
  }
`;

const InputBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  margin-top: 1.5rem;
`;

const InputBox = styled.textarea`
  width: 52.125rem;
  height: 15.5rem;
  flex-shrink: 0;
  border-radius: 1rem;
  border: 1px solid #2cc1bf;
  background: #fff;
  box-shadow: 15px 13px 1.5px 0px rgba(97, 220, 132, 0.25);
  padding: 1rem;
  color: #000;
  font-family: "Noto Sans";
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.4375rem;
  z-index: 1;
  resize: none;

  &::placeholder {
    color: #c4c4c4;
    font-family: "Noto Sans";
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.4375rem;
    text-align: left;
  }

  &:focus {
    border: 2px solid #2cc1bf;
    outline: none;
  }
`;

const SubmitButton = styled.button`
  width: 13.1875rem;
  height: 2.9375rem;
  border-radius: 0.625rem;
  background: linear-gradient(90deg, #72d49b 0%, #2cc1bf 100%);
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  cursor: pointer;
  flex-shrink: 0;
  margin-top: 1.5rem;
  z-index: 1;
`;

const bounceAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-1rem);
  }
`;

const Point1 = styled(PointImg1)`
  position: absolute;
  top: 36.13rem;
  left: 3.13rem;
  z-index: 1;
  width: 3.1875rem;
  height: 3rem;
  animation: ${bounceAnimation} 2s infinite;
`;

const Point2 = styled(PointImg2)`
  position: absolute;
  top: 4.88rem;
  left: 13.93rem;
  z-index: 1;
  width: 2.25rem;
  height: 2.1875rem;
  animation: ${bounceAnimation} 2s infinite;
`;

const Point3 = styled(PointImg3)`
  position: absolute;
  top: 19.19rem;
  left: 69.44rem;
  z-index: 1;
  width: 2.5rem;
  height: 1.9375rem;
  animation: ${bounceAnimation} 2s infinite;
`;

const Purple1 = styled(PointPurple1)`
  position: absolute;
  top: 40.56rem;
  left: 11.69rem;
  z-index: 1;
`;

const Purple2 = styled(PointPurple2)`
  position: absolute;
  top: 40.5rem;
  left: 63.38rem;
  z-index: 1;
`;

const Purple3 = styled(PointPurple3)`
  position: absolute;
  top: 3.13rem;
  left: 19.56rem;
  z-index: 1;
`;

const Purple4 = styled(PointPurple4)`
  position: absolute;
  top: 11.13rem;
  left: 65.13rem;
  z-index: 1;
`;

const Blue1 = styled(PointBlue1)`
  position: absolute;
  top: 22.13rem;
  left: 6.13rem;
  z-index: 1;
`;

const Blue2 = styled(PointBlue2)`
  position: absolute;
  top: 5.13rem;
  left: 4.13rem;
  z-index: 1;
`;

const Blue3 = styled(PointBlue3)`
  position: absolute;
  top: 2.13rem;
  left: 73.13rem;
  z-index: 1;
`;

const BlueGreen1 = styled(PointBlueGreen1)`
  position: absolute;
  top: 29rem;
  left: 75rem;
  z-index: 1;
`;

const BlueGreen2 = styled(PointBlueGreen2)`
  position: absolute;
  top: 3rem;
  left: 61rem;
  z-index: 1;
`;

const Green1 = styled(PointGreen1)`
  position: absolute;
  top: 16.13rem;
  left: 13rem;
  z-index: 1;
`;

const Green2 = styled(PointGreen1)`
  position: absolute;
  top: 41rem;
  left: 73rem;
  z-index: 1;
`;
