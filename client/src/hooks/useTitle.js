import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useTitle = () => {
  const location = useLocation();
  useEffect(() => {
    const title = location.pathname
      .split("/")[1]
      .split("")
      .map((letter, i) => (i === 0 ? letter.toUpperCase() : letter))
      .join("");
    document.title = `${title} | Macro WP`;
  }, []);
};
