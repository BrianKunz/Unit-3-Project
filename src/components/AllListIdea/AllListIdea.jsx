import React from "react";
import styles from "./AllListItem.module.scss";
import { addIdeaToList } from "../../utilities/lists-api";

export default function AllListIdea({ ideas, listId }) {
  console.log("listId:", listId);
  const handleAddToList = async (ideaId) => {
    try {
      await addIdeaToList(listId, ideaId);
      alert("Idea added to list!");
    } catch (error) {
      console.error(error);
    }
  };
  const AddIdeaToList = ({ idea }) => {
    return (
      <button onClick={() => handleAddToList(idea._id)}>Add to List</button>
    );
  };

  return (
    <div className={styles.AllListIdea}>
      <h2>Ideas</h2>
      <ul>
        {ideas.map((idea) => (
          <li key={idea._id}>
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
              <AddIdeaToList idea={idea} />
            </>
          </li>
        ))}
      </ul>
    </div>
  );
}
