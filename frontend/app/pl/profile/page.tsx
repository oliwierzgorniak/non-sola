"use client";

import styles from "./profile.module.css";
import Navbar from "@/components/pl/search/navbar/Navbar";
import useSWR from "swr";
import { merriweather } from "@/fonts";
import myProfileFetcher, { User } from "../../../fetchers/myProfileFetcher";
import LeftFormArea from "@/components/pl/profile/leftFormArea/LeftFormArea";
import RightFormArea from "@/components/pl/profile/rightFormArea/RightFormArea";
import { useMyProfileStore } from "@/stores/myProfile";
import myProfileUpdateFetcher from "@/fetchers/myProfileUpdateFetcher";

export default function Profile() {
  const { data, isLoading } = useSWR("/ui/myProfile", () => myProfileFetcher());
  const {
    name,
    age,
    denomination,
    description,
    img,
    location,
    setLeftFormAreaError,
  } = useMyProfileStore();

  if (isLoading) return <p>Loading...</p>;
  if (data?.result == "error") return <p>There was an error</p>;
  const userLoaded = data?.content as User;

  return (
    <>
      <Navbar />
      <main>
        <article className={styles.container}>
          <h1 className={merriweather.className}>Profil</h1>
          <form noValidate className={styles.form}>
            <LeftFormArea
              name={userLoaded.name}
              age={userLoaded.age}
              denomination={userLoaded.denomination}
              description={userLoaded.description}
            />
            <RightFormArea img={userLoaded.img} />
            <button
              className={styles.submitButton}
              onClick={(e) => {
                e.preventDefault();
                if (!name || !age || !denomination) {
                  setLeftFormAreaError("Please fill all the fields above!");
                  return;
                }
                setLeftFormAreaError("");
                myProfileUpdateFetcher({
                  name: name,
                  age: +age,
                  denomination: denomination,
                  description: description,
                  img: img as string,
                  location: location,
                });
              }}
            >
              Zapisz
            </button>
          </form>
        </article>
      </main>
    </>
  );
}
