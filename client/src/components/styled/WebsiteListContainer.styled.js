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

export const WebsiteListContainer = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  gap: 20px;
  grid-auto-rows: min-content;
  height: fit-content;
  padding: 5px 0;

  & .websiteItem {
    height: 80px;
    border-radius: 5px;
    padding: 20px;
  }

  & .websiteItemActive {
    display: flex;
    flex-flow: column;
    background: #fff;
    box-shadow: 3px 3px 10px var(--gray);
  }

  & .websiteItem h3 {
    display: flex;
    flex-flow: row nowrap;
    gap: 5px;
    flex: 1 0 40%;
    align-items: center;
    font-size: 24px;
    font-weight: 700;
    letter-spacing: -0.5px;
  }

  & .websiteItem h3 svg {
    color: var(--gray-medium);
  }

  & .websiteItem h3 svg.wordPressIcon {
    font-size: 22px;
  }

  & .websiteItem h3 svg.wooIcon {
    font-size: 30px;
  }

  & .websiteItem h3 svg.visitSite {
    font-size: 18px;
    color: var(--main-sub);
  }

  & .websiteItemControls {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    gap: 10px;
    flex: 1 0 40%;
  }

  & .websiteItemControls svg {
    font-size: 18px;
    color: var(--main);
  }

  & .websiteItemControls svg.deleteIcon {
    color: var(--red);
  }

  & .websiteItemLoading {
    animation: ${loader} 1s;
    animation-iteration-count: infinite;
  }

  & .websiteItemTip {
    font-size: 14px;
    font-weight: 700;
    letter-spacing: -0.5px;
  }
`;
