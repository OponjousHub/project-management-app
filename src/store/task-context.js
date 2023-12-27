import { createContext } from "react";

const TaskContext = createContext({
  tasks: [],
  onAddTask: () => {},
  onDeleteTask: () => {},
});

export default TaskContext;
