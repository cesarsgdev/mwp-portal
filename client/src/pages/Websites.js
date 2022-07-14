import { useEffect, useState } from "react";
import { ContentContainer } from "../components/styled/ContentContainer.styled";
import SectionTitle from "../components/SectionTitle";
import { useTitle } from "../hooks/useTitle";
import WebsitesList from "../components/lists/WebsitesList";
import WebsitesLoader from "../components/loaders/WebsitesLoader";
import WebsitesListHeader from "../components/lists/WebsitesListHeader";
import { Overlay } from "../components/styled/Overlay.styled";
import AddWebsite from "../components/forms/website/AddWebsite";
import { CSSTransition } from "react-transition-group";
import "../animations.css";

const Websites = () => {
  const [websites, setWebsites] = useState();
  const [mainLoad, setMainLoad] = useState(true);
  const [overlay, setOverlay] = useState(false);
  const [form, setForm] = useState({
    url: "",
    category: "wordpress",
    user: "",
    password: "",
  });
  useTitle();

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

  return (
    <>
      <CSSTransition
        in={overlay}
        timeout={{
          appear: 500,
          enter: 500,
          exit: 500,
        }}
        classNames="overlay"
        mountOnEnter={true}
        unmountOnExit={true}
      >
        <Overlay className="overlay">
          <AddWebsite
            formState={form}
            formChange={handleFormChange}
            closeOverlay={handleOverlay}
          ></AddWebsite>
        </Overlay>
      </CSSTransition>
      <ContentContainer>
        <SectionTitle title="Websites" />

        {!mainLoad && <WebsitesListHeader showOverlay={handleOverlay} />}
        {!websites && <WebsitesLoader itemsNumber={24} isMainLoad={mainLoad} />}
        {websites && <WebsitesList data={websites} />}
      </ContentContainer>
    </>
  );
};

export default Websites;
