import React from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "../../assets/images/Logo.svg";

const HeaderLayout = styled.div`
  width: 1161px;
  height: 73px;
`;

function Header() {
  return (
    <>
      <HeaderLayout><Logo /></HeaderLayout>
    </>
  );
}

export default Header;
