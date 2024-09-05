import { SERVER_URL } from "../consts";

type UserData = {
  img: string;
  name: string;
  age: number;
  id: number;
};

type Result = {
  result: "success" | "error";
  content: string | UserData;
};

export default async function usersFetcher(page: number) {
  const res = await fetch(`${SERVER_URL}/ui/users?page=${page}`);
  const result = (await res.json()) as Result;
  return result;
}
