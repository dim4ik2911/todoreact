import React from "react";
import styles from "./Done.module.scss";
import doneButton from "./done.svg";

const Done = () => {
  return (
    <>
      <img className={styles.button} src={doneButton} alt="Done" />
    </>
  );
};

export default Done;
