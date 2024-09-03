import { SERVER_URL } from "../consts";

export type UserData = {
  age: number;
  name: string;
  denomination: string;
  description: string;
  img: string;
  id: number;
  isAdded: boolean;
};

export type Result = {
  result: "success" | "error";
  content: string | UserData;
};

export default async function profileFetcher(userId: string) {
  const res = await fetch(`${SERVER_URL}/ui/profile?userId=${userId}`, {
    credentials: "include",
  });
  const result = (await res.json()) as Result;
  return result;
}
