import React from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "../../assets/images/Logo.svg";
import { Link } from "react-router-dom";
import { HeaderProps, StyledHeaderProps } from "./types";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { logout } from "../../services/authSlice";

const Header: React.FC<HeaderProps> = ({ marginTop }) => {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <HeaderLayout marginTop={marginTop}>
      <Link to="/">
        <LogoSize>
          <Logo />
        </LogoSize>
      </Link>
      <NavLinks>
        <StyledLink to="/main">메인으로 가기</StyledLink>
        <StyledLink to="/competition">도전 프롬프렌!</StyledLink>
        <StyledLink to="/guide">프롬프트 작성 가이드</StyledLink>
      </NavLinks>
      <AuthLinks>
      {isLoggedIn ? (
          <StyledLink to="/" onClick={handleLogout}>로그아웃</StyledLink>
        ) : (
          <>
            <StyledLink to="/login">로그인</StyledLink>
            <StyledLink to="/signup">회원가입</StyledLink>
          </>
        )}
      </AuthLinks>
    </HeaderLayout>
  );
};

export default Header;

const HeaderLayout = styled.div<StyledHeaderProps>`
  width: 72.5625rem; // 1161px
  height: 4.5625rem; // 73px
  margin-top: ${({ marginTop }) => marginTop};
  display: flex;
  align-items: center;
  padding: 0 1.25rem; // 20px
  background-color: transparent;
`;

const LogoSize = styled(Logo)`
  width: 7.1875rem; // 115px
  height: 7.1875rem; // 115px
  flex-shrink: 0;
`;

const NavLinks = styled.nav`
  display: flex;
  margin-left: 14.0625rem; // 225px
  gap: 6.125rem; // 98px
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
  text-align: center;
  font-family: "Noto Sans KR";
  font-size: 0.875rem; // 14px
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const AuthLinks = styled.div`
  margin-left: auto;
  display: flex;
  gap: 1.5625rem; // 25px
`;
