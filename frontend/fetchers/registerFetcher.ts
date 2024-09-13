import { SERVER_URL } from "../consts";

type Result = {
  result: "success" | "error";
  content: string;
};

type Props = {
  name: string;
  age: string;
  denomination: string;
  img: string | null;
  description: string;
  email: string;
  password: string;
};

export default async function registerFetcher({
  name,
  age,
  denomination,
  img,
  description,
  email,
  password,
}: Props) {
  const res = await fetch(SERVER_URL + "/auth/register", {
    method: "post",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      age: +age,
      denomination: denomination,
      img: img,
      description: description,
      email: email,
      password: password,
    }),
  });
  const result = (await res.json()) as Result;
  return result;
}
