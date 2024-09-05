import { merriweather } from "@/fonts";
import styles from "./password.module.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import sharedStyles from "../../../../app/pl/register/register.module.css";

export default function Password() {
  // const router = useRouter();
  const [error, setError] = useState<string>("");

  return (
    <div className={sharedStyles.container}>
      <h2 className={merriweather.className}>Rejestracja</h2>
      <label htmlFor="name">
        Imię
        <input id="name" name="name" required />
      </label>
      <label htmlFor="denomination">
        Wyznanie
        <input id="denomination" name="denomination" required />
      </label>
      <label htmlFor="email">
        Email
        <input id="email" type="email" name="email" required />
      </label>
      <label htmlFor="password">
        Hasło
        <input id="password" type="password" name="password" required />
      </label>
      {error && <span className={sharedStyles.error}>{error}</span>}
      <Link href="/pl/login">Logowanie</Link>
    </div>
  );
}
