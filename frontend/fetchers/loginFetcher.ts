import { SERVER_URL } from "../consts";

type Result = {
  result: "success" | "error";
  content: string;
};

export default async function loginFetcher(email: string, password: string) {
  const res = await fetch(SERVER_URL + "/auth/login", {
    method: "post",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: email, password: password }),
  });
  const result = (await res.json()) as Result;
  return result;
}
