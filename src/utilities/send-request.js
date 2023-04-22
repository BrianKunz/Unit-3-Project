import { getToken } from "./users-service";
import axios from "axios";

export default async function sendRequest(
  url,
  method = "GET",
  payload = null,
  user = null
) {
  const options = { method };
  if (payload) {
    options.headers = { "Content-Type": "application/json" };
    options.data = JSON.stringify(payload);
  }
  const token = getToken();
  if (token) {
    options.headers = options.headers || {};
    options.headers.Authorization = `Bearer ${token}`;
    // console.log("Authorization header:", options.headers.Authorization);
  }
  if (user) {
    options.headers = options.headers || {};
    options.headers.username = user.username;
  }
  // console.log(
  //   `Sending ${method} request to ${url} with payload: ${JSON.stringify({
  //     payload,
  //   })}`
  // );
  try {
    const { data } = await axios(
      `https://64436f3e03dc5f54942decd0--deluxe-vacherin-a38a9a.netlify.app/${url}`,
      options
    );
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Bad Request");
  }
}
