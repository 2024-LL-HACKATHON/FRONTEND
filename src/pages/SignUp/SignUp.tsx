import React from 'react';
import styled from 'styled-components';

const Signup = () => {
  return (
    <SignupLayout>
      <Tiltle>
        <h1>프롬프렌에 온걸 환영해요</h1>
        <p>회원가입을 진행해주세요</p>
      </Tiltle>
      <Form>
        <InputGroup>
          <div>
            <SectionTitle>회원정보</SectionTitle>
            <label>이름<Input type="text"/></label>
            <label>이메일<Input type="text"/></label>
            <label>전화번호<Input type="text"/></label>
          </div>
          <div>
            <SectionTitle>회원가입</SectionTitle>
            <label>아이디<Input type="text"/></label>
            <label>패스워드<Input type="text"/></label>
            <label>닉네임<Input type="text"/></label>
        </div>
        </InputGroup>
        <SubmitButton type="submit">다음</SubmitButton>
      </Form>
    </SignupLayout>
  );
};

export default Signup;

const SignupLayout = styled.div`
  font-family: "Noto Sans";
  display: flex;
  margin-top: 60px;
  flex-direction: column;
  align-items: center;
`;

const Tiltle = styled.div`
  text-align: center;

  h1 {
    width: 280px;
    height: 29px;
    font-size: 24px;
    font-weight: 700;
    font-family: 'Gmarket Sans';
    background: linear-gradient(90deg, #72D49B 0%, #2CC1BF 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: 0;
  }
  p {
    margin-top: 7px;
    color: #949494;
    font-size: 12px;
    font-weight: 400;
  }
`;

const Form = styled.form`
  margin-top: 34px;
  margin-right: 12px;
`;

const InputGroup = styled.div`
  margin-bottom: 38px;

  div {
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
  }
  label {
    font-size: 12px;
    text-align: right;
  }
`;

const SectionTitle = styled.text`
  margin-left: 32px;
  margin-bottom: 22px;
  font-size: 12px;
  font-weight: 700;
`;

const Input = styled.input`
  margin-left: 6px;
  margin-bottom: 12px;
  width: 211px;
  height: 28px;
  padding: 5px;
  border: 1px solid #D9D9D9;
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
  background: linear-gradient(90deg, #72D49B 0%, #2CC1BF 100%);
  color: white;
  font-weight: 700;
  font-size: 12px;
  cursor: pointer;
`;
