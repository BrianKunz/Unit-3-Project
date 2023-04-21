import sendRequest from "./send-request";

const BASE_URL = "/api/lists";

export function getLists() {
  return sendRequest(`${BASE_URL}/`);
}

export async function getUserLists(user) {
  try {
    const listsData = await sendRequest(`/api/lists`);
    return listsData.filter((list) => list.username === user.username);
  } catch (error) {
    console.error(error);
    throw new Error("Failed to get user lists");
  }
}

export async function createList(listData) {
  const user = {
    username: localStorage.getItem("username"),
  };
  const data = {
    ...listData,
    user,
  };
  return sendRequest(`${BASE_URL}/`, "POST", data);
}

export function addIdeaToList(ideaId, listId) {
  return sendRequest(`${BASE_URL}/${listId}/ideas/${ideaId}`, "POST");
}

export function updateList(listId, listData) {
  return sendRequest(`${BASE_URL}/${listId}`, "PUT", listData);
}

export function deleteList(listId) {
  return sendRequest(`${BASE_URL}/${listId}`, "DELETE");
}
