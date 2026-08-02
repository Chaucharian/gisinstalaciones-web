"use client";

import { trackEvent } from "../utils/analytics";

export default function EmergencyBanner() {
  return (
    <section className="bg-on-background text-white py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 h-full">
          {[...Array(11)].map((_, i) => (
            <div key={i} className="border-r border-white/20"></div>
          ))}
        </div>
      </div>
      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex flex-col gap-4 text-center lg:text-left">
            <h2 className="font-headline-lg text-[36px] leading-tight">
              ¿Emergencia o Pérdida de Gas?
            </h2>
            <p className="text-secondary-fixed text-body-lg max-w-xl">
              Atención prioritaria para reparaciones urgentes y rehabilitación de suministro las
              24 horas.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6">
            <a
              href="https://wa.me/5492234234799"
              onClick={() => trackEvent('whatsapp_click', { location: 'emergency_banner' })}
              className="bg-[#25D366] text-white px-10 py-5 rounded-lg font-button text-button hover:scale-105 transition-all flex items-center justify-center gap-3"
            >
              <span className="material-symbols-outlined">message</span>
              WhatsApp Urgente
            </a>
            <a
              href="tel:02234234799"
              onClick={() => trackEvent('emergency_call_click', { location: 'emergency_banner' })}
              className="bg-primary-container text-on-primary-container px-10 py-5 rounded-lg font-button text-button hover:scale-105 transition-all flex items-center justify-center gap-3"
            >
              <span className="material-symbols-outlined">call</span>
              Llamar Ahora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
