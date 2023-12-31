import { createContext } from "react";

const TaskContext = createContext({
  tasks: [],
  onAddTask: () => {},
  onDeleteTask: () => {},
  onCancelEdit: () => {},
  onAddEdit: () => {},
});

export default TaskContext;
