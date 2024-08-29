import { MouseEvent } from "react";
import registerFetcher from "../../../fetchers/registerFetcher";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export default async function handleRegistration(
  router: AppRouterInstance,
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
  const name = formData.get("name")?.toString() as string;
  const email = formData.get("email")?.toString() as string;
  const password = formData.get("password")?.toString() as string;

  const data = await registerFetcher(name, email, password);

  if (data.result == "success") {
    router.push("/pl/search");
  }
}
