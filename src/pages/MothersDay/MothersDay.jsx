import React, { useState, useEffect } from "react";
import styles from "./MothersDay.module.scss";
import { getIdeasByCategory } from "../../utilities/ideas-api";

export default function MothersDay({ user }) {
  const [ideas, setIdeas] = useState([]);

  useEffect(() => {
    const fetchIdeas = async () => {
      try {
        const data = await getIdeasByCategory("Mother's Day");
        setIdeas(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchIdeas();
  }, []);

  return (
    <div className={styles.MothersDay}>
      <h1>Mother's Day Gift Ideas</h1>
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
