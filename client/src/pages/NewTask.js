import { useEffect, useState } from "react";
import { NewTaskContainer } from "../components/styled/NewTaskContainer.styled";
import { useCheckAuth } from "../hooks/useCheckAuth";
import { Navigate, useNavigate } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5";
import Categories from "../components/forms/task/Categories";
import Details from "../components/forms/task/Details";
import Summary from "../components/forms/task/Summary";
import { NewTaskFormProgressContainer } from "../components/styled/NewTaskFormProgressContainer.styled";
import { CSSTransition } from "react-transition-group";
import "../animations.css";
import { useTitle } from "../hooks/useTitle";

const NewTask = () => {
  const { token, isExpired } = useCheckAuth();
  const [progress, setProgress] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [transitions, setTransitions] = useState([false, false, false, false]);
  const [form, setForm] = useState({
    category: "",
    name: "",
    website: "",
    instructions: "",
  });
  const navigate = useNavigate();

  useTitle();

  useEffect(() => {
    if (currentPage === 0) {
      const temp = transitions;
      temp[currentPage] = true;
      setTransitions([...temp]);
    } else {
      const temp = transitions;
      temp[currentPage - 1] = false;
      setTimeout(() => {
        temp[currentPage] = true;
        setTransitions([...temp]);
      }, 200);
    }
  }, [currentPage]);

  const prevPage = () => {
    setCurrentPage((page) => page - 1);
  };
  const nextPage = () => {
    setProgress((progress) => progress + 25);
    setCurrentPage((page) => page + 1);
  };

  const handleFormChange = (e) => {
    setForm((form) => {
      return {
        ...form,
        [e.target.name]:
          e.target.value || e.target.getAttribute("categoryname") || "",
      };
    });
  };

  const handleEdit = (e) => {
    const targetPage = Number(e.target.getAttribute("page"));
    setProgress((progress) => targetPage * 25);
    switch (targetPage) {
      case 0:
        setCurrentPage((page) => targetPage);
        break;
      case 1:
        setCurrentPage((page) => targetPage);
        break;
      default:
        break;
    }
  };

  if (!token || isExpired) return <Navigate to="/login"></Navigate>;

  return (
    <>
      <NewTaskContainer justify="center" align="center">
        <NewTaskFormProgressContainer progress={progress}>
          <div className="progressFormBar" data-progress={progress}>
            {progress > 0 ? `${progress}%` : null}
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
        {currentPage === 0 && (
          <CSSTransition
            in={transitions[currentPage]}
            timeout={{
              appear: 1000,
              enter: 1000,
              exit: 200,
            }}
            classNames="taskForm"
            mountOnEnter={true}
            unmountOnExit={true}
          >
            <Categories
              selectCategory={nextPage}
              setCategory={handleFormChange}
              formState={form}
            />
          </CSSTransition>
        )}

        {currentPage === 1 && (
          <CSSTransition
            in={transitions[currentPage]}
            timeout={{
              appear: 1000,
              enter: 1000,
              exit: 200,
            }}
            classNames="taskForm"
            mountOnEnter={true}
            unmountOnExit={true}
          >
            <Details
              formState={form}
              changeForm={handleFormChange}
              nextPage={nextPage}
            />
          </CSSTransition>
        )}

        {currentPage === 2 && (
          <CSSTransition
            in={transitions[currentPage]}
            timeout={{
              appear: 1000,
              enter: 1000,
              exit: 200,
            }}
            classNames="taskForm"
            mountOnEnter={true}
            unmountOnExit={true}
          >
            <Summary formState={form} editFunction={handleEdit} />
          </CSSTransition>
        )}
      </NewTaskContainer>
    </>
  );
};
export default NewTask;
