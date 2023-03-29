import React, { useState } from "react";
import Logo from "../../components/Logo/Logo";
import NavBar from "../../components/NavBar/NavBar";
import NewCreateListIdea from "../../components/CreateListIdea/NewCreateListIdea";
import AuthPage from "../AuthPage/AuthPage";

//pages
import ShowListPage from "../ShowListPage/ShowListPage";
//components
import { getUser } from "../../utilities/users-service";
import styles from "./App.module.scss";

function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className={styles.App}>
      {user ? (
        <>
          <NavBar />
          <ShowListPage />
          <NewCreateListIdea />
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}

export default App;
