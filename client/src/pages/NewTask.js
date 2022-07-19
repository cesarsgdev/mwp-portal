import { useTitle } from "../hooks/useTitle";
import { Navigate, useNavigate } from "react-router-dom";
import { useCheckAuth } from "../hooks/useCheckAuth";
import { useNewTask } from "../hooks/useNewTask";
import { NewTaskContext } from "../components/forms/task/context/NewTaskContext";
import { NewTaskContainer } from "../components/styled/NewTaskContainer.styled";
import { NewTaskFormProgressContainer } from "../components/styled/NewTaskFormProgressContainer.styled";
import { IoChevronBack } from "react-icons/io5";
import { CSSTransition } from "react-transition-group";
import Categories from "../components/forms/task/Categories";
import Details from "../components/forms/task/Details";
import Summary from "../components/forms/task/Summary";
import "../animations.css";

const NewTask = () => {
  // Check if use has an existing token and if it's not expired. If not authorized, redirect to login.
  const { token, isExpired } = useCheckAuth();
  const navigate = useNavigate();
  useTitle();
  const context = useNewTask();

  if (!token || isExpired) return <Navigate to="/login"></Navigate>;

  return (
    <>
      <NewTaskContext.Provider value={context}>
        <NewTaskContainer justify="center" align="center">
          <NewTaskFormProgressContainer progress={context.progress}>
            <div className="progressFormBar" data-progress={context.progress}>
              {context.progress > 0 ? `${context.progress}%` : null}
            </div>
          </NewTaskFormProgressContainer>
          <div
            className="exitNewTask"
            onClick={(e) => {
              navigate(-1);
            }}
          >
            <IoChevronBack />
          </div>
          {context.currentPage === 0 && (
            <CSSTransition
              in={context.transitions[context.currentPage]}
              timeout={{
                appear: 1000,
                enter: 1000,
                exit: 200,
              }}
              classNames="taskForm"
              mountOnEnter={true}
              unmountOnExit={true}
            >
              <Categories />
            </CSSTransition>
          )}

          {context.currentPage === 1 && (
            <CSSTransition
              in={context.transitions[context.currentPage]}
              timeout={{
                appear: 1000,
                enter: 1000,
                exit: 200,
              }}
              classNames="taskForm"
              mountOnEnter={true}
              unmountOnExit={true}
            >
              <Details />
            </CSSTransition>
          )}

          {context.currentPage === 2 && (
            <CSSTransition
              in={context.transitions[context.currentPage]}
              timeout={{
                appear: 1000,
                enter: 1000,
                exit: 200,
              }}
              classNames="taskForm"
              mountOnEnter={true}
              unmountOnExit={true}
            >
              <Summary />
            </CSSTransition>
          )}
        </NewTaskContainer>
      </NewTaskContext.Provider>
    </>
  );
};
export default NewTask;
