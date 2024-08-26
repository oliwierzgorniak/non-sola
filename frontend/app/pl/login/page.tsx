import Image from "next/image";
import Link from "next/link";
import styles from "./login.module.css";
import { merriweather } from "@/fonts";

export default function Register() {
  return (
    <div className={styles.outerContainer}>
      <Link href={"/pl"} className={styles.backLink}>
        ← Strona główna
      </Link>
      <main>
        <article className={styles.container}>
          <h2 className={merriweather.className}>Logowanie</h2>
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
