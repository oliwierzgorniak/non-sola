import Donations from "../../components/pl/home/donations/Donations";
import Hero from "../../components/pl/home/hero/Hero";
import Navbar from "../../components/pl/home/navbar/Navbar";
import Share from "../../components/pl/home/share/Share";
import Footer from "../../components/pl/home/footer/Footer";
import Separation from "@/components/pl/home/Separation/Separation";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <Donations /> */}
      <Separation />
      <Share />
      <Footer />
    </>
  );
}
