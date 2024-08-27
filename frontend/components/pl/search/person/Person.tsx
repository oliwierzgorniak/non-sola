import Image from "next/image";
import Link from "next/link";
import styles from "./person.module.css";

type PersonProps = {
  name: string;
  age: number;
  img: string;
  id: number;
};

export default function Person({ name, img, age, id }: PersonProps) {
  return (
    <li className={styles.container}>
      <Link href={"/pl/person/" + id}>
        <Image
          layout="fill"
          objectFit="cover"
          src={img}
          alt={"zdjęcie osoby"}
          className={styles.img}
        />
        <h3>
          {name} • {age} lat
        </h3>
      </Link>
    </li>
  );
}
