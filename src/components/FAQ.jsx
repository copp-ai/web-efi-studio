import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      q: "¿En qué consiste eFI Studio?",
      a: "eFI Studio es un estudio boutique de organización y claridad financiera personal y familiar. Aplicamos metodologías y herramientas de análisis corporativo para que tengas un control claro de tus números, optimices tus ingresos y construyas previsibilidad sin vivir atado al estrés del dinero."
    },
    {
      q: "¿Cómo sé cuál es el programa adecuado para mí?",
      a: "Si querés un diagnóstico rápido e inmediato en 90 minutos, la Clarity Session es la puerta de entrada ideal. Si buscás un acompañamiento intensivo de 1 mes para estructurar todo tu presupuesto personal, eFI Personal Finance es la mejor elección. Para parejas y familias tenemos eFI Family Care, y si preferís delegar la carga operativa mensual, eFI Wealth Flow."
    },
    {
      q: "¿Qué necesito tener listo antes de la primera sesión?",
      a: "No hace falta que tengas planillas ni números perfectos. Solo necesitás acceso a tus extractos bancarios o movimientos recientes. En el proceso nos encargamos de ordenar e interpretar la información por vos."
    },
    {
      q: "¿Mis datos financieros están seguros y protegidos?",
      a: "Absolutamente. Mantenemos una política estricta de 100% confidencialidad y reserva patrimonial. Tu información financiera jamás se comparte con terceros ni se utiliza con fines comerciales."
    },
    {
      q: "¿Necesito conocimientos previos en finanzas o contabilidad?",
      a: "En absoluto. Toda nuestra metodología está diseñada para ser ultra intuitiva y comprensible. Traducimos conceptos complejos a métricas visuales y decisiones cotidianas claras."
    },
    {
      q: "¿Cómo es la modalidad de las sesiones?",
      a: "Todas las sesiones se realizan de manera 100% online vía videollamada personalizada, lo que te permite conectarte cómodamente desde tu casa u oficina sin perder tiempo en traslados."
    },
    {
      q: "¿Qué diferencia a eFI Studio de un contador o asesor tradicional?",
      a: "Un contador se enfoca en el cumplimiento impositivo pasado y un asesor financiero suele vender productos de inversión. En eFI Studio nos enfocamos en tu liquidez real presente, tus hábitos y tu estrategia patrimonial futura."
    },
    {
      q: "¿Puedo agendar si estoy en pareja o queremos organizar finanzas familiares?",
      a: "Sí, de hecho el programa eFI Family Care está específicamente formulado para servir como facilitador neutral en familias y parejas que desean alinear sus presupuestos, metas de ahorro y proyectos de vida en común."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-efi-dark relative border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-efi-gold block mb-3">
            Respuesta a tus dudas
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-efi-sand mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-base text-efi-muted max-w-xl mx-auto">
            Todo lo que necesitás saber antes de comenzar tu proceso de ordenamiento financiero.
          </p>
        </div>

        {/* Layout Grid: Editorial Image + Accordion */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* FAQ Editorial Image Frame */}
          <div className="lg:col-span-4 hidden lg:block sticky top-28">
            <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative h-[440px] group">
              <img 
                src="/assets/faq-personalized.jpg" 
                alt="Atención boutique eFI Studio" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-efi-dark/90 via-efi-dark/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-efi-gold block mb-1">
                  Atención Personalizada
                </span>
                <p className="text-sm font-serif font-medium text-efi-sand">
                  Respuestas claras y orientación boutique adaptada a tu realidad.
                </p>
              </div>
            </div>
          </div>

          {/* Accordion List */}
          <div className="lg:col-span-8 space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div 
                  key={idx}
                  className="rounded-2xl bg-efi-surface/60 border border-white/10 overflow-hidden transition-colors hover:border-efi-gold/30"
                >
                  <button
                    onClick={() => toggle(idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-serif text-lg font-semibold text-efi-sand hover:text-efi-gold transition-colors"
                  >
                    <span className="flex items-center gap-3">
                      <HelpCircle className="w-5 h-5 text-efi-gold shrink-0" />
                      {faq.q}
                    </span>
                    <ChevronDown className={`w-5 h-5 text-efi-muted shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-efi-gold' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-0 text-sm text-efi-muted leading-relaxed border-t border-white/5 mt-2">
                      <p className="pt-4">{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
