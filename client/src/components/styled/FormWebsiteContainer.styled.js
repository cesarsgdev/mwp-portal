import styled from "styled-components";

export const FormWebsiteContainer = styled.form`
  position: relative;
  display: flex;
  flex-flow: column wrap;
  gap: 25px;

  width: 50%;
  height: fit-content;
  min-height: 50%;
  background: #fff;
  padding: 40px;
  border-radius: 5px;

  & h1 {
    line-height: 1;
  }

  & label {
    display: flex;
    flex-flow: column nowrap;
    gap: 0px;
  }

  & label h2,
  .websiteCategory h2 {
    font-size: 18px;
    line-height: 1;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: -0.5px;
  }

  & label span {
    text-transform: none;
    font-weight: 400;
    color: rgba(150, 150, 150, 1);
    letter-spacing: -0.5px;
  }

  & label input[type="text"],
  label input[type="password"] {
    width: 100%;
    height: 40px;
    font-family: var(--main-font), sans-serif;
    font-size: 18px;
    padding: 0px 10px;
    margin-top: 5px;
    border: 2px solid lightgray;
    border-radius: 5px;
  }

  & label input[type="text"]:focus,
  label input[type="text"]:focus {
    outline: 0;
    border-color: var(--main-sub);
  }

  & input[type="submit"] {
    font-family: var(--main-font), sans-serif;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: -1px;
    width: 200px;
    height: 50px;
    background: var(--main);
    border: none;
    color: #fff;
    transition: 0.5s;
    border-radius: 5px;
    align-self: flex-end;
  }

  & input[type="submit"]:hover {
    background: var(--secondary);
    cursor: pointer;
  }

  & .websiteCategory {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    gap: 10px;
  }

  & .websiteCategory h2 {
    flex: 1 0 100%;
  }

  & svg.closeWebsiteForm {
    position: absolute;
    top: 0;
    right: 0;
    font-size: 36px;
    color: var(--main-sub);
    cursor: pointer;
  }
`;
