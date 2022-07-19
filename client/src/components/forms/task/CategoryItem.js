import { useContext } from "react";
import { NewTaskContext } from "./context/NewTaskContext";

const CategoryItem = ({ name, image }) => {
  const context = useContext(NewTaskContext);
  return (
    <>
      <button
        className={`categoryButton ${
          context.form?.category === name ? `categoryActive` : ``
        }`}
        name="category"
        categoryname={name}
        onClick={(e) => {
          context.handleFormChange(e);
          context.nextPage();
        }}
      >
        <img src={image} alt={name} />
        <h3>{name}</h3>
      </button>
    </>
  );
};

export default CategoryItem;
