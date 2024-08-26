import { SERVER_URL } from "../consts";

export default async function registerFetcher(email: string, password: string) {
  const res = await fetch(SERVER_URL + "/api/signup", {
    method: "post",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: email, password: password }),
  });
  const result = await res.json();
  return result;
}
