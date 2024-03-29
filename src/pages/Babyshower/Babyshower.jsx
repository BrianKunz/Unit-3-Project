import React, { useState, useEffect } from "react";
import styles from "./Babyshower.module.scss";
import { getIdeasByCategory } from "../../utilities/ideas-api";

export default function Babyshower({ user }) {
  const [ideas, setIdeas] = useState([]);

  useEffect(() => {
    const fetchIdeas = async () => {
      try {
        const data = await getIdeasByCategory("Baby Shower");
        setIdeas(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchIdeas();
  }, []);

  return (
    <div className={styles.Babyshower}>
      <h1>Baby Shower Gift Ideas</h1>
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
