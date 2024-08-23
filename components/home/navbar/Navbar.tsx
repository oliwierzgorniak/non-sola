import Image from "next/image";
import Link from "next/link";
import styles from "./navbar.module.css";
import { merriweather } from "@/fonts";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.leftContainer}>
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
      </div>
      <div className={styles.rightContainer}>
        <ul>
          <li>
            <Link href="register">rejestracja</Link>
          </li>
          <li>
            <Link href="login">logowanie</Link>
          </li>
        </ul>
        <select defaultValue={"pl"}>
          <option value="pl">pl</option>
          <option value="en">en</option>
        </select>
      </div>
    </nav>
  );
}
