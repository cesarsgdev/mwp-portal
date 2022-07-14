import { WebsiteListContainer } from "../styled/WebsiteListContainer.styled";

const WebsitesLoader = ({ itemsNumber }) => {
  const items = [];
  for (let i = 1; i <= itemsNumber; i++) {
    items.push(i);
  }

  return (
    <WebsiteListContainer>
      {items.map((item, i) => {
        return <div key={i} className="websiteItem websiteItemLoading"></div>;
      })}
    </WebsiteListContainer>
  );
};

export default WebsitesLoader;
