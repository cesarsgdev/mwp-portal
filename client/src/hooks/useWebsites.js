import { useEffect, useState } from "react";

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

  useEffect(() => {
    fetch("/api/websites")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setWebsites(data.data);
        if (mainLoad) {
          setMainLoad(false);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

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

  return { websites, form, mainLoad, overlay, handleFormChange, handleOverlay };
};
