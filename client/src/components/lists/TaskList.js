import { TaskListContainer } from "../styled/TaskListContainer.styled";

const TaskList = ({ data }) => {
  return (
    <>
      <section className="taskList">
        <TaskListContainer>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Category</th>
                <th>Date</th>
                <th>Status</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data.map((task) => {
                const date = new Date(task.createdAt);
                const day = date.getDate();
                const month = date.getMonth() + 1;
                const year = date.getFullYear();
                let status =
                  task.status.charAt(0).toUpperCase() + task.status.slice(1);

                return (
                  <tr key={task._id} id={task._id}>
                    <td>{task.title}</td>
                    <td>{task.category}</td>
                    <td>{`${month}/${day}/${year}`}</td>
                    <td>
                      <span className={task.status}>{status}</span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </TaskListContainer>
      </section>
    </>
  );
};

export default TaskList;
