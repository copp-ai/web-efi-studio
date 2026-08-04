import React from 'react';
import { Award, Building, Users, ShieldCheck, Quote } from 'lucide-react';

export default function Authority() {
  return (
    <section id="autoridad" className="py-24 relative bg-efi-surface/40 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Founder Profile Card */}
          <div className="lg:col-span-5">
            <div className="glass-panel p-8 rounded-3xl relative overflow-hidden border-efi-gold/30">
              <div className="absolute top-0 right-0 w-32 h-32 bg-efi-gold/10 rounded-full blur-2xl pointer-events-none"></div>

              {/* Founder Avatar / Graphic Badge */}
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-efi-card to-efi-surface border-2 border-efi-gold/40 flex items-center justify-center mb-6 shadow-xl">
                <span className="font-serif font-bold text-3xl text-efi-gold">VC</span>
              </div>

              <h3 className="text-2xl font-serif font-bold text-efi-sand mb-1">
                Valeria Cuenca
              </h3>
              <p className="text-xs text-efi-gold font-semibold uppercase tracking-wider mb-4">
                Fundadora & Directora de eFI Studio
              </p>

              <div className="space-y-3 pt-4 border-t border-white/10 text-xs text-efi-muted">
                <div className="flex items-center gap-3">
                  <Building className="w-4 h-4 text-efi-gold shrink-0" />
                  <span>14+ años liderando marcas globales en Nestlé, Samsung y NIVEA.</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-4 h-4 text-efi-gold shrink-0" />
                  <span>+100 personas y familias acompañadas en Paraguay y LatAm.</span>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-4 h-4 text-efi-gold shrink-0" />
                  <span>Educadora en Seguridad de la Información y Finanzas Patrimoniales.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Authority Message */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-efi-gold/10 border border-efi-gold/30 text-efi-gold text-xs font-semibold uppercase tracking-wider">
              <Award className="w-3.5 h-3.5" />
              Respaldado por trayectoria multinacional
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-efi-sand leading-snug">
              "Aplicamos el mismo rigor analítico de las multinacionales a tus finanzas personales."
            </h2>

            <p className="text-efi-muted text-base leading-relaxed">
              Tras más de una década gestionando los presupuestos de marcas líderes de consumo masivo y tecnología, entendí que los profesionales y empresarios necesitan el mismo nivel de claridad estratégica en su vida personal que el que exige el directorio de una multinacional.
            </p>

            {/* Founder Quote Card */}
            <div className="p-6 rounded-2xl bg-efi-card/80 border-l-4 border-l-efi-gold border border-white/5 space-y-3 relative">
              <Quote className="w-8 h-8 text-efi-gold/20 absolute top-4 right-4 pointer-events-none" />
              <p className="text-sm font-serif italic text-efi-sand leading-relaxed">
                "No creemos en el control obsesivo de centavos ni en juzgar tus gustos. Creemos en darte la tranquilidad de saber exactamente dónde estás parado para que puedas proyectar tus metas con solidez."
              </p>
              <span className="text-xs text-efi-gold font-medium block">
                — Valeria Cuenca
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/10 text-center">
              <div className="p-3 rounded-xl bg-white/[0.02]">
                <span className="block font-serif text-2xl font-bold text-efi-sand">14+</span>
                <span className="text-[10px] text-efi-muted uppercase">Años en Multinacionales</span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02]">
                <span className="block font-serif text-2xl font-bold text-efi-gold">+100</span>
                <span className="text-[10px] text-efi-muted uppercase">Familias Ordenadas</span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02]">
                <span className="block font-serif text-2xl font-bold text-efi-sand">100%</span>
                <span className="text-[10px] text-efi-muted uppercase">Confidencialidad</span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02]">
                <span className="block font-serif text-2xl font-bold text-efi-emerald-light">Gs.</span>
                <span className="text-[10px] text-efi-muted uppercase">Moneda Local</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
