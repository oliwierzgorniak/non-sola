import { merriweather } from "@/fonts";
import Image from "next/image";
import Link from "next/link";
import styles from "./hero.module.css";
import Button from "@/components/pl/home/button/Button";

export default function Hero() {
  return (
    <main>
      <section className={styles.container}>
        <div className={styles.textContainer}>
          <h2 className={merriweather.className + " " + styles.title}>
            Non Sola
          </h2>
          <p className={styles.description}>
            Znużyły Cię bezowocne poszukiwania? Poznaj protestantów, którzy też
            szukają życiwoego partnera za darmo.
          </p>
          <Button href="/register">
            <Image
              width={44}
              height={44}
              src={"/register.svg"}
              alt="register icon"
            />
            Zarejestruj się
          </Button>
        </div>
        <Image
          width={571}
          height={544}
          className={styles.heroImg}
          src={"/hero.png"}
          alt="przytulająca się para"
        />
      </section>
    </main>
  );
}
