"use client";

import Link from "next/link";
import styles from "./register.module.css";
import Password from "@/components/pl/register/password/Password";
import Description from "@/components/pl/register/description/Description";
import Location from "@/components/pl/register/location/Location";
import Info from "@/components/pl/register/info/Info";
import ImageSection from "@/components/pl/register/image/Image";

export default function Register() {
  return (
    <div className={styles.outerContainer}>
      <Link href={"/pl"} className={styles.backLink}>
        ← Strona główna
      </Link>
      <Info />
      <ImageSection />
      <Description />
      <Location />
      <Password />
    </div>
  );
}
