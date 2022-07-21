import { useContext } from "react";
import { NewTaskContext } from "./context/NewTaskContext";

const Summary = () => {
  const context = useContext(NewTaskContext);
  return <div className="animationWrapper"></div>;
};

export default Summary;
