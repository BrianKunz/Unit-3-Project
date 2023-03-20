import React, { useState, useEffect } from "react";
import { createList } from "../../utilities/lists-api";
import CreateListIdea from "../CreateListIdea/CreateListIdea";

export default function CreateList() {
  const [list, setList] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getList() {
      try {
        const listData = await createList(); // Create new list
        setList(listData);
      } catch (error) {
        setError("Failed to create list");
      }
    }
    getList();
  }, []);

  const handleSetIdea = (newIdea) => {
    setList({ ...list, ideas: [...list.ideas, newIdea] });
  };

  const handleSetName = (event) => {
    setList({ ...list, name: event.target.value });
  };

  if (error) {
    return <div>{error}</div>;
  }

  if (!list) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>
        <label htmlFor="list-name">List Name:</label>
        <input
          id="list-name"
          type="text"
          value={list.name}
          onChange={handleSetName}
        />
      </div>
      <CreateListIdea list={list} setIdea={handleSetIdea} />
      <div className="all-list-items">
        {list.ideas.map((idea) => (
          <div key={idea._id}>
            <p>{idea.description}</p>
            <p>{idea.createdAt}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
  
