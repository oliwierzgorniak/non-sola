import { merriweather } from "@/fonts";
import styles from "./donations.module.css";

export default function Donations() {
  return (
    <section className={styles.container}>
      <h2 className={merriweather.className}>Dotacje</h2>
      <p>
        Portal Non Sola jest darmowy. Jeśli chcesz wesprzyj moją działalność.
      </p>
      <p className={styles.bankP}>
        <span>Numer konta:</span> 78 1240 4487 1111 0011 0013 7665
      </p>
    </section>
  );
}
