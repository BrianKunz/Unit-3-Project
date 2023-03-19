import sendRequest from "./send-request";
const BASE_URL = "/api/lists";

export function getList() {
  return sendRequest(`${BASE_URL}/list`);
}

export function addIdeaToList(ideaId) {
  return sendRequest(`${BASE_URL}/list/ideas/${ideaId}`, "POST");
}
