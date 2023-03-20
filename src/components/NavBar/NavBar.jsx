import React from "react";
import styles from "./NavBar.module.scss";
import { Link } from "react-router-dom";


export default function NavBar() {
  return (
    <div className={styles.NavBar}>
    <nav >
      <Link to="/lists" className={styles.NavLink}>All Lists</Link>
      &nbsp; | &nbsp;
      <Link to="/lists/new"className={styles.NavLink}>New List</Link>
    </nav>
    </div>
  );
}