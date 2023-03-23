import sendRequest from "./send-request";

const BASE_URL = "/api/categories";

export function getAllCategories() {
  return sendRequest(BASE_URL);
}
