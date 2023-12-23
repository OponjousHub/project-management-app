import classes from "../components/css/newProjects.module.css";
function Input({ label, textarea, ...props }) {
  return (
    <>
      <label className={classes.label}>{label}</label>
      {textarea ? <textarea {...props} /> : <input {...props} />}
    </>
  );
}

export default Input;
