import styled from "styled-components";

export const NewTaskFormProgressContainer = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 25px;

  & div.progressFormBar {
    display: flex;
    justify-content: flex-end;
    font-size: 14px;
    color: #fff;
    font-weight: 700;
    letter-spacing: 2px;
    position: relative;
    width: ${({ progress }) => (progress ? `${progress}%` : "1px")};
    height: 100%;
    padding: 2px;
    background: var(--main-sub);
    transition: 1s;
  }

  & div.progressFormBar::after {
    display: none;
    content: attr(data-progress) "%";
    font-family: var(--main-font), sans-serif;
    font-weight: 700;
    position: absolute;
    width: 25px;
    height: 14px;
    line-height: 14px;
    font-size: 14px;
    top: calc(100% + 4px);
    left: calc(100% - 17.5px);
    border: 2px solid black;
    background: var(--main);
    color: #fff;
    padding: 5px;
    border-radius: 3px;
    text-align: center;
  }
`;
