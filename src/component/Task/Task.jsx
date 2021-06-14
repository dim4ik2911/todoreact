import React from "react";
import styles from "./Task.module.scss";
import Done from "../Done";

const Task = () => {
  return (
    <ul>
      <li className={styles.task}>
        <p>Make a new project with React</p>
        <Done />
      </li>
    </ul>
  );
};

export default Task;
