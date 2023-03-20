import React, { useState } from "react";

import { Routes, Route, Navigate } from "react-router-dom";

// Pages
import NewListPage from "../NewListPage/NewListPage";
import ShowListPage from "../ShowListPage/ShowListPage";
import AuthPage from "../AuthPage/AuthPage";
// Components
// import NavBar from "../../components/NavBar/NavBar";
import { getUser } from "../../utilities/users-service";
import styles from "./App.module.scss";

function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className={styles.App}>
      {user ? (
        <>
          {/* <NavBar /> */}
          <Routes>
            <Route
              path="/lists/new"
              element={<NewListPage user={user} setUser={setUser} />}
            />
            <Route
              path="/lists"
              element={<ShowListPage user={user} setUser={setUser} />}
            />
            {/* redirect to /orders/new if path in address bar hasn't matched a <Route> above */}
            <Route path="/*" element={<Navigate to="/lists/new" />} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}

export default App;
