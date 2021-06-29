import React from "react";
import styles from "./TasksList.module.scss";

const TasksList = (props) => {
  const { tasks, handleTask } = props;

  return (
    <ul className={styles.TasksList}>
      {tasks.map((task) => {
        return (
          <div className={styles.TasksList__div}>
            <li className={styles.TasksList__div_task} key={task.id}>
              {task.task}
            </li>
            <button
              className={styles.TasksList__div_delete}
              onClick={() =>
                handleTask(tasks.filter((todo) => todo.id !== task.id))
              }
            >
              X
            </button>
          </div>
        );
      })}
    </ul>
  );
};

export default TasksList;
