import { useEffect, useState } from 'react';

const useWidth = () => {
  // Initialize state with initial width so server and client renders match
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    // Handler to call on window resize
    const handleResize = () => {
      // Set window width to state
      setWindowWidth(window.innerWidth);
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowWidth;
};

export { useWidth };
