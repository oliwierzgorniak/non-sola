import { SERVER_URL } from "../consts";

export type Result = {
  result: "success" | "error";
  content: string;
};

type Data = {
  name: string;
  age: string;
  denomination: string;
  description: string;
  img: string;
  location: [number, number];
};

export default async function myProfileFetcher(data: Data) {
  const res = await fetch(`${SERVER_URL}/user/update`, {
    credentials: "include",
    method: "post",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = (await res.json()) as Result;
  return result;
}
