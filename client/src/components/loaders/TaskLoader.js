import { TaskListContainer } from "../styled/TaskListContainer.styled";
const TaskLoader = ({ rowsNumber }) => {
  const rows = [];
  for (let i = 1; i <= rowsNumber; i++) {
    rows.push(i);
  }

  return (
    <>
      <TaskListContainer>
        <table>
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody className="taskLoader">
            {rows.map((row, i) => (
              <tr key={i}>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      </TaskListContainer>
    </>
  );
};

export default TaskLoader;
