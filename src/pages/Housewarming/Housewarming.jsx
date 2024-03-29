import React, { useState, useEffect } from "react";
import styles from "./Housewarming.module.scss";
import { getIdeasByCategory } from "../../utilities/ideas-api";

export default function Housewarming({ user }) {
  const [ideas, setIdeas] = useState([]);

  useEffect(() => {
    const fetchIdeas = async () => {
      try {
        const data = await getIdeasByCategory("House Warming");
        setIdeas(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchIdeas();
  }, []);

  return (
    <div className={styles.Housewarming}>
      <h1>Housewarming Gift Ideas</h1>
      <ul>
        {ideas.map((idea, index) => (
          <li key={index}>
            <h2>{idea.title}</h2>
            <img src={idea.img} alt={idea.name} width={600} height={600} />
            <p>{idea.description}</p>
            <a href={idea.link} target="_blank" rel="noreferrer">
              Link
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
