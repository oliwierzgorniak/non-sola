import { merriweather } from "@/fonts";
import styles from "./image.module.css";
import { useState } from "react";
import Image from "next/image";
import sharedStyles from "../../../../app/pl/register/register.module.css";
import Buttons from "../buttons/Buttons";
import { useRegisterStore } from "@/stores/register";

export default function ImageSection() {
  const [error, setError] = useState<string>("");
  const img = useRegisterStore((state) => state.img);
  const setImg = useRegisterStore((state) => state.setImg);
  const currentSection = useRegisterStore((state) => state.currentSection);
  const increaseCurrentSection = useRegisterStore(
    (state) => state.increaseCurrentSection
  );

  return (
    <div style={{ display: currentSection == 1 ? "initial" : "none" }}>
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
                    setError("");
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
      <Buttons
        section={1}
        handleButton={() => {
          if (!img) {
            setError("Please upload an image");
            return;
          }

          increaseCurrentSection();
        }}
      />
    </div>
  );
}
