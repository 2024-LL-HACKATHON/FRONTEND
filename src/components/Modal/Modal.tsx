import React from "react";
import styled from "styled-components";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
  linkto: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, message, linkto }) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContent>
        <h2>{message}</h2>
        <CloseButton onClick={onClose}>{linkto}</CloseButton>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  width: 50rem;
  height: 20rem;
  background: #fff;
  padding: 2rem;
  border-radius: 1rem;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  h2 {
    color: #000;
    text-align: center;
    font-family: "Gmarket Sans TTF";
    font-size: 2rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

const CloseButton = styled.button`
  width: 14rem;
  height: 5rem;
  margin-top: 3rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.25rem;
  background: #72d49b;
  color: #fff;
  cursor: pointer;
  font-size: 1.5rem;
  text-align: center;
  font-family: "Gmarket Sans TTF";
`;
