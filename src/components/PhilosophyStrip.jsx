import React from 'react';

/**
 * PhilosophyStrip (Sección 4septies)
 * Franja full-width con imagen de fondo B&W de Unsplash + overlay oscuro.
 * Muestra los 4 pilares de la filosofía como texto tipográfico superpuesto.
 * Sin CTA — solo declaración de identidad.
 */
const PILLARS = [
  { word: "Privacidad", body: "Tus números, confidenciales siempre." },
  { word: "Libertad", body: "Sin restricciones ni juicios sobre tu estilo de vida." },
  { word: "Eficiencia", body: "Metodología corporativa aplicada a tu economía personal." },
  { word: "Simplicidad", body: "Un tablero claro que tomes decisiones con confianza." },
];

export default function PhilosophyStrip() {
  return (
    <section
      id="filosofia"
      className="relative min-h-[520px] flex items-center overflow-hidden"
      aria-label="Filosofía eFI Studio"
    >
      {/* Background image – Valeria Cuenca en espacio editorial premium B&W */}
      <img
        src="/assets/philosophy-band.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center grayscale brightness-90 contrast-95"
        loading="lazy"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-efi-dark/75" />

      {/* Left vertical accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-efi-gold opacity-70" />

      <div className="relative z-10 max-w-6xl mx-auto px-8 sm:px-12 lg:px-16 py-20 w-full">

        {/* Eyebrow */}
        <span 
          className="text-[11px] font-semibold uppercase tracking-[0.25em] text-efi-gold block mb-10"
          style={{ textShadow: '0 2px 12px rgba(0,0,0,0.8)' }}
        >
          Filosofía de Trabajo · eFI Studio
        </span>

        {/* 4 Pillars — horizontal on desktop, stacked on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-0 lg:divide-x lg:divide-white/10">
          {PILLARS.map((p, i) => (
            <div key={i} className="lg:px-8 first:lg:pl-0 last:lg:pr-0 space-y-2">
              <h3 
                className="font-serif font-bold text-3xl sm:text-4xl text-efi-sand leading-none tracking-tight"
                style={{ textShadow: '0 2px 16px rgba(0,0,0,0.85)' }}
              >
                {p.word}
              </h3>
              <p 
                className="text-sm text-efi-muted leading-relaxed"
                style={{ textShadow: '0 2px 12px rgba(0,0,0,0.85)' }}
              >
                {p.body}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
