import { merriweather } from "@/fonts";
import styles from "./location.module.css";
import { useState } from "react";
import sharedStyles from "../../../../app/pl/register/register.module.css";
import Buttons from "../buttons/Buttons";
import { useRegisterStore } from "@/stores/register";

export default function Geolocation() {
  const currentSection = useRegisterStore((state) => state.currentSection);
  const setLocation = useRegisterStore((state) => state.setLocation);
  const increaseCurrentSection = useRegisterStore(
    (state) => state.increaseCurrentSection
  );
  const [wasLocationCollected, setWasLocationCollected] = useState(false);

  return (
    <div style={{ display: currentSection == 3 ? "initial" : "none" }}>
      <div className={sharedStyles.container}>
        <h2 className={merriweather.className}>Rejestracja</h2>
        <p className={styles.p}>
          Please allow us to use your geolocation. It is needed for search tool
          to work properly.
        </p>
        <button
          className={wasLocationCollected ? styles.locationCollected : ""}
          onClick={() => {
            if (wasLocationCollected) return;

            if (navigator.geolocation)
              navigator.geolocation.getCurrentPosition((e) => {
                setLocation({
                  longitude: e.coords.longitude,
                  latitude: e.coords.latitude,
                });
                setWasLocationCollected(true);
              });
          }}
        >
          {wasLocationCollected ? "Geolocation enabled" : "Enable geolocation"}
        </button>
      </div>
      <Buttons section={3} handleButton={increaseCurrentSection} />
    </div>
  );
}
