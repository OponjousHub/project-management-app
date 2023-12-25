import classes from "../components/css/addProject.module.css";

export default function ButtonSmall({ children, ...props }) {
  return (
    <div className={classes.btnSmall_container}>
      <button className={classes.btnSmall} {...props}>
        {children}
      </button>
    </div>
  );
}
