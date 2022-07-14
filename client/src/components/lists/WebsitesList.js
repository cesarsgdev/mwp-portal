import { WebsiteListContainer } from "../styled/WebsiteListContainer.styled";
import { SiWoo, SiWordpress } from "react-icons/si";
import { FiExternalLink, FiEdit, FiDelete } from "react-icons/fi";
import ReactTooltip from "react-tooltip";

const WebsitesList = ({ data, itemsNumber }) => {
  const items = [];
  for (let i = 1; i <= itemsNumber; i++) {
    items.push(i);
  }
  return (
    <WebsiteListContainer>
      <ReactTooltip
        backgroundColor="var(--main)"
        delayShow={500}
        className="websiteItemTip"
      />

      {data.map((website, i) => {
        return (
          <div key={i} className="websiteItem websiteItemActive">
            <h3>
              {website.category === "wordpress" ? (
                <SiWordpress className="wordPressIcon" />
              ) : (
                <SiWoo className="wooIcon" />
              )}
              <span>{website.url}</span>
              <FiExternalLink
                className="visitSite"
                data-tip={`Visit ${website.url}`}
              />
            </h3>
            <div className="websiteItemControls">
              <FiEdit data-tip="Edit website" />
              <FiDelete className="deleteIcon" data-tip="Delete website" />
            </div>
          </div>
        );
      })}
    </WebsiteListContainer>
  );
};

export default WebsitesList;
