import styled, { keyframes } from "styled-components";

const loader = keyframes`
    0% {
      background: rgba(225, 225, 225);
  }

  33% {
    background: rgba(235, 235, 235);
  }

  66%{
    background: rgba(235, 235, 235);

  }

  100% {
      background: rgba(225, 225, 225);
  }
  `;

export const TaskListContainer = styled.div`
  & table {
    border-radius: 5px;
  }

  & table,
  tbody {
    width: 100%;
    border-collapse: collapse;
  }

  & thead {
    font-size: 12px;
    text-transform: uppercase;
    color: rgba(175, 175, 175);
    height: 50px;
    background: rgb(240, 240, 240);
  }

  & tbody {
  }
  & tbody tr {
    height: 80px;
    background: #fff;
    cursor: pointer;
    border-bottom: 10px solid rgba(245, 245, 245);
    border-top: 10px solid rgba(245, 245, 245);
    transition: 0.5s;
  }

  & tbody tr:hover {
    background: rgba(250, 250, 250);
    transform: scale(1.0075);
  }
  & td {
    text-align: center;
    border: none;
    font-weight: 700;
  }

  & .taskLoader tr {
    background: rgba(220, 220, 220);
    height: 80px;
    width: 100%;
    animation: ${loader} 1s;
    animation-iteration-count: infinite;
  }
`;
