// import React, { useState } from "react";

// import { Routes, Route, Navigate } from "react-router-dom";

// // Pages
// import NewListPage from "../NewListPage/NewListPage";
// import ShowListPage from "../ShowListPage/ShowListPage";
// import AuthPage from "../AuthPage/AuthPage";
// // Components
// // import NavBar from "../../components/NavBar/NavBar";
// import { getUser } from "../../utilities/users-service";
// import styles from "./App.module.scss";

// function App() {
//   const [user, setUser] = useState(getUser());

//   return (
//     <main className={styles.App}>
//       {user ? (
//         <>
//           {/* <NavBar /> */}
//           <Routes>
//             <Route
//               path="/lists/new"
//               element={<NewListPage user={user} setUser={setUser} />}
//             />
//             <Route
//               path="/lists"
//               element={<ShowListPage user={user} setUser={setUser} />}
//             />
//             {/* redirect to /orders/new if path in address bar hasn't matched a <Route> above */}
//             <Route path="/*" element={<Navigate to="/lists/new" />} />
//           </Routes>
//         </>
//       ) : (
//         <AuthPage setUser={setUser} />
//       )}
//     </main>
//   );
// }

// export default App;
import React from "react";
import Logo from "../../components/Logo/Logo";
// import NavBar from "../../components/NavBar/NavBar";
// import SignUpForm from "../../components/SignUpForm/SignUpForm";
// import LoginForm from "../../components/LoginForm/LoginForm";
// import UserLogOut from "../../components/UserLogOut/UserLogOut";
// import Aside from "../../components/Aside";
// import CreateListIdea from "../../components/CreateListIdea/CreateListIdea";
// import CreateList from "../..components/CreateList/CreateList";
// import AllList from "../../components/AllList/AllList";
// //pages
import AuthPage from "../AuthPage/AuthPage";
// import ShowListPage from "../ShowListPage/ShowListPage";
// import NewListPage from "../NewListPage/NewListPage";
// import Anniversary from "../Anniversary/Anniversary";
//components
// import {getUser} from "../..utilities/user-service";
import styles from "./App.module.scss";

function App() {
  // const[user, setUser] = useState(getUser());

  return (
    <main className={styles.App}>
      <>
      
 
      <AuthPage/>
        
        

        
      </>
    </main>
  );
}

export default App;