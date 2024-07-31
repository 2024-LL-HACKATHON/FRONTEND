import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Header from "../../components/Header/Header";
import { useForm } from "react-hook-form";
import { ReactComponent as CompetitionExample } from "../../assets/images/CompetitionExampleImg.svg";
import { ReactComponent as ParticipateImg } from "../../assets/images/ParticipateImg.svg";

interface FormData {
  title: string;
  content: string;
  image: File | string; // Modified to handle file and string type
}

interface Competition {
  title: string;
  participants: number;
  dateRange: string;
}

interface CompetitionsResponse {
  current: Competition;
  past: Competition[];
}

function CompetitionParticipation() {
  const [competitions, setCompetitions] = useState<CompetitionsResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, setValue, formState: { errors } } = useForm<FormData>();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  useEffect(() => {
    const fetchCompetitions = async () => {
      try {
        const response = await axios.get('http://localhost:3001/competitions');
        setCompetitions(response.data);
      } catch (err) {
        setError('데이터를 가져오는 중 오류가 발생했습니다.');
      } finally {
        setLoading(false);
      }
    };

    fetchCompetitions();
  }, []);

  const onSubmit = async (data: FormData) => {
    try {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("content", data.content);
      if (selectedFile) {
        formData.append("image", selectedFile); // Send the selected file
      } else if (typeof data.image === "string") {
        formData.append("image", data.image); // If the image is a URL or path string
      }

      const token = localStorage.getItem('authToken'); // Get the auth token from localStorage
      const response = await axios.post(
        "/api/v1/competition/createCompetition",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            "Authorization": `Bearer ${token}` // Add auth token to headers
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
      setValue('image', file); // Update the form with the file object
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      <Header isLoggedIn={false} fixed={false}/>
      <ParticipationTitle>
        <h1>경진대회 참가 등록</h1>
        <p>경진대회 참가 정보를 입력해주세요</p>
      </ParticipationTitle>
      {competitions && (
        <>
          <ParticipationInfo>
            <ParticipationInfoText>
              <p>등록중인 경진대회</p>
              <h1>{competitions.current.title}</h1>
              <p>{competitions.current.dateRange}</p>
              <p>{competitions.current.participants}명</p>
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
              {...register("title", { required: "제목을 입력해주세요" })}
            />
            {errors.title && <ErrorMessage>{errors.title.message}</ErrorMessage>}

            <label htmlFor="image">OUTPUT</label>
            <FileInputWrapper>
              <FileInput
                id="image"
                type="file"
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
              <ErrorMessage>{errors.image.message}</ErrorMessage>
            )}

            <label htmlFor="content">프롬프트</label>
            <textarea id="content" {...register("content", { required: "내용을 입력해주세요" })} />
            {errors.content && <ErrorMessage>{errors.content.message}</ErrorMessage>}

            <SubmitButton type="submit">등록하기</SubmitButton>
          </ParticipateForm>
        </>
      )}
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
    margin-top: 6.25rem;
  }
  p {
    color: #626260;
    text-align: center;
    font-family: "Gmarket Sans TTF";
    font-size: 0.875rem;
    font-weight: 500;
    margin-top: 2.25rem;
  }
`;

const ParticipationInfo = styled.div`
  width: 69.1875rem;
  height: 24.6875rem;
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
  border-radius: 1rem;
  background: #72d49b;
  color: #fff;
  font-family: "Gmarket Sans TTF";
  font-size: 1.25rem;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RecommendButton = styled.div`
  width: 10.5625rem;
  height: 3.625rem;
  border-radius: 1rem;
  border: 1px solid #72d49b;
  background: #fff;
  color: #000;
  font-family: "Gmarket Sans TTF";
  font-size: 1.25rem;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ParticipateForm = styled.form`
  width: 69.1875rem;
  height: 66.1875rem;
  border-radius: 1rem;
  border: 2px solid #72d49b;
  background: #fff;
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
    border-radius: 1rem;
    border: 2px solid #72d49b;
    background: #fff;
    color: #000;
    text-align: center;
    font-family: "Gmarket Sans TTF";
    font-size: 1rem;
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #title {
    width: 50.5rem;
    height: 3rem;
    border-radius: 1rem;
    border: none;
    background: rgba(114, 212, 155, 0.1);
  }
  #content {
    width: 61.125rem;
    height: 23.75rem;
    border-radius: 1rem;
    border: none;
    background: rgba(114, 212, 155, 0.1);
    resize: none;
  }
`;

const FileInputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const FileInput = styled.input`
  width: 8.875rem;
`;

const ImagePreview = styled.img`
  width: 8.875rem;
  height: 8.875rem;
  border-radius: 1rem;
`;

const SVGWrapper = styled.div`
  width: 8.875rem;
  height: 8.875rem;
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 0.875rem;
`;

const SubmitButton = styled.button`
  width: 8.875rem;
  height: 3.625rem;
  border-radius: 1rem;
  background: #72d49b;
  color: #fff;
  font-family: "Gmarket Sans TTF";
  font-size: 1.25rem;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  margin-top: 2rem;
`;


export { ParticipationInfo, ParticipationInfoText, CompetitionExample };
