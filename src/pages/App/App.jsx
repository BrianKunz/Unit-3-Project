import React, {useState} from "react";

import {Routes,Route,Navigate} from "react-router-dom";

//pages
import AuthPage from "../AuthPage/AuthPage";
import NewListPage from "../NewListPage/NewListPage";
import ShowListPage from "../ShowListPage/ShowListPage"
//components
import {getUser} from "../..utilities/user-service";
import styles from "./App.module.scss";

function App() {
    const[user,setUser] = useState(getUser());

    return (
        <main className={styles.App} >
            {user ? (
                <>
                    <Routes>
                        <Route
                            path="/lists/new"
                            element={<NewListPage user={user} setUser={setUser}/>}
                        />
                        <Route
                        path="/lists"
                        element={<ShowListPage user={user} setUser={setUser}/>}
                        />
                        {/*redirect to lists/new*/}
                        <Route path="/*" element={<Navigate to="/lists/new"/>}/>
                        </Routes>
                        </>
                        ) : (
                            <AuthPage setUser={setUser} />
                        )}
        </main>
    );
 }







                

        