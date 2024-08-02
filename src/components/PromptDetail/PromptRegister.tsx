import React, { useState, useRef } from "react";
import styled from "styled-components";
import axios from "axios";
import { useForm, Controller } from "react-hook-form";

interface FormData {
  category: string;
  condition: string;
  content: string;
  image: string;
  output: string;
  summary: string;
  title: string;
}

function PromptRegister ()  {
  const { control, handleSubmit, setValue } = useForm<FormData>();
  const [token, setToken] = useState<string | null>(localStorage.getItem("token"));
  const [preview, setPreview] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;

    if (files && files.length > 0) {
      const file = files[0];
      const fileUrl = URL.createObjectURL(file);
      setPreview(fileUrl);

      try {
        const fileData = new FormData();
        fileData.append("file", file);

        const uploadResponse = await axios.post("/api/files/upload", fileData, {
          headers: { "Content-Type": "multipart/form-data" },
        });

        const uploadedFileUrl = uploadResponse.data.url;
        setValue("image", uploadedFileUrl);
      } catch (error) {
        console.error("파일 업로드 에러", error);
        setError("파일 업로드 중 오류가 발생했습니다.");
      }
    }
  };

  const onSubmit = async (data: FormData) => {
    try {
      await axios.post("/api/v1/main/createPrompt", data, {
        headers: {
          "Content-Type": "application/json",
          "X-AUTH-TOKEN": token || "",
        },
      });
      alert("프롬프트가 성공적으로 등록되었습니다!");
    } catch (error) {
      console.error("프롬프트 등록 중 오류가 발생했습니다:", error);
      setError("프롬프트 등록 중 오류가 발생했습니다.");
    }
  };

  return (
    <PromptRegisterLayout>
      <Title>
        <p>프롬프렌 프롬프트 등록</p>
        프롬프렌 유저분들의 창의적이고 멋진 아이디어들을 <br />
        기다리고 있습니다.
      </Title>
      <RegisterFormLayout>
        <Sentence>프롬프렌에 프롬프트를 등록해보세요!</Sentence>
        <RegisterForm onSubmit={handleSubmit(onSubmit)}>
          <Text1>정보를 입력해주세요</Text1>
          
          <label htmlFor="title">제목</label>
          <Controller
            name="title"
            control={control}
            render={({ field }) => <input type="text" id="title" {...field} />}
          />

          <label htmlFor="condition">카테고리</label>
          <Controller
            name="condition"
            control={control}
            render={({ field }) => (
              <select id="condition" {...field}>
                <option value="PRODUCTIVE">생산적인</option>
                <option value="ARTISTIC">예술적인</option>
                <option value="SYMBOLIC">상징적인</option>
                <option value="INTERESTING">재미있는</option>
              </select>
            )}
          />

          <label htmlFor="summary">설명</label>
          <Controller
            name="summary"
            control={control}
            render={({ field }) => (
              <input
                type="text"
                id="summary"
                placeholder="프롬프트에 대한 소개를 해주세요."
                {...field}
              />
            )}
          />

          <label htmlFor="category">프롬프트 유형</label>
          <Controller
            name="category"
            control={control}
            render={({ field }) => (
              <select id="category" {...field}>
                <option value="GPT">GPT</option>
                <option value="DALLE">DALL-E</option>
              </select>
            )}
          />

          <label htmlFor="content">프롬프트</label>
          <Controller
            name="content"
            control={control}
            render={({ field }) => (
              <input
                type="text"
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
            render={({ field }) => (
              <input
                type="text"
                id="output"
                placeholder="프롬프트 사용 예시를 작성해주세요"
                {...field}
              />
            )}
          />

          <label htmlFor="img">이미지 업로드</label>
          <input type="file" id="img" onChange={handleFileChange} ref={fileInputRef} />
          {preview && <ImagePreview src={preview} alt="Preview" />}

          <RegisterButton type="submit">등록하기</RegisterButton>
        </RegisterForm>
      </RegisterFormLayout>
    </PromptRegisterLayout>
  );
};

export default PromptRegister;

const ImagePreview = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-top: 10px;
  border: 1px solid #ddd;
`;

const PromptRegisterLayout = styled.div``;

const Title = styled.div`
  margin-top: 100px;
  text-align: center;
  font-family: "Noto Sans KR";
  font-size: 14px;
  color: #626060;
  p {
    font-family: "Gmarket Sans TTF";
    font-size: 40px;
    font-weight: 500;
    color: #000;
    margin-bottom: 25px;
  }
`;

const RegisterFormLayout = styled.div`
  margin: 100px 87px 190px 86px;
`;

const Sentence = styled.div`
  font-family: "Gmarket Sans TTF";
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 58px;
`;

const RegisterForm = styled.form`
  width: 1107px;
  height: 1279px;
  border-radius: 16px;
  border: 2px solid #42d09f;
  background: #fff;
  box-shadow: 4px 3px 10px 1px #ececec;
  padding: 25px 69px 91px 60px;
  font-family: "Noto Sans KR";
  font-size: 16px;

  label {
    width: 142.08px;
    height: 48px;
    border-radius: 16px;
    border: 1px solid #42d09f;
    display: flex;
    display: inline-block;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding-top: 10px;
  }

  input {
    border-radius: 14px;
    background: rgba(66, 208, 159, 0.06);
    border: none;
    padding: 14px 22px;
  }

  input::placeholder {
    position: absolute;
    top: 14px;
    left: 22px;
  }

  #title {
    width: 252px;
    height: 48px;
    margin-left: 26px;
    margin-right: 76px;
    margin-bottom: 45px;
  }
  #condition {
    width: 299px;
    height: 48px;
    margin-left: 35.85px;
    border: none;
    border-radius: 16px;
    background: #d9f6ec;
    text-align: center;
    color: #626260;
  }
  #summary {
    width: 978px;
    height: 74px;
    margin-top: 18px;
    margin-bottom: 46px;
  }
  #category {
    width: 252px;
    height: 48px;
    border: none;
    border-radius: 16px;
    background: #d9f6ec;
    text-align: center;
    color: #626260;
    margin-left: 26px;
    margin-bottom: 18px;
  }
  #content {
    width: 978px;
    height: 380px;
    margin-bottom: 46px;
  }
  #output {
    width: 978px;
    height: 154px;
    margin-top: 20px;
  }
  #img {
    width: 978px;
    height: 74px;
    margin-top: 25px;
    border-radius: 16px;
    border: 1px solid #42d09f;
    background: #fff;
    text-align: center;
  }
`;

const Text1 = styled.div`
  height: 40px;
  margin-bottom: 31px;
  font-family: "Noto Sans KR";
  font-size: 16px;
`;

const RegisterButton = styled.button`
  width: 211px;
  height: 47px;
  border-radius: 10px;
  background: linear-gradient(90deg, #72d49b 0%, #2cc1bf 100%);
  color: #fff;
  text-align: center;
  font-family: "Noto Sans KR";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  margin-top: 81px;
  border: none;
  margin-left: 449px;
`;
