import React, { useState } from "react";
import { createList } from "../../utilities/lists-api";

export default function CreateList() {
  const [list, setList] = useState({ name: "", ideas: [] });
  const [error, setError] = useState("");

  const handleCreateList = async (event) => {
    event.preventDefault();
    try {
      const listData = await createList(list); // Create new list
      setList(listData);
    } catch (error) {
      setError("Failed to create list");
    }
  };

  const handleSetName = (event) => {
    // add this line
    setList({ ...list, name: event.target.value });
  };

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {list ? (
        <div>
          <form onSubmit={handleCreateList}>
            <label className="list-name">List Name:</label>
            <input
              id="list-name"
              type="text"
              name="name"
              value={list.name}
              onChange={handleSetName} // Attach handleSetName to onChange event
            />
            <button type="submit">Create List</button>
          </form>
        </div>
      ) : (
        <p>Creating List...</p>
      )}
    </div>
  );
}
