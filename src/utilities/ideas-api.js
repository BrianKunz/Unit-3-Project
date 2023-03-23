import axios from "axios";
import sendRequest from "./sendRequest";

const BASE_URL = "/api/ideas";

export function getAllIdeas() {
  return sendRequest(BASE_URL);
}

export function createIdea(ideaData) {
  return axios.post(`${BASE_URL}/create`, ideaData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export function updateIdea(ideaId, ideaData) {
  return sendRequest(`${BASE_URL}/${ideaId}`, "PUT", ideaData);
}

export function deleteIdea(ideaId) {
  return axios.delete(`${BASE_URL}/${ideaId}`);
}
