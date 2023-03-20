import React, { useState } from "react";
import { updateIdea, deleteIdea } from "../../utilities/ideas-api";

export default function AllListItem({ list, onIdeaUpdate, onIdeaDelete }) {
  const [editingIdeaId, setEditingIdeaId] = useState("");
  const [lists, setLists] = useState([]);
  const [initialList, setList] = useState([]);

  const updateList = async (listId, updatedList) => {
    const response = await updateIdea(listId, updatedList);
    if (response) {
      return response.data;
    }
    return null;
  };

  const handleUpdateIdea = async (event, ideaId) => {
    event.preventDefault();
    if (!list) return; // Add null check
    try {
      const updatedList = await updateList(list._id, {
        ideas: list.ideas.map((idea) =>
          idea._id === ideaId
            ? {
                ...idea,
                title: event.target.elements.title.value,
                description: event.target.elements.description.value,
              }
            : idea
        ),
      });
      setList(updatedList);
      setLists((prevLists) =>
        prevLists.map((prevList) =>
          prevList._id === updatedList._id ? updatedList : prevList
        )
      );
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
              <form onSubmit={(event) => handleUpdateIdea(event, idea._id)}>
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
