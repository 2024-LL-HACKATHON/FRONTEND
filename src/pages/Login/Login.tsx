import React, { useState } from "react";
import styled from "styled-components";

const Login = () => {

  // 아이디, 비밀번호 상태 값 

  return (
    <LoginLayout>
      <Tiltle>
        <h1>프롬프렌과 함께해요</h1>
        <p>
          <span>아이디</span>와 <span>비밀번호</span>를 작성해주세요
        </p>
      </Tiltle>
      {/* 로그인 폼 */}
      <InputGroup>
        <Input type="text" placeholder="아이디" />
        <Input type="password" placeholder="비밀번호" />
        {/*로그인 버튼*/}
        <SubmitButton type="submit">시작하기</SubmitButton>
      </InputGroup>
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
    font-style: nomal;
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
  border: 1px solid #D9D9D9;
  border-radius: 16px;
  font-size: 14px;
  }
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
