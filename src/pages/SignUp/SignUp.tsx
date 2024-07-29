import React, { useState } from "react";
import styled from "styled-components";
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
    thumbnail: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("/sign-api/sign-up?roles=ADMIN", formData);
      console.log(response.data);
    } catch (error) {
      console.error("회원가입 에러", error);
    }
  };

  return (
    <>
      <Header isLoggedIn={false} marginTop="47px" />
      <SignupLayout>
        <SignupTitle>
          <h1>프롬프렌에 온걸 환영해요</h1>
          <p>회원가입을 진행해주세요</p>
        </SignupTitle>
        <SignupForm onSubmit={handleSubmit}>
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
              <label>
                썸네일
                <Input
                  name="thumbnail"
                  type="text"
                  value={formData.thumbnail}
                  onChange={handleChange}
                />
              </label>
            </div>
          </SignupInputGroup>
          <SubmitButton type="submit">가입하기</SubmitButton>
        </SignupForm>
      </SignupLayout>
    </>
  );
}

const SignupLayout = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  display: flex;
  margin-top: 60px;
  flex-direction: column;
  align-items: center;
`;

const SignupTitle = styled.div`
  text-align: center;
  h1 {
    font-size: 24px;
    font-weight: 700;
    font-family: "Gmarket Sans TTF", sans-serif;
    background: linear-gradient(90deg, #72d49b 0%, #2cc1bf 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-top: 67px;
  }
  p {
    color: #949494;
    font-size: 12px;
    font-weight: 400;
    font-family: "Noto Sans KR", sans-serif;
    margin-top: 7px;
  }
`;

const SignupForm = styled.form`
  margin-top: 34px;
  margin-right: 12px;
`;

const SignupInputGroup = styled.div`
  margin-bottom: 38px;

  div {
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
  }
  label {
    font-size: 12px;
    text-align: right;
    margin-right: 8px;
    margin-bottom: 16px;
  }
`;

const SignupSectionTitle = styled.p`
  margin-left: 32px;
  margin-bottom: 22px;
  font-size: 12px;
  font-weight: 700;
`;

const Input = styled.input`
  margin-left: 6px;
  width: 211px;
  height: 32px;
  padding: 5px;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  font-size: 14px;
`;

const SubmitButton = styled.button`
  width: 221px;
  height: 34px;
  margin-left: 57px;
  margin-bottom: 97px;
  border-radius: 10px;
  border: none;
  background: linear-gradient(90deg, #72d49b 0%, #2cc1bf 100%);
  color: white;
  font-weight: 700;
  font-size: 12px;
  cursor: pointer;
`;
