import React, { useState } from "react";
import AllListItems from "../AllListItem/AllListItem";
import CreateList from "../Createlist/Createlist";
import { updateList, deleteList } from "../../utilities/lists-api";

export default function AllList({ lists, setLists }) {
  const [selectedList, setSelectedList] = useState(null);
  const [listName, setListName] = useState("");

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
    <main>
      <h1>All Lists</h1>
      <ul>
        {lists.map((list) => (
          <li key={list._id}>
            <h2 onClick={() => handleListClick(list)}>{list.name}</h2>
          </li>
        ))}
      </ul>
      {selectedList && (
        <div>
          <input value={listName} onChange={handleListNameChange} />
          <button onClick={handleListSave}>Save</button>
          <button onClick={handleListDelete}>Delete</button>
          <AllListItems
            list={selectedList}
            onIdeaUpdate={handleIdeaUpdate}
            setLists={setLists}
          />
        </div>
      )}
      <CreateList />
    </main>
  );
}
