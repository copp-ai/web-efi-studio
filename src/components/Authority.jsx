import React from 'react';

export default function Authority() {
  return (
    <section id="autoridad" className="py-24 relative bg-efi-dark border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Clean Editorial Profile */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-efi-card to-efi-surface border-2 border-efi-gold/40 flex items-center justify-center mb-6 shadow-2xl">
              <span className="font-serif font-bold text-4xl text-efi-gold">VC</span>
            </div>

            <h3 className="text-3xl font-serif font-bold text-efi-sand mb-1">
              Valeria Cuenca
            </h3>
            <p className="text-xs text-efi-gold font-semibold uppercase tracking-widest mb-4">
              Fundadora & Directora de eFI Studio
            </p>
            <p className="text-base text-efi-muted leading-relaxed">
              14+ años liderando estrategia de marca y presupuestos ejecutivos en empresas multinacionales como Nestlé, Samsung Electronics y NIVEA.
            </p>
          </div>

          {/* Right Column: Editorial Narrative & Stats */}
          <div className="lg:col-span-7 space-y-8 pl-0 lg:pl-8 border-l-0 lg:border-l border-white/10">
            
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-efi-sand leading-snug">
              "El mismo rigor analítico de las multinacionales, llevado a tus finanzas personales."
            </h2>

            <p className="text-base text-efi-muted leading-relaxed">
              Tras más de una década gestionando los números de marcas líderes de consumo masivo, entendí que los ejecutivos y profesionales necesitan el mismo nivel de claridad estratégica en su vida personal que el que exige el directorio de una multinacional.
            </p>

            {/* 4 Clean Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-white/10">
              <div>
                <span className="block font-serif text-3xl font-bold text-efi-sand">14+</span>
                <span className="text-xs text-efi-muted uppercase font-medium">Años en Multinacionales</span>
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
                <span className="block font-serif text-3xl font-bold text-efi-emerald-light">Gs.</span>
                <span className="text-xs text-efi-muted uppercase font-medium">Moneda Local</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
