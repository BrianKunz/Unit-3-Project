import React, { useState } from "react";
import { createList } from "../../utilities/lists-api";
import CreateListIdea from "../CreateListIdea/CreateListIdea";

export default function AllListItems() {
  const [list, setList] = useState(null);
  const [error, setError] = useState(null);

  const handleCreateList = async (name) => {
    try {
      const newList = await createList({ name });
      setList(newList);
      setError(null);
    } catch (error) {
      console.error(error);
      setError("Failed to create list.");
    }
  };

  return (
    <div>
      <h1>Create a new list</h1>
      {list ? (
        <div>
          <p>List created with ID {list._id}</p>
        </div>
      ) : (
        <div>
          {error && <p>{error}</p>}
          <CreateListIdea onCreateList={handleCreateList} />
        </div>
      )}
    </div>
  );
}
