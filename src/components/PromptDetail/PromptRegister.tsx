import React from 'react';
import styled from 'styled-components';

interface PromptData {
    title: string;
    category: string;
    explain: string;
    AI_category: string;
    prompt: string;
    img: FileList;
}

export default function PromptRegister() {
    
  return (
    <PromptRegisterLayout>
        <Title>
            <p>프롬프렌 프롬포트 등록</p>
            프롬프렌 유저분들의 창의적이고 멋진 아이디어들을 <br />
            기다리고 있습니다.
        </Title>
        <RegisterFormLayout>
            <Sentence>프롬프렌에 프롬프트를 등록해보세요!</Sentence>
            <RegisterForm>
                <Text1>정보를 입력해주세요</Text1>
                <label>제목</label>
                <input type='text' id='title'></input>
                <label>카테고리</label>
                <select name='category' id='category'>
                    <option value='productive'>생산적인</option>
                    <option value='artistic'>예술적인</option>
                    <option value='symbolic'>상징적인</option>
                    <option value='funny'>재미있는</option>
                </select>

                <label>설명</label>
                <input type='text' id='explain' placeholder='프롬포트에 대한 소개를 해주세요.'></input>
                <label>프롬프트</label>
                <select name='AI_categoty' id='AI_category'>
                    <option value='GPT'>GPT</option>
                    <option value='DALL-E'>DALL-E</option>
                </select>
                <input type='text' id='prompt' placeholder='사용자가 사용할 프롬포트를 작성해주세요.'></input>
                <label>결과</label>
                <input type='text' id='output' placeholder='프롬프트 사용 예시를 작성해주세요'></input>
                <input type='file' id='img'></input>
            </RegisterForm>
            <RegisterButton>등록하기</RegisterButton>
        </RegisterFormLayout>
    </PromptRegisterLayout>
  );
}
const PromptRegisterLayout = styled.div`
`;
const Title = styled.div`
margin-top: 100px;
text-align: center;
font-family: "Noto Sans KR";
font-size: 14px;
color: #626060;
P {
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

const RegisterForm = styled.div`
width: 1107px;
height: 1279px;
border-radius: 16px;
border: 2px solid #42D09F;
background: #FFF;
box-shadow: 4px 3px 10px 1px #ECECEC;
padding: 25px 69px 91px 60px;
font-family: "Noto Sans KR";
font-size: 16px;


label {
    width: 142.08px;
    height: 48px;
    border-radius: 16px;
    border: 1px solid #42D09F;
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
#category {
width: 299px;
height: 48px;
margin-left: 35.85px;
border: none;
border-radius: 16px;
background: #D9F6EC;
text-align: center;
color: #626260;
}
#explain {
width: 978px;
height: 74px;
margin-top: 18px;
margin-bottom: 46px;
}
#AI_category {
width: 252px;
height: 48px;
border: none;
border-radius: 16px;
background: #D9F6EC;
text-align: center;
color: #626260;
margin-left: 26px;
margin-bottom: 18px;
}
#prompt {
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
border: 1px solid #42D09F;
background: #FFF;
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
background: linear-gradient(90deg, #72D49B 0%, #2CC1BF 100%);
color: #FFF;
text-align: center;
font-family: "Noto Sans KR";
font-size: 16px;
font-style: normal;
font-weight: 700;
margin-top: 81px;
border: none;
margin-left: 449px;
`;