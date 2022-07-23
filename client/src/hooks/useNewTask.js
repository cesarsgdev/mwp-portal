import { useState, useEffect } from "react";
import { useWebsites } from "./useWebsites";

export const useNewTask = () => {
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
      case 2:
        setCurrentPage((page) => targetPage);
        break;
      default:
        break;
    }
  };

  return {
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
    handleEdit,
    transitions,
    progress,
  };
};
