import React, { useEffect, useState, useMemo } from "react";

import { BREAK_POINTS } from "../utils/constants";

export default function useDimension() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener("resize", onSizeChange);
    return () => {
      window.removeEventListener("resize", onSizeChange);
    };
  }, []);
  const { extraSmall, small, medium, large } = BREAK_POINTS;
  const checkWidth = (w) => {
    if (extraSmall <= w && w < small) {
      return "xs";
    } else if (small <= w && w < medium) {
      return "sm";
    } else if (medium <= w && w < large) {
      return "md";
    } else if (w >= large) {
      return "lg";
    }
  };

  const screenSize = useMemo(() => {
    return checkWidth(width);
  }, [width]);

  const onSizeChange = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  return { width, height, screenSize };
}
