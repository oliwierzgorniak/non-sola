import { merriweather } from "@/fonts";
import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.leftContainer}>
          <Image
            width={40}
            height={45}
            src={"/logo.svg"}
            alt="logo, krzyż w środku serca"
          />
          <h2 className={merriweather.className}>Non Sola</h2>
        </div>
        <ul>
          <li>
            Email:{" "}
            <Link href={"mailto:zgorniak.oliwier@gmail.com"}>
              zgorniak.oliwier@gmail.com
            </Link>
          </li>
          <li>
            <Link href={"https://github.com/oliwierzgorniak/non-sola"}>
              development
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
