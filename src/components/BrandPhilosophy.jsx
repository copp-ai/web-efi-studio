import React from 'react';
import { Shield, Sparkles, Zap, Feather } from 'lucide-react';

export default function BrandPhilosophy() {
  const pillars = [
    {
      icon: Shield,
      title: "Privacidad",
      subtitle: "100% Confidencial",
      description: "Tus números e información patrimonial son tratados con discreción absoluta y código de confidencialidad bancaria."
    },
    {
      icon: Sparkles,
      title: "Libertad",
      subtitle: "Sin juicios de valor",
      description: "No creemos en el control obsesivo ni en restringir tu estilo de vida. Diseñamos un sistema financiero que trabaje para tus metas."
    },
    {
      icon: Zap,
      title: "Eficiencia",
      subtitle: "Rigor Corporativo",
      description: "Aplicamos metodologías de análisis de datos corporativos adaptadas de forma ágil y práctica a tus finanzas personales."
    },
    {
      icon: Feather,
      title: "Simplicidad",
      subtitle: "Claridad Ejecutiva",
      description: "Eliminamos la complejidad técnica para que tomes decisiones con un tablero claro, visual y fácil de mantener."
    }
  ];

  return (
    <section id="filosofia" className="py-24 bg-efi-dark relative border-t border-white/5 overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-pine-glow pointer-events-none opacity-20 blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-efi-gold block mb-3">
            Filosofía de Trabajo
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-efi-sand mb-4">
            Los 4 pilares de eFI Studio
          </h2>
          <p className="text-base text-efi-muted leading-relaxed">
            Una visión boutique que combina el máximo rigor estratégico con una experiencia humana, transparente y libre de fricciones.
          </p>
        </div>

        {/* Layout: Editorial Image + 4 Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Editorial Photo Frame */}
          <div className="lg:col-span-5 relative group hidden lg:block">
            <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative h-[420px]">
              <img 
                src="/assets/philosophy-editorial.jpg" 
                alt="Filosofía eFI Studio" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-efi-dark/90 via-efi-dark/30 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-efi-gold block mb-1">
                  Rigor & Tranquilidad
                </span>
                <p className="text-sm font-serif font-medium text-efi-sand">
                  Un método pensado para durar y dar certidumbre a cada decisión.
                </p>
              </div>
            </div>
          </div>

          {/* 4 Pillars Stack */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pillars.map((pillar, idx) => {
              const IconComponent = pillar.icon;
              return (
                <div 
                  key={idx}
                  className="group p-6 rounded-2xl bg-efi-surface/60 border border-white/10 hover:border-efi-gold/40 transition-all duration-300 relative overflow-hidden"
                >
                  <div className="w-10 h-10 rounded-xl bg-efi-card border border-white/10 flex items-center justify-center mb-4 group-hover:border-efi-gold group-hover:bg-efi-gold/10 transition-colors shadow-lg">
                    <IconComponent className="w-5 h-5 text-efi-gold" />
                  </div>
                  <span className="text-[11px] font-semibold text-efi-gold uppercase tracking-wider block mb-1">
                    {pillar.subtitle}
                  </span>
                  <h3 className="text-xl font-serif font-bold text-efi-sand mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-efi-muted leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
