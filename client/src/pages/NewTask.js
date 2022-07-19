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
import { useWebsites } from "../hooks/useWebsites";
import { NewTaskContext } from "../components/forms/task/context/NewTaskContext";

const NewTask = () => {
  // Check if use has an existing token and if it's not expired. If not authorized, redirect to login.
  const { token, isExpired } = useCheckAuth();
  const navigate = useNavigate();

  const [progress, setProgress] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [previousPage, setPreviousPage] = useState("");
  const [transitions, setTransitions] = useState([false, false, false, false]);
  const [form, setForm] = useState({
    category: "",
    name: "",
    url: "",
    instructions: "",
  });

  const [websiteOptions, setWebsiteOptions] = useState(false);
  const [chosenWebsite, setChosenWebsite] = useState("");

  const { websites, handleQuery } = useWebsites();

  const handleWebsiteOptions = (e) => {
    setWebsiteOptions(!websiteOptions);
    setChosenWebsite(e.target.value);
  };

  const handleDeleteChosenWebsite = (e) => {
    setChosenWebsite("");
  };

  useTitle();

  useEffect(() => {
    const temp = transitions;
    if (previousPage || previousPage === 0) temp[previousPage] = false;
    if (currentPage === 0) {
      temp[currentPage] = true;
      setTransitions([...temp]);
    } else {
      temp[currentPage] = true;
      setTransitions([...temp]);
    }
  }, [currentPage, previousPage]);

  const prevPage = (e) => {
    setPreviousPage((page) => currentPage);
    setProgress((progress) => progress - 25);
    setCurrentPage((page) => page - 1);
  };
  const nextPage = (e) => {
    setPreviousPage((page) => currentPage);
    setProgress((progress) => progress + 25);
    setCurrentPage((page) => page + 1);
  };

  const handleFormChange = (e) => {
    // console.log(e.target.value);
    setForm((form) => {
      return {
        ...form,
        [e.target.name]:
          e.target.value || e.target.getAttribute("categoryname") || "",
      };
    });
    // console.log(form);
  };

  const handleEdit = (e) => {
    const targetPage = Number(e.target.getAttribute("page"));
    setPreviousPage((page) => currentPage);
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
      <NewTaskContext.Provider
        value={{
          form,
          currentPage,
          previousPage,
          prevPage,
          nextPage,
          handleFormChange,
          chosenWebsite,
          websiteOptions,
          setWebsiteOptions,
          handleWebsiteOptions,
          handleDeleteChosenWebsite,
          websites,
          handleQuery,
        }}
      >
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
              <Categories />
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
      </NewTaskContext.Provider>
    </>
  );
};
export default NewTask;
