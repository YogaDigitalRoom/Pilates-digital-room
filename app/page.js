import HeroBanner from "@/components/hero-banner";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      {/* Fondo blanco para todo */}
      <div className="bg-white">
        <main className="relative w-full overflow-hidden">
          <HeroBanner />
          {/* Frase colocada justo debajo del vídeo */}
          <div className="w-full text-center py-6">
            <p className="text-black text-lg md:text-xl font-light tracking-widest uppercase">
              Fuerza, control, respiración, precisión, concentración
            </p>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
