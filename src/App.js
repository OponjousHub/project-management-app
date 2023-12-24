import { useState } from "react";
import "./App.css";
import AddProjects from "./components/addProjects";
import NewProject from "./components/newProject";
import WelcomeMessge from "./components/welcomePage";
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
  console.log(projectState.projects);

  let content;
  if (projectState.selectedPageId === null) {
    content = <NewProject onCreateNewProject={createProjectHandler} />;
  } else if (projectState.selectedPageId === undefined) {
    content = <WelcomeMessge onAddProject={addNewProjectHandler} />;
  }

  return (
    <main className={classes.mainview_container}>
      <AddProjects
        onAddProject={addNewProjectHandler}
        projectList={projectState.projects}
      />
      {content}
    </main>
  );
}

export default App;
