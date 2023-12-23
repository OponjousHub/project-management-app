import classes from "./css/addProject.module.css";

function Button({ children, ...props }) {
  return (
    <div className={classes.btn_container}>
      <button className={classes.btn} {...props}>
        {children}
      </button>
    </div>
  );
}

export default Button;
