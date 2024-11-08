import React, { useState } from "react";
import styled from "styled-components";
import guideImage from "../../assets/images/GuideModal.png";
interface GuideModalProps {
  response: any;
}

function GuideModal({ response }: GuideModalProps) {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;
  return (
    <GuideModalBox>
      <GuideModalImg src={guideImage} alt="Guide" />
      <CloseButton onClick={handleClose}>×</CloseButton>
      <GuideModalText>{JSON.stringify(response)}</GuideModalText>
    </GuideModalBox>
  );
}

export default GuideModal;

const GuideModalBox = styled.div`
  width: 18.3125rem;
  height: 22.375rem;
  border-radius: 1rem;
  border: 1px solid #2cc1bf;
  background: #fff;
  box-shadow: 10px 8px 1.5px 0px rgba(97, 220, 132, 0.25);
  padding: 1rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
`;

const GuideModalImg = styled.img`
  display: block;
  margin: 0;
  max-width: 100%;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5rem;
  font-weight: bold;
  color: #2cc1bf;
  cursor: pointer;
  &:hover {
    color: #ff0000;
  }
`;

const GuideModalText = styled.div`
  color: #616161;
  font-family: "Noto Sans KR";
  font-size: 1rem;
  font-style: normal;
  font-weight: 300;
  line-height: 1.5rem;
  text-align: left; 
  margin-top: 1rem; 
`;
