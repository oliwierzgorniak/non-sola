import Donations from "../components/home/donations/Donations";
import Hero from "../components/home/hero/Hero";
import Navbar from "../components/home/navbar/Navbar";
import Share from "../components/home/share/Share";
import Footer from "../components/home/footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Donations />
      <Share />
      <Footer />
    </>
  );
}
