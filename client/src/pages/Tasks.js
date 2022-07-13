import { ContentContainer } from "../components/styled/ContentContainer.styled";
import SectionTitle from "../components/SectionTitle";
import { useTitle } from "../hooks/useTitle";
import TaskLoader from "../components/loaders/TaskLoader";
import TaskList from "../components/lists/TaskList";
import { useEffect, useState } from "react";

const Tasks = () => {
  const [tasks, setTasks] = useState();
  useTitle();

  useEffect(() => {
    fetch("/api/tasks")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setTasks(data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <>
      <ContentContainer>
        <SectionTitle title="Tasks" />
        {!tasks && <TaskLoader rowsNumber={8} />}
        {tasks && <TaskList data={tasks} />}
      </ContentContainer>
    </>
  );
};

export default Tasks;
