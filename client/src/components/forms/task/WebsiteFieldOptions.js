import { useContext } from "react";
import { NewTaskContext } from "./context/NewTaskContext";
import { SiWoo, SiWordpress } from "react-icons/si";

const WebsiteFieldOptions = () => {
  const context = useContext(NewTaskContext);

  const handleSelectWebsite = (e) => {
    context.handleFormChange(e);
    context.handleWebsiteOptions(e);
  };
  return (
    <div className="formWebsiteList">
      {!context.websites && <span>Loading...</span>}
      {context.websites && <span>Select a website</span> &&
        context.websites.map((website) => {
          return (
            <button
              name="url"
              value={website.url}
              key={website._id}
              onMouseDown={handleSelectWebsite}
            >
              <div>
                {website.category === "wordpress" ? (
                  <SiWordpress className="wordPressIcon" />
                ) : (
                  <SiWoo className="wooIcon" />
                )}
                {website.url}
              </div>{" "}
              <span>{website._id}</span>
            </button>
          );
        })}
    </div>
  );
};

export default WebsiteFieldOptions;
