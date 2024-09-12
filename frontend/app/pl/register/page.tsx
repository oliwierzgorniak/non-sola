"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./register.module.css";
import { merriweather } from "@/fonts";
import { useRouter } from "next/navigation";
import handleRegistration from "./handleRegistration";
import { useEffect, useState } from "react";
import Password from "@/components/pl/register/password/Password";
import Description from "@/components/pl/register/description/Description";
import Dots from "@/components/pl/register/dots/Dots";
import ImageSection from "@/components/pl/register/image/Image";
import { useRegisterStore } from "@/stores/register";

export default function Register() {
  const currentSection = useRegisterStore((state) => state.currentSection);

  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");
  const [location, setLocation] = useState<{
    x: null | number;
    y: null | number;
  }>({ x: null, y: null });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((e) => {
        setLocation({
          x: e.coords.longitude,
          y: e.coords.latitude,
        });
      });
    }
  }, []);

  return (
    <div className={styles.outerContainer}>
      <Link href={"/pl"} className={styles.backLink}>
        ← Strona główna
      </Link>
      <Password />
      <ImageSection />
      <Description />
    </div>
  );
}
