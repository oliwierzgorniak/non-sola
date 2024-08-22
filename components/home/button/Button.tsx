import { ReactNode } from "react";
import Link from "next/link";
import styles from "./button.module.css";

type buttonProps = {
  children: ReactNode;
  href: string;
};

export default function Button({ children, href }: buttonProps) {
  return (
    <Link href={href} className={styles.button}>
      {children}
    </Link>
  );
}
