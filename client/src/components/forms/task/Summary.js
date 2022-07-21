import { useContext } from "react";
import { NewTaskContext } from "./context/NewTaskContext";

const Summary = () => {
  const {
    form: { category, name, url, instructions },
    handleEdit,
  } = useContext(NewTaskContext);
  return (
    <div className="animationWrapper">
      <h1>Task Summary</h1>
      <table>
        <tbody>
          <tr>
            <th>
              Category
              <button
                page={0}
                onClick={(e) => {
                  handleEdit(e);
                }}
              >
                Edit
              </button>
            </th>
            <td>{category}</td>
          </tr>
          <tr>
            <th>
              Details
              <button
                page={1}
                onClick={(e) => {
                  handleEdit(e);
                }}
              >
                Edit
              </button>
            </th>
            <td className="detailsHead">Name</td>
            <td>{name}</td>
            <td className="detailsHead">Website</td>
            <td>{url}</td>
            <td className="detailsHead">Instructions</td>
            <td>{instructions}</td>
          </tr>
          <tr>
            <th>
              Files<button>Edit</button>
            </th>
            <td>Files placeholder...</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Summary;
