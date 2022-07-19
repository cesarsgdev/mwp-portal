import { useContext } from "react";
import { NewTaskContext } from "./context/NewTaskContext";

const Summary = ({ formState, editFunction }) => {
  const context = useContext(NewTaskContext);
  return (
    <div className="animationWrapper">
      <h1>Your task summary...</h1>
      <span>{context.form.category}</span>
      <span>{context.form.name}</span>
      <span>{context.form.url}</span>
      <span>{context.form.instructions}</span>
      <button
        page={1}
        onClick={(e) => {
          context.handleEdit(e);
        }}
      >
        Back to animation
      </button>
    </div>
  );
};

export default Summary;
