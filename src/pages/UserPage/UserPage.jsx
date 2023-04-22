import React, { useState, useEffect } from "react";
import styles from "./UserPage.module.scss";
import {
  getUserLists,
  updateList,
  deleteList,
} from "../../utilities/lists-api";
import {
  getUserIdeas,
  updateIdea,
  deleteIdea,
} from "../../utilities/ideas-api";
import { getUser } from "../../utilities/users-service";

function UserPage({ user }) {
  const [lists, setLists] = useState([]);
  const [ideas, setIdeas] = useState([]);
  const [selectedList, setSelectedList] = useState(null);
  const [listName, setListName] = useState("");
  const [selectedIdea, setSelectedIdea] = useState(null);
  const [ideaTitle, setIdeaTitle] = useState("");
  const [ideaImg, setIdeaImg] = useState("");
  const [ideaLink, setIdeaLink] = useState("");
  const [ideaDesc, setIdeaDesc] = useState("");

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

  const handleIdeaClick = (idea) => {
    setSelectedIdea(idea);
    setIdeaTitle(idea.title);
    setIdeaImg(idea.img);
    setIdeaLink(idea.link);
    setIdeaDesc(idea.description);
  };

  const handleListNameChange = (event) => {
    setListName(event.target.value);
  };

  const handleIdeaTitleChange = (event) => {
    setIdeaTitle(event.target.value);
  };

  const handleIdeaImgChange = (event) => {
    setIdeaImg(event.target.value);
  };

  const handleIdeaLinkChange = (event) => {
    setIdeaLink(event.target.value);
  };

  const handleIdeaDescChange = (event) => {
    setIdeaDesc(event.target.value);
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

  const handleIdeaUpdate = async () => {
    try {
      const updatedIdea = await updateIdea(selectedIdea._id, {
        title: ideaTitle,
        img: ideaImg,
        link: ideaLink,
        description: ideaDesc,
      });
      setIdeas((prevIdeas) =>
        prevIdeas.map((idea) =>
          idea._id === updatedIdea._id ? updatedIdea : idea
        )
      );
      setSelectedIdea(updatedIdea);
    } catch (error) {
      console.error(error);
    }
  };

  const handleIdeaDelete = async () => {
    try {
      await deleteIdea(selectedIdea._id);
      setIdeas((prevIdeas) =>
        prevIdeas.filter((idea) => idea._id !== selectedIdea._id)
      );
      setSelectedIdea(null);
      setIdeaTitle("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.UserPage}>
      <h1>My Lists</h1>
      <ul>
        {lists.map((list) => (
          <li key={list._id}>
            <h2 onClick={() => handleListClick(list)}>{list.name}</h2>
            {selectedList && selectedList._id === list._id && (
              <div>
                <input value={listName} onChange={handleListNameChange} />
                <button onClick={handleListSave}>Update</button>
                <button onClick={handleListDelete}>Delete</button>
              </div>
            )}
            <ul>
              {list.ideas.map((idea) => (
                <div>
                  <li key={idea._id}>{idea.title}</li>
                  <a href={idea.link} target="_blank">
                    Link
                  </a>
                </div>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <h1>My Ideas</h1>
      <ul>
        {ideas.map((idea) => (
          <li key={idea._id}>
            <h3 onClick={() => handleIdeaClick(idea)}>{idea.title}</h3>
            {selectedIdea && selectedIdea._id === idea._id && (
              <div>
                <input value={ideaTitle} onChange={handleIdeaTitleChange} />
                <input value={ideaImg} onChange={handleIdeaImgChange} />
                <input value={ideaLink} onChange={handleIdeaLinkChange} />
                <input value={ideaDesc} onChange={handleIdeaDescChange} />
                <button onClick={handleIdeaUpdate}>Update</button>
                <button onClick={handleIdeaDelete}>Delete</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserPage;
