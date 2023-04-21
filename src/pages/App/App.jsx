import React, { useState } from "react";
// import Logo from "../../components/Logo/Logo";
import NavBar from "../../components/NavBar/NavBar";
import NewCreateListIdea from "../../components/CreateListIdea/NewCreateListIdea";
import AuthPage from "../AuthPage/AuthPage";
//pages
import ShowListPage from "../ShowListPage/ShowListPage";
//components
import { getUser } from "../../utilities/users-service";
import styles from "./App.module.scss";
import CreateList from "../../components/Createlist/Createlist";
import UserPage from "../UserPage/UserPage";

function App() {
  const [user, setUser] = useState(getUser());
  console.log(user);

  return (
    <main className={styles.App}>
      {user ? (
        <>
          <h3>{user.username}</h3>
          {/* <NavBar /> */}
          <UserPage />
          <ShowListPage />
          {/* <CreateList /> */}
          {/* <NewCreateListIdea /> */}
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}

export default App;
