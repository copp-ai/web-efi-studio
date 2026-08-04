import React from 'react';

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Compartís tus números sin fricción",
      description: "Nos enviás tus extractos o archivos en el formato más cómodo. Sin dar claves bancarias."
    },
    {
      number: "02",
      title: "Procesamos con tecnología + mirada boutique",
      description: "Combinamos inteligencia de datos con la revisión profesional de nuestro equipo."
    },
    {
      number: "03",
      title: "Recibís tu Panel e Informe en Guaraníes",
      description: "Visualizás tus números ordenados con los indicadores ejecutivos clave de tu salud financiera."
    },
    {
      number: "04",
      title: "Decisiones con tranquilidad mensual",
      description: "Alineamos objetivos, optimizamos liquidez y proyectamos tu patrimonio sin estrés."
    }
  ];

  return (
    <section id="como-funciona" className="py-24 relative overflow-hidden bg-efi-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-efi-gold block mb-3">
            Metodología eFI
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-efi-sand mb-4">
            Un proceso simple en 4 pasos
          </h2>
          <p className="text-base text-efi-muted">
            Diseñado para devolverte claridad liberándote de la carga operativa.
          </p>
        </div>

        {/* Timeline Flow (Horizontal / Vertical) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {steps.map((step, idx) => (
            <div key={idx} className="relative space-y-3 group">
              
              {/* Top Step Number & Connecting Line */}
              <div className="flex items-center gap-4">
                <span className="font-serif font-bold text-4xl sm:text-5xl text-efi-gold/50 group-hover:text-efi-gold transition-colors">
                  {step.number}
                </span>
                {idx < steps.length - 1 && (
                  <div className="hidden md:block flex-1 h-[1px] bg-white/10 group-hover:bg-efi-gold/30 transition-colors"></div>
                )}
              </div>

              {/* Title & Short Description */}
              <h3 className="text-lg font-serif font-semibold text-efi-sand leading-snug">
                {step.title}
              </h3>
              <p className="text-sm text-efi-muted leading-relaxed">
                {step.description}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
