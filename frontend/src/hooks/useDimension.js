import React, { useEffect, useState, useMemo } from "react";

import { breakPoints } from "../utils/constants";

export default function useDimension() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const { extraSmall, small, medium } = breakPoints;
  const checkWidth = (w) => {
    if (w <= extraSmall) {
      return "xs";
    } else if (extraSmall < w <= small) {
      return "sm";
    } else if (medium >= w > small) {
      return "md";
    } else if (w > medium) {
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
  useEffect(() => {
    window.addEventListener("resize", onSizeChange);
    return () => {
      window.removeEventListener("resize", onSizeChange);
    };
  }, []);
  return [width, height, screenSize];
}
