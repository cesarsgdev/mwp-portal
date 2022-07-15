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
  display: flex;
  align-items: center;
  width: 100%;
  height: fit-content;
  gap: 10px;

  & div.websiteHeaderColumn {
    display: flex;
    flex-flow: row nowrap;
    height: 100%;
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

  & div.whcL {
    justify-content: flex-start;
  }

  & div.whcR {
    justify-content: flex-end;
  }

  & div.loaderHeaderButton {
    width: 200px;
    height: 40px;
    border-radius: 5px;
    animation: ${loader} 1s;
    animation-iteration-count: infinite;
  }
`;
