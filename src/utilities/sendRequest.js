import axios from "axios";

import { getToken } from "./users-service";

export default async function sendRequest(url, method = "GET", payload = null) {
  const options = { method };
  if (payload) {
    options.headers = { "Content-Type": "application/json" };
    options.data = payload;
  }
  const token = getToken();
  if (token) {
    options.headers = options.headers || {};
    options.headers.Authorization = `Bearer ${token}`;
  }
  try {
    const res = await axios(url, options);
    if (res.status >= 400 && res.status < 600) {
      throw new Error("Bad Request");
    }
    return res.data;
  } catch (error) {
    throw new Error("Bad Request");
  }
}
