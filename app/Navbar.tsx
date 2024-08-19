import Image from "next/image";

export default function Navbar() {
  return (
    <nav>
      <div>
        <Image
          width={59}
          height={67}
          alt="logo, a cross inside a heart"
          src={"/logo.svg"}
        />
      </div>
    </nav>
  );
}
