import HeroBanner from "@/components/hero-banner";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <HeroBanner />

      <div className="w-full bg-white text-center text-black font-medium mt-10 text-[25px] py-10">
        Fuerza, control, respiración, precisión, concentración
      </div>

      <Footer />
    </>
  );
}
