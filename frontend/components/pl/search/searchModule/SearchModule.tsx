import styles from "./searchModule.module.css";

export default function SearchModule() {
  return (
    <main className={styles.container}>
      <section className={styles.filtersContainer}>
        <form>
          <label>
            <span className={styles.label}>Wiek</span>
            <div className={styles.ageContainer}>
              <input type="number" name="minAge" min={18} defaultValue={18} />
              <span>{"-"}</span>
              <input type="number" name="maxAge" max={99} defaultValue={25} />
              <span>lat</span>
            </div>
          </label>
          <label>
            <span className={styles.label}>Dystans</span>
            <div className={styles.distanceContainer}>
              <input
                type="number"
                name="distance"
                min={0}
                step={25}
                defaultValue={500}
              />
              <span>km</span>
            </div>
          </label>
          <button className={styles.searchButton}>Szukaj</button>
        </form>
      </section>

      <article></article>
    </main>
  );
}
