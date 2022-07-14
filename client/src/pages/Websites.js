import { useEffect, useState } from "react";
import { ContentContainer } from "../components/styled/ContentContainer.styled";
import SectionTitle from "../components/SectionTitle";
import { useTitle } from "../hooks/useTitle";
import WebsitesList from "../components/lists/WebsitesList";
import WebsitesLoader from "../components/loaders/WebsitesLoader";

const Websites = () => {
  const [websites, setWebsites] = useState();
  useTitle();

  useEffect(() => {
    fetch("/api/websites")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setWebsites(data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <>
      <ContentContainer>
        <SectionTitle title="Websites" />
        {!websites && <WebsitesLoader itemsNumber={24} />}
        {websites && <WebsitesList data={websites} />}
      </ContentContainer>
    </>
  );
};

export default Websites;
