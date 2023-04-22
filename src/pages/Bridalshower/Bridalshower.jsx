import React, { useState, useEffect } from "react";
import axios from "axios";
const BASE_URL = "http://localhost:3001/api/ideas";

export default function Bridalshower() {
  const [ideas, setIdeas] = useState([]);

  useEffect(() => {
    const getIdeas = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/`);
        setIdeas(
          response.data.filter((idea) =>
            idea.category ? idea.category.name === "Baby Shower" : [...ideas]
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
    <div>
      <h1>Bridal Shower Gift Ideas</h1>
      <ul>
        {ideas.map((idea, _id) => (
          <li key={_id}>
            <h2>{idea.title}</h2>
            <img src={idea.img} alt={idea.name} width={600} height={600} />
            <p>{idea.description}</p>
            <button>Share</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
