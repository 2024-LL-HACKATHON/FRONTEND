import React, { useState, useRef } from "react";
import styled from "styled-components";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Modal from "../../components/Modal/Modal"; // Import the Modal component
import apiClient from "../../api/clientapi";

interface FormData {
  category: string;
  condition: string;
  content: string;
  image: string;
  output: string;
  summary: string;
  title: string;
  createdAt: string;
}

function PromptRegister() {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();
  const [preview, setPreview] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState<boolean>(false); // Modal state
  const fileInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("token")
  );

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;

    if (files && files.length > 0) {
      const file = files[0];
      const fileUrl = URL.createObjectURL(file);
      setPreview(fileUrl);

      try {
        const fileData = new FormData();
        fileData.append("file", file);

        const uploadResponse = await apiClient.post(
          "/api/files/upload",
          fileData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        const uploadedFileUrl = uploadResponse.data;
        setValue("image", uploadedFileUrl);
      } catch (error) {
        console.error("파일 업로드 에러", error);
        setError("파일 업로드 중 오류가 발생했습니다.");
      }
    }
  };

  const hasErrors = Object.keys(errors).length > 0 && isSubmitting;

  const onSubmit = async (data: FormData) => {
    try {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("content", data.content);
      formData.append("image", data.image);
      formData.append("category", data.category);
      formData.append("condition", data.condition);
      formData.append("output", data.output);
      formData.append("summary", data.summary);
      formData.append("createdAt", data.createdAt);

      const response = await apiClient.post(
        "/api/v1/main/createPrompt",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            "X-AUTH-TOKEN": token || "",
          },
        }
      );
      console.log(response.data);
      setModalOpen(true);
    } catch (error: unknown) {
      console.error(error);
      setError("등록 중 오류가 발생했습니다.");
    }
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    navigate("/main");
  };

  React.useEffect(() => {
    if (!token) {
      navigate("/login", { state: { from: window.location.pathname } });
    }
  }, [token, navigate]);

  return (
    <>
      <Title>
        <h1>프롬프렌 프롬프트 등록</h1>
        <p>
          프롬프렌 유저분들의 창의적이고 멋진 아이디어들을 <br />
          기다리고 있습니다.
        </p>
      </Title>
      <RegisterFormLayout>
        <Sentence>프롬프렌에 프롬프트를 등록해보세요!</Sentence>
        <RegisterForm onSubmit={handleSubmit(onSubmit)}>
          <Text1>정보를 입력해주세요.</Text1>
          <div id="titlecondition">
            <label htmlFor="title">제목</label>
            <Controller
              name="title"
              control={control}
              rules={{ required: "제목을 입력해주세요." }}
              render={({ field }) => (
                <input type="text" id="title" {...field} />
              )}
            />
            <label htmlFor="condition">카테고리</label>
            <Controller
              name="condition"
              control={control}
              defaultValue="PRODUCTIVE"
              render={({ field }) => (
                <select id="condition" {...field}>
                  <option value="PRODUCTIVE">생산적인</option>
                  <option value="ARTISTIC">예술적인</option>
                  <option value="SYMBOLIC">상징적인</option>
                  <option value="INTERESTING">재미있는</option>
                </select>
              )}
            />
          </div>
          <label htmlFor="summary">설명</label>
          <Controller
            name="summary"
            control={control}
            rules={{ required: "설명을 입력해주세요." }}
            render={({ field }) => (
              <input
                type="text"
                id="summary"
                placeholder="프롬프트에 대한 소개를 해주세요."
                {...field}
              />
            )}
          />
          <div id="contentcategory">
            <label htmlFor="content">프롬프트</label>
            <Controller
              name="category"
              control={control}
              defaultValue="GPT"
              render={({ field }) => (
                <select id="category" {...field}>
                  <option value="GPT">GPT</option>
                  <option value="DALLE">DALL-E</option>
                </select>
              )}
            />
          </div>
          <Controller
            name="content"
            control={control}
            rules={{ required: "프롬프트를 입력해주세요." }}
            render={({ field }) => (
              <StyledTextareaContent
                id="content"
                placeholder="사용자가 사용할 프롬프트를 작성해주세요."
                {...field}
              />
            )}
          />

          <label htmlFor="output">결과</label>
          <Controller
            name="output"
            control={control}
            rules={{ required: "결과를 입력해주세요." }}
            render={({ field }) => (
              <StyledTextareaOutput
                id="output"
                placeholder="프롬프트 사용 예시를 작성해주세요"
                {...field}
              />
            )}
          />

          <label id="imglabel" htmlFor="img">
            {!preview && <p>이미지 파일 업로드</p>}
            {preview && <ImagePreview src={preview} alt="Preview" />}
          </label>
          <input
            id="img"
            type="file"
            onChange={handleFileChange}
            ref={fileInputRef}
            style={{
              display: "none",
            }}
          />
          <RegisterButton type="submit">등록하기</RegisterButton>
          {hasErrors && <Error>빈칸이 있습니다.</Error>}
        </RegisterForm>
      </RegisterFormLayout>
      <Modal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        message="프롬프트 등록이 완료되었습니다!"
        linkto="메인으로 이동"
      />
    </>
  );
}

export default PromptRegister;

const Error = styled.div`
  color: red;
  font-size: 0.75rem;
  margin-top: 1rem;
`;

const Title = styled.div`
  margin-top: 6.25rem;
  text-align: center;
  h1 {
    color: #000;
    font-family: "Gmarket Sans TTF";
    font-size: 2.5rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 1.56rem;
  }
  p {
    font-family: "Noto Sans KR";
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const RegisterFormLayout = styled.div`
  margin: 6.25rem 5.4375rem 11.875rem 5.375rem;
`;

const Sentence = styled.div`
  font-family: "Gmarket Sans TTF";
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 3.625rem;
`;

const RegisterForm = styled.form`
  width: 69.1875rem;
  height: 79.9375rem;
  border-radius: 1rem;
  border: 0.125rem solid #42d09f;
  background: #fff;
  box-shadow: 0.25rem 0.1875rem 0.625rem 0.0625rem #ececec;
  padding: 1.5625rem 4.3125rem 5.6875rem 3.75rem;

  #titlecondition {
    display: flex;
  }

  label {
    width: 8.8805rem;
    height: 3rem;
    border-radius: 1rem;
    border: 0.125rem solid #42d09f;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  input {
    border-radius: 0.875rem;
    background: rgba(66, 208, 159, 0.06);
    border: none;
    padding-left: 1rem;
  }

  input::placeholder {
    position: absolute;
    top: 0.875rem;
    left: 1.375rem;
  }

  #title {
    width: 15.75rem;
    height: 3rem;
    margin-left: 1.625rem;
    margin-right: 4.75rem;
    margin-bottom: 2.8125rem;
    font-family: "Noto Sans KR";
    font-size: 1rem;
  }
  #condition {
    width: 18.6875rem;
    height: 3rem;
    margin-left: 2.2375rem;
    border: none;
    border-radius: 1rem;
    background: #d9f6ec;
    text-align: center;
    color: #626260;
    font-family: "Noto Sans KR";
    font-size: 1rem;
  }
  #summary {
    width: 61.125rem;
    height: 4.625rem;
    margin-top: 1.125rem;
    margin-bottom: 2.875rem;
    font-family: "Noto Sans KR";
    font-size: 1rem;
  }
  #contentcategory {
    display: flex;
  }
  #category {
    width: 15.75rem;
    height: 3rem;
    border: none;
    border-radius: 1rem;
    background: #d9f6ec;
    text-align: center;
    color: #626260;
    margin-left: 1.625rem;
    margin-bottom: 1.125rem;
    font-family: "Noto Sans KR";
    font-size: 1rem;
  }
  #imglabel {
    display: flex;
    width: 61.125rem;
    height: 4.625rem;
    margin-top: 1.5625rem;
    border-radius: 1rem;
    border: 0.125rem solid #42d09f;
    background: #fff;
    text-align: center;
    cursor: pointer;
    color: #626260;
    font-family: "Noto Sans KR";
    font-size: 0.875rem;
    font-weight: 400;
    line-height: normal;
  }
`;
const StyledTextareaContent = styled.textarea`
  border-radius: 0.875rem;
  background: rgba(66, 208, 159, 0.06);
  border: none;
  padding: 0.875rem 1.375rem;
  width: 61.125rem;
  height: 23.75rem;
  margin-bottom: 2.875rem;
  font-family: "Noto Sans KR";
  font-size: 1rem;
  box-sizing: border-box;
  resize: none;
  vertical-align: top;
`;
const StyledTextareaOutput = styled.textarea`
  width: 61.125rem;
  height: 9.625rem;
  margin-top: 1.25rem;
  padding: 0.875rem 1.375rem;
  font-family: "Noto Sans KR";
  font-size: 1rem;
  border: none;
  border-radius: 1rem;
  background: rgba(66, 208, 159, 0.06);
  box-sizing: border-box;
  resize: none;
  vertical-align: top;
`;

const ImagePreview = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 0.625rem;
`;

const Text1 = styled.div`
  height: 2.5rem;
  margin-bottom: 1.9375rem;
  font-family: "Noto Sans KR";
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const RegisterButton = styled.button`
  width: 13.1875rem;
  height: 2.9375rem;
  border-radius: 0.625rem;
  background: linear-gradient(90deg, #72d49b 0%, #2cc1bf 100%);
  color: #fff;
  text-align: center;
  font-family: "Noto Sans KR";
  font-size: 1rem;
  font-weight: 700;
  margin-top: 10.19rem;
  margin-left: 24.12rem;
  border: none;
  cursor: pointer;
`;
