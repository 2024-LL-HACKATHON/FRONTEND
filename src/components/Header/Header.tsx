import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "../../assets/images/Logo.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { HeaderProps } from "./types";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { logout } from "../../services/authSlice";
import apiClient from "../../api/clientapi";

const Header: React.FC<HeaderProps> = ({ fixed = true }) => {
  const isLoggedIn = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
    delete apiClient.defaults.headers.common["X-AUTH-TOKEN"];
    localStorage.removeItem("authToken");
    navigate("/login", { state: { from: location.pathname } });
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <HeaderLayout fixed={fixed}>
      <Link to="/">
        <LogoSize>
          <Logo />
        </LogoSize>
      </Link>
      <HamburgerButton onClick={toggleSidebar}>☰</HamburgerButton>
      <NavLinks>
        <StyledLink to="/main">메인으로 가기</StyledLink>
        <StyledLink to="/competition">도전 프롬프렌!</StyledLink>
        <StyledLink to="/guide">프롬프트 작성 가이드</StyledLink>
      </NavLinks>
      <AuthLinks>
        {isLoggedIn ? (
          <StyledLink to="/" onClick={handleLogout}>
            로그아웃
          </StyledLink>
        ) : (
          <>
            <StyledLink to="/login">로그인</StyledLink>
            <StyledLink to="/signup">회원가입</StyledLink>
          </>
        )}
      </AuthLinks>
      <Sidebar open={isSidebarOpen}>
        <CloseButton onClick={toggleSidebar}>&times;</CloseButton>
        <SidebarLinks>
          <StyledLink to="/main" onClick={toggleSidebar}>
            메인으로 가기
          </StyledLink>
          <StyledLink to="/competition" onClick={toggleSidebar}>
            도전 프롬프렌!
          </StyledLink>
          <StyledLink to="/guide" onClick={toggleSidebar}>
            프롬프트 작성 가이드
          </StyledLink>
          {isLoggedIn ? (
            <StyledLink
              to="/"
              onClick={() => {
                handleLogout();
                toggleSidebar();
              }}
            >
              로그아웃
            </StyledLink>
          ) : (
            <>
              <StyledLink to="/login" onClick={toggleSidebar}>
                로그인
              </StyledLink>
              <StyledLink to="/signup" onClick={toggleSidebar}>
                회원가입
              </StyledLink>
            </>
          )}
        </SidebarLinks>
      </Sidebar>
    </HeaderLayout>
  );
};

export default Header;

const HeaderLayout = styled.div<{ fixed?: boolean }>`
  max-width: 100%;
  height: 4.5625rem;
  display: flex;
  align-items: center;
  padding: 0 1.25rem;
  background-color: transparent;
  ${({ fixed }) =>
    fixed
      ? `
      position: fixed;
      z-index: 1000;
    `
      : `
      position: static;
      z-index: auto;
    `}

  @media (max-width: 768px) {
    padding: 0 1rem;
    height: auto;
    justify-content: space-between;
  }
`;

const LogoSize = styled(Logo)`
  width: 7.1875rem;
  height: 7.1875rem;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 5rem;
    height: 5rem;
  }
`;

const HamburgerButton = styled.div`
  display: none;
  font-size: 2rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
    position: fixed;
    top: 1rem; 
    right: 1rem;
  }
`;

const NavLinks = styled.nav`
  display: flex;
  margin-left: 14.0625rem;
  gap: 6.125rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
  text-align: center;
  font-family: "Noto Sans KR";
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const AuthLinks = styled.div`
  margin-left: 10rem;
  display: flex;
  gap: 1.5625rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Sidebar = styled.div<{ open: boolean }>`
  position: fixed;
  top: 0;
  right: ${({ open }) => (open ? "0" : "-100%")};
  width: 80%;
  max-width: 20rem;
  height: 100%;
  background: rgba(255, 255, 255, 0.95);
  transition: right 0.3s ease-in-out;
  z-index: 1000;
  padding: 2rem 1.5rem;
  border-radius: 0 0 1rem 1rem;
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  @media (max-width: 768px) {
    width: 100%;
    max-width: none;
    border-radius: 0;
  }

  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(44, 193, 191, 0.8);
    border-radius: 0.25rem;
  }
`;

const CloseButton = styled.div`
  align-self: flex-end;
  font-size: 2rem;
  cursor: pointer;
`;

const SidebarLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
`;
