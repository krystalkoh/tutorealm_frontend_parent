import React from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";
import ModalButton from "./ModalButton";

const OverLay = (props) => {
  return (
    <div className={styles.backdrop} onClick={props.okayClicked}>
      <div className={`${styles.board} ${styles.modal}`}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <ol>{props.message}</ol>
        </div>
        <footer className={styles.actions}>
          <ModalButton onClick={props.onClick}>Confirm</ModalButton>
        </footer>
      </div>
    </div>
  );
};

const CreateJobModal = (props) => {
  if (!props.show) {
    return null;
  }

  return (
    <>
      {ReactDOM.createPortal(
        <OverLay
          title={props.title}
          message={props.message}
          okayClicked={props.okayClicked}
          onClick={props.onClose}
        />,
        document.querySelector("#modal-root")
      )}
    </>
  );
};

export default CreateJobModal;