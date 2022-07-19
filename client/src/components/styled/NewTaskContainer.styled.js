import styled from "styled-components";

export const NewTaskContainer = styled.main`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  flex-flow: column;
  gap: 40px;
  border-bottom: 20px solid var(--main);
  ${({ justify }) => (justify ? "justify-content:" + justify + ";" : "")}
  ${({ align }) => (align ? "align-items:" + align + ";" : "")}
  ${({ background }) => (background ? "background:" + background + ";" : null)}

  & div.exitNewTask {
    display: flex;
    justify-content: center;
    align-items: center;
    top: 50px;
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

  & .animationWrapper {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
    width: 80%;
  }

  & .taskCategories {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
    grid-auto-rows: min-content;
    width: 100%;
  }

  & .taskCategories button {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    background: transparent;
    border: 4px solid var(--main);
    padding: 20px;
    border-radius: 5px;
    transition: 1s;
    cursor: pointer;
    user-select: none;
  }

  & .taskCategories button:hover {
    background: var(--gray);
    border: 4px solid var(--main-sub);
  }

  & .taskCategories button:focus,
  .taskCategories .categoryActive {
    background: var(--gray);
    border: 4px solid var(--main-sub);
    outline: none;
  }

  & .taskCategories button img {
    pointer-events: none;
    width: 75px;
  }

  & .taskCategories button h3 {
    pointer-events: none;
    font-size: 18px;
    text-align: center;
  }

  & label {
    position: relative;
    width: 100%;
    display: flex;
    flex-flow: column;
  }

  & label h2 {
    text-transform: uppercase;
    letter-spacing: -1px;
    color: rgba(75, 75, 75, 1);
  }

  & label > span {
    color: rgba(150, 150, 150, 1);
  }

  & label input[type="text"],
  label textarea {
    font-family: var(--main-font), sans-serif;
    font-size: 18px;
    padding: 0px 10px;
    margin-top: 20px;
    border: 2px solid lightgray;
    border-radius: 5px;
  }

  & label input[type="text"] {
    width: 50%;
    height: 40px;
  }

  & label textarea {
    padding: 10px;
    resize: none;
  }

  & label input[type="text"] {
    font-family: var(--main-font), sans-serif;
    font-size: 18px;
    padding: 0px 10px;
    height: 40px;
    margin-top: 10px;
  }

  & label input[type="text"]:focus,
  label textarea:focus {
    outline: 0;
    border-color: var(--main-sub);
  }

  & .actionButtons {
    width: 100%;
    display: flex;
    gap: 10px;
    justify-content: flex-end;
  }

  & .animationWrapper button.btnNext {
    align-self: flex-end;
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
  }

  & .animationWrapper button.btnNext:hover {
    background: var(--secondary);
    cursor: pointer;
  }

  & .formWebsiteList {
    display: flex;
    flex-flow: column nowrap;
    position: absolute;
    width: 50%;
    height: fit-content;
    max-height: 200px;
    overflow: scroll;
    z-index: 1000;
    top: 100%;
    background: #fff;
    border-radius: 5px;
    box-shadow: 3px 3px 10px var(--gray);
    transition: 0.5s;
  }

  & .formWebsiteList button,
  .formWebsiteList > span {
    font-family: var(--main-font);
    font-size: 18px;
    font-weight: 700;
    letter-spacing: -0.5px;
    flex: 1 0 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: transparent;
    padding: 0 10px;
    border: 0;
    transition: 0.5s;
  }

  .formWebsiteList div {
    display: flex;
    align-items: center;
    gap: 5px;
    pointer-events: none;
  }

  .formWebsiteList div svg {
    color: var(--gray-medium);
    font-size: 16px;
    pointer-events: none;
  }

  & .formWebsiteList > span {
    color: var(--gray-medium);
    pointer-events: none;
  }

  & .formWebsiteList button:hover {
    cursor: pointer;
    background: var(--main);
    color: #fff;
  }

  & .formWebsiteList button span {
    font-size: 14px;
    color: var(--gray-medium);
  }

  & .formWebsiteList button:hover span,
  .formWebsiteList button:hover svg {
    color: rgba(255, 255, 255, 0.5);
  }

  & .chosenWebsite {
    display: flex;
    align-items: center;
    width: 50%;
    font-family: var(--main-font), sans-serif;
    font-size: 18px;
    padding: 0px;
    height: 40px;
    margin-top: 10px;
    /* background: #fff;
    border: 2px solid lightgray;
    border-radius: 5px; */
  }

  & .chosenWebsite > span {
    display: flex;
    align-items: center;
    gap: 10px;
    background: var(--main);
    font-size: 18px;
    color: #fff;
    padding: 5px 10px;
    border-radius: 5px;
    font-weight: 700;
    letter-spacing: -0.5px;
  }

  & .chosenWebsite .removeWebsite {
    font-size: 20px;
    color: rgba(255, 255, 255, 0.5);
  }

  & .chosenWebsite .removeWebsite:hover {
    cursor: pointer;
  }
`;
