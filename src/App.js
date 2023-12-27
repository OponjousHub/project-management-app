import { useState } from "react";
import TaskContext from "./store/task-context";
import AddProjects from "./components/addProjects";
import NewProject from "./components/newProject";
import WelcomeMessge from "./components/welcomePage";
import SelectedProject from "./components/selectedProject";
import classes from "./components/css/app.module.css";
import "./App.css";

function App() {
  const [projectState, setProjectedState] = useState({
    selectedPageId: undefined,
    projects: [],
    tasks: [],
  });

  const addNewProjectHandler = ({ project }) => {
    setProjectedState((prevState) => {
      return {
        ...prevState,
        selectedPageId: null,
      };
    });
  };

  const createProjectHandler = (project) => {
    setProjectedState((prevState) => {
      const newProject = {
        ...project,
        id: Math.random(),
      };
      return {
        ...prevState,
        selectedPageId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  };
  const cancelProjectHandler = () => {
    setProjectedState((prevState) => {
      return {
        ...prevState,
        selectedPageId: undefined,
      };
    });
  };

  const deleteHandler = () => {
    const existingProjects = projectState.projects.filter(
      (project) => project.id !== projectState.selectedPageId
    );

    setProjectedState((prevState) => {
      return {
        ...prevState,
        selectedPageId: undefined,
        projects: existingProjects,
      };
    });
  };

  const selectedIdHandler = (selectedId) => {
    setProjectedState((prevState) => {
      return {
        ...prevState,
        selectedPageId: selectedId,
      };
    });
  };

  const selectedProject = projectState.projects.find(
    (project) => projectState.selectedPageId === project.id
  );
  const handleAddTask = (task) => {
    setProjectedState((prevState) => {
      const newTask = {
        text: task,
        id: Math.random(),
      };
      return {
        ...prevState,
        selectedPageId: projectState.selectedPageId,
        tasks: [...prevState.tasks, newTask],
      };
    });
  };

  const handleDeleteTask = (delTaskId) => {
    const existingTasks = projectState.tasks.filter(
      (task) => task.id !== delTaskId
    );

    setProjectedState((prevState) => {
      return {
        ...prevState,
        tasks: existingTasks,
      };
    });
  };

  const cartCtxApi = {
    tasks: projectState.tasks,
    onAddTask: handleAddTask,
    onDeleteTask: handleDeleteTask,
  };

  let content = (
    <TaskContext.Provider value={cartCtxApi}>
      <SelectedProject
        selectedProject={selectedProject}
        onDelete={deleteHandler}
      />
    </TaskContext.Provider>
  );
  if (projectState.selectedPageId === null) {
    content = (
      <NewProject
        onCreateNewProject={createProjectHandler}
        onCancelNewProject={cancelProjectHandler}
        selectedProjectedId={selectedIdHandler}
      />
    );
  } else if (projectState.selectedPageId === undefined) {
    content = <WelcomeMessge onAddProject={addNewProjectHandler} />;
  }

  return (
    <main className={classes.mainview_container}>
      <AddProjects
        onAddProject={addNewProjectHandler}
        projectList={projectState.projects}
        onClickedProject={selectedIdHandler}
      />
      {content}
    </main>
  );
}

export default App;
