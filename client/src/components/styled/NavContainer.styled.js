import styled from "styled-components";

export const NavContainer = styled.section`
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;
  gap: 40px;
  width: 240px;
  height: 100vh;
  background: var(--main);
  padding: 20px 0px;

  & img {
    width: 80%;
    height: auto;
  }

  & nav {
    width: 100%;
    user-select: none;
  }

  & ul {
    width: 100%;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  & li {
    margin: 20px 0;
  }

  & li a {
    display: flex;
    gap: 20px;
    font-family: var(--main-font);
    font-size: 16px;
    font-weight: 700;
    color: #fff;
    text-decoration: none;
    transition: 0.5s;
    padding: 0 20px;
  }

  & li a:hover {
    color: var(--main-sub);
  }

  & .activeSection {
    color: var(--main-sub);
  }
`;
