import React, { useState } from "react";
import AllListItems from "../AllListItem/AllListItem";
import { useList } from "../../utilities/useList";

export default function AllList() {
  const { lists, createList, updateList, deletedList } = useList();

  const [list, setList] = useState(null);
  const [listName, setListName] = useState("");
  const [selectedList, setSelectedList] = useState(null);

  const handleListClick = () => {
    setList(list);
  };

  const handleListNameChange = (event) => {
    setListName(event.target.value);
  };

  const handleListSave = async () => {
    try {
      const updatedList = await updateList(selectedList._id, {
        name: listName,
      });
      setList((prevLists) =>
        prevLists.map((list) =>
          list._id === updatedList._id ? updatedList : list
        )
      );
      setSelectedList(updatedList);
    } catch (error) {
      console.error(error);
    }
  };

  const handleListDelete = async (_id) => {
    try {
      await deletedList(selectedList._id);
      setList((prevLists) =>
        prevLists.filter((list) => list._id !== selectedList._id)
      );
      setListName("");
    } catch (error) {
      console.error(error);
    }
  };

  const handleIdeaUpdate = (updatedIdea) => {
    setList((prevLists) =>
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
        {lists.map((list, _id) => (
          <li key={_id}>
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
            setList={setList}
          />
        </div>
      )}
    </main>
  );
}

// {selectedList && (
//   <div>
//     <input value={listName} onChange={handleListNameChange} />
//     <button onClick={handleListSave}>Save</button>
//     <button onClick={handleListDelete}>Delete</button>
//     <AllListItems
//       list={selectedList}
//       onIdeaUpdate={handleIdeaUpdate}
//       setList={setList}
//     />
//   </div>
// )}