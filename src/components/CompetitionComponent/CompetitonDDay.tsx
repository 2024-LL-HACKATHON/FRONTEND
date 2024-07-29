import React, { useState, useEffect } from "react";
import styled from "styled-components";

const DDayCountdown = ({ deadline }: { deadline: Date }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(deadline) - +new Date();
    let timeLeft: { [key: string]: number } = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [deadline]);

  return (
    <CountdownContainer>
      {Object.keys(timeLeft).length > 0 ? (
        <TimeUnitsContainer>
          남은기간:
          <TimeUnit>
            <span>{timeLeft.days}</span> 일
          </TimeUnit>
          <TimeUnit>
            <span>{timeLeft.hours}</span> 시간
          </TimeUnit>
          <TimeUnit>
            <span>{timeLeft.minutes}</span> 분
          </TimeUnit>
          <TimeUnit>
            <span>{timeLeft.seconds}</span> 초
          </TimeUnit>
        </TimeUnitsContainer>
      ) : (
        <div>마감된 경진대회 입니다.</div>
      )}
    </CountdownContainer>
  );
};

const CountdownContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const TimeUnitsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
  text-align: center;
  font-family: "Gmarket Sans TTF";
  font-size: 1.6875rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  font-size: 1.25rem;
  font-weight: bold;
`;

const TimeUnit = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0.5rem;
 
`;

export default DDayCountdown;
