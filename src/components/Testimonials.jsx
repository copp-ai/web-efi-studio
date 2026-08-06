import React from 'react';

export default function Testimonials() {
  const featuredTestimonials = [
    {
      name: "María Fe Figueredo",
      role: "Cliente eFI Studio",
      quote: "Tenía temor de mostrar mis finanzas desordenadas, pero Valeria me hizo sentir super cómoda desde el minuto uno. Salí de la primera sesión con un panorama claro que nunca antes había tenido.",
      highlight: "Claridad inmediata sin sentirse juzgada"
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
      quote: "Valeria me ayudó a separar mis finanzas personales del negocio y a entender de verdad cuál era mi capacidad real de retiro mensual sin descapitalizarme."
    },
    {
      name: "Cliente eFI",
      role: "Ejecutivo Corporativo",
      quote: "Increíble la claridad con la que salí de la Clarity Session de 90 minutos. Armamos la planilla completa y me dio el empujón exacto para poner en orden mis ahorros."
    },
    {
      name: "Cliente eFI",
      role: "Familia / Pareja",
      quote: "El portal y la metodología hacen que el seguimiento mensual sea simple y cero estresante. Logramos ponernos de acuerdo en las metas de la casa de forma neutral."
    }
  ];

  return (
    <section id="testimonios" className="py-28 bg-efi-dark relative border-t border-white/5 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gold-glow pointer-events-none opacity-15 blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-20">
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

        {/* 1. Featured Editorial Statements (María Fe Figueredo & Fabiola Bogado) - Pure Typography, No Boxes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-start">
          {featuredTestimonials.map((item, idx) => (
            <div key={idx} className="space-y-6">
              <blockquote className="text-2xl sm:text-4xl font-serif font-light italic text-efi-sand leading-[1.35] tracking-tight">
                "{item.quote}"
              </blockquote>
              
              <div className="flex items-center gap-3 pt-4 border-t border-efi-gold/30">
                <span className="w-8 h-[1px] bg-efi-gold/50"></span>
                <div>
                  <h4 className="text-lg font-serif font-bold text-efi-gold">
                    {item.name}
                  </h4>
                  <p className="text-xs text-efi-muted uppercase font-semibold tracking-wider">
                    {item.role} · <span className="text-efi-sand font-normal">{item.highlight}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 2. Secondary Streamlined Stories - Unboxed Editorial List with Vertical Separators */}
        <div className="pt-12 border-t border-white/10">
          <span className="text-xs font-semibold uppercase tracking-widest text-efi-gold block mb-10 text-center lg:text-left">
            Más experiencias de clientes eFI
          </span>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {secondaryTestimonials.map((item, idx) => (
              <div 
                key={idx} 
                className={`space-y-4 ${
                  idx > 0 ? 'md:border-l md:border-white/10 md:pl-8' : ''
                }`}
              >
                <p className="text-sm text-efi-muted leading-relaxed italic">
                  "{item.quote}"
                </p>
                <div>
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
