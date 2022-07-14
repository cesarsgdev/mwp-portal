import { WebsiteListContainer } from "../styled/WebsiteListContainer.styled";
import { WebsteListHeaderContainer } from "../styled/WebsiteListHeaderContainer";

const WebsitesLoader = ({ itemsNumber, isMainLoad }) => {
  const items = [];
  for (let i = 1; i <= itemsNumber; i++) {
    items.push(i);
  }

  return (
    <>
      {isMainLoad && (
        <WebsteListHeaderContainer>
          <div></div>
        </WebsteListHeaderContainer>
      )}
      <WebsiteListContainer>
        {items.map((item, i) => {
          return <div key={i} className="websiteItem websiteItemLoading"></div>;
        })}
      </WebsiteListContainer>
    </>
  );
};

export default WebsitesLoader;
