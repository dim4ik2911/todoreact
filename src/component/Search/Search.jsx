import React, { useState } from "react";
import styles from "./Search.module.scss";

const Search = (props) => {
  const { handleTask } = props;

  let newTask = "";

  const handleBlur = (event) => {
    newTask = event.target.value;
  };
  return (
    <div className={styles.field}>
      <textarea
        className={styles.input}
        minLength="5"
        maxLength="40"
        placeholder="Add your task..."
        onBlur={handleBlur}
      ></textarea>

      <button
        className={styles.buttonAdd}
        onClick={() => {
          handleTask(newTask);
        }}
      >
        Add
      </button>
    </div>
  );
};

export default Search;
