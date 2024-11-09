import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ReactComponent as CompetitionExampleImg } from "../../assets/images/CompetitionExampleImg.svg";
import { ReactComponent as CompetitionCalendarImg } from "../../assets/images/Competitioncalendar.svg";
import { ReactComponent as CompetitionPeopleImg } from "../../assets/images/Competitionpeople.svg";
import { ReactComponent as CompetitionStopwatchImg } from "../../assets/images/Competitionstopwatch.svg";
import apiClient from "../../api/clientapi";

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CompetitionDetailProps {
  endDate: string;
}

const CompetitionDetail: React.FC<CompetitionDetailProps> = ({ endDate }) => {
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>(
    calculateTimeRemaining(endDate)
  );
  const [participantCount, setParticipantCount] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining(endDate));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [endDate]);

  useEffect(() => {
    apiClient
      .get<number>("/api/v1/competition/countCompetitions")
      .then((response) => {
        setParticipantCount(response.data);
      })
      .catch((error) => console.error("Error fetching participant count:", error));
  }, []);

  return (
    <CompetitionDetailContainer>
      <CompetitionDetailText>
        <h1>미래 도시 설계</h1>
        <InfoRow>
          <TooltipContainer>
            <CompetitionCalendarImg />
            <Tooltip>대회 진행 기간</Tooltip>
          </TooltipContainer>
          <p>2024.08.01 ~ 2024.08.15 23:59</p>
        </InfoRow>
        <InfoRow>
          <TooltipContainer>
            <CompetitionPeopleImg />
            <Tooltip>참가자 수</Tooltip>
          </TooltipContainer>
          <p>{participantCount}명</p>
        </InfoRow>
        <InfoRow>
          <TooltipContainer>
            <CompetitionStopwatchImg />
            <Tooltip>남은 기간</Tooltip>
          </TooltipContainer>
          <p>{formatTimeRemaining(timeRemaining)}</p>
        </InfoRow>
      </CompetitionDetailText>
      <CompetitionDetailImg>
        <CompetitionExampleImg />
      </CompetitionDetailImg>
    </CompetitionDetailContainer>
  );
};

function calculateTimeRemaining(endDate: string): TimeRemaining {
  const now = new Date();
  const end = new Date(endDate);
  const difference = end.getTime() - now.getTime();

  if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / 1000 / 60) % 60);
  const seconds = Math.floor((difference / 1000) % 60);

  return { days, hours, minutes, seconds };
}

function formatTimeRemaining({ days, hours, minutes, seconds }: TimeRemaining): string {
  return `${days}일 ${hours}시간 ${minutes}분 ${seconds}초`;
}

export default CompetitionDetail;

const CompetitionDetailContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60.1875rem;
  height: 20.125rem;
  margin-left: 7.5rem;
`;

const CompetitionDetailText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.4rem;

  h1 {
    color: #000;
    font-family: "Gmarket Sans TTF";
    font-size: 2.5rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  p {
    color: #000;
    font-family: "Noto Sans KR";
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

const InfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  p {
    margin: 0;
  }
`;

const TooltipContainer = styled.div`
  position: relative;
  display: inline-block;

  &:hover span {
    visibility: visible;
    opacity: 1;
  }
`;

const Tooltip = styled.span`
  visibility: hidden;
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  bottom: 125%; 
  left: 50%;
  margin-left: -60px;
  opacity: 0;
  transition: opacity 0.3s;

  &::after {
    content: "";
    position: absolute;
    top: 100%; 
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: black transparent transparent transparent;
  }
`;

const CompetitionDetailImg = styled.div`
  width: 29.75rem;
  height: 18.875rem;
  flex-shrink: 0;
  border-radius: 1rem;
`;
