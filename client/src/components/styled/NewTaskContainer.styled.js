import styled from "styled-components";

export const NewTaskContainer = styled.main`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  ${({ justify }) => (justify ? "justify-content:" + justify + ";" : "")}
  ${({ align }) => (align ? "align-items:" + align + ";" : "")}
  ${({ background }) => (background ? "background:" + background + ";" : null)}

  & div.exitNewTask {
    display: flex;
    justify-content: center;
    align-items: center;
    top: 20px;
    left: 20px;
    position: absolute;
    border: 2px solid var(--main-sub);
    padding: 10px;
    border-radius: 3px;
    cursor: pointer;
  }

  & div.exitNewTask svg {
    font-size: 36px;
    font-weight: bold;
  }
`;
