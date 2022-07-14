const Details = ({ formState, changeForm, nextPage }) => {
  const handleChange = (e) => {
    changeForm(e);
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
          onChange={handleChange}
        />
      </label>
      <label>
        <h2>Website</h2>
        <span>The website where the task will be completed.</span>
        <input
          type="text"
          value={formState.website}
          name="website"
          onChange={handleChange}
        />
      </label>
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
      <button
        className="btnNext"
        onClick={(e) => {
          nextPage();
        }}
      >
        Next
      </button>
    </div>
  );
};

export default Details;
