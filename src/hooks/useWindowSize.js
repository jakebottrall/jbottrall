import { useEffect, useState } from "react";

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerHeight,
    height: window.innerWidth,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // create event listener to update state if window size changes
    window.addEventListener("resize", handleResize);

    // Update state when component mounts
    handleResize();

    // cleanup by removing event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}
