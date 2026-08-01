export default function Services() {
  return (
    <section className="py-24 bg-surface-container-lowest" id="services">
      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="font-headline-lg text-headline-lg text-on-background mb-4">
              Nuestros Servicios Técnicos
            </h2>
            <p className="font-body-md text-body-md text-secondary">
              Soluciones integrales bajo normas NAG-200 para el correcto funcionamiento
              y seguridad de sus artefactos a gas.
            </p>
          </div>
          <div className="font-label-sm text-label-sm text-primary flex items-center gap-2 cursor-pointer hover:underline">
            Ver todos los servicios <span className="material-symbols-outlined">north_east</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {/* Maintenance */}
          <div className="md:col-span-8 bento-card p-8 rounded-xl flex flex-col justify-between group">
            <div className="flex justify-between items-start">
              <div className="w-14 h-14 bg-surface-container-high rounded-lg flex items-center justify-center text-primary transition-colors group-hover:bg-primary-container group-hover:text-on-primary-container">
                <span className="material-symbols-outlined text-[32px]">handyman</span>
              </div>
              <span className="font-label-sm text-label-sm text-secondary/40">01</span>
            </div>
            <div className="mt-12">
              <h3 className="font-headline-lg text-[24px] mb-3">Mantenimiento de Calefacción</h3>
              <p className="text-secondary max-w-lg">
                Servicio técnico especializado para Estufas, Calderas, Calefones y Termotanques.
                Limpieza de quemadores y calibración de válvulas.
              </p>
              <ul className="mt-6 flex flex-wrap gap-4">
                {["Calderas Duales", "Radiadores", "Calefactores"].map((item) => (
                  <li key={item} className="bg-surface-container-high px-4 py-1.5 rounded-full text-[13px] font-medium text-on-background">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Meters */}
          <div className="md:col-span-4 bento-card p-8 rounded-xl flex flex-col justify-between overflow-hidden relative group">
            <div className="relative z-10">
              <div className="w-14 h-14 bg-surface-container-high rounded-lg flex items-center justify-center text-primary transition-colors group-hover:bg-primary-container group-hover:text-on-primary-container">
                <span className="material-symbols-outlined text-[32px]">counter_1</span>
              </div>
              <h3 className="font-headline-lg text-[24px] mt-8 mb-3">Nichos de Gas</h3>
              <p className="text-secondary">Instalación y adecuación de medidores y reguladores según normativa de Camuzzi.</p>
            </div>
            <div className="absolute bottom-0 right-0 w-32 h-32 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="material-symbols-outlined text-[120px]">architecture</span>
            </div>
          </div>
          {/* Leak Detection */}
          <div className="md:col-span-4 bento-card p-8 rounded-xl group">
            <div className="w-14 h-14 bg-surface-container-high rounded-lg flex items-center justify-center text-primary transition-colors group-hover:bg-primary-container group-hover:text-on-primary-container">
              <span className="material-symbols-outlined text-[32px]">detector_smoke</span>
            </div>
            <h3 className="font-headline-lg text-[24px] mt-8 mb-3">Detección de Fugas</h3>
            <p className="text-secondary">Pruebas de hermeticidad con instrumental de alta precisión para su seguridad total.</p>
          </div>
          {/* New Installations */}
          <div className="md:col-span-8 bento-card p-8 rounded-xl flex flex-col md:flex-row gap-8 items-center group">
            <div className="flex-1">
              <div className="w-14 h-14 bg-surface-container-high rounded-lg flex items-center justify-center text-primary transition-colors group-hover:bg-primary-container group-hover:text-on-primary-container">
                <span className="material-symbols-outlined text-[32px]">home_repair_service</span>
              </div>
              <h3 className="font-headline-lg text-[24px] mt-8 mb-3">Obras Nuevas</h3>
              <p className="text-secondary">Proyectos y ejecución de instalaciones domiciliarias desde cero con planos aprobados.</p>
            </div>
            <div className="w-full md:w-64 h-48 rounded-lg overflow-hidden shrink-0">
              <img
                className="w-full h-full object-cover"
                alt="Technical blueprint of a gas installation"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjthQenDmnhFnc-XIRngik864ao9dyUqcJc2MQNwhZ4LBZj9j9t8WOIT3tuqVNTUE99MRInVHTyFbUki8-czyfGasq6Xe0VaHs6rEkfwm5A-UKI7GclnRHs_6fv6MryLXoquCzhrQO70anET0cyj1rhqsIvCVIq-g25tc1mSRRQg_ODOwsrpS2-_XcufpWcYPk2bxBWZ9Wmr6WbCUcd3pcryf1TFumc0HrD9AabSEOmmHbP6Ol5bDB"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
