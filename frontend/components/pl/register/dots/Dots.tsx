import styles from "./dots.module.css";

type DotsProps = {
  currentSection: number;
};

export default function Dots({ currentSection }: DotsProps) {
  return (
    <div className={styles.dotsContainer}>
      {[0, 1, 2, 3, 4].map((i) => (
        <div
          key={"dot-" + i}
          className={
            styles.dot + " " + (currentSection == i ? styles.dotCurrent : "")
          }
        ></div>
      ))}
    </div>
  );
}
