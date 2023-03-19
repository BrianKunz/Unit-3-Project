import React, { useState } from "react";

import { Routes, Route, Navigate } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";

//pages
// import AuthPage from "../AuthPage/AuthPage";
import ShowListPage from "../ShowListPage/ShowListPage";
//components
// import {getUser} from "../..utilities/user-service";
import styles from "./App.module.scss";

function App() {
  // const[user, setUser] = useState(getUser());

  return (
    <main className={styles.App}>
      <>
        <NavBar />
        <ShowListPage />
      </>
    </main>
  );
}

export default App;
