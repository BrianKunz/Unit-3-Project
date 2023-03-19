import sendRequest from "./send-request";
const BASE_URL = "/api/lists";

export function getLists() {
  return sendRequest(`${BASE_URL}/`);
}

export function addIdeaToList(ideaId) {
  return sendRequest(`${BASE_URL}/list/ideas/${ideaId}`, "POST");
}

export function createList(listData) {
  return sendRequest(`${BASE_URL}/`, "POST", listData);
}

// Add remove idea from list function
