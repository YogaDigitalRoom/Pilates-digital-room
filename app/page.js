import HeroBanner from "@/components/hero-banner";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />

      {/* Sección del vídeo con frase */}
      <section className="relative w-full h-screen overflow-hidden">
        <HeroBanner />
      </section>

      {/* Frase separada como en la web de Olie */}
      <div className="w-full bg-white py-4">
        <p className="text-black text-center text-lg md:text-xl font-light tracking-widest uppercase">
          Fuerza, control, respiración, precisión, concentración
        </p>
      </div>

      <Footer />
    </>
  );
}
