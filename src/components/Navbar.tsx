"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    const observerOptions = {
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.getAttribute("id") || "");
        }
      });
    }, observerOptions);

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-md border-b border-secondary/10 transition-all ${
        scrolled ? "h-[70px] shadow-md" : "h-[80px]"
      }`}
    >
      <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto h-full">
        <div className="font-headline-lg text-headline-lg font-bold text-primary">
          GISINSTALACIONES
        </div>
        <nav className="hidden md:flex gap-8 items-center">
          {[
            { id: "home", label: "Inicio" },
            { id: "services", label: "Servicios" },
            { id: "projects", label: "Trabajos Realizados" },
            { id: "contact", label: "Contacto" }
          ].map(({ id, label }) => (
            <Link
              key={id}
              href={`#${id}`}
              className={`font-button text-button transition-colors ${
                activeSection === id
                  ? "text-primary border-b-2 border-primary pb-1"
                  : "text-secondary hover:text-primary"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <button className="material-symbols-outlined text-secondary hover:text-primary transition-colors">
            chat
          </button>
          <a
            href="tel:02234234799"
            className="hidden sm:flex bg-primary-container text-on-primary-container px-6 py-2.5 rounded-lg font-button text-button hover:opacity-90 transition-all items-center gap-2"
          >
            <span className="material-symbols-outlined text-[18px]">
              emergency_home
            </span>
            Llamada de Emergencia
          </a>
        </div>
      </div>
    </header>
  );
}
