import React from 'react';

export default function Testimonials() {
  const featuredTestimonials = [
    {
      name: "María Fe Figueredo",
      role: "Cliente eFI Studio",
      quote: "Tenía temor de mostrar mis finanzas desordenadas, pero Valeria me hizo sentir super cómoda desde el minuto uno. Salí de la primera sesión con un panorama claro que nunca antes había tenido.",
      highlight: "Sentirme cómoda sin sentirme juzgada"
    },
    {
      name: "Fabiola Bogado",
      role: "Cliente eFI Studio",
      quote: "Aprender a ordenar mis finanzas me dio la paz mental que necesitaba. Hoy sé exactamente hacia dónde va mi dinero y cómo planificar sin vivir con estrés constante.",
      highlight: "Paz mental y previsibilidad financiera"
    }
  ];

  const secondaryTestimonials = [
    {
      name: "Cliente eFI",
      role: "Profesional Independiente",
      quote: "Valeria me ayudó a separar mis finanzas personales del negocio y a entender de verdad cuál era mi capacidad real de retiro mensual sin descapitalizarme.",
    },
    {
      name: "Cliente eFI",
      role: "Ejecutivo Corporativo",
      quote: "Increíble la claridad con la que salí de la Clarity Session de 90 minutos. Armamos la planilla completa y me dio el empujón exacto para poner en orden mis ahorros.",
    },
    {
      name: "Cliente eFI",
      role: "Familia / Pareja",
      quote: "El portal y la metodología hacen que el seguimiento mensual sea simple y cero estresante. Logramos ponernos de acuerdo en las metas de la casa de forma neutral.",
    }
  ];

  return (
    <section id="testimonios" className="py-24 bg-efi-dark relative border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-efi-gold block mb-3">
            Prueba Social Real
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-efi-sand mb-4">
            Lo que dicen quienes confiaron en eFI
          </h2>
          <p className="text-base text-efi-muted">
            Experiencias reales de personas y familias que transformaron su relación con el dinero.
          </p>
        </div>

        {/* 1. Featured Editorial Quotes (María Fe Figueredo & Fabiola Bogado) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {featuredTestimonials.map((item, idx) => (
            <div key={idx} className="space-y-6 flex flex-col justify-between p-4">
              <blockquote className="text-2xl sm:text-3xl font-serif italic text-efi-sand leading-relaxed">
                "{item.quote}"
              </blockquote>
              <div className="pt-4 border-t border-white/10">
                <h4 className="text-xl font-serif font-bold text-efi-gold">
                  {item.name}
                </h4>
                <p className="text-xs text-efi-muted uppercase font-semibold tracking-wider mt-1">
                  {item.role} · <span className="text-efi-sand">{item.highlight}</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 2. Secondary Streamlined Client Stories (Distinct visual weight) */}
        <div className="pt-12 border-t border-white/10">
          <h3 className="text-xs font-semibold uppercase tracking-widest text-efi-gold mb-8 text-center md:text-left">
            Más historias de éxito eFI
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {secondaryTestimonials.map((item, idx) => (
              <div 
                key={idx} 
                className="space-y-3 p-6 rounded-2xl bg-efi-surface/40 border border-white/5 hover:border-efi-gold/20 transition-colors"
              >
                <p className="text-sm text-efi-muted leading-relaxed italic">
                  "{item.quote}"
                </p>
                <div className="pt-3 border-t border-white/5">
                  <span className="text-xs font-serif font-semibold text-efi-sand block">
                    {item.name}
                  </span>
                  <span className="text-[11px] text-efi-gold uppercase font-medium tracking-wider">
                    {item.role}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
