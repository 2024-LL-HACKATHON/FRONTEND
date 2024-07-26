import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({
    account: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("/sign-api/sign-in?account=string&password=string", formData);
      console.log(response.data);
    } catch (error) {
      console.error("로그인 에러", error);
    }
  };

  return (
    <LoginLayout>
      <Tiltle>
        <h1>프롬프렌과 함께해요</h1>
        <p>
          <span>아이디</span>와 <span>비밀번호</span>를 작성해주세요
        </p>
      </Tiltle>
      <LoginForm onSubmit={handleSubmit}>
        <InputGroup>
          <Input
            name="account"
            type="text"
            placeholder="아이디"
            value={formData.account}
            onChange={handleChange}
          />
          <Input
            name="password"
            type="password"
            placeholder="비밀번호"
            value={formData.password}
            onChange={handleChange}
          />
          <SubmitButton type="submit">시작하기</SubmitButton>
        </InputGroup>
      </LoginForm>
    </LoginLayout>
  );
};

export default Login;

const LoginLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-family: "Noto Sans KR";
`;

const Tiltle = styled.div`
  h1 {
    width: 326px;
    height: 29px;
    font-size: 24px;
    font-weight: 700;
    font-family: "Gmarket Sans TTF";
    font-style: normal;
    background: linear-gradient(90deg, #72d49b 0%, #2cc1bf 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: 0;
  }
  p {
    margin-top: 5px;
    color: #949494;
    font-size: 12px;
    font-weight: 400;
  }
  span {
    font-weight: 700;
  }
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 319px;
  margin-top: 24px;
`;

const Input = styled.input`
  margin-bottom: 12px;
  height: 49px;
  padding-left: 18px;
  border: 1px solid #d9d9d9;
  border-radius: 16px;
  font-size: 14px;
`;

const SubmitButton = styled.button`
  height: 52px;
  margin-top: 24px;
  border-radius: 16px;
  border: none;
  background: linear-gradient(90deg, #72d49b 0%, #2cc1bf 100%);
  color: white;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
`;
