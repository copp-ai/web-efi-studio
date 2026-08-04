import React from 'react';
import { HelpCircle, BrainCircuit, HeartHandshake, EyeOff, ShieldAlert } from 'lucide-react';

export default function PainPoints() {
  return (
    <section id="diferencial" className="py-20 relative bg-efi-surface/50 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-efi-gold mb-3">
            El problema real
          </h2>
          <h3 className="text-3xl sm:text-4xl font-serif font-bold text-efi-sand mb-4">
            Tenés buenos ingresos. <br className="hidden sm:block"/>
            <span className="italic font-normal text-efi-gold-light">Lo que falta es claridad y tiempo.</span>
          </h3>
          <p className="text-efi-muted text-base leading-relaxed">
            La mayoría de las personas con ingresos altos no tienen un problema de dinero, sino de fricción operativa y falta de un sistema claro.
          </p>
        </div>

        {/* 3 Main Pain Point Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="glass-panel p-8 rounded-3xl relative overflow-hidden group hover:border-efi-gold/30 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-efi-gold/10 text-efi-gold flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <BrainCircuit className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-serif font-semibold text-efi-sand mb-3">
              "Sé que gano bien, pero no sé a dónde se va"
            </h4>
            <p className="text-efi-muted text-sm leading-relaxed">
              Trabajás duro todo el mes, generás buen flujo, pero la dispersión de gastos y la falta de consolidación te dejan con la sensación de no avanzar al ritmo que podrías.
            </p>
          </div>

          {/* Card 2 */}
          <div className="glass-panel p-8 rounded-3xl relative overflow-hidden group hover:border-efi-gold/30 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-efi-gold/10 text-efi-gold flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <EyeOff className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-serif font-semibold text-efi-sand mb-3">
              Sin tiempo para armar planillas en tu descanso
            </h4>
            <p className="text-efi-muted text-sm leading-relaxed">
              Lo último que querés hacer un domingo por la tarde es sentarte a cargar comprobantes en Excel o pelear con apps que se desconectan de tus bancos.
            </p>
          </div>

          {/* Card 3 */}
          <div className="glass-panel p-8 rounded-3xl relative overflow-hidden group hover:border-efi-gold/30 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-efi-gold/10 text-efi-gold flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-serif font-semibold text-efi-sand mb-3">
              Buscás acompañamiento sin juicio
            </h4>
            <p className="text-efi-muted text-sm leading-relaxed">
              No querés un asesor que te rete por tus gustos personales, sino un aliado profesional que organice la información para que tomés mejores decisiones con libertad.
            </p>
          </div>

        </div>

        {/* Contrast Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-efi-card via-efi-surface to-efi-card border border-efi-gold/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-efi-emerald/20 border border-efi-emerald-light/40 text-efi-emerald-light flex items-center justify-center shrink-0">
              ✓
            </div>
            <div>
              <h5 className="text-base font-serif font-semibold text-efi-sand">
                El enfoque eFI: El punto medio perfecto
              </h5>
              <p className="text-xs text-efi-muted">
                No somos una app fría de autoservicio ni una consultora inaccesible. Somos tu equipo boutique de claridad financiera.
              </p>
            </div>
          </div>
          <a
            href="#como-funciona"
            className="text-xs font-semibold uppercase tracking-wider text-efi-gold hover:text-efi-gold-light transition-colors whitespace-nowrap"
          >
            Descubrí la metodología ↓
          </a>
        </div>

      </div>
    </section>
  );
}
