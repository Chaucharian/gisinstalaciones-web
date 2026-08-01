export default function Portfolio() {
  return (
    <section className="py-24 bg-surface overflow-hidden" id="projects">
      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-headline-lg text-headline-lg text-on-background mb-4">
            Portfolio de Proyectos
          </h2>
          <p className="text-secondary max-w-2xl mx-auto">
            Calidad visual en cada detalle técnico. Estos son algunos de nuestros trabajos
            recientes en instalaciones de alta gama.
          </p>
        </div>
        {/* Portfolio Masonry/Asymmetric Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Project 1 */}
          <div className="md:col-span-7 group relative rounded-2xl overflow-hidden aspect-[16/9]">
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              src="https://lh3.googleusercontent.com/aida/AP1WRLup5Zqcz1dPGmAiJkvXgF4IzOAxbQJUsa4aVNnkCbSGW5JVS-rRzTLpqSGj5NTHHb72Q9azvSTp6EUcAHttSrPF6G7yG_epi6hSzzAdz0r5H64ZDao8TqH5IYK9MD6bOt1Ks5E1FrVgiBxF8jToSivuWYRtsOLwqF3fKnfBLMklZzLKg0_7TgVQBxSEBpp2tm7tBdWXYD0roXmlnB1cJklcTLUMgG7bb2IYwI2uLKbG4IipfYr487rTxWA"
              alt="Calefacción Central"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-on-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
              <div className="text-white">
                <p className="font-label-sm text-primary mb-2 uppercase">
                  Calefacción Central
                </p>
                <h4 className="font-headline-lg text-[24px]">
                  Instalación de Radiadores y Caldera
                </h4>
              </div>
            </div>
          </div>
          {/* Project 2 */}
          <div className="md:col-span-5 group relative rounded-2xl overflow-hidden aspect-square">
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              src="https://lh3.googleusercontent.com/aida/AP1WRLtgAnP-PRev87BEkQfcw23Cj240hYvj9MifgLfn-L92ahlr40W6G6vvFv_eZgkZHFKVWjo6NMedkz580r0vCQqnPmTrUBdv_iI-kfsCgYkxP36qCuOhXSXHB66jz4AlLd3RhMXdcVf99R-nYPnkemB5ekWcwDTIPqDMe7J4QJeWSCVoAn8OXkcMmsf2HNh51rLIw5BaFXfauQl0wwA4u5nP01Ftk96SdTvK1fUI3AxkAfMHhpNrDd-vZA"
              alt="Cocina Gourmet"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-on-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
              <div className="text-white">
                <p className="font-label-sm text-primary mb-2 uppercase">Cocina Gourmet</p>
                <h4 className="font-headline-lg text-[24px]">
                  Conexión de Artefactos Inox
                </h4>
              </div>
            </div>
          </div>
          {/* Project 3 */}
          <div className="md:col-span-4 group relative rounded-2xl overflow-hidden aspect-square">
            <div className="bg-surface-container-high w-full h-full flex flex-col justify-center p-10 border border-secondary/10">
              <span className="material-symbols-outlined text-primary text-[48px] mb-6">
                verified
              </span>
              <h3 className="font-headline-lg text-[28px] mb-4 leading-tight">
                Certificación y Seguridad Garantizada
              </h3>
              <p className="text-secondary">
                Cada proyecto incluye la presentación de formularios oficiales y el
                cumplimiento estricto de las normas vigentes.
              </p>
            </div>
          </div>
          {/* Project 4 */}
          <div className="md:col-span-8 group relative rounded-2xl overflow-hidden aspect-[16/7]">
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              src="https://lh3.googleusercontent.com/aida/AP1WRLvhT6ftUcfWAmVsTWDgtTWpoqTCMKWG1HZX7ZPFwt666moQl4pZlqB1INWcmCUJGVFdaDIuPpTKkF-zOz1n99fxsKkMAc633CmUBc_A1-ygDPHG8nubJXlY7rb9-BItfkbXLqz-9A2ytcx77aTrYufwYG8n62OJ_X8Rt7_hpVB0iMyi7a2XKhpJ7A99UYkko1QfJlZkhm3valc4I5GTqhV6WUi5dCNuPuuGj1X3x_8RvUZQnxvF4AkKXls"
              alt="Infraestructura"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-on-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
              <div className="text-white">
                <p className="font-label-sm text-primary mb-2 uppercase">
                  Infraestructura
                </p>
                <h4 className="font-headline-lg text-[24px]">
                  Planta Reguladora y Medidores
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
