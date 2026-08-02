"use client";

export default function Trayectoria() {
  return (
    <section className="py-24 bg-surface-container-low" id="trayectoria">
      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            {/* Elementos decorativos de fondo */}
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -z-10"></div>

            <div className="grid grid-cols-2 gap-4 md:gap-5">
              <div className="col-span-2 relative rounded-3xl overflow-hidden shadow-2xl h-64 md:h-80 group">
                <img
                  src="/trabajos/trabajo-3-operario.png"
                  // src="/trabajos/trayectoria-operarios-todos.png"
                  alt="Equipo de GIS Instalaciones"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              <div className="col-span-1 relative rounded-3xl overflow-hidden shadow-xl h-48 md:h-56 group">
                <img
                  src="/trabajos/trayectoria-operarios-todos.png"
                  // src="/trabajos/trabajo-3-operario.png"
                  alt="Operario trabajando"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div className="col-span-1 relative rounded-3xl overflow-hidden shadow-xl h-48 md:h-56 group">
                <img
                  src="/trabajos/trabajo-2-operario.png"
                  alt="Operario de GIS"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full w-fit">
              <span className="material-symbols-outlined text-primary text-[18px]">workspace_premium</span>
              <span className="text-primary font-bold text-label-sm uppercase tracking-wider">Nuestra Trayectoria</span>
            </div>
            <h2 className="font-headline-lg text-[32px] md:text-[40px] text-on-background leading-tight">
              Un equipo profesional a tu servicio
            </h2>
            <p className="text-secondary text-body-lg leading-relaxed">
              En <strong>GIS Instalaciones</strong> nos enfocamos en el lado humano y profesional de cada obra. Nuestro equipo de gasistas matriculados cuenta con la experiencia necesaria para garantizar que cada instalación en Mar del Plata cumpla con los más altos estándares de seguridad y calidad (<a href="https://www.enargas.gov.ar/secciones/normativa/pdf/normas-discusion/IF-2025-103868516-APN-GIYN-ENARGAS.pdf" target="_blank" rel="noopener noreferrer" className="hover:underline text-primary">NAG-200</a>).
            </p>

            <div className="mt-4">
              <a href="#contact" className="inline-flex items-center gap-2 text-primary font-button hover:underline">
                Contactar al equipo
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
