import React from "react";
import styles from "./Task.module.scss";
import Done from "../Done";
import Search from "../Search";

const Task = (props) => {
  return (
    <ul>
      <li className={styles.task}>
        <p className={styles.paragraph}>Make a React app</p>
        <Done />
      </li>
    </ul>
  );
};

export default Task;
