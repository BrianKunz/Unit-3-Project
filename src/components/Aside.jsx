import React from "react";
import Logo from "./Logo/Logo";
import UserLogOut from "./UserLogOut/UserLogOut";

export default function Aside({ children, user, setUser, styles }) {
  return (
    <aside className={styles}>
      <Logo />
      {children}
      <UserLogOut user={user} setUser={setUser} />
    </aside>
  );
}