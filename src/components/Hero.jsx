import React from 'react';
import { ArrowRight, Clock } from 'lucide-react';

export default function Hero() {
  const whatsappUrl = "https://wa.me/595971791069?text=Hola%20Valeria,%20quisiera%20agendar%20mi%20eFI%20Clarity%20Session";

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gold-glow pointer-events-none opacity-50"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">

        {/* Main Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold text-efi-sand leading-[1.12] mb-8">
          Claridad total sobre tu dinero,{' '}
          <span className="italic font-normal text-efi-muted">
            sin juicio y sin planillas.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-efi-muted font-normal leading-relaxed mb-12 max-w-2xl mx-auto">
          Aplico más de 14 años de estrategia corporativa a la vida financiera de profesionales, ejecutivos y familias que valoran su tiempo.
        </p>

        {/* Single CTA */}
        <div className="flex flex-col items-center justify-center gap-3 mb-16">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-sm font-semibold uppercase tracking-wider text-efi-dark bg-efi-gold hover:bg-efi-gold-hover hover:shadow-glow-gold hover:scale-[1.02] transition-all duration-200"
            >
              <Clock className="w-4 h-4" />
              Agendar Clarity Session · 90 min
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#servicios"
              className="text-sm text-efi-muted hover:text-efi-sand transition-colors underline underline-offset-4"
            >
              Ver todos los programas ↓
            </a>
          </div>
          <span className="text-xs text-efi-subtle">
            Respuesta en el día · Sin compromiso
          </span>
        </div>

        {/* 3 Streamlined Authority Bullets */}
        <div className="flex flex-wrap items-center justify-center gap-8 pt-8 border-t border-white/10 text-sm text-efi-muted font-medium">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-efi-gold"></span>
            14+ Años en Multinacionales
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-efi-gold"></span>
            +100 Familias Acompañadas
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-efi-gold"></span>
            Cero Carga Operativa
          </span>
        </div>

      </div>
    </section>
  );
}
