import React, { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
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
    },
    {
      name: "Cliente eFI",
      role: "Profesional Independiente",
      quote: "Valeria me ayudó a separar mis finanzas personales del negocio y a entender de verdad cuál era mi capacidad real de retiro mensual sin descapitalizarme.",
      highlight: "Separación clara entre negocio y personal"
    },
    {
      name: "Cliente eFI",
      role: "Ejecutivo Corporativo",
      quote: "Increíble la claridad con la que salí de la Clarity Session de 90 minutos. Armamos la planilla completa y me dio el empujón exacto para poner en orden mis ahorros.",
      highlight: "Resultados inmediatos en 90 minutos"
    },
    {
      name: "Cliente eFI",
      role: "Familia / Pareja",
      quote: "El portal y la metodología hacen que el seguimiento mensual sea simple y cero estresante. Logramos ponernos de acuerdo en las metas de la casa de forma neutral.",
      highlight: "Alineación y metas en común"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const next = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section id="testimonios" className="py-24 bg-efi-surface/30 relative border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-efi-gold block mb-3">
            Prueba Social Real
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-efi-sand mb-4">
            Lo que dicen quienes confiaron en eFI
          </h2>
          <p className="text-base text-efi-muted">
            Experiencias reales de profesionales y familias que transformaron su relación con el dinero.
          </p>
        </div>

        {/* Featured Testimonial Card */}
        <div className="max-w-4xl mx-auto p-8 sm:p-12 rounded-3xl bg-efi-card/80 border border-efi-gold/30 shadow-2xl relative">
          
          {/* Quote Icon */}
          <div className="w-12 h-12 rounded-xl bg-efi-gold/10 border border-efi-gold/30 flex items-center justify-center mb-6">
            <Quote className="w-6 h-6 text-efi-gold" />
          </div>

          {/* Stars */}
          <div className="flex items-center gap-1 mb-6 text-efi-gold">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-efi-gold text-efi-gold" />
            ))}
          </div>

          {/* Quote Text */}
          <blockquote className="text-xl sm:text-2xl font-serif font-medium text-efi-sand leading-relaxed mb-8">
            "{testimonials[currentIndex].quote}"
          </blockquote>

          {/* User Info & Controls */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-t border-white/10 pt-6">
            <div>
              <h4 className="text-lg font-serif font-bold text-efi-gold">
                {testimonials[currentIndex].name}
              </h4>
              <p className="text-xs text-efi-muted uppercase tracking-wider font-semibold">
                {testimonials[currentIndex].role} · <span className="text-efi-gold-light">{testimonials[currentIndex].highlight}</span>
              </p>
            </div>

            {/* Navigation Dots & Buttons */}
            <div className="flex items-center gap-4">
              <div className="flex gap-1.5">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      idx === currentIndex 
                        ? 'bg-efi-gold w-6' 
                        : 'bg-white/20 hover:bg-white/40'
                    }`}
                    aria-label={`Ir al testimonio ${idx + 1}`}
                  />
                ))}
              </div>

              <div className="flex gap-2">
                <button
                  onClick={prev}
                  className="p-2 rounded-full border border-white/10 hover:border-efi-gold text-efi-sand hover:text-efi-gold transition-colors"
                  aria-label="Anterior testimonio"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={next}
                  className="p-2 rounded-full border border-white/10 hover:border-efi-gold text-efi-sand hover:text-efi-gold transition-colors"
                  aria-label="Siguiente testimonio"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
