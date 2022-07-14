import { NavContainer } from "./styled/NavContainer.styled";
import logo from "../logo.png";
import NavMenu from "./NavMenu";
import { IoCreate } from "react-icons/io5";
import { Button } from "./styled/Button.styled";
import LinkButton from "./LinkButton";

const Nav = () => {
  return (
    <>
      <NavContainer>
        <img src={logo} alt="Macro WP Logo" />
        <LinkButton to="/new-task" icon={<IoCreate />}>
          Create Task
        </LinkButton>
        <NavMenu />
      </NavContainer>
    </>
  );
};

export default Nav;
