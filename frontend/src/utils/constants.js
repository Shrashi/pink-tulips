import React from "react";

import img1 from "../assets/carousel-item1.jpg";
import img2 from "../assets/carousel-item2.jpg";
import img3 from "../assets/carousel-item3.jpg";
import img4 from "../assets/carousel-item4.jpg";
import img5 from "../assets/carousel-item5.jpg";

export const carouselItems = [
  {
    src: img1,
    alt: "first-carousel-item",
    imageNo: 0,
    url: "/url1",
  },
  {
    src: img2,
    alt: "second-carousel-item",
    imageNo: 1,
    url: "/url2",
  },
  {
    src: img3,
    alt: "third-carousel-item",
    imageNo: 2,
    url: "url3",
  },
  {
    src: img4,
    alt: "fourth-carousel-item",
    imageNo: 3,
    url: "/url3",
  },
  {
    src: img5,
    alt: "fifth-carousel-item",
    imageNo: 4,
    url: "/url4",
  },
];

export const ACTION_TYPES = {
  GET_LATEST_OFFERS: "GET_LATEST_OFFERS",
};

export const BREAK_POINTS = {
  extraSmall: 0,
  small: 600,
  medium: 900,
  large: 1200,
};
