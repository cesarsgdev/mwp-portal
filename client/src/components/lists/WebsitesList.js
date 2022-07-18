import { WebsiteListContainer } from "../styled/WebsiteListContainer.styled";
import { SiWoo, SiWordpress } from "react-icons/si";
import { FiExternalLink, FiEdit, FiDelete } from "react-icons/fi";
import ReactTooltip from "react-tooltip";

const WebsitesList = ({ data }) => {
  return (
    <>
      <WebsiteListContainer>
        {data.map((website, i) => {
          return (
            <div
              id={website._id}
              key={i}
              className="websiteItem websiteItemActive"
            >
              <ReactTooltip
                backgroundColor="var(--main)"
                className="websiteItemTip"
              />

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
                <FiEdit data-tip="Edit" />
                <FiDelete className="deleteIcon" data-tip="Delete" />
              </div>
            </div>
          );
        })}
      </WebsiteListContainer>
    </>
  );
};

export default WebsitesList;
