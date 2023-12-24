import { forwardRef, useImperativeHandle } from "react";

import classes from "../components/css/newProjects.module.css";
const Input = forwardRef(function Input({ label, textarea, ...props }, ref) {
  // const ref = useImperativeHandle(ref);
  return (
    <>
      <label className={classes.label}>{label}</label>
      {textarea ? (
        <textarea {...props} ref={ref} />
      ) : (
        <input {...props} ref={ref} />
      )}
    </>
  );
});

export default Input;
