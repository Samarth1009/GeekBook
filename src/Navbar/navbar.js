import { Avatar } from "@material-ui/core";
import React from "react";
import styles from "./navbar.module.css";

const navbar = () => {
  return (
    <nav className={styles.navbar}>
      <h3 className={styles.title}>GeekBook</h3>
      <input
        type="text"
        name="search"
        id={styles.search}
        placeholder="Search"
      ></input>
      <Avatar className={styles.myavatar} />
    </nav>
  );
};

export default navbar;
