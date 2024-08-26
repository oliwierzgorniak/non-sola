import Image from "next/image";
import Link from "next/link";
import styles from "./register.module.css";
import { merriweather } from "@/fonts";

export default function Register() {
  return (
    <div className={styles.outerContainer}>
      <Link href={"/pl"} className={styles.backLink}>
        ← Strona główna
      </Link>
      <main>
        <article className={styles.container}>
          <h2 className={merriweather.className}>Rejestracja</h2>
          <form action="">
            <label htmlFor="email">
              Email
              <input id="email" type="email" />
            </label>
            <label htmlFor="password">
              Hasło
              <input id="password" type="password" />
            </label>
            <button className={styles.button}>
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
