import styles from "./searchModule.module.css";
import Person from "../../../../components/pl/search/person/Person";
import useSWR from "swr";
import { useState } from "react";
import usersFetcher, { User } from "@/fetchers/usersFetcher";

// const testPersons = [
//   { name: "Wiktoria", age: 21, img: "/people/12.jpg", id: 12 },
//   { name: "Wiktoria", age: 21, img: "/people/12.jpg", id: 12 },
//   { name: "Wiktoria", age: 21, img: "/people/12.jpg", id: 12 },
//   { name: "Wiktoria", age: 21, img: "/people/12.jpg", id: 12 },
//   { name: "Wiktoria", age: 21, img: "/people/12.jpg", id: 12 },
//   { name: "Wiktoria", age: 21, img: "/people/12.jpg", id: 12 },
//   { name: "Wiktoria", age: 21, img: "/people/12.jpg", id: 12 },
//   { name: "Wiktoria", age: 21, img: "/people/12.jpg", id: 12 },
//   { name: "Wiktoria", age: 21, img: "/people/12.jpg", id: 12 },
// ];

export default function SearchModule() {
  const [minAge, setMinAge] = useState(18);
  const [maxAge, setMaxAge] = useState(25);
  const [distance, setDistance] = useState(500);
  const { data, isLoading, mutate } = useSWR(`/ui/users`, () =>
    usersFetcher(minAge, maxAge, distance, undefined)
  );

  const users = data?.content as User[];

  return (
    <main className={styles.container}>
      <section className={styles.filtersContainer}>
        <form>
          <label>
            <span className={styles.label}>Wiek</span>
            <div className={styles.ageContainer}>
              <input
                type="number"
                name="minAge"
                min={18}
                defaultValue={18}
                onChange={(e) => {
                  const $input = e.target as HTMLInputElement;
                  setMinAge(+$input.value);
                }}
              />
              <span>{"-"}</span>
              <input
                type="number"
                name="maxAge"
                max={99}
                defaultValue={25}
                onChange={(e) => {
                  const $input = e.target as HTMLInputElement;
                  setMaxAge(+$input.value);
                }}
              />
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
                onChange={(e) => {
                  const $input = e.target as HTMLInputElement;
                  setDistance(+$input.value);
                }}
              />
              <span>km</span>
            </div>
          </label>
          <button
            className={styles.searchButton}
            onClick={(e) => {
              e.preventDefault();
              mutate();
            }}
          >
            Szukaj
          </button>
        </form>
      </section>

      <article>
        {data?.result == "error" && <p>There was an error</p>}
        {isLoading && <p>Loading...</p>}
        {data?.result == "success" && (
          <ul className={styles.searchList}>
            {users.map(({ name, age, img, id }) => (
              <Person name={name} age={age} img={img} id={id} key={id} />
            ))}
          </ul>
        )}
      </article>
    </main>
  );
}
