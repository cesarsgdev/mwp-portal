import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { useLocation } from "react-router-dom";

export const useCheckAuth = () => {
  const token = localStorage.getItem("token");
  const [isExpired, setIsExpired] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const checkToken = () => {
      if (token) {
        const decoded = jwt_decode(token);
        if (Date.now() >= decoded.exp * 1000) {
          localStorage.removeItem("token");
          setIsExpired(true);
        }
      }
    };

    checkToken();
  }, [location.pathname]);

  return { token, isExpired };
};
