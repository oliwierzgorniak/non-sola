import { merriweather } from "@/fonts";
import styles from "./description.module.css";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import sharedStyles from "../../../../app/pl/register/register.module.css";
import Buttons from "../buttons/Buttons";
import { useRegisterStore } from "@/stores/register";

export default function Description() {
  const [chars, setChars] = useState<number>(0);
  const description = useRegisterStore((state) => state.description);
  const currentSection = useRegisterStore((state) => state.currentSection);
  const setDescription = useRegisterStore((state) => state.setDescription);

  return (
    <div style={{ display: currentSection == 2 ? "initial" : "none" }}>
      <div className={sharedStyles.container}>
        <h2 className={merriweather.className}>Rejestracja</h2>
        <label className={styles.label} htmlFor="description">
          Opis
          <textarea
            onChange={(e) => {
              const length = e.target.value.length;

              if (length <= 500) {
                setDescription(e.target.value);
                setChars(length);
              } else {
                e.target.value = description;
              }
            }}
            name="description"
            id="description"
            value={description}
          ></textarea>
        </label>
        <span className={sharedStyles.error}>{chars}/500 max</span>
      </div>
      <Buttons section={2} handleButton={() => {}} />
    </div>
  );
}
