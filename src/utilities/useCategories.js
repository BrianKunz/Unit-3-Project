import { useState, useEffect } from "react";
import axios from "axios";

const BASE_URL = "http://localhost:3001/api/categories";

export function useCategories() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/`);
        setCats(response.data);
      } catch (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else {
          console.log(`Error: ${error.message}`);
        }
      }
    };

    getCategories();
  }, []);
  return cats;
}
