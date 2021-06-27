import React, { useState } from "react";
import styles from "./AddTask.module.scss";

const AddTask = (props) => {
  const { tasks, handleTask } = props;

  const [writtenTask, setWrittenTask] = useState("");

  // const addTask = (e) => {
  //   handleTask([...tasks, e.target.value]);
  // };

  const addTheTask = () => {
    handleTask([...tasks, writtenTask]);
    setWrittenTask("");
  };

  return (
    <div className={styles.addingTheTask}>
      <textarea
        minLength="5"
        maxLength="70"
        placeholder="Add your task..."
        className={styles.textarea}
        value={writtenTask}
        onChange={(e) => setWrittenTask(e.target.value)}
      ></textarea>
      <button
        onClick={() => addTheTask()}
        type="submit"
        className={styles.buttonAdd}
      >
        Add
      </button>
    </div>
  );
};

export default AddTask;
