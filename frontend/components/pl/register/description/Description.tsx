import { merriweather } from "@/fonts";
import styles from "./description.module.css";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import sharedStyles from "../../../../app/pl/register/register.module.css";

type DescriptionProps = {
  description: string;
  setDescription: Dispatch<SetStateAction<string>>;
};

export default function Description({
  description,
  setDescription,
}: DescriptionProps) {
  const [chars, setChars] = useState<number>(0);
  const textAreaRef = useRef(null);
  useEffect(() => {
    if (textAreaRef.current) {
      const $textArea = textAreaRef.current as HTMLTextAreaElement;
      setChars($textArea.value.length);
    }
  }, []);

  return (
    <div className={sharedStyles.container}>
      <h2 className={merriweather.className}>Rejestracja</h2>
      <label className={styles.label} htmlFor="description">
        Opis
        <textarea
          ref={textAreaRef}
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
        >
          {description}
        </textarea>
      </label>
      <span className={sharedStyles.error}>{chars}/500 max</span>
    </div>
  );
}
