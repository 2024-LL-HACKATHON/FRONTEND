import React from "react";
import styled from "styled-components";

interface Props {
  participateBackgroundColor: string;
  participateBorderColor: string;
  participateTextColor: string;
  recommendBackgroundColor: string;
  recommendBorderColor: string;
  recommendTextColor: string;
  onParticipateClick: () => void;
  onRecommendClick: () => void;
}

const ParticipationSwitchButtonComponent: React.FC<Props> = ({
  participateBackgroundColor,
  participateBorderColor,
  participateTextColor,
  recommendBackgroundColor,
  recommendBorderColor,
  recommendTextColor,
  onParticipateClick,
  onRecommendClick,
}) => {
  return (
    <ParticipationSwitchButtonBoxWrapper>
      <ParticipateButton
        backgroundColor={participateBackgroundColor}
        borderColor={participateBorderColor}
        textColor={participateTextColor}
        onClick={onParticipateClick}
      >
        참가하기
      </ParticipateButton>
      <RecommendButton
        backgroundColor={recommendBackgroundColor}
        borderColor={recommendBorderColor}
        textColor={recommendTextColor}
        onClick={onRecommendClick}
      >
        추천하러 가기
      </RecommendButton>
    </ParticipationSwitchButtonBoxWrapper>
  );
};

const ParticipationSwitchButtonBoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 6.75rem;
  margin-top: 4rem;
  gap: 2.37rem;
`;

const ParticipateButton = styled.div<{
  backgroundColor: string;
  borderColor: string;
  textColor: string;
}>`
  width: 8.625rem;
  height: 3.625rem;
  border-radius: 1rem;
  border: 1px solid ${(props) => props.borderColor};
  background: ${(props) => props.backgroundColor};
  color: ${(props) => props.textColor};
  font-family: "Gmarket Sans TTF";
  font-size: 1.25rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const RecommendButton = styled.div<{
  backgroundColor: string;
  borderColor: string;
  textColor: string;
}>`
  width: 10.5625rem;
  height: 3.625rem;
  border-radius: 1rem;
  border: 1px solid ${(props) => props.borderColor};
  background: ${(props) => props.backgroundColor};
  color: ${(props) => props.textColor};
  font-family: "Gmarket Sans TTF";
  font-size: 1.25rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export default ParticipationSwitchButtonComponent;
