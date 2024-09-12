import { SERVER_URL } from "../consts";

type User = {
  id: number;
  name: string;
};

type Result = {
  result: "success" | "error";
  content: string | User[];
};

export default async function registerFetcher(
  name: string,
  email: string,
  password: string
) {
  const res = await fetch(SERVER_URL + "/auth/register", {
    method: "post",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: name, email: email, password: password }),
  });
  const result = (await res.json()) as Result;
  return result;
}
