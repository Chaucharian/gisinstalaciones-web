import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="w-full py-12 px-margin-mobile md:px-margin-desktop flex flex-col items-center gap-8 bg-surface-container-low border-t border-secondary/5">
      <Logo className="h-16" />
      <nav className="flex flex-wrap justify-center gap-8">
        <a href="#" className="text-secondary font-body-md hover:text-primary transition-colors">
          Terms of Service
        </a>
        <a href="#" className="text-secondary font-body-md hover:text-primary transition-colors">
          Privacy Policy
        </a>
        <a href="#" className="text-secondary font-body-md hover:text-primary transition-colors">
          Technical Standards
        </a>
      </nav>
      <div className="flex gap-4">
        <a
          href="#"
          className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-secondary hover:text-primary transition-colors"
        >
          <span className="material-symbols-outlined text-[20px]">share</span>
        </a>
        <a
          href="#"
          className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-secondary hover:text-primary transition-colors"
        >
          <span className="material-symbols-outlined text-[20px]">verified_user</span>
        </a>
      </div>
      <div className="text-secondary/60 text-[12px] text-center max-w-2xl mt-8">
        © 2024 GISINSTALACIONES. Technical Certifications: <a href="https://www.enargas.gov.ar/secciones/normativa/pdf/normas-discusion/IF-2025-103868516-APN-GIYN-ENARGAS.pdf" target="_blank" rel="noopener noreferrer" className="hover:underline text-primary">NAG-200</a>, Registrado en Camuzzi. Professional Residential Gas Services. Todos los derechos reservados.
      </div>
    </footer>
  );
}
