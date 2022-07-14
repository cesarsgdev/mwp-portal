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
  width: 100%;
  height: fit-content;
  padding: 5px 0;
  border-radius: 5px;
  background: #fff;

  & .listHeader {
    display: flex;
    flex-flow: row nowrap;
    gap: 5px;
    width: 100%;
    height: 75px;
    background: #fff;
  }

  & .lhColumn {
    height: 100%;
  }

  & .lhColumnLeft {
    flex: 1 0 40%;
  }

  & .lhColumnRight {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 10px;
    flex: 1 0 40%;
  }

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
    height: 70px;
    background: #fff;
    cursor: pointer;
    transition: 0.5s;
  }

  & tbody tr:not(:last-child) {
    border-bottom: 1px solid rgb(245, 245, 245);
  }

  & tbody tr:hover {
    background: rgba(250, 250, 250);
  }
  & td {
    text-align: center;
    border: none;
    font-weight: 700;
  }

  & .taskLoader tr {
    background: rgba(220, 220, 220);
    height: 70px;
    width: 100%;
    animation: ${loader} 1s;
    animation-iteration-count: infinite;
  }
`;
