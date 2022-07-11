import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import { MainContainer } from "./styled/MainContainer.styled";
import Nav from "./Nav";

const Layout = () => {
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

  return (
    <>
      <MainContainer>
        <Nav></Nav>
        {!token || isExpired ? <Navigate to="/login"></Navigate> : <Outlet />};
      </MainContainer>
    </>
  );
};

export default Layout;
