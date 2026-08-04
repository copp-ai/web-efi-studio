import React from 'react';
import { ShieldCheck, ArrowRight, Sparkles, CheckCircle2, Clock } from 'lucide-react';

export default function Hero() {
  const whatsappUrl = "https://wa.me/595981000000?text=Hola%20Valeria,%20quisiera%20agendar%20mi%20eFI%20Clarity%20Session";

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Glows & Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-glow pointer-events-none opacity-60"></div>
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-emerald-glow pointer-events-none opacity-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">

          {/* Badge Tagline */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-efi-card border border-efi-gold/30 mb-8 shadow-glass animate-fade-in">
            <Sparkles className="w-4 h-4 text-efi-gold" />
            <span className="text-xs font-semibold uppercase tracking-widest text-efi-gold">
              Una nueva forma de vivir tus finanzas
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-efi-sand leading-[1.15] mb-6">
            Claridad total sobre tu dinero,{' '}
            <span className="text-gold-gradient italic font-normal">
              sin juicio y sin planillas.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-efi-muted font-normal leading-relaxed mb-10 max-w-2xl mx-auto">
            Estudio boutique que ordena tus números y proyecta tu patrimonio. Pensado para ejecutivos, profesionales y familias que valoran su tiempo y buscan tranquilidad financiera real.
          </p>

          {/* Differential Key Message Banner */}
          <div className="mb-10 p-4 rounded-2xl glass-panel-gold max-w-xl mx-auto text-left flex items-start gap-3.5 shadow-xl border-l-4 border-l-efi-gold">
            <div className="p-2 rounded-xl bg-efi-gold/10 text-efi-gold shrink-0 mt-0.5">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-efi-sand mb-0.5 flex items-center gap-2">
                Sello de Privacidad & Seguridad eFI
              </h4>
              <p className="text-xs text-efi-muted leading-relaxed">
                <strong className="text-efi-gold-light font-medium">No te pedimos tus claves del banco.</strong> Vos mantenés el control directo de tus cuentas — nosotros ponemos la estrategia, la metodología y la claridad.
              </p>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-sm font-semibold uppercase tracking-wider text-efi-dark bg-gradient-to-r from-efi-gold-light via-efi-gold to-efi-gold-hover hover:shadow-glow-gold hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
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

          {/* Quick Authority Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-white/10 text-left">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02]">
              <CheckCircle2 className="w-5 h-5 text-efi-gold shrink-0" />
              <div>
                <p className="text-xs font-semibold text-efi-sand">14+ Años de Experiencia</p>
                <p className="text-[11px] text-efi-muted">Liderazgo en multinacionales</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02]">
              <CheckCircle2 className="w-5 h-5 text-efi-gold shrink-0" />
              <div>
                <p className="text-xs font-semibold text-efi-sand">+100 Clientes Acompañados</p>
                <p className="text-[11px] text-efi-muted">Familias y ejecutivos</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02]">
              <CheckCircle2 className="w-5 h-5 text-efi-gold shrink-0" />
              <div>
                <p className="text-xs font-semibold text-efi-sand">Acompañamiento Humano</p>
                <p className="text-[11px] text-efi-muted">Cero carga operativa para vos</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
