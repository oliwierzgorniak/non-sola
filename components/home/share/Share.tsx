import Image from "next/image";

export default function Share() {
  return (
    <section>
      <Image
        width={467}
        height={360}
        src={"/share.jpg"}
        alt="a family walking together"
      />
      <div>
        <h2>Powiedz o nas w swoim kościele</h2>
        <p>
          Przyczyń się do powstawania nowych par i rodzin. Dzięki twojej pomocy
          portal może zdobyć nowych członków.
        </p>
      </div>
    </section>
  );
}
