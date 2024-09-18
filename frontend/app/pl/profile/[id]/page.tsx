"use client";

import Image from "next/image";
import styles from "./id.module.css";
import profileFetcher, { Result, UserData } from "@/fetchers/profileFetcher";
import Navbar from "@/components/pl/search/navbar/Navbar";
import addToChatsFetcher from "../../../../fetchers/addToChatsFetcher";
import { useRouter } from "next/navigation";
import useSWR from "swr";
import { merriweather } from "@/fonts";

type ProfileProps = {
  params: {
    id: string;
  };
};

export default function Id({ params }: ProfileProps) {
  const router = useRouter();

  const { data, isLoading } = useSWR("/ui/profile", () =>
    profileFetcher(params.id)
  );

  if (isLoading) return <p>Loading...</p>;
  if (data?.result == "error") return <p>There was an error</p>;
  const { name, description, img, denomination, id, isAdded } =
    data?.content as UserData;

  return (
    <>
      <Navbar />
      <main>
        <article className={styles.container}>
          <Image
            width={320}
            height={480}
            src={img}
            alt={"zdjęcie osoby"}
            className={styles.img}
          />
          <div className={styles.infoContainer}>
            <h1 className={merriweather.className}>{name}</h1>
            <ul>
              <li>
                <span className={styles.label}>Wyznanie</span>
                <span>{denomination}</span>
              </li>
              <li>
                <span className={styles.label}>Opis</span>
                <p className={styles.description}>{description}</p>
              </li>
            </ul>
            <button
              className={isAdded ? styles.buttonDisabled : ""}
              onClick={async () => {
                if (isAdded) return;
                await addToChatsFetcher(id);
                router.push("/pl/conversations");
              }}
            >
              {isAdded ? "Dodano do konwersacji" : "Dodaj do konwersacji"}
            </button>
          </div>
        </article>
      </main>
    </>
  );
}
