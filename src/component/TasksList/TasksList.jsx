import React, { useState } from "react";
import styles from "./TasksList.module.scss";

const TasksList = (props) => {
  const { tasks } = props;
  return (
    <ul className={styles.TasksList}>
      {tasks.map((task) => {
        return <li key={Math.random()}>{task}</li>;
      })}
    </ul>
  );
};

export default TasksList;
