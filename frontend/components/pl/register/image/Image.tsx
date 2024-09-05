import { merriweather } from "@/fonts";
import styles from "./image.module.css";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import sharedStyles from "../../../../app/pl/register/register.module.css";

type ImageProps = {
  img: string;
  setImg: Dispatch<SetStateAction<string>>;
};

export default function ImageSection({ img, setImg }: ImageProps) {
  // const router = useRouter();
  const [error, setError] = useState<string>("");

  return (
    <div className={sharedStyles.container}>
      <h2 className={merriweather.className}>Rejestracja</h2>
      <form>
        <label className={styles.label} htmlFor="photo">
          Zdjęcie
          <input
            id="photo"
            name="photo"
            type="file"
            required
            accept="image/*"
            onChange={(e) => {
              const files = e.target.files;
              if (files && files.length == 1) {
                const reader = new FileReader();
                reader.onload = (e) => {
                  const fileData = e.target?.result as string | null;
                  if (fileData) setImg(fileData);
                };
                reader.readAsDataURL(files[0]);
              }
            }}
          />
        </label>
      </form>
      {error && <span className={sharedStyles.error}>{error}</span>}
      {img && (
        <Image
          className={styles.img}
          width={195}
          height={292.5}
          src={img}
          alt="zdjęcie osoby"
        />
      )}
    </div>
  );
}
