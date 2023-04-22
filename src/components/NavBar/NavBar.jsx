import React, { useState, useEffect } from "react";
import { getAllCategories } from "../../utilities/categories-api";
import { Link } from "react-router-dom";
import UserLogOut from "../UserLogOut/UserLogOut";

export default function NavBar({ user, setUser }) {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const categories = await getAllCategories();
        setCats(categories);
      } catch (error) {
        console.error(error);
        // handle error
      }
    };

    getCategories();
  }, []);

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/createlist">Create New List</Link>
        </li>
        <li>
          <Link to="/newcreatelistidea">Create New Idea</Link>
        </li>
        {Array.isArray(cats) &&
          cats.map((cat, _id) => (
            <li key={_id}>
              <Link to={`${cat.name}`}>{cat.name}</Link>
            </li>
          ))}
        <li>
          {user ? (
            <div>
              <Link to="/Userpage">{user.username}</Link>
              <UserLogOut user={user} setUser={setUser} />
            </div>
          ) : (
            <Link to="/Login">Login</Link>
          )}
        </li>
      </ul>
    </nav>
  );
}
