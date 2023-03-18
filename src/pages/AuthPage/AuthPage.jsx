import React, { useState } from "react";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";
import styles from "./AuthPage.module.scss";
import Logo from "../../components/Logo/Logo";

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);
  return (
    <main className={styles.AuthPage}>
      <div>
        <Logo />
        <h3 onClick={() => setShowLogin(!showLogin)}>
          {showLogin ? "Lets sign up!" : "Lets Login!"}
        </h3>
      </div>
      {showLogin ? (
        <LoginForm setUser={setUser} />
      ) : (
        <SignUpForm setUser={setUser} />
      )}
    </main>
  );
}
