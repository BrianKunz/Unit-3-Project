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
  }
  if (user) {
    options.headers = options.headers || {};
    options.headers.username = user.username;
  }
  try {
    const { data } = await axios(`http://localhost:3001${url}`, options);
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Bad Request");
  }
}
