import { Outlet, Navigate } from "react-router-dom";
import { MainContainer } from "./styled/MainContainer.styled";
import { useCheckAuth } from "../hooks/useCheckAuth";
import Nav from "./Nav";
import InfoBar from "./InfoBar";
const Layout = () => {
  const { token, isExpired } = useCheckAuth();

  return (
    <>
      <MainContainer>
        <Nav></Nav>
        <div>
          {!token || isExpired ? null : <InfoBar />}
          {!token || isExpired ? <Navigate to="/login"></Navigate> : <Outlet />}
        </div>
      </MainContainer>
    </>
  );
};

export default Layout;
