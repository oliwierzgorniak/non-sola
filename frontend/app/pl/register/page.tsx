"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./register.module.css";
import { merriweather } from "@/fonts";
import { useRouter } from "next/navigation";
import handleRegistration from "./handleRegistration";

export default function Register() {
  const router = useRouter();

  return (
    <div className={styles.outerContainer}>
      <Link href={"/pl"} className={styles.backLink}>
        ← Strona główna
      </Link>
      <main>
        <article className={styles.container}>
          <h2 className={merriweather.className}>Rejestracja</h2>
          <form action="">
            <label htmlFor="name">
              Imię
              <input id="name" name="name" />
            </label>
            <label htmlFor="email">
              Email
              <input id="email" type="email" name="email" />
            </label>
            <label htmlFor="password">
              Hasło
              <input id="password" type="password" name="password" />
            </label>
            <button
              onClick={(e) => handleRegistration(router, e)}
              className={styles.button}
            >
              <Image
                width={34}
                height={34}
                src={"/register.svg"}
                alt="ikonka rejestracji"
              />
              Zarejestruj się
            </button>
          </form>
          <Link href="/pl/login">Logowanie</Link>
        </article>
      </main>
    </div>
  );
}
