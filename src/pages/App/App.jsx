import React, { useState } from "react";
import styles from "./App.module.scss";
import { getUser } from "../../utilities/users-service";
import { Routes, Route, Navigate } from "react-router-dom";
//pages
import AuthPage from "../AuthPage/AuthPage";
import ShowIdeasPage from "../ShowIdeasPage/ShowIdeasPage";
import UserPage from "../UserPage/UserPage";
//components
import NavBar from "../../components/NavBar/NavBar";
import NewCreateListIdea from "../../components/CreateListIdea/NewCreateListIdea";
import CreateList from "../../components/Createlist/Createlist";
import Anniversary from "../Anniversary/Anniversary";
import BabyShower from "../Babyshower/Babyshower";
import Birthdays from "../Birthdays/Birthdays";
import Bridalshower from "../Bridalshower/Bridalshower";
import Christmas from "../Christmas/Christmas";
import Easter from "../Easter/Easter";
import FathersDay from "../FathersDay/FathersDay";
import Graduation from "../Graduation/Graduation";
import Housewarming from "../Housewarming/Housewarming";
import MothersDay from "../MothersDay/MothersDay";
import Retirement from "../Retirement/Retirement";
import Valentines from "../Valentines/Valentines";
import Weddings from "../Wedding/Wedding";
import Other from "../Other/Other";

function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className={styles.App}>
      <NavBar user={user} setUser={setUser} />
      <Routes>
        <Route
          path="/"
          element={
            user ? (
              <Navigate to="/showideapage" />
            ) : (
              <AuthPage setUser={setUser} />
            )
          }
        />
        <Route path="/showideapage" element={<ShowIdeasPage />} />
        <Route path="/Anniversary" element={<Anniversary />} />
        <Route path="/Baby Shower" element={<BabyShower />} />
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
        <Route path="/createlist" element={<CreateList />} />
        <Route path="/newcreatelistidea" element={<NewCreateListIdea />} />
        <Route path="/userpage" element={<UserPage />} />
      </Routes>
    </main>
  );
}

export default App;
