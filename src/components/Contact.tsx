"use client";

import { useState } from "react";
import { trackEvent } from "../utils/analytics";

export default function Contact() {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    servicio: "Mantenimiento de Calefón/Termotanque",
    mensaje: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hola GIS Instalaciones, me gustaría solicitar un presupuesto.
Nombre: ${formData.nombre}
Teléfono: ${formData.telefono}
Servicio: ${formData.servicio}
Mensaje: ${formData.mensaje}`;
    const encodedText = encodeURIComponent(text);
    trackEvent('contact_form_submit', { servicio: formData.servicio });
    window.open(`https://wa.me/5492234234799?text=${encodedText}`, "_blank");
  };

  return (
    <section className="py-24 bg-surface-container-low" id="contact">
      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="grid lg:grid-cols-2 gap-20">
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="font-headline-lg text-headline-lg mb-4">
                Solicitar Presupuesto
              </h2>
              <p className="text-secondary text-body-md">
                Complete el formulario y nos pondremos en contacto a la brevedad para coordinar
                una visita técnica.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center border border-secondary/10 shrink-0">
                  <span className="material-symbols-outlined text-primary">location_on</span>
                </div>
                <div>
                  <p className="font-bold text-on-background">Ubicación</p>
                  <p className="text-secondary">Formosa 3607, Mar del Plata</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center border border-secondary/10 shrink-0">
                  <span className="material-symbols-outlined text-primary">mail</span>
                </div>
                <div>
                  <p className="font-bold text-on-background">Email</p>
                  <p className="text-secondary">instalacionesgis@gmail.com</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center border border-secondary/10 shrink-0">
                  <span className="material-symbols-outlined text-primary">call</span>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="font-bold text-on-background">Teléfonos</p>
                  <a href="tel:02234234799" onClick={() => trackEvent('phone_click', { number: '0223 423-4799' })} className="text-secondary hover:text-primary transition-colors flex items-center gap-1.5 w-fit">
                    <span className="material-symbols-outlined text-[14px]">phone_in_talk</span>
                    0223 423-4799
                  </a>
                  <a href="tel:02236037916" onClick={() => trackEvent('phone_click', { number: '0223 603-7916' })} className="text-secondary hover:text-primary transition-colors flex items-center gap-1.5 w-fit">
                    <span className="material-symbols-outlined text-[14px]">phone_in_talk</span>
                    0223 603-7916
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center border border-secondary/10 shrink-0">
                  <span className="material-symbols-outlined text-primary">verified_user</span>
                </div>
                <div>
                  <p className="font-bold text-on-background">Registro Camuzzi</p>
                  <p className="text-secondary">Gasista Matriculado de 1ra Categoría</p>
                </div>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="bg-white p-10 rounded-2xl border border-secondary/10 shadow-xl shadow-on-background/5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="flex flex-col gap-2">
                <label className="font-label-sm text-[11px] text-secondary uppercase">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  placeholder="Juan Pérez"
                  value={formData.nombre}
                  onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                  required
                  className="w-full bg-surface-container-low border-transparent focus:border-primary focus:ring-0 rounded-lg p-3 text-on-background transition-all outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-label-sm text-[11px] text-secondary uppercase">
                  Teléfono
                </label>
                <input
                  type="tel"
                  placeholder="+54 9 11 ..."
                  value={formData.telefono}
                  onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                  required
                  className="w-full bg-surface-container-low border-transparent focus:border-primary focus:ring-0 rounded-lg p-3 text-on-background transition-all outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 mb-6">
              <label className="font-label-sm text-[11px] text-secondary uppercase">
                Servicio Requerido
              </label>
              <select
                value={formData.servicio}
                onChange={(e) => setFormData({ ...formData, servicio: e.target.value })}
                className="w-full bg-surface-container-low border-transparent focus:border-primary focus:ring-0 rounded-lg p-3 text-on-background transition-all outline-none focus:ring-2 focus:ring-primary"
              >
                <option>Mantenimiento de Calefón/Termotanque</option>
                <option>Reparación de Caldera</option>
                <option>Instalación Medidor de Gas</option>
                <option>Detección de Fuga / Rehabilitación</option>
                <option>Obra Nueva / Planos</option>
              </select>
            </div>
            <div className="flex flex-col gap-2 mb-8">
              <label className="font-label-sm text-[11px] text-secondary uppercase">
                Mensaje
              </label>
              <textarea
                placeholder="Cuéntenos brevemente su necesidad..."
                rows={4}
                value={formData.mensaje}
                onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                required
                className="w-full bg-surface-container-low border-transparent focus:border-primary focus:ring-0 rounded-lg p-3 text-on-background transition-all outline-none focus:ring-2 focus:ring-primary"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-primary-container text-on-primary-container py-4 rounded-lg font-button text-button hover:opacity-90 transition-all"
            >
              Enviar Solicitud
            </button>
          </form>
        </div>

        <div className="mt-20 grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white rounded-2xl border border-secondary/10 shadow-xl shadow-on-background/5 overflow-hidden flex flex-col">
            <div className="p-6 border-b border-secondary/5 flex items-center gap-4 bg-gradient-to-r from-surface-container-low to-white">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                <span className="material-symbols-outlined text-[24px]">location_on</span>
              </div>
              <div>
                <h3 className="font-headline-md text-[20px] font-bold text-on-background leading-tight">Dónde Encontrarnos</h3>
                <p className="text-secondary text-[14px] mt-1">Formosa 3607, Mar del Plata, Buenos Aires</p>
              </div>
            </div>
            <div className="w-full h-[250px] md:h-[350px] relative">
              <iframe
                src="https://maps.google.com/maps?width=100%25&height=600&hl=es&q=Formosa%203607,%20Mar%20del%20Plata+(GIS%20Instalaciones)&t=&z=15&ie=UTF8&iwloc=B&output=embed"
                className="absolute inset-0 w-full h-full"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          
          <div className="bg-gradient-to-b from-white to-surface-container-low p-8 rounded-2xl border border-secondary/10 shadow-2xl shadow-primary/5 flex flex-col items-center justify-center text-center relative overflow-hidden">
            {/* Elementos decorativos de fondo */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-0"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#FABB05]/5 rounded-tr-full -z-0"></div>
            
            <div className="flex gap-1 mb-5 z-10">
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} className="material-symbols-outlined text-[32px] text-[#FABB05] drop-shadow-sm transition-transform hover:scale-110 cursor-default" style={{ fontVariationSettings: "'FILL' 1" }}>
                  star
                </span>
              ))}
            </div>
            
            <h3 className="font-headline-lg text-[24px] md:text-[26px] leading-tight mb-3 text-on-background z-10">
              ¿Qué tal nuestro servicio?
            </h3>
            <p className="text-secondary text-[14px] mb-6 md:mb-8 max-w-[280px] z-10 leading-relaxed">
              <span className="hidden md:inline">Tu opinión es muy importante para nosotros. Escanea el código o haz clic para valorarnos.</span>
              <span className="md:hidden">Tu opinión nos ayuda a mejorar. Haz clic para dejarnos tu valoración.</span>
            </p>
            
            <div className="hidden md:block relative p-1 bg-gradient-to-br from-primary/20 to-surface-container-high rounded-2xl mb-8 shadow-md z-10 group hover:scale-105 transition-transform duration-300">
              <div className="bg-white p-3 rounded-xl">
                <img 
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent("https://www.google.com/search?q=GIS+Instalaciones+Mar+del+Plata#lrd=0x9584df33e23d49e9:0xaaaea4f5fa80abc5,3")}`}
                  alt="Código QR para dejar reseña"
                  className="w-36 h-36 object-contain"
                />
              </div>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white px-4 py-1 rounded-full border border-secondary/10 shadow-sm text-[10px] font-bold text-primary uppercase tracking-wider whitespace-nowrap">
                Escanear QR
              </div>
            </div>
            
            <a 
              href="https://www.google.com/search?q=GIS+Instalaciones+Mar+del+Plata#lrd=0x9584df33e23d49e9:0xaaaea4f5fa80abc5,3"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('review_click')}
              className="z-10 bg-white border border-secondary/20 text-on-background px-8 py-4 rounded-xl font-button text-button hover:bg-surface-container-low hover:shadow-lg transition-all duration-300 flex items-center gap-3 w-full justify-center group"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Opinar en Google
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
