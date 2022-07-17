import styled, { keyframes } from "styled-components";

const loader = keyframes`
    0% {
      background: rgba(200, 200, 200);
  }

  33% {
    background: rgba(235, 235, 235);
  }

  66%{
    background: rgba(235, 235, 235);

  }

  100% {
      background: rgba(200, 200, 200);
  }
  `;

export const WebsteListHeaderContainer = styled.section`
  background: var(--main);
  background: ${({ isLoader }) =>
    isLoader ? "var(--gray-medium)" : "var(--main)"};
  padding: 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  width: 100%;
  height: fit-content;
  gap: 10px;

  & div.websiteHeaderColumn {
    display: flex;
    flex-flow: row nowrap;
    height: 100%;
    gap: 10px;
    flex: 1 0 40%;
  }

  & input[type="text"] {
    font-family: var(--main-font);
    font-size: 16px;
    width: 200px;
    padding: 0 10px;
    border: 2px solid var(--gray-medium);
    border-radius: 5px;
  }

  & input[type="text"]:focus {
    outline: none;
    border-color: var(--main-sub);
  }

  & input[type="text"]::placeholder {
    color: var(--gray-medium);
  }

  & div.whcL {
    justify-content: flex-start;
  }

  & div.whcR {
    justify-content: flex-end;
  }

  & .websiteFilterContainer {
    height: 100%;
    position: relative;
  }

  & .websiteFilterContainer label {
    position: absolute;
    width: 100%;
    background: var(--main-sub);
    width: fit-content;
    padding: 2px;
    font-size: 12px;
    color: #fff;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
  }

  & button.websiteFilterOptions {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    font-family: var(--main), sans-serif;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: -0.5px;
    width: 200px;
    height: 100%;
    border: 0;
    border-radius: 5px;
    background: #fff;
    padding: 0 10px;
    border: 2px solid var(--terciary);
    cursor: pointer;
  }

  & .filterOptions {
    display: flex;
    flex-flow: column;
    position: absolute;
    width: 100%;
    height: fit-content;
    min-height: 50px;
    max-height: 150px;
    background: #fff;
    border-radius: 5px;
    box-shadow: 3px 3px 10px var(--gray);
  }

  & .filterOptions button {
    display: flex;
    font-family: var(--main), sans-serif;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: -0.5px;
    align-items: center;
    padding: 0 10px;
    height: 40px;
    background: transparent;
    transition: 0.5s;
    border: none;
  }

  & .filterOptions button:hover {
    background: var(--main);
    color: #fff;
    cursor: pointer;
  }

  & div.loaderHeaderButton {
    width: 200px;
    height: 40px;
    border-radius: 5px;
    animation: ${loader} 1s;
    animation-iteration-count: infinite;
  }
`;
