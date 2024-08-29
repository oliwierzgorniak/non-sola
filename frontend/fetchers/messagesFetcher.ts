import { SERVER_URL } from "../consts";

export type Message = {
  isAuthors: boolean;
  content: string;
};

type Result = {
  result: "success" | "error";
  content: string | Message[];
};

export default async function chatsFetcher() {
  const res = await fetch(SERVER_URL + "/messaging/chats", {
    credentials: "include",
  });
  const result = (await res.json()) as Result;
  return result;
}
