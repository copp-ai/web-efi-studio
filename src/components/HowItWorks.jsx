import React from 'react';
import { RefreshCw } from 'lucide-react';

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
      description: "Traducimos números complejos a un tablero ejecutivo visual e intuitivo."
    },
    {
      number: "03",
      title: "Ordenamos",
      description: "Estructuramos tu presupuesto personal o familiar, fondo de tranquilidad y reglas claras de flujo."
    },
    {
      number: "04",
      title: "Liderás",
      description: "Te convertís en quien conduce y proyecta su patrimonio con total previsibilidad y paz mental."
    }
  ];

  return (
    <section id="como-funciona" className="py-24 relative overflow-hidden bg-efi-dark border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-efi-gold block mb-3">
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
                <span className="font-serif font-bold text-4xl sm:text-5xl text-efi-gold/50 group-hover:text-efi-gold transition-colors">
                  {step.number}
                </span>
                {idx < steps.length - 1 && (
                  <div className="hidden md:block flex-1 h-[1px] bg-white/10 group-hover:bg-efi-gold/30 transition-colors"></div>
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

        {/* Recurring Flow Indicator for Wealth Flow */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-efi-surface/80 border border-white/10 text-xs text-efi-muted">
            <RefreshCw className="w-3.5 h-3.5 text-efi-gold" />
            <span>En <strong className="text-efi-sand font-medium">eFI Wealth Flow</strong>, este ciclo de análisis y ajuste se repite mensualmente como un flujo continuo.</span>
          </div>
        </div>

      </div>
    </section>
  );
}
