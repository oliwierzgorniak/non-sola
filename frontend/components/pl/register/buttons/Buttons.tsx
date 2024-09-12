import { useRegisterStore } from "@/stores/register";
import styles from "./buttons.module.css";
import Image from "next/image";
import Dots from "../dots/Dots";

type ButtonsProps = {
  section: number;
  handleButton: () => void;
};

export default function Buttons({ section, handleButton }: ButtonsProps) {
  const currentSection = useRegisterStore((state) => state.currentSection);
  const decreaseCurrentSection = useRegisterStore(
    (state) => state.decreaseCurrentSection
  );

  return (
    <div className={styles.buttonsContainer}>
      <button
        style={{ visibility: section == 0 ? "hidden" : "initial" }}
        onClick={decreaseCurrentSection}
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
      <button onClick={handleButton} className={styles.button}>
        Dalej
        <Image
          width={24}
          height={24}
          src={"/arrow-right.svg"}
          alt="strzałka w prawo"
        />
      </button>
    </div>
  );
}
