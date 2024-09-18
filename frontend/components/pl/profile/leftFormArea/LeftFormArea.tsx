import { useMyProfileStore } from "@/stores/myProfile";
import styles from "./leftFormArea.module.css";
import { useEffect } from "react";

type Props = {
  name: string;
  age: number;
  denomination: string;
  description: string;
};

export default function LeftFormArea(props: Props) {
  const name = useMyProfileStore((state) => state.name);
  const setName = useMyProfileStore((state) => state.setName);
  const age = useMyProfileStore((state) => state.age);
  const setAge = useMyProfileStore((state) => state.setAge);
  const denomination = useMyProfileStore((state) => state.denomination);
  const setDenomination = useMyProfileStore((state) => state.setDenomination);
  const description = useMyProfileStore((state) => state.description);
  const setDescription = useMyProfileStore((state) => state.setDescription);
  const leftFormAreaError = useMyProfileStore(
    (state) => state.leftFormAreaError
  );

  useEffect(() => {
    setName(props.name);
    setAge(String(props.age));
    setDenomination(props.denomination);
    setDescription(props.description);
  }, []);

  return (
    <div className={styles.container}>
      <label htmlFor="name">
        Imię
        <input
          id="name"
          type="name"
          value={name}
          name="name"
          onChange={(e) => {
            setName(e.target.value);
          }}
          required
        />
      </label>
      <label htmlFor="age">
        Wiek
        <input
          id="age"
          name="age"
          value={age}
          required
          type="number"
          onChange={(e) => {
            setAge(e.target.value);
          }}
        />
      </label>
      <label htmlFor="denomination">
        Wyznanie
        <input
          id="denomination"
          name="denomination"
          value={denomination}
          required
          onChange={(e) => {
            setDenomination(e.target.value);
          }}
        />
      </label>
      {leftFormAreaError && <p className={styles.error}>{leftFormAreaError}</p>}
      <label className={styles.label} htmlFor="description">
        Opis
        <textarea
          onChange={(e) => {
            const length = e.target.value.length;

            if (length <= 500) {
              setDescription(e.target.value);
              // setChars(length);
            } else {
              e.target.value = description;
            }
          }}
          name="description"
          id="description"
          value={description}
        ></textarea>
      </label>
    </div>
  );
}
