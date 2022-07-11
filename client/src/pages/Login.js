import { useState } from "react";
import { MainContainer } from "../components/styled/MainContainer.styled";
import { LoginFormContainer } from "../components/styled/LoginFormContainer";
import LoginForm from "../components/LoginForm";
import ForgotPassword from "../components/ForgotPassword";
import logo from "../logo.png";
import { Navigate } from "react-router-dom";

const Login = () => {
  const [logedIn, setLogedIn] = useState(false);
  const [activeForm, setActiveForm] = useState("login");
  const token = localStorage.getItem("token");

  const handleChangeStatus = () => {
    setLogedIn(true);
  };

  const handleActiveForm = (e, form) => {
    e.preventDefault();
    setActiveForm(form);
  };

  if (logedIn || token) return <Navigate to="/" />;

  return (
    <>
      <MainContainer background="var(--main)" justify="center" align="center">
        <LoginFormContainer>
          <div className="loginLogo">
            <img alt="Macro WP Logo" src={logo} />
          </div>
          {activeForm === "login" && (
            <LoginForm
              activeForm={handleActiveForm}
              changeStatus={handleChangeStatus}
            />
          )}
          {activeForm === "forgot" && (
            <ForgotPassword activeForm={handleActiveForm} />
          )}
        </LoginFormContainer>
      </MainContainer>
    </>
  );
};

export default Login;
