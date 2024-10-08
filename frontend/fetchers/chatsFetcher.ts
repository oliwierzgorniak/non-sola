import { SERVER_URL } from "../consts";

export type Chat = {
  id: number;
  name: string;
};

type Result = {
  result: "success" | "error";
  content: string | Chat[];
};

export default async function chatsFetcher() {
  const res = await fetch(SERVER_URL + "/messaging/chats", {
    credentials: "include",
  });
  const result = (await res.json()) as Result;
  return result;
}
