import { useState, useRef } from "react";
import WebsiteFieldOptions from "./WebsiteFieldOptions";
import { useWebsites } from "../../../hooks/useWebsites";

const Details = ({
  formState,
  changeForm,
  nextPage,
  searchWebsites,
  prevPage,
}) => {
  const { websites, handleQuery } = useWebsites();
  const [websiteOptions, setWebsiteOptions] = useState(false);
  const [chosenWebsite, setChosenWebsite] = useState("");

  const urlField = useRef();

  const handleChange = (e) => {
    changeForm(e);
    if (e.target.name === "url") {
      handleQuery(e);
    }
  };

  const handleWebsiteOptions = (e) => {
    setWebsiteOptions(!websiteOptions);
    urlField.current.blur();
    setChosenWebsite(e.target.value);
  };

  const handleDeleteChosenWebsite = (e) => {
    setChosenWebsite("");
  };
  return (
    <div className="animationWrapper">
      <h1>Tell us more about your task...</h1>
      <label>
        <h2>Name your task</h2>
        <span>
          Something descriptive like "Create new site" or "Change the color of
          my header".
        </span>
        <input
          type="text"
          value={formState.name}
          name="name"
          autoComplete="off"
          onChange={handleChange}
        />
      </label>
      {formState.category !== "New Site" && (
        <label>
          <h2>Website</h2>
          <span>The website where the task will be completed.</span>
          {chosenWebsite && (
            <div className="chosenWebsite">
              <span>
                {chosenWebsite}
                <span
                  className="removeWebsite"
                  onClick={handleDeleteChosenWebsite}
                >
                  &times;
                </span>
              </span>
            </div>
          )}
          {!chosenWebsite && (
            <input
              ref={urlField}
              type="text"
              value={formState.url}
              name="url"
              autoComplete="off"
              onChange={handleChange}
              onFocus={(e) => {
                setWebsiteOptions(!websiteOptions);
              }}
              onBlur={handleWebsiteOptions}
            />
          )}
          {websiteOptions && (
            <WebsiteFieldOptions
              websites={websites}
              changeForm={changeForm}
              handleWebsiteOptions={handleWebsiteOptions}
            />
          )}
        </label>
      )}
      <label>
        <h2>Instructions</h2>
        <span>
          Please be as clear and detailed as possible to avoid delays in your
          task delivery.
        </span>
        <textarea
          value={formState.instructions}
          name="instructions"
          onChange={handleChange}
          rows="12"
        />
      </label>
      <div className="actionButtons">
        {" "}
        <button
          className="btnNext"
          onClick={(e) => {
            prevPage();
          }}
        >
          Back
        </button>
        <button
          className="btnNext"
          onClick={(e) => {
            nextPage();
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Details;
