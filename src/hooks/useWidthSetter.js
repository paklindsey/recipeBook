import { useState, useEffect } from "react";

const useWidthSetter = () => {
  let [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  });
  return width;
};

export default useWidthSetter;
