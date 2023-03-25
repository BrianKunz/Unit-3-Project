import React, { useState, useEffect } from "react";
import styles from "./NavBar.module.scss";
import axios from "axios";
import { Link } from "react-router-dom";
const BASE_URL = "http://localhost:3001/api/categories";

export default function NavBar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/`);
        setCats(response.data);
      } catch (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      }
    };

    getCategories();
  }, []);

  return (
    <nav>
      <ul className={styles.NavBar}>
        <li>
          <Link to="/">Home</Link>
        </li>
        {cats.map((cat, _id) => (
          <li key={_id}>
            <Link to={`${cat.name}`}>{cat.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}