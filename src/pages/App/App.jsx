import React from "react";

// import { Routes, Route, Navigate } from "react-router-dom";

//pages
// import ShowListPage from "../ShowListPage/ShowListPage";

import AuthPage from "../AuthPage/AuthPage";
import styles from "./App.module.scss";
// import {
//   Anniversary,
//   Babyshower,
//   Birthdays,
//   Bridalshower,
//   Christmas,
//   Easter,
//   FathersDay,
//   Graduation,
//   Housewarming,
//   MothersDay,
//   Retirement,
//   Valentines,
//   Weddings,
//   Other,
// } from "../../pages/NavBar/index";

//components
// import NavBar from "../../components/NavBar/NavBar";
// import CreateList from "../../components/Createlist/CreateList";

//utilities
// import { getUser } from "../../utilities/users-service";

function App() {
  // const [user, setUser] = useState(getUser());

  return (
    <main className={styles.App}>
      {/* <NavBar />
      <Routes>
        <Route path="/" element={<ShowListPage />} />
        <Route path="/Anniversary" element={<Anniversary />} />
        <Route path="/Baby Shower" element={<Babyshower />} />
        <Route path="/Birthday" element={<Birthdays />} />
        <Route path="/Bridal Shower" element={<Bridalshower />} />
        <Route path="/Christmas" element={<Christmas />} />
        <Route path="/Easter" element={<Easter />} />
        <Route path="/Father's Day" element={<FathersDay />} />
        <Route path="/Graduation" element={<Graduation />} />
        <Route path="/House Warming" element={<Housewarming />} />
        <Route path="/Mother's Day" element={<MothersDay />} />
        <Route path="/Retirement" element={<Retirement />} />
        <Route path="/Valentines" element={<Valentines />} />
        <Route path="/Wedding" element={<Weddings />} />
        <Route path="/Other" element={<Other />} />
      </Routes> */}

      {/* <AuthPage setUser={setUser} /> */}
      <AuthPage/>
    </main>
  );
}

export default App;
