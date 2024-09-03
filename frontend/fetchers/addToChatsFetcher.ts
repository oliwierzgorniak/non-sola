import { SERVER_URL } from "../consts";

type Result = {
  result: "success" | "error";
  content: string;
};

export default async function addToChatsFetcher(contactId: number) {
  const res = await fetch(SERVER_URL + "/messaging/addToChats", {
    method: "post",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      contactId: contactId,
    }),
  });
  const result = (await res.json()) as Result;
  return result;
}
