import styles from "./dots.module.css";

type DotsProps = {
  currentSection: number;
};

export default function Dots({ currentSection }: DotsProps) {
  return (
    <div className={styles.dotsContainer}>
      <div
        className={
          styles.dot + " " + (currentSection == 0 ? styles.dotCurrent : "")
        }
      ></div>
      <div
        className={
          styles.dot + " " + (currentSection == 1 ? styles.dotCurrent : "")
        }
      ></div>
      <div
        className={
          styles.dot + " " + (currentSection == 2 ? styles.dotCurrent : "")
        }
      ></div>
      <div
        className={
          styles.dot + " " + (currentSection == 3 ? styles.dotCurrent : "")
        }
      ></div>
    </div>
  );
}
