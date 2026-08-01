export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20" id="home">
      <div className="absolute inset-0 z-0 overflow-hidden bg-black">
        <video
          className="w-full h-full object-cover object-center opacity-80"
          src="/videos/gmaps-video-1785541655.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/90 to-surface/40"></div>
        <div className="absolute inset-0 technical-grid"></div>
      </div>
      <div className="relative z-10 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto grid lg:grid-cols-2 gap-12 w-full">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <span className="inline-block w-12 h-px bg-primary"></span>
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest">
              NAG-200 | Registrado en Camuzzi
            </span>
          </div>
          <h1 className="font-headline-xl text-[40px] md:text-headline-xl leading-tight text-on-background drop-shadow-sm">
            Seguridad y Precisión en{" "}
            <span className="text-primary">Instalaciones de Gas</span>
          </h1>
          <p className="font-body-lg text-body-lg text-secondary max-w-xl bg-surface/50 p-2 rounded-lg backdrop-blur-sm">
            Expertos en servicios residenciales certificados en Mar del Plata y Gral. Pueyrredón. Gasista Matriculado
            comprometido con las normativas de Camuzzi para garantizar la tranquilidad de
            su hogar.
          </p>
          <div className="flex flex-wrap gap-4 mt-4">
            <a
              href="#contact"
              className="bg-primary-container text-on-primary-container px-8 py-4 rounded-lg font-button text-button hover:shadow-lg transition-all flex items-center gap-3"
            >
              Solicitar Presupuesto
              <span className="material-symbols-outlined">arrow_forward</span>
            </a>
            <div className="flex items-center gap-4 px-6 py-4 border border-secondary/20 rounded-lg bg-surface/80 backdrop-blur-md">
              <span className="material-symbols-outlined text-primary">
                verified_user
              </span>
              <div>
                <p className="font-label-sm text-label-sm text-on-background font-bold">
                  Gasista Matriculado
                </p>
                <p className="text-[12px] text-secondary">
                  Matrícula Profesional Vigente
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
