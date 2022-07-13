import { useState, useRef } from "react";
import jwt_decode from "jwt-decode";
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";
import { FiSettings, FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const UserInfo = () => {
  const token = localStorage.getItem("token");
  const decoded = jwt_decode(token);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const subMenu = useRef();

  const handleOpen = (e) => {
    setOpen(!open);
  };

  return (
    <>
      <button
        className="userButton"
        onClick={handleOpen}
        onBlur={(e) => {
          if (subMenu.current) {
            e.target.click();
          }
        }}
      >
        <span className="initials">
          {decoded.name.split(" ")[0][0]}
          {decoded.name.split(" ")[1][0]}
        </span>
        {decoded.name}
        {open ? <RiArrowUpSFill /> : <RiArrowDownSFill />}
        {open && (
          <div ref={subMenu} className="userOptions">
            <div
              onClick={(e) => {
                console.log(`clicked settings`);
              }}
            >
              <FiSettings />
              Settings
            </div>
            <div
              onClick={() => {
                localStorage.removeItem("token");
                navigate("/login", { replace: true });
              }}
            >
              <FiLogOut />
              Logout
            </div>
          </div>
        )}
      </button>
    </>
  );
};

export default UserInfo;
