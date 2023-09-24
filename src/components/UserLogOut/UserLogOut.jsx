import styles from "./UserLogOut.module.scss";
import { logOut } from "../../utilities/users-service";

export default function UserLogOut({ user, setUser }) {
  function handleLogOut() {
    logOut();
    setUser(null);
  }

  return user ? (
    <div className={styles.UserLogOut}>
      {/* <div>{user.username}</div> */}
      {/* <div className={styles.email}>{user.email}</div> */}
      <button className="btn-sm" onClick={handleLogOut}>
        Log-out
      </button>
    </div>
  ) : null;
}
