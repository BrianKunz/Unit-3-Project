import React, { useState, useEffect } from "react";
import {
  getUserLists,
  updateList,
  deleteList,
} from "../../utilities/lists-api";
import { getUserIdeas } from "../../utilities/ideas-api";
import { getUser } from "../../utilities/users-service";

function UserPage() {
  const [lists, setLists] = useState([]);
  const [ideas, setIdeas] = useState([]);
  const [selectedList, setSelectedList] = useState(null);
  const [listName, setListName] = useState("");

  useEffect(() => {
    async function fetchData() {
      const user = getUser();
      const listsData = await getUserLists(user);
      const ideasData = await getUserIdeas(user);
      setLists(listsData);
      setIdeas(ideasData);
    }
    fetchData();
  }, []);

  const handleListClick = (list) => {
    setSelectedList(list);
    setListName(list.name);
  };

  const handleListNameChange = (event) => {
    setListName(event.target.value);
  };

  const handleListSave = async () => {
    try {
      const updatedList = await updateList(selectedList._id, {
        name: listName,
      });
      setLists((prevLists) =>
        prevLists.map((list) =>
          list._id === updatedList._id ? updatedList : list
        )
      );
      setSelectedList(updatedList);
    } catch (error) {
      console.error(error);
    }
  };

  const handleListDelete = async () => {
    try {
      await deleteList(selectedList._id);
      setLists((prevLists) =>
        prevLists.filter((list) => list._id !== selectedList._id)
      );
      setSelectedList(null);
      setListName("");
    } catch (error) {
      console.error(error);
    }
  };

  const handleIdeaUpdate = (updatedIdea) => {
    setLists((prevLists) =>
      prevLists.map((list) => {
        if (list._id === selectedList._id) {
          return {
            ...list,
            ideas: list.ideas.map((idea) =>
              idea._id === updatedIdea._id ? updatedIdea : idea
            ),
          };
        } else {
          return list;
        }
      })
    );
  };

  return (
    <div>
      <h1>Your Lists</h1>
      <ul>
        {lists.map((list) => (
          <li key={list._id}>
            <h2 onClick={() => handleListClick(list)}>{list.name}</h2>
            {selectedList && selectedList._id === list._id && (
              <div>
                <input value={listName} onChange={handleListNameChange} />
                <button onClick={handleListSave}>Save</button>
                <button onClick={handleListDelete}>Delete</button>
              </div>
            )}
            <ul>
              {list.ideas.map((idea) => (
                <li key={idea._id}>{idea.description}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <ul>
        {ideas.map((idea) => (
          <li key={idea._id}>
            <h3>{idea.description}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserPage;
