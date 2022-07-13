import styled, { keyframes } from "styled-components";

export const ContentContainer = styled.main`
  display: flex;
  flex-flow: column;
  gap: 20px;
  padding: 20px;
  user-select: none;

  & h1 svg {
    font-size: 36px;
    color: var(--main-sub);
    margin-bottom: -6px;
  }
`;
