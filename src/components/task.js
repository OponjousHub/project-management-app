import { useContext } from "react";
import TaskContext from "../store/task-context";
import NewTask from "./newTask";
import classes from "./css/task.module.css";

function Task() {
  const { tasks, onDeleteTask } = useContext(TaskContext);
  console.log(tasks);
  return (
    <section className={classes.task_container}>
      <h2 className={classes.task_title}>Tasks</h2>
      <NewTask />
      {tasks.length === 0 && <p>This project does not have any task yet</p>}
      {tasks.length > 0 && (
        <ul>
          {tasks.map((task) => (
            <li key={task.id} className={classes.task_box}>
              <span>{task.text}</span>
              <button
                className={classes.clear}
                onClick={() => onDeleteTask(task.id)}
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default Task;
