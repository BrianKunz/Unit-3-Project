import sendRequest from "./send-request";

const BASE_URL = "/api/users";

export function signUp(userData) {
  try {
    return sendRequest(BASE_URL, "POST", userData);
  } catch (error) {
    console.error(error);
    return error.message;
  }
}

export function login(credentials) {
  return sendRequest(`${BASE_URL}/login`, "POST", credentials);
}
