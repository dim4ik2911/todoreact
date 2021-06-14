import React from "react";
import styles from "./Box.module.scss";
import Search from "../Search";
import Task from "../Task";

const Box = () => {
  return (
    <main className={styles.main}>
      <h1 className={styles.name}>To Do List</h1>
      <Search />
      <Task />
    </main>
  );
};

export default Box;
