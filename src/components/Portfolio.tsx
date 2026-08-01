import React from 'react';

export default function Portfolio() {
  const projects = [
    {
      title: "Instalación de Calderas y Radiadores",
      category: "Climatización",
      description: "Diseño y montaje completo de sistemas de calefacción central. Dimensionamiento preciso, tendido de cañerías y puesta en marcha de calderas de última generación para garantizar el máximo confort térmico en todo tipo de ambientes, siempre cumpliendo con normas de seguridad.",
      img: "/trabajos/trabajo-1.jpg",
      span: "md:col-span-2 lg:col-span-2"
    },
    {
      title: "Regulación y Medición Comercial",
      category: "Infraestructura Mayor",
      description: "Construcción de plantas reguladoras y baterías de medidores para edificios, comercios e industrias. Aseguramos un suministro de gas estable y seguro, cumpliendo estrictamente con los requerimientos técnicos y legales exigidos por Camuzzi.",
      img: "/trabajos/trabajo-2.jpg",
      span: "md:col-span-1 lg:col-span-1"
    },
    {
      title: "Conexión de Artefactos de Alta Gama",
      category: "Obras Domiciliarias",
      description: "Instalación, conversión y prueba de hermeticidad en cocinas, anafes y equipos gastronómicos. Garantizamos terminaciones precisas en acero inoxidable y conexiones seguras para proyectos exigentes.",
      img: "/trabajos/trabajo-3.jpg",
      span: "md:col-span-1 lg:col-span-1"
    },
    {
      title: "Tendido de Redes Internas",
      category: "Distribución",
      description: "Ejecución de montantes y distribuciones internas con sistemas aprobados de termofusión y cañerías epoxi. Realizamos pruebas hidráulicas y neumáticas para garantizar la máxima durabilidad sin fugas.",
      img: "/trabajos/trabajo-4.jpg",
      span: "md:col-span-1 lg:col-span-1"
    },
    {
      title: "Rehabilitación de Suministro",
      category: "Servicio Técnico",
      description: "Inspección exhaustiva y reacondicionamiento de instalaciones para rehabilitar servicios de gas cortados. Nos encargamos de la gestión completa de planos, formularios y trámites ágiles ante la prestataria.",
      img: "/trabajos/trabajo-5.jpg",
      span: "md:col-span-1 lg:col-span-1"
    }
  ];

  return (
    <section className="py-24 bg-surface overflow-hidden" id="projects">
      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-[32px] md:text-[40px] font-bold text-on-background mb-4">
            Trabajos Realizados
          </h2>
          <p className="text-secondary max-w-2xl mx-auto text-[16px]">
            Conoce en detalle las obras e instalaciones que llevamos a cabo en Mar del Plata y zona, cumpliendo con los más altos estándares técnicos y las normativas de Camuzzi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`group flex flex-col bg-surface-container-low rounded-2xl overflow-hidden border border-secondary/10 hover:border-primary/40 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ${project.span}`}
            >
              <div className="relative h-64 md:h-72 overflow-hidden bg-surface-container-highest">
                <img
                  src={project.img}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary/95 backdrop-blur-md text-on-primary text-[11px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="font-headline-sm text-[22px] md:text-[24px] text-on-background mb-3 font-semibold leading-tight">
                  {project.title}
                </h3>
                <p className="text-secondary text-[15px] leading-relaxed flex-grow">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
