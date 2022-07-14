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
  justify-content: flex-end;
  align-items: center;

  width: 100%;
  height: fit-content;

  & div {
    width: 200px;
    height: 40px;
    border-radius: 5px;
    animation: ${loader} 1s;
    animation-iteration-count: infinite;
  }
`;
