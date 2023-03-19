import sendRequest from "./sendRequest";

const BASE_URL = "/api/lists";

export function getAll() {
  return sendRequest(BASE_URL);
}

export function getById(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}
