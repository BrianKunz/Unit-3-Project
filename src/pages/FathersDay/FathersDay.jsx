import React, { useState, useEffect } from "react";
import { getIdeasByCategory } from "../../utilities/ideas-api";

export default function FathersDay({ user }) {
  const [ideas, setIdeas] = useState([]);

  useEffect(() => {
    const fetchIdeas = async () => {
      try {
        const data = await getIdeasByCategory("Father's Day");
        setIdeas(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchIdeas();
  }, []);

  return (
    <div>
      <h1>Father's Day Gift Ideas</h1>
      <ul>
        {ideas.map((idea, index) => (
          <li key={index}>
            <h2>{idea.title}</h2>
            <img src={idea.img} alt={idea.name} width={600} height={600} />
            <p>{idea.description}</p>
            <p>{idea.link}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
