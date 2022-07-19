import { useRef, useContext } from "react";
import WebsiteFieldOptions from "./WebsiteFieldOptions";
import { NewTaskContext } from "./context/NewTaskContext";

const Details = () => {
  const context = useContext(NewTaskContext);

  const urlField = useRef();

  const handleChange = (e) => {
    context.handleFormChange(e);
    if (e.target.name === "url") {
      context.handleQuery(e);
    }
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
          value={context.form.name}
          name="name"
          autoComplete="off"
          onChange={handleChange}
          onBlur={context.validateForm}
        />
      </label>
      {context.form.category !== "New Site" && (
        <label>
          <h2>Website</h2>
          <span>The website where the task will be completed.</span>
          {context.chosenWebsite && (
            <div className="chosenWebsite">
              <span>
                {context.chosenWebsite}
                <span
                  className="removeWebsite"
                  onClick={context.handleDeleteChosenWebsite}
                >
                  &times;
                </span>
              </span>
            </div>
          )}
          {!context.chosenWebsite && (
            <input
              ref={urlField}
              type="text"
              value={context.form.url}
              name="url"
              autoComplete="off"
              onChange={handleChange}
              onFocus={(e) => {
                context.setWebsiteOptions(!context.websiteOptions);
              }}
              onBlur={context.handleWebsiteOptions}
            />
          )}
          {context.websiteOptions && <WebsiteFieldOptions />}
        </label>
      )}
      <label>
        <h2>Instructions</h2>
        <span>
          Please be as clear and detailed as possible to avoid delays in your
          task delivery.
        </span>
        <textarea
          value={context.form.instructions}
          name="instructions"
          onChange={handleChange}
          rows="12"
        />
      </label>
      <div className="actionButtons">
        <button
          className="btnNext"
          page={0}
          onClick={(e) => {
            context.prevPage();
          }}
        >
          Back
        </button>
        <button
          className="btnNext"
          onClick={(e) => {
            context.nextPage();
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Details;
