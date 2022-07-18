import { SiWoo, SiWordpress } from "react-icons/si";

const WebsiteFieldOptions = ({
  websites,
  changeForm,
  handleWebsiteOptions,
}) => {
  const handleSelectWebsite = (e) => {
    changeForm(e);
    handleWebsiteOptions(e);
  };
  return (
    <div className="formWebsiteList">
      {!websites && <span>Loading...</span>}
      {websites && <span>Select a website</span> &&
        websites.map((website) => {
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
