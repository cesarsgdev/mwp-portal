import { useState } from "react";
import LoginError from "./LoginError";
import { Oval } from "react-loader-spinner";

const LoginForm = ({ activeForm, changeStatus }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginIn, setLoginIn] = useState(false);
  const [error, setError] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoginIn(true);
    setError(false);

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    };

    fetch("api/login", options)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          console.log(data);
          setEmail("");
          setPassword("");
          setLoginIn(false);
          localStorage.setItem("token", data.token);
          changeStatus();
        } else {
          console.log(data);
          setLoginIn(false);
          setError(data);
        }
      })
      .catch((e) => {
        console.log(e.message);
      });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Login to your account</h1>
        {error && <LoginError message={error.message} />}
        <div className="inputsContainer">
          <label>
            Email
            <input
              type="text"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </label>
          <label>
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </label>
          {!loginIn && <input type="submit" value="Login" />}
          {loginIn && (
            <button className="loginIn" disabled>
              <Oval
                width={20}
                height={20}
                color="var(--main-sub)"
                secondaryColor="var(--terciary-sub)"
              />{" "}
              Login
            </button>
          )}
        </div>
        <button
          onClick={(e) => {
            activeForm(e, "forgot");
          }}
        >
          Forgot pasword?
        </button>
      </form>
    </>
  );
};

export default LoginForm;
