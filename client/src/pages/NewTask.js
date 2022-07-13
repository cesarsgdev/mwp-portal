import { NewTaskContainer } from "../components/styled/NewTaskContainer.styled";
import { useCheckAuth } from "../hooks/useCheckAuth";
import { Navigate } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5";
import Categories from "../components/forms/task/Categories";

const NewTask = () => {
  const { token, isExpired } = useCheckAuth();

  if (!token || isExpired) return <Navigate to="/login"></Navigate>;

  return (
    <>
      <NewTaskContainer justify="center" align="center">
        <div className="exitNewTask">
          <IoChevronBack />
        </div>
        <Categories />
      </NewTaskContainer>
    </>
  );
};
export default NewTask;
