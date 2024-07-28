import React from "react";
import styled from "styled-components";
import Header from "../../components/Header/Header";
import { ReactComponent as CompetitionGlassSvg } from "../../assets/images/Glass.svg";

export default function CompetitionList() {
  return (
    <>
      <CompetitionListHead>
        <Header isLoggedIn={false} marginTop="" />
        <CompetitionGlassWrapper>
          <CompetitionGlassSvg />
          <TextOverlay>텍스트</TextOverlay>
        </CompetitionGlassWrapper>
      </CompetitionListHead>
    </>
  );
}

const CompetitionListHead = styled.div`
  width: 80rem;
  height: 18.25rem;
  flex-shrink: 0;
  background: rgba(114, 212, 155, 0.3);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  text-align: center;
`;

const CompetitionGlassWrapper = styled.div`
  position: relative;
  display: inline-block;
  margin-top: 54px;
  
  svg {
    width: 70.4375rem;
    height: 16.6875rem;
    fill: rgba(255, 255, 255, 0.6);
    stroke-width: 2px;
    stroke: rgba(44, 193, 191, 0.3);
  }
`;

const TextOverlay = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #000;
  font-family: "Gmarket Sans TTF";
  font-size: 2.25rem;
  font-weight: 500;
  line-height: normal;
`;
