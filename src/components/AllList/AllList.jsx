import React from "react";
import { Link } from "react-router-dom";
import AllListIdea from "../AllListIdea/AllListIdea";

export default function AllList({ lists }) {
  return (
    <div>
      <h2>All Lists</h2>
      <ul>
        {lists.map((list) => (
          <li key={list._id}>
            <Link to={`/lists/${list._id}`}>
              <h3>{list.name}</h3>
            </Link>
            <ul>
              {list.ideas.map((idea) => (
                <li key={idea._id}>
                  <AllListIdea idea={idea} />
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
