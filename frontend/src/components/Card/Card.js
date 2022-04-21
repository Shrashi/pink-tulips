import React from "react";
import { FaAngleRight } from "react-icons/fa";
import styled from "styled-components";

const StyledCardContainer = styled.div`
  border: solid #d1ccc0 1px;
  padding: 10px;
  min-width: 250px;
  height: 150px;
  margin: 0px 10px;
  flex-shrink: 0;
  background: #fafafa;
  box-shadow: 10px 10px 7px -6px rgba(222, 139, 139, 0.78);
`;
const StyledHeader = styled.div`
  margin-bottom: 10px;
`;
const StyledFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
`;
const StyledCardBody = styled.div`
  font-size: 10px;
  margin-bottom: 10px;
`;

const StyledClickText = styled.span`
  
  font-size: 15px;
  font-weight:600;
    color: ${({ theme }) => theme.background.primary};
    
}
`;
const StyledAngle = styled(FaAngleRight)`
  margin-bottom: -2px;
  color: ${({ theme }) => theme.background.primary};
`;
const StyledCardImage = styled.div`
  margin-bottom: 10px;
`;

const Card = ({
  headerText,
  footerText,
  clickText,
  cardImg,
  subHeaderText,
}) => {
  return (
    <StyledCardContainer>
      <StyledCardImage>
        <img src={cardImg} alt="card-image" width="40" height="40" />
      </StyledCardImage>
      <StyledHeader>{headerText}</StyledHeader>

      <StyledCardBody>{subHeaderText}</StyledCardBody>

      <StyledFooter>
        <i>{footerText}</i>
        <StyledClickText>
          {clickText}
          <StyledAngle></StyledAngle>
        </StyledClickText>
      </StyledFooter>
    </StyledCardContainer>
  );
};

export default Card;
