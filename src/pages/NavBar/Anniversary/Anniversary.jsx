import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
const BASE_URL = "http://localhost:3001/api/ideas";

export function Anniversary() {
  const [ideas, setIdeas] = useState([]);
  const categoriesRef = useRef([]);

  useEffect(() => {
    const getIdeas = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/`);
        setIdeas(response.data);
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
      <h1>Anniversary Gift Ideas</h1>
      <ul>
        <li>adding one thing to list to see if it will render</li>
        {ideas.map((idea, _id) => (
          <li key={_id}>
            <h2>{idea.title}</h2>
            <img src={idea.img} alt={idea.name} />
            <p>{idea.description}</p>
            <button>Share</button>
          </li>
        ))}
        ;
      </ul>
    </div>
  );
}