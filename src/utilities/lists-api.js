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

export function addIdeaToList(listId, ideaId) {
  return fetch(`${BASE_URL}/${listId}`)
    .then((response) => response.json())
    .then((list) => {
      const updatedList = { ...list, ideas: [...list.ideas, ideaId] };
      return sendRequest(`${BASE_URL}/${listId}`, "PUT", updatedList);
    });
}

export function updateList(listId, listData) {
  console.log("Data being sent to server: ", listData);
  return sendRequest(`${BASE_URL}/${listId}`, "PUT", listData);
}

export function deleteList(listId) {
  return sendRequest(`${BASE_URL}/${listId}`, "DELETE");
}
