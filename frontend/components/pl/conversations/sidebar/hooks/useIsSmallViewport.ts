import { useState, useEffect } from "react";

function useIsSmallViewport() {
  const [width, setWidth] = useState(
    typeof window == "undefined" ? 0 : window.innerWidth
  );
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return width <= 534;
}

export default useIsSmallViewport;
