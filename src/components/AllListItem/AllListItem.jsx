import React, { useState } from "react";
import { updateIdea, deleteIdea } from "../../utilities/ideas-api";

export default function AllListItem({ list, idea }) {
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
    if (!list || !list.ideas) return;
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
      console.log(
        "updated idea:",
        updatedList.ideas.find((idea) => idea._id === ideaId)
      );
      setLists((prevLists) =>
        prevLists.map((prevList) =>
          prevList._id === updatedList._id ? updatedList : prevList
        )
      );
      setList(updatedList);
      setEditingIdeaId("");
    } catch (error) {
      console.error(error);
    }
  };

  const handleIdeaDelete = async (idea) => {
    try {
      await deleteIdea(idea._id);
      setList((prevList) => ({
        ...prevList,
        ideas: prevList.ideas.filter((i) => i._id !== idea._id),
      }));
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
                <img
                  src={idea.img}
                  alt={idea.name}
                  width={600}
                  height={600}
                ></img>
                <p>{idea.description}</p>
                <a href={idea.link}>Link</a>
                <button type="button" onClick={() => handleEditClick(idea._id)}>
                  Edit
                </button>
                <button type="button" onClick={handleIdeaDelete}>
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
