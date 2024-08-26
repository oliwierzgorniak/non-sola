import { NextRouter } from "next/dist/client/router";
import { MouseEvent } from "react";
import registerFetcher from "../../../fetchers/registerFetcher";

export default async function handleRegistration(
  router: NextRouter,
  e: MouseEvent
) {
  e.preventDefault();
  const $button = e.target as HTMLButtonElement;
  const $form = $button.parentElement as HTMLFormElement | null;

  if (!$form) {
    console.error("$form is null");
    return;
  }

  const formData = new FormData($form);
  const email = formData.get("email")?.toString() as string;
  const password = formData.get("password")?.toString() as string;

  const data = await registerFetcher(email, password);
  router.push("/pl/search");
}
