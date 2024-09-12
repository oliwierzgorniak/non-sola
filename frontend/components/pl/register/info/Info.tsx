import { merriweather } from "@/fonts";
import styles from "./info.module.css";
import Link from "next/link";
import sharedStyles from "../../../../app/pl/register/register.module.css";
import { useRegisterStore } from "../../../../stores/register";
import Buttons from "../buttons/Buttons";

export default function Info() {
  const error = useRegisterStore((state) => state.passwordError);
  const name = useRegisterStore((state) => state.name);
  const age = useRegisterStore((state) => state.age);
  const denomination = useRegisterStore((state) => state.denomination);
  const currentSection = useRegisterStore((state) => state.currentSection);
  const setName = useRegisterStore((state) => state.setName);
  const setDenomination = useRegisterStore((state) => state.setDenomination);
  const setAge = useRegisterStore((state) => state.setAge);
  const setPasswordError = useRegisterStore((state) => state.setPasswordError);
  const increaseCurrentSection = useRegisterStore(
    (state) => state.increaseCurrentSection
  );

  return (
    <div style={{ display: currentSection == 0 ? "initial" : "none" }}>
      <div className={sharedStyles.container}>
        <h2 className={merriweather.className}>Rejestracja</h2>
        <label htmlFor="name">
          Imię
          <input
            id="name"
            name="name"
            required
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
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
        {error && <span className={sharedStyles.error}>{error}</span>}
        <Link href="/pl/login">Logowanie</Link>
      </div>
      <Buttons
        section={0}
        handleButton={() => {
          if (name && age && denomination) {
            setPasswordError("");
            increaseCurrentSection();
          } else {
            setPasswordError("Please fill all the fields");
          }
        }}
      />
    </div>
  );
}
