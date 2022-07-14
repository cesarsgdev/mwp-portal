import styled from "styled-components";

export const WebsiteCategoryButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 150px;
  width: fit-content;
  height: fit-content;
  background: var(--main);
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  border: ${({ selected }) =>
    selected ? `4px solid var(--main-sub)` : `4px solid transparent`};

  & svg {
    pointer-events: none;
    font-size: 36px;
    color: #fff;
  }

  &:hover {
    cursor: pointer;
  }

  & .selectedCategory {
    border: 2px solid var(--main-sub);
  }
`;
