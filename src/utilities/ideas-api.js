import sendRequest from "./send-request";

const BASE_URL = "/api/ideas";

export function getAllIdeas() {
  return sendRequest(`${BASE_URL}/`);
}

export function createIdea(ideaData) {
  console.log("ideaData", ideaData);
  return sendRequest(`${BASE_URL}/`, "POST", ideaData);
}

export function updateIdea(ideaId, ideaData) {
  return sendRequest(`${BASE_URL}/${ideaId}`, "PUT", ideaData);
}

export function deleteIdea(ideaId) {
  return sendRequest(`${BASE_URL}/${ideaId}`, "DELETE");
}
