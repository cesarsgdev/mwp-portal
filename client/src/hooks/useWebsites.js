import { useEffect, useState } from "react";
import { useAPI } from "./useAPI";

export const useWebsites = () => {
  const [websites, setWebsites] = useState();
  const [mainLoad, setMainLoad] = useState(true);
  const [overlay, setOverlay] = useState(false);
  const [form, setForm] = useState({
    url: "",
    category: "wordpress",
    user: "",
    password: "",
  });

  const Websites = useAPI();
  const [query, setQuery] = useState({ category: "", url: "", sort: "url,1" });

  useEffect(() => {
    console.log(query);
    const loadWebsites = async (params) => {
      const websites = await Websites.getWebsites(params);
      console.log(websites);
      setWebsites(websites);
      if (mainLoad && websites) {
        setMainLoad(false);
      }
    };

    loadWebsites(query);
  }, [query]);

  const handleFormChange = (e) => {
    console.log(e.target.getAttribute("data-category"));
    setForm((currentForm) => {
      return {
        ...form,
        [e.target.name]:
          e.target.value || e.target.getAttribute("data-category") || "",
      };
    });
    console.log(form);
  };

  const handleOverlay = () => {
    setOverlay(!overlay);
  };

  const handleQuery = (e) => {
    setQuery((oldQuery) => {
      return { ...oldQuery, [e.target.name]: e.target.value || "" };
    });
  };

  return {
    websites,
    form,
    mainLoad,
    overlay,
    handleFormChange,
    handleOverlay,
    handleQuery,
  };
};
