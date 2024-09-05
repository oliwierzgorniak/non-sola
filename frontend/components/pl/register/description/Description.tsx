import { merriweather } from "@/fonts";
import styles from "./password.module.css";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import sharedStyles from "../../../../app/pl/register/register.module.css";

type DescriptionProps = {
  description: string;
  setDescription: Dispatch<SetStateAction<string>>;
};

export default function Description({
  description,
  setDescription,
}: DescriptionProps) {
  // const router = useRouter();
  const [chars, setChars] = useState<number>(0);

  return (
    <div className={sharedStyles.container}>
      <h2 className={merriweather.className}>Rejestracja</h2>
      <label htmlFor="description">
        Opis
        <textarea name="description" id="description"></textarea>
      </label>
      <span className={sharedStyles.error}>{chars}/500</span>
      <button onClick={(e) => {}} className={sharedStyles.button}>
        Dalej
        <Image
          width={34}
          height={34}
          src={"/arrow-right.svg"}
          alt="strzałka w prawo"
        />
      </button>
    </div>
  );
}
