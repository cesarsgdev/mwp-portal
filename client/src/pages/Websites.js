import { useWebsites } from "../hooks/useWebsites";
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
  const {
    websites,
    form,
    mainLoad,
    overlay,
    handleFormChange,
    handleOverlay,
    handleQuery,
  } = useWebsites();

  useTitle();

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

        {!mainLoad && (
          <WebsitesListHeader
            showOverlay={handleOverlay}
            searchAction={handleQuery}
          />
        )}
        {!websites && <WebsitesLoader itemsNumber={24} isMainLoad={mainLoad} />}
        {websites && <WebsitesList data={websites} />}
      </ContentContainer>
    </>
  );
};

export default Websites;
