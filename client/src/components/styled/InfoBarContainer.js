import styled from "styled-components";

export const InfoBarContainer = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 80px;
  padding: 10px 40px;
  background: #fff;
  border-bottom: 1px solid rgb(235, 235, 235);
  user-select: none;

  & button.userButton {
    position: relative;
    display: flex;
    align-items: center;
    gap: 5px;
    background: transparent;
    border: none;
    font-family: var(--main-font);
    font-size: 18px;
    font-weight: 700;
    letter-spacing: -0.5px;
    cursor: pointer;
  }

  & button.userButton span {
    width: 35px;
    height: 35px;
    line-height: 35px;
    font-size: 16px;
    text-align: center;
    background: var(--gray);
    border-radius: 50%;
  }

  & button.userButton > svg {
    font-size: 20px;
    vertical-align: middle;
  }

  & .userOptions {
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    align-items: center;
    position: absolute;
    height: fit-content;
    background: var(--main);
    width: 100%;
    padding: 5px;
    color: #fff;
    top: calc(100% + 10px);
    cursor: default;
    border-radius: 3px;
  }

  & .userOptions div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 10px;
    font-family: var(--main-font), sans-serif;
    font-size: 18px;
    letter-spacing: -0.5px;
    gap: 5px;
    color: #fff;
    width: 100%;
    background: transparent;
    border: none;
    transition: 0.5s;
    cursor: pointer;
  }

  & .userOptions div:hover {
    color: var(--main-sub);
  }

  & .userOptions div:nth-child(1) {
    border-bottom: 1px solid var(--terciary);
  }

  & .userOptions svg {
    font-size: 16px;
  }
`;
