import { useNavigate } from "react-router-dom";
import { Button } from "./styled/Button.styled";

const LinkButton = ({ to, icon, children, dark }) => {
  const navigate = useNavigate();
  return (
    <>
      <Button
        onClick={(e) => {
          navigate(to);
        }}
        dark={dark}
      >
        {icon} {children}
      </Button>
    </>
  );
};

export default LinkButton;
