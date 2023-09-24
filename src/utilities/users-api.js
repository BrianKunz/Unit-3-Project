import sendRequest from "./send-request";

const BASE_URL = "/api/users";

export function signUp(userData) {
  try {
    const options = {
      headers: {
        username: userData.username,
      },
    };
    return sendRequest(BASE_URL, "POST", userData, options);
  } catch (error) {
    console.error(error);
    return error.message;
  }
}

export function login(credentials) {
  const options = {
    headers: {
      username: credentials.username,
    },
  };
  return sendRequest(`${BASE_URL}/login`, "POST", credentials, options);
}
