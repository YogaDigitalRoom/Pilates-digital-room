export default function HeroBanner() {
  return (
    <div className="w-full h-[70vh] overflow-hidden relative">
      <div className="w-full h-full">
        <video
          autoPlay={true}
          muted={true}
          loop={true}
          playsInline={true}
          className="w-full h-full object-cover"
        >
          <source src="/real-hero-banner.mp4" type="video/mp4" />
          Tu navegador no soporta el vídeo HTML5.
        </video>
      </div>
    </div>
  );
}
