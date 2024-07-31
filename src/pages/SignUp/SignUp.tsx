import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import Header from "../../components/Header/Header";
import axios from "axios";

export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    account: "",
    password: "",
    nickname: "",
    thumbnailUrl: "", // 파일 URL을 저장할 변수로 변경
  });

  const [step, setStep] = useState(1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, files } = e.target;
    if (type === "file" && files) {
      const file = files[0];
      const fileUrl = URL.createObjectURL(file); // 파일의 URL 생성
      setFormData((prevData) => ({
        ...prevData,
        thumbnailUrl: fileUrl, // 파일 URL을 상태로 저장
      }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleNext = () => {
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (step === 3) {
      try {
        const response = await axios.post(
          "/sign-api/sign-up?roles=ADMIN",
          {
            ...formData,
            // `thumbnailUrl`을 서버로 전송할 때는 실제 파일이 아닌 URL로 전송
            thumbnail: formData.thumbnailUrl,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(response.data);
        // 성공 처리 로직 추가
      } catch (error) {
        console.error("회원가입 에러", error);
        // 에러 처리 로직 추가
      }
    }
  };

  return (
    <>
      <Header isLoggedIn={false} fixed={false} />
      <SignupLayout>
        <SignupForm onSubmit={handleSubmit}>
          {step === 1 && (
            <SlideIn>
              <SignupTitle>
                <h1>프롬프렌에 온걸 환영해요</h1>
                <p>회원가입을 진행해주세요</p>
              </SignupTitle>
              <SignupInputGroup>
                <div>
                  <SignupSectionTitle>회원정보</SignupSectionTitle>
                  <label>
                    이름
                    <Input
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </label>
                  <label>
                    이메일
                    <Input
                      name="email"
                      type="text"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </label>
                  <label>
                    전화번호
                    <Input
                      name="phone"
                      type="text"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </label>
                </div>
                <div>
                  <SignupSectionTitle>회원가입</SignupSectionTitle>
                  <label>
                    아이디
                    <Input
                      name="account"
                      type="text"
                      value={formData.account}
                      onChange={handleChange}
                    />
                  </label>
                  <label>
                    패스워드
                    <Input
                      name="password"
                      type="password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                  </label>
                  <label>
                    닉네임
                    <Input
                      name="nickname"
                      type="text"
                      value={formData.nickname}
                      onChange={handleChange}
                    />
                  </label>
                </div>
                <SubmitButton type="button" onClick={handleNext}>
                  다음
                </SubmitButton>
              </SignupInputGroup>
            </SlideIn>
          )}
          {step === 2 && (
            <SlideIn>
              <SignupTitle>
                <h1>프로필 업로드</h1>
              </SignupTitle>
              <SignupInputGroup>
                <label>
                  <HiddenFileInput
                    name="thumbnail"
                    type="file"
                    onChange={handleChange}
                  />
                  <ThumbnailButton>
                    {formData.thumbnailUrl ? (
                      <ThumbnailPreview
                        src={formData.thumbnailUrl}
                        alt="Thumbnail Preview"
                      />
                    ) : (
                      "썸네일 업로드"
                    )}
                  </ThumbnailButton>
                </label>
                <SubmitButton type="button" onClick={handleNext}>
                  다음
                </SubmitButton>
              </SignupInputGroup>
            </SlideIn>
          )}
          {step === 3 && (
            <SignupInputGroup>
              <h2>{formData.name}님, 회원가입을 축하드립니다!</h2>
              <SubmitButton type="submit">가입하기</SubmitButton>
            </SignupInputGroup>
          )}
        </SignupForm>
      </SignupLayout>
    </>
  );
}

const slideIn = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const SlideIn = styled.div`
  animation: ${slideIn} 0.5s ease-in-out;
`;

const SignupLayout = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  display: flex;
  margin-top: 4.19rem;
  flex-direction: column;
  align-items: center;
`;

const SignupTitle = styled.div`
  text-align: center;
  h1 {
    font-size: 1.5rem;
    font-weight: 700;
    font-family: "Gmarket Sans TTF", sans-serif;
    background: linear-gradient(90deg, #72d49b 0%, #2cc1bf 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  p {
    color: #949494;
    font-size: 0.75rem;
    font-weight: 400;
    font-family: "Noto Sans KR", sans-serif;
    margin-top: 0.44rem;
  }
`;

const SignupForm = styled.form`
  margin-top: 2.12rem;
`;

const SignupInputGroup = styled.div`
  margin-bottom: 2.375rem;

  div {
    display: flex;
    flex-direction: column;
    margin-bottom: 1.875rem;
  }
  label {
    font-size: 0.75rem; /* 12px */
    color: #000;
    text-align: center;
    font-family: "Noto Sans KR";
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: right;
    margin-right: 0.5rem;
    margin-bottom: 1rem;
  }
`;

const SignupSectionTitle = styled.p`
  color: #000;
  font-family: "Noto Sans KR";
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-left: 2rem;
  margin-bottom: 1.375rem;
`;

const Input = styled.input`
  margin-left: 0.375rem;
  width: 13.1875rem;
  height: 2rem;
  padding: 0.3125rem;
  border: 1px solid #d9d9d9;
  border-radius: 0.625rem;
  font-size: 0.875rem;
`;

const Error = styled.div`
  color: red;
  font-size: 0.75rem;
  margin-top: 0.5rem;
`;

const SubmitButton = styled.button`
  width: 13.1875rem;
  height: 2.9375rem;
  margin-left: 3rem;
  margin-bottom: 6.0625rem;
  border-radius: 0.625rem;
  background: linear-gradient(90deg, #72d49b 0%, #2cc1bf 100%);
  border: none;
  color: #fff;
  text-align: center;
  font-family: "Noto Sans KR";
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
`;

const HiddenFileInput = styled.input`
  display: none;
`;

const ThumbnailButton = styled.div`
  width: 20.5rem;
  height: 20.5rem;
  border-radius: 50%;
  background: #d9d9d9;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-align: center;
  font-family: "Noto Sans KR";
  font-size: 1rem;
  font-weight: 700;
  line-height: normal;
  color: #fff;
  border: none;
`;

const ThumbnailPreview = styled.img`
  width: 20.5rem;
  height: 20.5rem;
  border-radius: 50%;
`;
