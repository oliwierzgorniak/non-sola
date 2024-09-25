import Button from "@/components/pl/home/button/Button";
import Image from "next/image";
import styles from "./share.module.css";
import { merriweather } from "@/fonts";

export default function Share() {
  return (
    <section className={styles.container}>
      <Image
        width={467}
        height={360}
        src={"/share.jpg"}
        alt="spacerująca rodzina"
        className={styles.shareImage}
      />
      <div className={styles.textContainer}>
        <h2 className={merriweather.className}>
          Powiedz o nas w swoim kościele
        </h2>
        <p>
          Przyczyń się do powstawania nowych par i rodzin. Dzięki twojej pomocy
          portal może zdobyć nowych członków.
        </p>
        <Button href="/Non sola - leaflet.pdf" isTargetBlank={true}>
          <Image width={39} height={39} src={"/pdf.svg"} alt="pdf icon" />
          Zobacz ultokę
        </Button>
      </div>
    </section>
  );
}
