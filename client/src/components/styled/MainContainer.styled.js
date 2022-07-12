import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  ${({ justify }) => (justify ? "justify-content:" + justify + ";" : "")}
  ${({ align }) => (align ? "align-items:" + align + ";" : "")}
  ${({ background }) => (background ? "background:" + background + ";" : null)}

  & > div {
    display: flex;
    flex-flow: column;
    flex: 1 0 80%;
  }
`;
