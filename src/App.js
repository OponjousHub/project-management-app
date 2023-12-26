import { useState } from "react";
import "./App.css";
import AddProjects from "./components/addProjects";
import NewProject from "./components/newProject";
import WelcomeMessge from "./components/welcomePage";
import SelectedProject from "./components/selectedProject";
import classes from "./components/css/app.module.css";

function App() {
  const [projectState, setProjectedState] = useState({
    selectedPageId: undefined,
    projects: [],
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

  let content = (
    <SelectedProject
      selectedProject={selectedProject}
      onDelete={deleteHandler}
    />
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
