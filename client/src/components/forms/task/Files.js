import { useRef, useState, useContext } from "react";
import { NewTaskContext } from "./context/NewTaskContext";
import { AiFillFileAdd } from "react-icons/ai";

const Files = () => {
  const dropArea = useRef();
  const fileInput = useRef();
  const context = useContext(NewTaskContext);
  const [allFiles, setAllFiles] = useState([]);
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
      {allFiles.length > 0 && (
        <div className="fileList">
          {allFiles.map((file, i) => {
            return (
              <div key={i} id={i}>
                {file.name}
                <span
                  id={i}
                  onClick={(e) => {
                    const filtered = allFiles.filter(
                      (file, i) => i !== Number(e.target.id)
                    );
                    setAllFiles([...filtered]);
                  }}
                >
                  &times;
                </span>
              </div>
            );
          })}
        </div>
      )}
      <div
        className="filesDropArea"
        ref={dropArea}
        onDrop={(e) => {
          e.preventDefault();
          dropArea.current.classList.remove("fileOver");

          const files = e.dataTransfer.files;

          for (let i = 0; i < files.length; i++) {
            const reader = new FileReader();
            reader.onload = function (e) {
              const temp = [];
              temp.push({ name: files[i].name, dataUrl: reader.result });
              setAllFiles((oldFiles) => [...oldFiles, ...temp]);
            };
            reader.readAsDataURL(files[i]);
            console.log(allFiles);
          }
        }}
        onDragOver={(e) => {
          e.preventDefault();
          dropArea.current.classList.add("fileOver");
        }}
        onDragLeave={(e) => {
          dropArea.current.classList.remove("fileOver");
        }}
        onClick={(e) => {
          fileInput.current.click();
        }}
      >
        <AiFillFileAdd />
        <h2>Click on this area or drop your files to add them to your task</h2>
        <span>Accepted: jpeg, png, zip and pdf</span>
        <input type="file" ref={fileInput} />
      </div>
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

export default Files;
