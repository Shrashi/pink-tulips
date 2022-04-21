import React from "react";
import Card from "../Card/Card";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import styled from "styled-components";
import { CARD_CAROUSEL_ITEMS } from "../../utils/constants";

const StyledCarouselContainer = styled.div`
  background: #bddaf0;
  width: 100%;
  height: 150px;
  overflow-x: auto;
`;
const StyledHeaderText = styled.div`
  position: absolute;
  top: 100px;
  margin-left: 10px;
`;
const StyledLeftControlSpan = styled.span`
  position: absolute;
  top: 92px;
  right: 95px;
  color: ${({ theme }) => theme.background.primary};
`;
const StyledRightControlSpan = styled.span`
  position: absolute;
  top: 92px;
  right: 52px;
  color: ${({ theme }) => theme.background.primary};
`;
const StyledTextContainer = styled.div`
  width: 120px;
  height: 150px;
`;
const StyledBackgroundText = styled.div`
  position: absolute;
  top: 132px;
  margin-left: 10px;
`;
const StyledCarouselItems = styled.div`
  position: absolute;

  top: 121px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  left: 100px;
  overflow: auto;
  max-width: 90vw;
`;
const StyledArrowLeft = styled(FaArrowLeft)``;
const StyledArrowRight = styled(FaArrowRight)``;
const CardCarousel = ({ backgroundText, headerText, children }) => {
  return (
    <StyledCarouselContainer>
      <StyledTextContainer>
        <StyledHeaderText>{headerText}</StyledHeaderText>
        <StyledBackgroundText>{backgroundText}</StyledBackgroundText>
      </StyledTextContainer>
      <StyledLeftControlSpan>
        <StyledArrowLeft></StyledArrowLeft>
      </StyledLeftControlSpan>
      <StyledRightControlSpan>
        <StyledArrowRight></StyledArrowRight>
      </StyledRightControlSpan>
      <StyledCarouselItems>
        {CARD_CAROUSEL_ITEMS.map((ele) => {
          return (
            <Card
              headerText={ele.headerText}
              footerText={ele.footerText}
              clickText={ele.clickText}
              cardImg={ele.cardImg}
              subHeaderText={ele.subHeaderText}
            />
          );
        })}
      </StyledCarouselItems>
    </StyledCarouselContainer>
  );
};

export default CardCarousel;
