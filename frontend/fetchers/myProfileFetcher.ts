import { SERVER_URL } from "../consts";

export type User = {
  age: number;
  name: string;
  denomination: string;
  description: string;
  img: string;
  location: [number, number];
};

export type Result = {
  result: "success" | "error";
  content: string | User;
};

export default async function myProfileFetcher() {
  const res = await fetch(`${SERVER_URL}/ui/myProfile`, {
    credentials: "include",
  });
  const result = (await res.json()) as Result;
  return result;
}
