import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import Header from "../../components/Header/Header";
import axios from "axios";
import { ReactComponent as SignUpImg } from "../../assets/images/SignUpImg.svg";
import { Link } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";

export default function Signup() {
  const {
    control,
    handleSubmit,
    watch,
    setValue,
    trigger,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      account: "",
      password: "",
      nickname: "",
      thumbnail: "",
    },
  });
  const [step, setStep] = useState(1);

  const handleChangeFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files && files.length > 0) {
      const file = files[0];
      try {
        const fileData = new FormData();
        fileData.append("file", file);

        const uploadResponse = await axios.post("/api/files/upload", fileData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        const fileUrl = uploadResponse.data;
        setValue("thumbnail", fileUrl);
      } catch (error) {
        console.error("파일 업로드 에러", error);
      }
    }
  };

  const handleNext = async () => {
    if (step === 1) {
      // Step 1의 필수 입력 필드 검증
      const result = await trigger([
        "name",
        "email",
        "phone",
        "account",
        "password",
        "nickname",
      ]);
      if (result) {
        setStep(2);
      }
    } else if (step === 2) {
      setStep(3);
    }
  };

  const onSubmit = async (data: any) => {
    try {
      const response = await axios.post("/sign-api/sign-up?roles=ADMIN", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response.data);
      setStep(3);
    } catch (error) {
      console.error("회원가입 에러", error);
    }
  };

  return (
    <>
      <Header isLoggedIn={false} fixed={false} />
      <SignupLayout>
        <SignupForm onSubmit={handleSubmit(onSubmit)}>
          {step === 1 && (
            <SlideIn>
              <SignupTitle>
                <h1>프롬프렌에 온걸 환영해요</h1>
                <p>회원가입을 진행해주세요</p>
              </SignupTitle>
              <SignupInputGroup>
                <div>
                  <SignupSectionTitle>회원정보</SignupSectionTitle>
                  <Controller
                    name="name"
                    control={control}
                    rules={{ required: "이름은 필수 입력 사항입니다." }}
                    render={({ field }) => (
                      <label>
                        이름
                        <Input {...field} />
                        {errors.name && <Error>{errors.name.message}</Error>}
                      </label>
                    )}
                  />
                  <Controller
                    name="email"
                    control={control}
                    rules={{ required: "이메일은 필수 입력 사항입니다." }}
                    render={({ field }) => (
                      <label>
                        이메일
                        <Input {...field} />
                        {errors.email && <Error>{errors.email.message}</Error>}
                      </label>
                    )}
                  />
                  <Controller
                    name="phone"
                    control={control}
                    rules={{ required: "전화번호는 필수 입력 사항입니다." }}
                    render={({ field }) => (
                      <label>
                        전화번호
                        <Input {...field} />
                        {errors.phone && <Error>{errors.phone.message}</Error>}
                      </label>
                    )}
                  />
                </div>
                <div>
                  <SignupSectionTitle>회원가입</SignupSectionTitle>
                  <Controller
                    name="account"
                    control={control}
                    rules={{ required: "아이디는 필수 입력 사항입니다." }}
                    render={({ field }) => (
                      <label>
                        아이디
                        <Input {...field} />
                        {errors.account && (
                          <Error>{errors.account.message}</Error>
                        )}
                      </label>
                    )}
                  />
                  <Controller
                    name="password"
                    control={control}
                    rules={{ required: "패스워드는 필수 입력 사항입니다." }}
                    render={({ field }) => (
                      <label>
                        패스워드
                        <Input type="password" {...field} />
                        {errors.password && (
                          <Error>{errors.password.message}</Error>
                        )}
                      </label>
                    )}
                  />
                  <Controller
                    name="nickname"
                    control={control}
                    rules={{ required: "닉네임은 필수 입력 사항입니다." }}
                    render={({ field }) => (
                      <label>
                        닉네임
                        <Input {...field} />
                        {errors.nickname && (
                          <Error>{errors.nickname.message}</Error>
                        )}
                      </label>
                    )}
                  />
                </div>
                <NextButton type="button" onClick={handleNext}>
                  다음
                </NextButton>
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
                    onChange={handleChangeFile}
                  />
                  <ThumbnailButton>
                    {watch("thumbnail") ? (
                      <ThumbnailPreview
                        src={watch("thumbnail")}
                        alt="Thumbnail Preview"
                      />
                    ) : (
                      "이미지 파일 업로드"
                    )}
                  </ThumbnailButton>
                </label>
                <SubmitButton type="submit">확인</SubmitButton>
              </SignupInputGroup>
            </SlideIn>
          )}
          {step === 3 && (
            <SignupInputGroup>
              <div id="step3box">
                <SignUpImgBox>
                  <SignUpImg />
                </SignUpImgBox>
                <h1 id="step3H1">가입을 축하드립니다</h1>
                <h2 id="step3H2">
                  <span>{watch("name")}</span>님
                </h2>
                <LinktoLogin to="/login">로그인 하러가기</LinktoLogin>
              </div>
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

const SignupForm = styled.form`
  margin-top: 2.12rem;
`;

const SignupTitle = styled.div`
  text-align: center;
  margin-bottom: 2.12rem;
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

const SignupInputGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 2.375rem;
  
  div {
    display: flex;
    flex-direction: column;
  }
  label {
    font-size: 0.75rem;
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
  #step3box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  #step3H1 {
    color: #000;
    text-align: center;
    font-family: "Gmarket Sans TTF";
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-top: 2.25rem;
    margin-bottom: 1.25rem;
  }
  #step3H2 {
    text-align: center;
    background: linear-gradient(90deg, #72d49b 0%, #2cc1bf 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: "Gmarket Sans TTF";
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  #step3H2 span {
    text-align: center;
    font-family: "Gmarket Sans TTF";
    font-size: 6rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    background: linear-gradient(90deg, #72d49b 0%, #2cc1bf 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
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
  margin-left: 0.5rem;
`;

const SubmitButton = styled.button`
  width: 13.1875rem;
  height: 2.9375rem;
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
  margin-top: 2.75rem;
  margin-left: 3.5rem;
`;

const NextButton = styled.button`
  width: 13.1875rem;
  height: 2.9375rem;
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
  margin-top: 2.75rem;
  margin-left: 3rem;
`;

const LinktoLogin = styled(Link)`
  width: 13.1875rem;
  height: 2.9375rem;
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
  margin-top: 5.31rem;
  text-decoration: none;
  padding-top: 0.7rem;
  padding-left: 0.1rem;
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
  font-family: "Noto Sans KR";
  color: #626260;
  text-align: center;
  font-family: "Noto Sans";
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border: none;
`;

const ThumbnailPreview = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`;

const SignUpImgBox = styled.div``;
