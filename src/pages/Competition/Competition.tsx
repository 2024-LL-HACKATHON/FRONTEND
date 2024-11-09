import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CompetitionCarousel from "../../components/CompetitionComponent/CompetitionCarousel";
import DDayCountdown from "../../components/CompetitionComponent/CompetitonDDay";
import { ReactComponent as CompetitionImgExample } from "../../assets/images/CompetitionImgExample.svg";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import CompetitionImg1 from "../../assets/images/Competition_Img1.svg";
import CompetitionImg2 from "../../assets/images/Competition_Img2.svg";
import CompetitionImg3 from "../../assets/images/Competition_Img3.svg";
import apiClient from "../../api/clientapi";

interface CompetitionData {
  title: string;
  participants: number;
  dateRange: string;
  img: string;
}

const currentCompetitionData: CompetitionData = {
  title: "미래 도시 설계",
  participants: 0,
  dateRange: "2024.08.01~2024.08.15",
  img: "",
};

const pastCompetitions: CompetitionData[] = [
  {
    img: CompetitionImg1,
    title: "스타트업 대표의 운영방식",
    participants: 33,
    dateRange: "2024.07.10~2024.07.20",
  },
  {
    img: CompetitionImg2,
    title: "AI 혁신 아이디어 공모전",
    participants: 40,
    dateRange: "2024.06.15~2024.06.25",
  },
  {
    img: CompetitionImg3,
    title: "스마트 홈 해커톤",
    participants: 28,
    dateRange: "2024.05.01~2024.05.10",
  },
];

const calculateDaysRemaining = (deadline: Date): string => {
  const now = new Date();
  const timeDiff = deadline.getTime() - now.getTime();
  const daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24));
  if (timeDiff <= 0) {
    return "D-DAY";
  } else if (daysDiff < 1) {
    return "D-DAY";
  } else {
    return `D-${daysDiff}`;
  }
};

export default function Competition() {
  const [currentCompetition, setCurrentCompetition] = useState<CompetitionData>(
    currentCompetitionData
  );
  const [isProceeding] = useState<boolean>(true);
  const deadline = new Date("2024-11-15T23:59:59");
  const daysRemaining = calculateDaysRemaining(deadline);

  useEffect(() => {
    apiClient
      .get<number>("/api/v1/competition/countCompetitions")
      .then((response) => {
        setCurrentCompetition((prev) => ({
          ...prev,
          participants: response.data,
        }));
      })
      .catch((error) =>
        console.error("Error fetching participant count:", error)
      );
  }, []);

  return (
    <CompetitionLayer>
      <CompetitionCarousel />
      <CompetitionTitle>도전! 프롬프렌</CompetitionTitle>
      <CompetitionContainer>
        <CompetitionProceedingBox>
          <CompetitionProceed>
            <IsProceed isProceeding={isProceeding} />
            <CompetitionDday>{daysRemaining}</CompetitionDday>
          </CompetitionProceed>
          <div id="stroke" />
          <h1>{currentCompetition.title}</h1>
          <p>
            현재<span>{currentCompetition.participants}명</span>참여중 !
          </p>
          <p>{currentCompetition.dateRange}</p>
          <StyledLink to="/competitionlist">
            <ParticipationButton>바로가기</ParticipationButton>
          </StyledLink>
        </CompetitionProceedingBox>
        <CompetitionImgBox>
          <CompetitionImgExample />
          <DDayCountdownBox>
            <DDayCountdown deadline={deadline} />
          </DDayCountdownBox>
        </CompetitionImgBox>
      </CompetitionContainer>
      <CompetitionPastBox>
        <div id="competitionStroke" />
        <h1>지난 대회</h1>
        <CompetitionPastImgContainer>
          {pastCompetitions.map((competition, index) => (
            <CompetitionPast key={index}>
              <CompetitionPastImgBox
                img={competition.img}
              ></CompetitionPastImgBox>
              <IsProceed isProceeding={!isProceeding} past />
              <h2>{competition.title}</h2>
              <div id="competitionPastStroke" />
              <p>
                <span>{competition.participants}</span>명 참여 완료
              </p>
              <p>{competition.dateRange}</p>
            </CompetitionPast>
          ))}
        </CompetitionPastImgContainer>
      </CompetitionPastBox>
      <Footer />
    </CompetitionLayer>
  );
}

const IsProceed = ({
  isProceeding,
  past = false,
}: {
  isProceeding: boolean;
  past?: boolean;
}) => {
  return (
    <ProceedingStatus isProceeding={isProceeding} past={past}>
      {isProceeding ? "진행중" : "마감"}
    </ProceedingStatus>
  );
};

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const CompetitionTitle = styled.div`
  color: #000;
  text-align: center;
  font-family: "Gmarket Sans TTF";
  font-size: 2.5rem;
  font-weight: 500;
  margin-top: 3.19rem;
`;

const CompetitionLayer = styled.div`
  max-width: 100%;
`;
const CompetitionContainer = styled.div`
  max-width: 100%;
  margin: 0 auto;
  margin-top: 3.44rem;
  position: relative;
`;

const CompetitionProceedingBox = styled.div`
  width: 56.8125rem;
  height: 29.375rem;
  border-radius: 0rem 1rem 1rem 0rem;
  background: rgba(114, 212, 155, 0.2);
  margin-top: 3.44rem;
  display: flex;
  flex-direction: column;
  z-index: 1;

  #stroke {
    width: 19.18838rem;
    height: 0.13rem;
    background: rgba(114, 212, 155, 0.5);
    margin-left: 7.25rem;
  }
  h1 {
    color: #000;
    font-family: "Gmarket Sans TTF";
    font-size: 2.125rem;
    font-weight: 500;
    margin-top: 0.48rem;
    margin-left: 7.69rem;
  }
  p {
    color: #000;
    font-family: "Gmarket Sans TTF";
    font-size: 1.25rem;
    font-weight: 500;
    margin-left: 7.69rem;
    margin-top: 1.18rem;
  }
  span {
    color: #42d09f;
    font-family: "Gmarket Sans TTF";
    font-size: 1.25rem;
    font-weight: 700;
  }
`;

const CompetitionProceed = styled.div`
  display: flex;
  gap: 1rem;
  margin-left: 7.69rem;
  margin-top: 4.3rem;
`;

const ProceedingStatus = styled.div<{ isProceeding: boolean; past?: boolean }>`
  width: 4.75rem;
  height: 2.23431rem;
  color: ${({ isProceeding }) => (isProceeding ? "#fff" : "#000")};
  font-family: "Gmarket Sans TTF";
  font-size: 1rem;
  font-weight: 500;
  background: ${({ isProceeding }) =>
    isProceeding ? "#72d49b" : "rgba(126, 126, 126, 0.13)"};
  text-align: center;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  margin-top: ${({ past }) => (past ? "2.06rem" : "0")};
`;

const CompetitionDday = styled.div`
  width: 5.3125rem;
  height: 2.23431rem;
  background: #fff;
  border: 1px solid #72d49b;
  border-radius: 1rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #72d49b;
  font-family: "Gmarket Sans TTF";
  font-size: 1rem;
  font-weight: 500;
`;

const ParticipationButton = styled.div`
  width: 19.1875rem;
  height: 5.38869rem;
  border-radius: 1rem;
  background: #72d49b;
  color: #fff;
  text-align: center;
  font-family: "Gmarket Sans TTF";
  font-size: 1.6875rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 7.25rem;
  margin-top: 1.68rem;
  cursor: pointer;
  Link {
    text-decoration: none;
  }
`;

const CompetitionImgBox = styled.div`
  width: 35.5625rem;
  height: 23.70831rem;
  border-radius: 1rem;
  position: absolute;
  z-index: 2;
  left: calc(56.8125rem - 16rem);
  top: 3.44rem;
`;

const DDayCountdownBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 4.25rem;
  border-radius: 0rem 0rem 1rem 1rem;
  background: #72d49b;
  position: absolute;
  bottom: 0;
`;

const CompetitionPastBox = styled.div`
  margin-bottom: 15.94rem;

  #competitionStroke {
    width: 79.9395rem;
    height: 0.0625rem;
    background: rgba(114, 212, 155, 0.5);
    margin-top: 3.44rem;
  }

  h1 {
    color: #000;
    font-family: "Gmarket Sans TTF";
    font-size: 1.5rem;
    font-weight: 500;
    margin-top: 2.25rem;
    margin-bottom: 3.25rem;
    margin-left: 7.25rem;
  }
`;

const CompetitionPast = styled.div`
  h2 {
    color: #000;
    font-family: "Gmarket Sans TTF";
    font-size: 1.6875rem;
    font-weight: 500;
    margin-top: 1.62rem;
  }

  #competitionPastStroke {
    width: 20.3125rem;
    height: 0.0625rem;
    background: #72d49b;
    margin-top: 0.94rem;
    margin-bottom: 1.06rem;
  }

  p {
    color: #000;
    font-family: "Gmarket Sans TTF";
    font-size: 1rem;
    font-weight: 300;
  }

  span {
    font-weight: 500;
  }
`;

const CompetitionPastImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 80rem;
  margin-top: 2rem;
  gap: 2.56rem;
`;

const CompetitionPastImgBox = styled.div<{ img: string }>`
  width: 20.3125rem;
  height: 12.8125rem;
  border-radius: 1rem;
  background: rgba(114, 212, 155, 0.2);
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
`;
