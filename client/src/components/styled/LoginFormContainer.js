import styled from "styled-components";

export const LoginFormContainer = styled.section`
  width: 25%;
  background: #fff;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  padding: 40px 20px;
  gap: 30px;
  border-radius: 5px;

  & form {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    gap: 30px;
    min-height: 300px;
    height: fit-content;
  }

  & p {
    text-align: center;
  }

  & .loginLogo {
    width: 60%;
    display: flex;
    justify-content: center;
    background: var(--main);
    padding: 20px;
    border-radius: 5px;
  }

  & .loginLogo img {
    width: 100%;
  }

  & .inputsContainer {
    display: flex;
    width: 100%;
    flex-flow: column;
    gap: 20px;
  }
  & .inputsContainer label {
    font-size: 18px;
    display: flex;
    flex-flow: column;
    gap: 5px;
  }

  & input[type="text"],
  input[type="password"] {
    font-family: var(--main-font);
    font-size: 18px;
    width: 100%;
    height: 40px;
    padding: 0 10px;
    border: 1px solid lightgray;
    border-radius: 3px;
    transition: 0.5s;
  }

  & input[type="text"]:focus,
  input[type="password"]:focus {
    border: 1px solid var(--main-sub);
    outline: none;
  }

  & input[type="submit"],
  button {
    background: var(--main-sub);
    border: 0;
    height: 50px;
    border-radius: 5px;
    font-family: var(--main-font);
    font-size: 18px;
    color: #fff;
    transition: 0.5s;
    cursor: pointer;
  }

  & input[type="submit"]:hover {
    background: var(--secondary-sub);
  }

  & button.loginIn {
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--error-warning);
    cursor: default;
  }

  & button {
    background: rgb(240, 240, 240);
    width: 65%;
    color: gray;
  }

  & button.loginIn {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--error-warning);
    color: #fff;
    cursor: default;
  }
`;
