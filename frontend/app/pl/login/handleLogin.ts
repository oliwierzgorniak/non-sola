import { Dispatch, MouseEvent, SetStateAction } from "react";
import loginFetcher from "../../../fetchers/loginFetcher";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export default async function handleLogin(
  router: AppRouterInstance,
  e: MouseEvent,
  setError: Dispatch<SetStateAction<string>>
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

  const data = await loginFetcher(email, password);

  if (data.result == "success") {
    router.push("/pl/search");
  } else {
    setError(data.content);
  }
}
