import React, { useState, useEffect } from "react";
import { getAllCategories } from "../../utilities/categories-api";
import { createIdea } from "../../utilities/ideas-api";
import styles from "./CreateListIdea.module.scss";

export default function NewCreateListIdea() {
  const [idea, setIdea] = useState({
    title: "",
    img: "",
    description: "",
    category: "",
    link: "",
  });

  const [categories, setCategories] = useState([]);
  const [error, setError] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setIdea({ ...idea, [name]: value });
  };

  const handleCreateIdea = async (event) => {
    event.preventDefault();
    try {
      const ideaData = await createIdea({
        ...idea,
        category: idea.category ? idea.category._id : "",
      });
      console.log(ideaData);
      setIdea(ideaData);
    } catch (error) {
      setError("Failed to create item");
    }
  };

  const handleCategoryChange = (event) => {
    const { value } = event.target;
    const selectedCategory = categories.find(
      (category) => category.name === value
    );
    setIdea((prevIdea) => ({
      ...prevIdea,
      category: selectedCategory || "",
    }));
  };

  useEffect(() => {
    getAllCategories()
      .then((categories) => setCategories(categories))
      .catch((error) => setError(error.message));
  }, []);

  return (
    <div className={styles.NewCreateListIdea}>
      <div>
        <form autoComplete="off" onSubmit={handleCreateIdea}>
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={idea.title}
            onChange={handleInputChange}
            required
          />
          <label>Image URL</label>
          <input
            type="text"
            name="img"
            value={idea.img}
            onChange={handleInputChange}
          />
          <label>Description</label>
          <input
            type="text"
            name="description"
            value={idea.description}
            onChange={handleInputChange}
            required
          />
          <label>Category</label>
          <select
            name="category"
            value={idea.category ? idea.category.name : ""}
            onChange={handleCategoryChange}
          >
            <option value="">Select a category</option>
            {categories.map((category) => (
              <option key={category._id} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
          <label>Link</label>
          <input
            type="text"
            name="link"
            value={idea.link}
            onChange={handleInputChange}
            required
          />
          <button type="submit" className="btn-sm">
            Add to list
          </button>
        </form>
      </div>
      <h1>&nbsp;{error}</h1>
    </div>
  );
}
