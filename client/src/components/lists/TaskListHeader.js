import { IoCreate } from "react-icons/io5";
import LinkButton from "../LinkButton";

const TaskListHeader = ({ data }) => {
  return (
    <div className="listHeader">
      <div className="lhColumn lhColumnLeft"></div>
      <div className="lhColumn lhColumnRight">
        <LinkButton to="/new-task" icon={<IoCreate />} dark={true}>
          Create Task
        </LinkButton>
      </div>
    </div>
  );
};

export default TaskListHeader;
