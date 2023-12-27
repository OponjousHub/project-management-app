import image from "../assets/no-projects.png";
import { Plus } from "@phosphor-icons/react";
import classes from "./css/welcomePage.module.css";
import Button from "./button";
function WelcomeMessge({ onAddProject }) {
  return (
    <section className={classes.welcome_container}>
      <img className={classes.welcome_image} src={image} alt="" />
      <h1>NO Project selected</h1>
      <p>Select a project or get started with a new one!</p>
      <div className={classes.center_btn}>
        <Button onClick={onAddProject}>
          <Plus />
          <span>Create new Project</span>
        </Button>
      </div>
    </section>
  );
}
export default WelcomeMessge;
