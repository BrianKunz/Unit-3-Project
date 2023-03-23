import axios from "axios";
import { useState, useEffect } from "react";
const BASE_URL = "http://localhost:3001/api/lists";

export function useList() {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    const getLists = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/`);
        setLists(response.data);
      } catch (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      }
    };

    getLists();
  }, []);

  const createList = async ({ title, img, description, category, link }) => {
    const newList = {
      title: title,
      img: img,
      description: description,
      category: category,
      link: link,
    };
    try {
      const response = await axios.post(`${BASE_URL}/`, newList);
      setLists([...lists, response.data]);
      title = "";
      img = "";
      description = "";
      category = "";
      link = "";
    } catch (error) {
      console.error(`Error: ${error.message}`);
    }
  };

  const updateList = async (_id, e) => {
    const updatedLists = [...lists];
    const indexList = updatedLists.findIndex((list) => list._id === _id);
    updatedLists[indexList].content = e.target.value;

    try {
      await axios.put(`${BASE_URL}/${_id}`, updatedLists[indexList]);
    } catch (error) {
      console.error(`Error: ${error.message}`);
    }
  };

  const deletedList = async (_id) => {
    try {
      await axios.delete(`${BASE_URL}/${_id}`);
      const indexList = lists.filter((list) => list._id === _id);
      setLists(indexList);
    } catch (error) {
      console.error(`Error: ${error.message}`);
    }
  };

  return {
    lists,
    createList,
    updateList,
    deletedList,
  };
}