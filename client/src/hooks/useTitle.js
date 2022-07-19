import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useTitle = () => {
  const location = useLocation();
  useEffect(() => {
    let title = location.pathname
      .split("/")[1]
      .split("")
      .map((letter, i) => (i === 0 ? letter.toUpperCase() : letter))
      .join("");

    if (title.includes("-")) {
      title = title.replace("-", " ");
    }
    document.title = `${title} | Macro WP`;
  }, []);
};
