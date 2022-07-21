import { useRef } from "react";

const Files = () => {
  const clickDropArea = useRef();
  return (
    <div className="animationWrapper">
      <h1 className="filesHeading">
        Task Files
        <span>
          Please add any needed or helpful files to complete your task. For
          example screenshots of your issue, website copy, PDF with blog post,
          etc...
        </span>
      </h1>
      <div className="filesDropArea" ref={clickDropArea}>
        <h2>Click on this area or drop your files to upload them</h2>
      </div>
    </div>
  );
};

export default Files;
