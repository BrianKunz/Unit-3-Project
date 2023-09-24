import React, { useEffect, useState } from "react";
import styles from "./ShowListPage.module.scss";
import { getAllIdeas } from "../../utilities/ideas-api";
import AllListIdea from "../../components/AllListIdea/AllListIdea";
import { getUserLists } from "../../utilities/lists-api";
import { getUser } from "../../utilities/users-service";

export default function ShowIdeasPage() {
  const [ideas, setIdeas] = useState([]);
  const [lists, setLists] = useState([]);
  const [selectedList, setSelectedList] = useState(null);

  useEffect(() => {
    async function getData() {
      const user = getUser();
      const ideasData = await getAllIdeas();
      const listsData = await getUserLists(user);
      setIdeas(ideasData);
      setLists(listsData);
    }
    getData();
  }, []);

  const handleListSelected = (event) => {
    setSelectedList(event.target.value);
  };

  const handleAddToSelectedList = (idea) => {
    // Check that there is a selected list
    if (!selectedList) {
      console.log("Please select a list first");
      return;
    }

    // Find the selected list in the lists array
    const list = lists.find((list) => list._id === selectedList);

    // Add the idea to the selected list
    list.ideas.push(idea);

    // Update the selected list in the lists array
    setLists([...lists.filter((list) => list._id !== selectedList), list]);
  };

  return (
    <div className={styles.ShowIdeasPage}>
      <h2>All Ideas</h2>
      <div>
        <label htmlFor="lists">Select a list:</label>
        <select name="lists" id="lists" onChange={handleListSelected}>
          <option value="">--Select a list--</option>
          {lists.map((list) => (
            <option key={list._id} value={list._id}>
              {list.name}
            </option>
          ))}
        </select>
      </div>
      {selectedList && (
        <div>
          <AllListIdea
            ideas={ideas}
            handleAddToSelectedList={handleAddToSelectedList}
            listId={selectedList}
          />
        </div>
      )}
    </div>
  );
}
