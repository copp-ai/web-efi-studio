import React from 'react';

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Diagnóstico",
      description: "Mapeamos tu situación financiera actual en detalle y sin prejuicios para entender de dónde partimos."
    },
    {
      number: "02",
      title: "Visibilizamos",
      description: "Traducimos números complejos a un tablero ejecutivo visual e intuitivo en Guaraníes."
    },
    {
      number: "03",
      title: "Ordenamos",
      description: "Estructuramos tu presupuesto personal o familiar, fondo de tranquilidad y reglas claras de flujo."
    },
    {
      number: "04",
      title: "Decidís",
      description: "Tomas decisiones estratégicas respaldadas en datos reales con total previsibilidad y paz mental."
    }
  ];

  return (
    <section id="como-funciona" className="py-24 relative overflow-hidden bg-efi-dark border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-efi-pine block mb-3">
            Metodología eFI
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-efi-sand mb-4">
            Un método probado en 4 pasos
          </h2>
          <p className="text-base text-efi-muted">
            Diseñado para devolverte el control estratégico de tus números sin burocracia ni estrés.
          </p>
        </div>

        {/* Timeline Flow */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {steps.map((step, idx) => (
            <div key={idx} className="relative space-y-3 group p-4 rounded-2xl hover:bg-white/[0.02] transition-colors">
              
              {/* Top Step Number & Line */}
              <div className="flex items-center gap-4">
                <span className="font-serif font-bold text-4xl sm:text-5xl text-efi-pine/50 group-hover:text-efi-pine transition-colors">
                  {step.number}
                </span>
                {idx < steps.length - 1 && (
                  <div className="hidden md:block flex-1 h-[1px] bg-white/10 group-hover:bg-efi-pine/30 transition-colors"></div>
                )}
              </div>

              {/* Step Name & Description */}
              <h3 className="text-xl font-serif font-bold text-efi-sand leading-snug">
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
