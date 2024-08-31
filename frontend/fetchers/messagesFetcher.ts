import { SERVER_URL } from "../consts";

export type Message = {
  isUsers: boolean;
  content: string;
};

type Result = {
  result: "success" | "error";
  content: string | Message[];
};

export default async function messagesFetcher(contactId: number) {
  const res = await fetch(
    SERVER_URL + "/messaging/messages?contactId=" + contactId,
    {
      credentials: "include",
    }
  );
  const result = (await res.json()) as Result;
  return result;
}
