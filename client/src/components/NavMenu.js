import { NavLink } from "react-router-dom";
import { ImHome } from "react-icons/im";
import { FaTasks } from "react-icons/fa";
import { IoDocuments } from "react-icons/io5";
import { BsWordpress } from "react-icons/bs";
import { GiReceiveMoney } from "react-icons/gi";
import { BiSupport } from "react-icons/bi";

const NavMenu = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? `activeSection` : "")}
            >
              <ImHome />
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/tasks"
              className={({ isActive }) => (isActive ? `activeSection` : "")}
            >
              <FaTasks />
              Tasks
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/websites"
              className={({ isActive }) => (isActive ? `activeSection` : "")}
            >
              <BsWordpress />
              Websites
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/documentation"
              className={({ isActive }) => (isActive ? `activeSection` : "")}
            >
              <IoDocuments />
              Documentation
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/affiliates"
              className={({ isActive }) => (isActive ? `activeSection` : "")}
            >
              <GiReceiveMoney />
              Affiliates
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/support"
              className={({ isActive }) => (isActive ? `activeSection` : "")}
            >
              <BiSupport />
              Support
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavMenu;
