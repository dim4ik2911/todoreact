import React, { useState } from "react";
import styles from "./TasksList.module.scss";

const TasksList = (props) => {
  const { tasks } = props;
  return (
    <ul className={styles.TasksList}>
      {tasks.map((task) => {
        return (
          <li className={styles.TasksList__task} key={Math.random()}>
            {task}
          </li>
        );
      })}
    </ul>
  );
};

export default TasksList;
