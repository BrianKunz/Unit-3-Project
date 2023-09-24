import sendRequest from "./send-request";
import { getToken } from "./users-service";

const BASE_URL = "/api/lists";

export function getLists() {
  return sendRequest(`${BASE_URL}/`);
}

export async function getUserLists(user) {
  try {
    const listsData = await sendRequest(`${BASE_URL}`);
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
  const token = getToken();
  if (!token) {
    throw new Error("User is not authenticated");
  }

  return sendRequest(`${BASE_URL}/${listId}`, "GET", null, {
    Authorization: `Bearer ${token}`,
  }).then((list) => {
    const updatedList = { ...list, ideas: [...list.ideas, ideaId] };
    return sendRequest(`${BASE_URL}/${listId}`, "PUT", updatedList, {
      Authorization: `Bearer ${token}`,
    });
  });
}

export function updateList(listId, listData) {
  // console.log("Data being sent to server: ", listData);
  return sendRequest(`${BASE_URL}/${listId}`, "PUT", listData);
}

export function deleteList(listId) {
  return sendRequest(`${BASE_URL}/${listId}`, "DELETE");
}
