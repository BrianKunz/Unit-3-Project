import { getToken } from "./users-service";

export default async function sendRequest(url, method = "GET", payload = null) {
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
  const res = await fetch(utl, options);
  if (res.ok) return res.json();
  throw new Error("Bad Request");
}