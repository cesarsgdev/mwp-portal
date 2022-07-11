import { NavContainer } from "./styled/NavContainer.styled";
import logo from "../logo.png";
import NavMenu from "./NavMenu";

const Nav = () => {
  return (
    <>
      <NavContainer>
        <img src={logo} alt="Macro WP Logo" />
        <NavMenu />
      </NavContainer>
    </>
  );
};

export default Nav;
