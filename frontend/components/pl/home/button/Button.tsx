import { ReactNode } from "react";
import Link from "next/link";
import styles from "./button.module.css";

type buttonProps = {
  children: ReactNode;
  href: string;
  isTargetBlank?: boolean;
};

export default function Button({ children, href, isTargetBlank }: buttonProps) {
  return (
    <Link
      href={href}
      className={styles.button}
      target={isTargetBlank ? "_blank" : "_self"}
    >
      {children}
    </Link>
  );
}
