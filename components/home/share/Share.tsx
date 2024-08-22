import Button from "@/components/shared/Button";
import Image from "next/image";
import styles from "./share.module.css";

export default function Share() {
  return (
    <section className={styles.container}>
      <Image
        width={467}
        height={360}
        src={"/share.jpg"}
        alt="a family walking together"
      />
      <div className={styles.textContainer}>
        <h2>Powiedz o nas w swoim kościele</h2>
        <p>
          Przyczyń się do powstawania nowych par i rodzin. Dzięki twojej pomocy
          portal może zdobyć nowych członków.
        </p>
        <Button href="/flyer.pdf">
          <Image width={39} height={39} src={"/pdf.svg"} alt="pdf icon" />
          Zobacz ultokę
        </Button>
      </div>
    </section>
  );
}
