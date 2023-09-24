import sendRequest from "./send-request";

const BASE_URL = "/api/categories";

export function getAllCategories(user) {
  return sendRequest(`${BASE_URL}/`, "GET", null, user);
}
