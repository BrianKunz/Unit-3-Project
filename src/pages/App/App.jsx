import React from "react";

import NavBar from "../../components/NavBar/NavBar";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";

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
        <SignUpForm />
        <LoginForm />
        <ShowListPage />
      </>
    </main>
  );
}

export default App;
