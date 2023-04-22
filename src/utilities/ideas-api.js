import sendRequest from "./send-request";

const BASE_URL = "/api/ideas";

export function getAllIdeas() {
  return sendRequest(`${BASE_URL}/`);
}

export async function getUserIdeas(user) {
  try {
    const ideasData = await sendRequest(`${BASE_URL}`);
    return ideasData.filter((idea) => idea.username === user.username);
  } catch (error) {
    console.error(error);
    throw new Error("Failed to get user ideas");
  }
}

export function createIdea(ideaData) {
  const user = {
    username: localStorage.getItem("username"),
  };
  const data = {
    ...ideaData,
    user,
  };
  return sendRequest(`${BASE_URL}/`, "POST", data);
}

export function updateIdea(ideaId, ideaData) {
  return sendRequest(`${BASE_URL}/${ideaId}`, "PUT", ideaData);
}

export function deleteIdea(ideaId) {
  return sendRequest(`${BASE_URL}/${ideaId}`, "DELETE");
}

export async function getIdeasByCategory(categoryName) {
  try {
    const ideasData = await sendRequest(`${BASE_URL}`);
    return ideasData.filter(
      (idea) => idea.category && idea.category.name === categoryName
    );
  } catch (error) {
    console.error(error);
    throw new Error(`Failed to get ideas for category ${categoryName}`);
  }
}
