import classes from "./css/selectedProject.module.css";
import Task from "./task";
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
    <div className={classes.displayTask_box}>
      <header className={classes.deteils_container}>
        <div className={classes.title_box}>
          <h1 className={classes.title}>{selectedProject.title}</h1>
          <div>
            <button onClick={onDelete} className={classes.editBtn}>
              Edit
            </button>
            <button onClick={onDelete} className={classes.delBtn}>
              Delete
            </button>
          </div>
        </div>
        <p className={classes.date}>{formatedDate}</p>
        <p>{selectedProject.description}</p>
      </header>
      <hr />
      <Task />
    </div>
  );
}

export default SelectedProject;
