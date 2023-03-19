import React, { useState } from "react";
import { updateIdea, deleteIdea } from "../../utilities/ideas-api";

export default function AllListItems({ list, onIdeaUpdate, onIdeaDelete }) {
  const [editingIdeaId, setEditingIdeaId] = useState("");

  const handleUpdateIdea = async (ideaId, title, description) => {
    try {
      const updatedIdea = await updateIdea(ideaId, { title, description });
      onIdeaUpdate(updatedIdea);
      setEditingIdeaId("");
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteIdea = async (ideaId) => {
    try {
      await deleteIdea(ideaId);
      onIdeaDelete(ideaId);
    } catch (error) {
      console.error(error);
    }
  };

  const handleEditClick = (ideaId) => {
    setEditingIdeaId(ideaId);
  };

  const handleCancelClick = () => {
    setEditingIdeaId("");
  };

  return (
    <div>
      <h2>{list.name}</h2>
      <ul>
        {list.ideas.map((idea) => (
          <li key={idea._id}>
            {editingIdeaId === idea._id ? (
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  const title = event.target.elements.title.value;
                  const description = event.target.elements.description.value;
                  handleUpdateIdea(idea._id, title, description);
                }}
              >
                <input type="text" name="title" defaultValue={idea.title} />
                <input
                  type="text"
                  name="description"
                  defaultValue={idea.description}
                />
                <button type="submit">Save</button>
                <button type="button" onClick={handleCancelClick}>
                  Cancel
                </button>
              </form>
            ) : (
              <>
                <h3>{idea.title}</h3>
                <p>{idea.description}</p>
                <button type="button" onClick={() => handleEditClick(idea._id)}>
                  Edit
                </button>
                <button
                  type="button"
                  onClick={() => handleDeleteIdea(idea._id)}
                >
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
