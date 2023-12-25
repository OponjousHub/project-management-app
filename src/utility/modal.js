import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import ButtonSmall from "./buttonSmall.js";
import classes from "./modal.module.css";

const Modal = forwardRef(function Modal({ children, btnCaption }, ref) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog ref={dialog} className={classes.backdrop}>
      {children}
      <form method="dialog" className={classes.form}>
        <ButtonSmall>{btnCaption}</ButtonSmall>
      </form>
    </dialog>,
    document.getElementById("root")
  );
});

export default Modal;
