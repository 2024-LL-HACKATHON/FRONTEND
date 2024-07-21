import React from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "../../assets/images/Logo.svg";
import { Link } from "react-router-dom";
import { HeaderProps, StyledHeaderProps } from "./types";

const Header = ({
  isLoggedIn,
  marginTop = "34px",
}: HeaderProps & StyledHeaderProps) => {
  return (
    <HeaderLayout marginTop={marginTop}>
      <Logo />
      <NavLinks>
        <StyledLink to="/main">메인으로 가기</StyledLink>
        <StyledLink to="/">도전 프롬프렌!</StyledLink>
        <StyledLink to="/">프롬프트 작성 가이드</StyledLink>
      </NavLinks>
      <AuthLinks>
        {isLoggedIn ? (
          <StyledLink to="/">로그아웃</StyledLink>
        ) : (
          <>
            <StyledLink to="/">로그인</StyledLink>
            <StyledLink to="/">회원가입</StyledLink>
          </>
        )}
      </AuthLinks>
    </HeaderLayout>
  );
};

export default Header;

const HeaderLayout = styled.div<StyledHeaderProps>`
  width: 1161px;
  height: 73px;
  margin-top: ${({ marginTop }) => marginTop};
  display: flex;
  align-items: center;
  padding: 0 20px;
  background-color: transparent;
`;

const NavLinks = styled.nav`
  display: flex;
  margin-left: 197px;
  gap: 98px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
  text-align: center;
  font-family: "Noto Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const AuthLinks = styled.div`
  margin-left: auto;
  display: flex;
  gap: 25px;
`;
