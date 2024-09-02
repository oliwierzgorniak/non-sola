import { SERVER_URL } from "../consts";

type Result = {
  result: "success" | "error";
  content: string;
};

export default async function sendMessageFetcher(
  contactId: number,
  content: string
) {
  const res = await fetch(SERVER_URL + "/messaging/sendMessage", {
    method: "post",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      contactId: contactId,
      content: content,
    }),
  });
  const result = (await res.json()) as Result;
  return result;
}
