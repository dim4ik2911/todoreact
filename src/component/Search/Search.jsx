import React from "react";
import styles from "./Search.module.scss";
import plusButton from "./plus.svg";

const Search = () => {
  return (
    <div className={styles.field}>
      <textarea
        className={styles.input}
        minlength="5"
        maxlength="45"
        placeholder="Add your task..."
      ></textarea>

      <button className={styles.buttonAdd}>Add</button>
    </div>
  );
};

export default Search;
