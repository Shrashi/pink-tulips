import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

import BaseService from "../../services/BaseService";

const ImgStyled = styled.img`
width:900px
display: inline-block;

height: 220px;
width: 100%;
`;

const ImgShiftLeftStyled = styled(FaAngleDoubleLeft)`
  color: ${({ theme }) => theme.background.primary};
  display: inline-block;
  position: absolute;
  left: 40px;
  top: 110px;
  width: 25px;
  height: 25px;
  cursor: pointer;
`;
const ListStyled = styled.ul`
  position: absolute;
  list-style: none;
  display: flex;

  bottom: -28px;
  justify-content: center;
  width: 95vw;
`;
const ListItemStyled = styled.li`
  border-radius: 50%;
  width: 8px;
  height: 8px;
  margin-right: 3px;
  background: ${({ theme, selected }) => theme.background[selected]};
`;
const ImgShiftRightStyled = styled(FaAngleDoubleRight)`
  color: ${({ theme }) => theme.background.primary};
  display: inline-block;
  position: absolute;
  right: 40px;
  top: 110px;
  width: 25px;
  height: 25px;
  cursor: pointer;
`;
const SpanStyled = styled.span`
  width: 20px;
  height: 20px;
  top: -135px;
  padding: 20px;
  position: relative;
`;
const DivStyled = styled.div`
  margin-top: 20px;
  height: 200px;
  position: relative;
  padding: 20px;
`;

const Carousel = ({ imgConfig, onClickImg }) => {
  const [onImg, setOnImg] = useState(0);
  const [currentImg, setCurrentImg] = useState();
  useEffect(() => {
    const img = imgConfig.at(onImg);
    setCurrentImg(img);
  }, [onImg]);

  const onClickCarouselButton = (isLeft) => {
    return isLeft
      ? () => {
          if (onImg > 0 && onImg <= imgConfig.length) {
            setOnImg(onImg - 1);
          } else {
            setOnImg(imgConfig.length - 1);
          }
        }
      : () => {
          if (onImg >= 0 && onImg < imgConfig.length - 1) {
            setOnImg(onImg + 1);
          } else {
            setOnImg(0);
          }
        };
  };
  const onClickImage = (currImg) => {
    onClickImg && onClickImg(currImg);
  };
  if (!currentImg) {
    return null;
  }
  const { src: imgSrc, alt: imgAlt, imageNo: imgNo } = currentImg;

  return (
    <DivStyled>
      <ImgShiftLeftStyled
        onClick={onClickCarouselButton(true)}
      ></ImgShiftLeftStyled>
      <ImgStyled src={imgSrc} alt={imgAlt} onClick={onClickImage(currentImg)} />
      <ImgShiftRightStyled
        onClick={onClickCarouselButton(false)}
      ></ImgShiftRightStyled>
      <CarouselIndicator config={imgConfig} imageNo={imgNo} />
    </DivStyled>
  );
};

const CarouselIndicator = ({ config, imageNo }) => {
  return (
    <ListStyled>
      {config.map((ele) => {
        const selected = ele.imageNo === imageNo ? "primary" : "secondary";
        return (
          <ListItemStyled
            selected={selected}
            key={ele.imageNo}
          ></ListItemStyled>
        );
      })}
    </ListStyled>
  );
};
export default Carousel;
