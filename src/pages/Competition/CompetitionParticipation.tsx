import React, { useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import axios from "axios";
import Header from "../../components/Header/Header";
import { ReactComponent as CompetitionExample } from "../../assets/images/CompetitionExampleImg.svg";
import { ReactComponent as ParticipateImg } from "../../assets/images/ParticipateImg.svg"; // Import the SVG

interface FormData {
  title: string;
  content1: string;
  image: FileList;
}

function CompetitionParticipation() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>(); // Use the defined type

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const onSubmit = async (data: FormData) => {
    try {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("content1", data.content1);
      formData.append("image", data.image[0]);

      const response = await axios.post(
        "http://localhost:3001/participations",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  return (
    <>
      <Header isLoggedIn={false} marginTop="34px" />
      <ParticipationTitle>
        <h1>경진대회 참가 등록</h1>
        <p>경진대회 참가 정보를 입력해주세요</p>
      </ParticipationTitle>
      <ParticipationInfo>
        <ParticipationInfoText>
          <p>등록중인 경진대회</p>
          <h1>미래 도시 설계</h1>
          <p>2024.08.01 ~ 2024.08.08 23:59</p>
          <p>24명</p>
        </ParticipationInfoText>
        <CompetitionExample />
      </ParticipationInfo>
      <ParticipationToggleButtonBox>
        <ParticipateButton>참가하기</ParticipateButton>
        <RecommendButton>추천하러 가기</RecommendButton>
      </ParticipationToggleButtonBox>
      <ParticipateForm onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="title">제목</label>
        <input
          id="title"
          type="text"
          {...register("title", { required: true })}
        />
        {errors.title && <ErrorMessage>제목을 입력해주세요</ErrorMessage>}
        <label htmlFor="image">OUTPUT</label>
        <FileInputWrapper>
          <FileInput
            id="image"
            type="file"
            {...register("image", { required: true })}
            onChange={handleFileChange}
          />
          {previewUrl ? (
            <ImagePreview src={previewUrl} alt="Selected Image" />
          ) : (
            <SVGWrapper>
              <ParticipateImg />
            </SVGWrapper>
          )}
        </FileInputWrapper>
        {errors.image && (
          <ErrorMessage>이미지 파일을 추가해주세요</ErrorMessage>
        )}

        <label htmlFor="content1">프롬프트</label>
        <textarea id="content1" {...register("content1", { required: true })} />
        {errors.content1 && <ErrorMessage>내용을 입력해주세요</ErrorMessage>}

        <SubmitButton type="submit">등록하기</SubmitButton>
      </ParticipateForm>
    </>
  );
}

export default CompetitionParticipation;

const ParticipationTitle = styled.div`
  width: 80rem;
  margin: 0 auto;
  h1 {
    color: #000;
    text-align: center;
    font-family: "Gmarket Sans TTF";
    font-size: 2.5rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-top: 6.25rem;
  }
  p {
    color: #626260;
    text-align: center;
    font-family: "Gmarket Sans TTF";
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-top: 2.25rem;
  }
`;
const ParticipationInfo = styled.div`
  width: 69.1875rem;
  height: 24.6875rem;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  margin-top: 4.19rem;
  margin-left: 10.69rem;
`;

const ParticipationInfoText = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 14.88rem;
`;

const ParticipationToggleButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2.25rem;
  margin-top: 4.5rem;
  margin-left: 5.63rem;
`;

const ParticipateButton = styled.div`
  width: 8.625rem;
  height: 3.625rem;
  flex-shrink: 0;
  border-radius: 1rem;
  background: #72d49b;
  color: #fff;
  font-family: "Gmarket Sans TTF";
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

const RecommendButton = styled.div`
  width: 10.5625rem;
  height: 3.625rem;
  flex-shrink: 0;
  border-radius: 1rem;
  border: 1px solid #72d49b;
  background: #fff;
  color: #000;
  font-family: "Gmarket Sans TTF";
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

const ParticipateForm = styled.form`
  width: 69.1875rem;
  height: 66.1875rem;
  flex-shrink: 0;
  border-radius: 1rem;
  border: 2px solid #72d49b;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%),
    #fff;
  box-shadow: 4px 3px 10px 1px #ececec;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 1rem;
  margin-left: 5.63rem;
  margin-top: 5.69rem;

  label {
    width: 8.88rem;
    height: 3rem;
    flex-shrink: 0;
    border-radius: 1rem;
    border: 2px solid #72d49b;
    background: #fff;
    color: #000;
    text-align: center;
    font-family: "Gmarket Sans TTF";
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
  #title {
    width: 50.5rem;
    height: 3rem;
    flex-shrink: 0;
    border-radius: 1rem;
    border: none;
    background: rgba(114, 212, 155, 0.1);
  }
  #content1 {
    width: 61.125rem;
    height: 23.75rem;
    flex-shrink: 0;
    border-radius: 1rem;
    border: none;
    background: rgba(114, 212, 155, 0.1);
    resize: none;
  }
`;

const FileInputWrapper = styled.div`
  position: relative;
  width: 61.125rem;
  height: 17.625rem;
  flex-shrink: 0;
  border-radius: 1rem;
  background: rgba(114, 212, 155, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FileInput = styled.input`
  position: absolute;
  width: 61.125rem;
  height: 17.625rem;
  flex-shrink: 0;
  opacity: 0;
  z-index: 2;
  cursor: pointer;

  &::file-selector-button {
    display: none;
  }
`;

const SVGWrapper = styled.div`
  position: absolute;
  z-index: 1;
  cursor: pointer;

  svg {
    width: 100%;
    height: auto;
  }
`;

const ImagePreview = styled.img`
  max-width: 100%;
  max-height: 100%;
  border-radius: 1rem;
`;

const SubmitButton = styled.button`
  width: 13.1875rem;
  height: 2.9375rem;
  flex-shrink: 0;
  background: #72d49b;
  color: #fff;
  font-family: "Gmarket Sans TTF";
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border: none;
  border-radius: 0.625rem;
  background: #72d49b;
  cursor: pointer;
  &:hover {
    background: #60c489;
  }
`;

const ErrorMessage = styled.span`
  color: red;
  font-size: 0.875rem;
  font-family: "Gmarket Sans TTF";
`;

export{ParticipationInfo, ParticipationInfoText, CompetitionExample };