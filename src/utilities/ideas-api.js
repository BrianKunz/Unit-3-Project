import sendRequest from "./send-request";

const BASE_URL = "/api/ideas";

// export function getAll() {
//   return sendRequest(BASE_URL);
// }

// export function getById(id) {
//   return sendRequest(`${BASE_URL}/${id}`);
// }

export function createIdea(idea) {
  return sendRequest(`${BASE_URL}/`, "POST");
}

//Need to add edit and delete functions for
