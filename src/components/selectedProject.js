import classes from "./css/selectedProject.module.css";
import ButtonSmall from "../utility/buttonSmall";
function SelectedProject({ selectedProject, onDelete }) {
  console.log(selectedProject);
  const formatedDate = new Date(selectedProject.date).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "short",
      day: "numeric",
    }
  );

  return (
    <div>
      <header className={classes.deteils_container}>
        <div className={classes.title_box}>
          <h1 className={classes.title}>{selectedProject.title}</h1>
          <div>
            <ButtonSmall onClick={onDelete}>Delete</ButtonSmall>
          </div>
        </div>
        <p className={classes.date}>{formatedDate}</p>
        <p>{selectedProject.description}</p>
      </header>
      Task
    </div>
  );
}

export default SelectedProject;
