import styles from "./ShowListPage.module.scss";
import React, { useEffect, useState } from "react";
import AllList from "../../components/AllList/AllList";
import * as listsAPI from "../../utilities/lists-api";

export default function ShowListPage() {
  const [allLists, setAllLists] = useState([]);
  // const categoriesRef = useRef([]);
  useEffect(function () {
    async function getLists() {
      const lists = await listsAPI.getLists();
      setAllLists(lists);
    }
    getLists();
  }, []);

  return (
    <div className={styles.ShowListPage}>
      <div className={styles.ShowListPage}>ShowListPage</div>
      <AllList lists={allLists} />
    </div>
  );
}
