import React, { useEffect, useState } from "react";

export default function useDimension() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

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
  return [width, height];
}
