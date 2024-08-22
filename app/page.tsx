import Donations from "../components/home/donations/Donations";
import Hero from "../components/home/hero/Hero";
import Navbar from "../components/home/navbar/Navbar";
import Share from "../components/home/share/Share";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Donations />
      <Share />
    </>
  );
}
