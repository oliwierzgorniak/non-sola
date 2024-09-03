"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./login.module.css";
import { merriweather } from "@/fonts";
import handleLogin from "./handleLogin";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Register() {
  const router = useRouter();
  const [error, setError] = useState("");

  return (
    <div className={styles.outerContainer}>
      <Link href={"/pl"} className={styles.backLink}>
        ← Strona główna
      </Link>
      <main>
        <article className={styles.container}>
          <h2 className={merriweather.className}>Logowanie</h2>
          <form>
            <label htmlFor="email">
              Email
              <input id="email" type="email" name="email" />
            </label>
            <label htmlFor="password">
              Hasło
              <input id="password" type="password" name="password" />
            </label>
            {error && <span className={styles.error}>{error}</span>}
            <button
              onClick={(e) => handleLogin(router, e, setError)}
              className={styles.button}
            >
              <Image
                width={34}
                height={34}
                src={"/login.svg"}
                alt="ikonka logowania"
              />
              Zaloguj się
            </button>
          </form>
          <Link href="/pl/register">Rejestracja</Link>
        </article>
      </main>
    </div>
  );
}
