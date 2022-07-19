const Summary = ({ formState, editFunction }) => {
  return (
    <div className="animationWrapper">
      <h1>Your task summary...</h1>
      <span>{formState.category}</span>
      <span>{formState.name}</span>
      <span>{formState.url}</span>
      <span>{formState.instructions}</span>
      <button
        page={1}
        onClick={(e) => {
          editFunction(e);
        }}
      >
        Back to animation
      </button>
    </div>
  );
};

export default Summary;
