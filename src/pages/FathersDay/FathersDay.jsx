import React, { useState, useEffect } from "react";
import styles from "./FathersDay.module.scss";
import axios from "axios";
const BASE_URL = "http://localhost:3001/api/ideas";

export function FathersDay() {
  const [ideas, setIdeas] = useState([]);

  useEffect(() => {
    const getIdeas = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/`);
        setIdeas(
          response.data.filter((idea) =>
            idea.category ? idea.category.name === "Father's Day" : [...ideas]
          )
        );
        console.log(ideas);
      } catch (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      }
    };

    getIdeas();
  }, []);

  return (
    <div className={styles.FathersDay}>
      <h1>Father's Day Gift Ideas</h1>
      <ul>
        {ideas.map((idea, _id) => (
          <li key={_id}>
            <h2>{idea.title}</h2>
            <img src={idea.img} alt={idea.name} width={600} height={600} />
            <p>{idea.description}</p>
            <a href={idea.link}>Share</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
