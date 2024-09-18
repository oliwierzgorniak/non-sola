import { useMyProfileStore } from "@/stores/myProfile";
import styles from "./rightFormArea.module.css";
import { useEffect, useState } from "react";
import Image from "next/image";

type Props = {
  img: string;
};

export default function RightFormArea(props: Props) {
  const img = useMyProfileStore((state) => state.img);
  const setImg = useMyProfileStore((state) => state.setImg);
  const setLocation = useMyProfileStore((state) => state.setLocation);
  const [wasLocationCollected, setWasLocationCollected] = useState(false);

  useEffect(() => {
    setImg(props.img);
  }, []);

  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor="photo">
        Zdjęcie
        <input
          id="photo"
          name="photo"
          type="file"
          required
          accept="image/*"
          onChange={(e) => {
            const files = e.target.files;
            if (files && files.length == 1) {
              const reader = new FileReader();
              reader.onload = (e) => {
                const fileData = e.target?.result as string | null;
                if (fileData) setImg(fileData);
                // setError("");
              };
              reader.readAsDataURL(files[0]);
            }
          }}
        />
        {img && (
          <Image
            className={styles.img}
            width={195}
            height={292.5}
            src={img}
            alt="zdjęcie osoby"
          />
        )}
      </label>

      <label htmlFor="location-button">
        Location
        <button
          id="location-button"
          className={wasLocationCollected ? styles.locationCollected : ""}
          onClick={(e) => {
            e.preventDefault();
            if (wasLocationCollected) return;

            if (navigator.geolocation)
              navigator.geolocation.getCurrentPosition((e) => {
                setLocation([e.coords.latitude, e.coords.longitude]);
                setWasLocationCollected(true);
              });
          }}
        >
          {wasLocationCollected ? "Location collected" : "Collect new location"}
        </button>
      </label>
    </div>
  );
}
