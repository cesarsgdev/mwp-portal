import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 100%;
  max-width: 200px;
  font-family: var(--main-font), sans-serif;
  font-size: 18px;
  line-height: 1;
  letter-spacing: -0.5px;
  font-weight: 700;
  height: 40px;
  border: none;
  border-radius: 5px;
  background: ${({ dark }) => (dark ? "var(--main)" : "var(--main-sub)")};
  transition: 0.5s;
  color: #fff;

  & svg {
    font-size: 20px;
    line-height: 1;
  }

  &:hover {
    background: ${({ dark }) =>
      dark ? "var(--secondary)" : "var(--secondary-sub)"};
    cursor: pointer;
  }
`;
