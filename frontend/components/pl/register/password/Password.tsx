import { merriweather } from "@/fonts";
import styles from "./password.module.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import sharedStyles from "../../../../app/pl/register/register.module.css";
import { useRegisterStore } from "../../../../stores/register";
import Dots from "../dots/Dots";
import Buttons from "../buttons/Buttons";

export default function Password() {
  // const router = useRouter();
  const error = useRegisterStore((state) => state.passwordError);
  const name = useRegisterStore((state) => state.name);
  const email = useRegisterStore((state) => state.email);
  const password = useRegisterStore((state) => state.password);
  const denomination = useRegisterStore((state) => state.denomination);
  const currentSection = useRegisterStore((state) => state.currentSection);
  const setName = useRegisterStore((state) => state.setName);
  const setDenomination = useRegisterStore((state) => state.setDenomination);
  const setEmail = useRegisterStore((state) => state.setEmail);
  const setPassword = useRegisterStore((state) => state.setPassword);
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
        <label htmlFor="email">
          Email
          <input
            id="email"
            type="email"
            value={email}
            name="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
        </label>
        <label htmlFor="password">
          Hasło
          <input
            id="password"
            value={password}
            type="password"
            name="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
          />
        </label>
        {error && <span className={sharedStyles.error}>{error}</span>}
        <Link href="/pl/login">Logowanie</Link>
      </div>
      <Buttons
        section={0}
        handleButton={() => {
          if (name && email && password && denomination) {
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
