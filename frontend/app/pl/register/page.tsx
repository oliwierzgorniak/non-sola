"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./register.module.css";
import { merriweather } from "@/fonts";
import { useRouter } from "next/navigation";
import handleRegistration from "./handleRegistration";
import { useState } from "react";
import Password from "@/components/pl/register/password/Password";
import Description from "@/components/pl/register/description/Description";
import Dots from "@/components/pl/register/dots/Dots";
import ImageSection from "@/components/pl/register/image/Image";

export default function Register() {
  const [currentSection, setCurrentSection] = useState(0);
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");

  return (
    <div className={styles.outerContainer}>
      <Link href={"/pl"} className={styles.backLink}>
        ← Strona główna
      </Link>
      <main>
        {currentSection == 0 && <Password />}
        {currentSection == 1 && <ImageSection img={img} setImg={setImg} />}
        {currentSection == 2 && (
          <Description
            description={description}
            setDescription={setDescription}
          />
        )}
      </main>
      <div className={styles.buttonsContainer}>
        <button
          onClick={(e) => {
            setCurrentSection(currentSection - 1);
          }}
          style={{ visibility: currentSection == 0 ? "hidden" : "initial" }}
          className={styles.button + " " + styles.buttonSecondary}
        >
          <Image
            width={22}
            height={22}
            src={"/arrow-left.svg"}
            alt="strzałka w lewo"
          />
          Do tyłu
        </button>
        <Dots currentSection={currentSection} />
        <button
          onClick={(e) => {
            setCurrentSection(currentSection + 1);
          }}
          className={styles.button}
        >
          Dalej
          <Image
            width={24}
            height={24}
            src={"/arrow-right.svg"}
            alt="strzałka w prawo"
          />
        </button>
      </div>
    </div>
  );
}
