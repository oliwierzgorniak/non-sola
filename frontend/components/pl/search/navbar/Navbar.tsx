"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./navbar.module.css";
import { merriweather } from "@/fonts";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  return (
    <nav className={styles.navbar}>
      <Link className={styles.leftContainer} href={"/pl"}>
        <Image
          width={59}
          height={67}
          alt="logo, krzyż w środku serca"
          src={"/logo.svg"}
        />
        <div className={styles.leftTextContainer}>
          <h1 className={styles.title + " " + merriweather.className}>
            Non Sola
          </h1>
          <p className={styles.titleDescription}>
            portal randkowy dla protestantów
          </p>
        </div>
      </Link>
      <div className={styles.rightContainer}>
        <ul>
          <li>
            <Link href="/pl/search">szukaj</Link>
          </li>
          <li>
            <Link href="/pl/conversations">konwersacje</Link>
          </li>
          <li>
            <Link href="/pl/profile">profil</Link>
          </li>
        </ul>
        <select
          onChange={(e) => {
            const language = e.target.value;
            router.push("/" + language + "/search");
          }}
          defaultValue={"pl"}
        >
          <option value="pl">pl</option>
          <option value="en">en</option>
        </select>
      </div>
    </nav>
  );
}
