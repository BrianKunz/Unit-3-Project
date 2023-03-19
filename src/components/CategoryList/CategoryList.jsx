import styles from "./CategoryList.module.scss";

import React from "react";

export default function CategoryList() {
  return <div className={styles.CategoryList}>CategoryList</div>;
}

export default function CategoryList({ categories, activeCat, setActiveCat }) {
    const cats = categories.map((cat) => (
      <li
        key={cat}
        className={cat === activeCat ? styles.active : ""}
        onClick={() => setActiveCat(cat)}
      >
        {cat}
      </li>
    ));
    return <ul className={styles.CategoryList}>{cats}</ul>;
  }