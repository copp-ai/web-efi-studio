import React from 'react';
import { Quote } from 'lucide-react';

export default function Authority() {
  return (
    <section id="autoridad" className="py-24 relative bg-efi-dark border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Editorial Photo of Founder */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="relative mb-6 group">
              <div className="w-48 h-64 sm:w-56 sm:h-72 rounded-3xl overflow-hidden border-2 border-white/15 shadow-2xl relative">
                <img 
                  src="/assets/founder-portrait.jpg" 
                  alt="Valeria Cuenca - Fundadora de eFI Studio" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-efi-dark/80 via-transparent to-transparent"></div>
              </div>
              <div className="absolute -bottom-3 -right-3 bg-efi-gold text-efi-dark p-2.5 rounded-xl shadow-xl">
                <Quote className="w-5 h-5" />
              </div>
            </div>

            <h3 className="text-3xl font-serif font-bold text-efi-sand mb-1">
              Valeria Cuenca
            </h3>
            <p className="text-xs text-efi-gold font-semibold uppercase tracking-widest mb-4">
              Fundadora & Directora de eFI Studio
            </p>
            <p className="text-sm text-efi-muted leading-relaxed">
              +14 años liderando estrategia de marca y presupuestos ejecutivos en empresas multinacionales como Nestlé, Samsung Electronics y NIVEA.
            </p>
          </div>

          {/* Right Column: Narrative, Buffett Quote & Stats */}
          <div className="lg:col-span-7 space-y-8 pl-0 lg:pl-8 border-l-0 lg:border-l border-white/10">
            
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-efi-sand leading-snug">
              "Fundé eFI Studio para llevar más de una década de análisis de datos corporativos a la vida financiera de las personas."
            </h2>

            {/* Warren Buffett Quote Box */}
            <div className="p-6 rounded-2xl bg-efi-surface/80 border border-white/10 relative">
              <p className="font-serif italic text-lg text-efi-sand leading-relaxed">
                "El riesgo viene de no saber lo que estás haciendo."
              </p>
              <span className="block text-xs font-semibold uppercase tracking-wider text-efi-muted mt-2">
                · Warren Buffett
              </span>
            </div>

            <p className="text-base text-efi-muted leading-relaxed">
              Tras más de una década gestionando los números de marcas líderes, entendí que los profesionales y familias necesitan el mismo nivel de claridad estratégica en su vida personal que el que exige el directorio de una multinacional.
            </p>

            {/* 4 Clean Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-white/10">
              <div>
                <span className="block font-serif text-3xl font-bold text-efi-sand">14+</span>
                <span className="text-xs text-efi-muted uppercase font-medium">Años Corporativos</span>
              </div>
              <div>
                <span className="block font-serif text-3xl font-bold text-efi-gold">+100</span>
                <span className="text-xs text-efi-muted uppercase font-medium">Familias Ordenadas</span>
              </div>
              <div>
                <span className="block font-serif text-3xl font-bold text-efi-sand">100%</span>
                <span className="text-xs text-efi-muted uppercase font-medium">Confidencialidad</span>
              </div>
              <div>
                <span className="block font-serif text-3xl font-bold text-efi-sand">Gs.</span>
                <span className="text-xs text-efi-muted uppercase font-medium">Moneda Local</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
