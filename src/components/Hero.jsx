import React from 'react';
import { ShieldCheck, ArrowRight, Sparkles, Clock } from 'lucide-react';

export default function Hero() {
  const whatsappUrl = "https://wa.me/595971791069?text=Hola%20Valeria,%20quisiera%20agendar%20mi%20eFI%20Clarity%20Session";

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gold-glow pointer-events-none opacity-50"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Tagline Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-efi-card border border-efi-gold/30 mb-8">
          <Sparkles className="w-4 h-4 text-efi-gold" />
          <span className="text-xs font-semibold uppercase tracking-widest text-efi-gold">
            Una nueva forma de vivir tus finanzas
          </span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold text-efi-sand leading-[1.12] mb-8">
          Claridad total sobre tu dinero,{' '}
          <span className="text-gold-gradient italic font-normal">
            sin juicio y sin planillas.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-efi-muted font-normal leading-relaxed mb-10 max-w-2xl mx-auto">
          Estudio boutique que ordena tus números y proyecta tu patrimonio. Diseñado para profesionales, ejecutivos y familias que valoran su tiempo.
        </p>

        {/* Differential Privacy Banner */}
        <div className="mb-10 p-5 rounded-2xl bg-efi-card/90 border-l-4 border-l-efi-gold border border-white/10 max-w-xl mx-auto text-left flex items-start gap-4 shadow-xl">
          <ShieldCheck className="w-6 h-6 text-efi-gold shrink-0 mt-0.5" />
          <div>
            <h4 className="text-base font-semibold text-efi-sand mb-1">
              Sello de Privacidad & Seguridad eFI
            </h4>
            <p className="text-sm text-efi-muted leading-relaxed">
              <strong className="text-efi-sand font-medium">No te pedimos tus claves del banco.</strong> Vos mantenés el control directo de tus cuentas — nosotros ponemos la estrategia y la claridad.
            </p>
          </div>
        </div>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-sm font-semibold uppercase tracking-wider text-efi-dark bg-gradient-to-r from-efi-gold-light via-efi-gold to-efi-gold-hover hover:shadow-glow-gold hover:scale-[1.02] transition-all duration-200"
          >
            <Clock className="w-4 h-4 text-efi-dark" />
            Agendar eFI Clarity Session (90 min)
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#portal-preview"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-sm font-medium text-efi-sand bg-efi-card hover:bg-efi-card-hover border border-white/10 hover:border-efi-gold/30 transition-all duration-200"
          >
            Ver Portal de Clientes
            <span className="text-efi-gold font-bold">→</span>
          </a>
        </div>

        {/* 3 Streamlined Authority Bullets */}
        <div className="flex flex-wrap items-center justify-center gap-8 pt-8 border-t border-white/10 text-sm text-efi-muted font-medium">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-efi-gold"></span>
            14+ Años en Multinacionales
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-efi-gold"></span>
            +100 Familias Acompañadas
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-efi-gold"></span>
            Cero Carga Operativa
          </span>
        </div>

      </div>
    </section>
  );
}
