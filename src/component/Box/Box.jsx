import React, { useState } from "react";
import styles from "./Box.module.scss";
import Search from "../Search";
import Task from "../Task";
import data from "../../data";

const Box = () => {
  const [task, setTask] = useState(data);

  const addTask = (todo) => {
    const newTask = { name: todo };
    setTask([...task, newTask]);
  };

  return (
    <main className={styles.main}>
      <h1 className={styles.name}>To Do List</h1>
      <Search handleTask={addTask} />
      <Task />
    </main>
  );
};

export default Box;
