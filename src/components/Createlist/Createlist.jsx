import React, { useState } from "react";
import { createList } from "../../utilities/lists-api";
import CreateListIdea from "../CreateListIdea/CreateListIdea";

export default function AllListItems() {
  const [list, setList] = useState(null);
  const [error, setError] = useState("");

  const handleCreateList = async () => {
    try {
      const listData = await createList(); // Create new list
      setList(listData);
    } catch (error) {
      setError("Failed to create list");
    }
  };

  const handleSetIdea = (newIdea) => {
    setList({ ...list, ideas: [...list.ideas, newIdea] });
  };

  const handleSetName = (event) => {
    setList({ ...list, name: event.target.value });
  };

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {list ? (
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
      ) : (
        <button onClick={handleCreateList}>Create List</button>
      )}
    </div>
  );
}
