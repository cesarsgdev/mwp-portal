import styled from "styled-components";

export const NavContainer = styled.section`
  position: sticky;
  top: 0;
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
  }

  & li a {
    display: flex;
    gap: 20px;
    font-family: var(--main-font);
    font-size: 18px;
    font-weight: 700;
    color: #fff;
    text-decoration: none;
    transition: 0.5s;
    padding: 15px;
    border-left: 2.5px solid var(--main);
  }

  & li a:hover {
    color: var(--main-sub);
    border-left: 2.5px solid var(--main-sub);
  }

  & .activeSection {
    color: var(--main-sub);
    border-left: 2.5px solid var(--main-sub);
  }
`;
