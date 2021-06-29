import React, { useState } from "react";
import styles from "./AddTask.module.scss";

const AddTask = (props) => {
  const { tasks, handleTask } = props;
  const [ourId, setOurId] = useState(1);
  const [writtenTask, setWrittenTask] = useState({});

  const addTheTask = () => {
    if (writtenTask.task) {
      handleTask([...tasks, writtenTask]);
      setWrittenTask({ task: "", id: ourId });
      setOurId(ourId + 1);
    }
  };

  return (
    <div className={styles.addingTheTask}>
      <textarea
        placeholder="Add your task..."
        className={styles.textarea}
        value={writtenTask.task}
        onChange={(e) => {
          setWrittenTask({ task: e.target.value, id: ourId });
        }}
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
