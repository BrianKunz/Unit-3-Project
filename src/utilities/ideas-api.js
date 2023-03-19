import sendRequest from "./send-request";

const BASE_URL = "/api/ideas";

export function getAllIdeas() {
  return sendRequest(BASE_URL);
}

export function createIdea(ideaData) {
  return sendRequest(`${BASE_URL}/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(ideaData),
  });
}

export function updateIdea(ideaId, ideaData) {
  return sendRequest(`${BASE_URL}/${ideaId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(ideaData),
  });
}

export function deleteIdea(ideaId) {
  return sendRequest(`${BASE_URL}/${ideaId}`, { method: "DELETE" });
}
