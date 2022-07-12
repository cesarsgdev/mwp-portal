import { useState } from "react";
import jwt_decode from "jwt-decode";
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";
import { FiSettings, FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const UserInfo = ({ userInfo }) => {
  const token = localStorage.getItem("token");
  const decoded = jwt_decode(token);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleOpen = (e) => {
    setOpen(!open);
  };

  return (
    <>
      <div className="userButton" onClick={handleOpen}>
        <span class="initials">
          {decoded.name.split(" ")[0][0]}
          {decoded.name.split(" ")[1][0]}
        </span>
        {decoded.name}
        {open ? <RiArrowUpSFill /> : <RiArrowDownSFill />}
        {open && (
          <div className="userOptions">
            <button
              onClick={(e) => {
                console.log(`clicked settings`);
              }}
            >
              <FiSettings />
              Settings
            </button>
            <button
              onClick={() => {
                localStorage.removeItem("token");
                navigate("/login", { replace: true });
              }}
            >
              <FiLogOut />
              Logout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default UserInfo;
