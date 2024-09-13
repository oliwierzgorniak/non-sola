import { SERVER_URL } from "../consts";

export type User = {
  img: string;
  name: string;
  age: number;
  id: number;
};

type Result = {
  result: "success" | "error";
  content: string | User[];
};

export default async function usersFetcher(
  minAge: number,
  maxAge: number,
  distance: number,
  page: number | undefined
) {
  const res = await fetch(
    `${SERVER_URL}/ui/users?minAge=${minAge}&maxAge=${maxAge}&distance=${distance}`,
    { credentials: "include" }
  );
  const result = (await res.json()) as Result;
  console.log(result.content);
  return result;
}
