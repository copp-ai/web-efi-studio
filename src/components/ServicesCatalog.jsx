import React from 'react';
import { Sparkles, ArrowRight, Clock, UserCheck, Users, TrendingUp, Check } from 'lucide-react';

export default function ServicesCatalog() {
  const whatsappUrl = "https://wa.me/595981000000?text=Hola%20Valeria,%20me%20interesa%20la%20eFI%20Clarity%20Session";

  return (
    <section id="servicios" className="py-24 bg-efi-surface/30 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-efi-gold mb-3">
            Catálogo Boutique
          </h2>
          <h3 className="text-3xl sm:text-4xl font-serif font-bold text-efi-sand mb-4">
            Servicios diseñados para cada etapa
          </h3>
          <p className="text-efi-muted text-base">
            Desde una sesión intensiva de ordenamiento hasta el acompañamiento mensual continuo.
          </p>
        </div>

        {/* Featured Service: eFI Clarity Session (Hábito de entrada) */}
        <div className="mb-12 p-8 sm:p-10 rounded-3xl glass-panel-gold relative overflow-hidden shadow-2xl border-efi-gold/40">
          <div className="absolute top-0 right-0 transform translate-x-8 -translate-y-8 w-48 h-48 bg-efi-gold/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-efi-gold/20 border border-efi-gold/40 text-efi-gold text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                Puerta de Entrada Recomendada
              </div>

              <h3 className="text-3xl sm:text-4xl font-serif font-bold text-efi-sand">
                eFI Clarity Session
              </h3>

              <p className="text-base text-efi-muted leading-relaxed">
                Sesión intensiva de 90 minutos para ordenar tus números actuales, resolver tus dudas urgentes y salir con tu hoja de ruta anual armada ese mismo día.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs text-efi-sand">
                  <Check className="w-4 h-4 text-efi-gold shrink-0" />
                  Diagnóstico completo de liquidez
                </div>
                <div className="flex items-center gap-2 text-xs text-efi-sand">
                  <Check className="w-4 h-4 text-efi-gold shrink-0" />
                  Planilla anual personalizada
                </div>
                <div className="flex items-center gap-2 text-xs text-efi-sand">
                  <Check className="w-4 h-4 text-efi-gold shrink-0" />
                  Definición de fondo de tranquilidad
                </div>
                <div className="flex items-center gap-2 text-xs text-efi-sand">
                  <Check className="w-4 h-4 text-efi-gold shrink-0" />
                  Recomendaciones accionables
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center bg-efi-card/80 p-6 rounded-2xl border border-efi-gold/20 text-center lg:text-right">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-efi-gold mb-2">
                <Clock className="w-4 h-4" />
                Duración: 90 minutos
              </div>
              <p className="text-xs text-efi-muted mb-6">
                Ideal para quienes quieren resultados inmediatos y una radiografía clara sin compromisos de largo plazo.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider text-efi-dark bg-gradient-to-r from-efi-gold-light via-efi-gold to-efi-gold-hover hover:shadow-glow-gold transition-all"
              >
                Agendar eFI Clarity Session
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>
        </div>

        {/* 3 Ongoing Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Service 1: eFI Personal Finance */}
          <div className="glass-panel p-8 rounded-3xl flex flex-col justify-between hover:border-white/20 transition-all duration-300">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 text-efi-gold flex items-center justify-center mb-6">
                <UserCheck className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-serif font-bold text-efi-sand mb-2">
                eFI Personal Finance
              </h4>
              <span className="inline-block text-[11px] font-semibold text-efi-gold uppercase tracking-wider mb-4">
                Asesoría de 1 mes
              </span>
              <p className="text-xs text-efi-muted leading-relaxed mb-6">
                Acompañamiento personalizado para profesionales independientes y ejecutivos que buscan estructurar su presupuesto, categorizar ingresos y optimizar su capacidad de ahorro personal.
              </p>
            </div>
            <a
              href="https://wa.me/595981000000?text=Hola%20Valeria,%20quisiera%20consultar%20sobre%20eFI%20Personal%20Finance"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-efi-sand hover:text-efi-gold flex items-center gap-2 transition-colors pt-4 border-t border-white/5"
            >
              Consultar sobre Personal Finance →
            </a>
          </div>

          {/* Service 2: eFI Family Care */}
          <div className="glass-panel p-8 rounded-3xl flex flex-col justify-between hover:border-white/20 transition-all duration-300">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 text-efi-gold flex items-center justify-center mb-6">
                <Users className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-serif font-bold text-efi-sand mb-2">
                eFI Family Care
              </h4>
              <span className="inline-block text-[11px] font-semibold text-efi-gold uppercase tracking-wider mb-4">
                Finanzas en Pareja / Familia
              </span>
              <p className="text-xs text-efi-muted leading-relaxed mb-6">
                Facilitación neutral y estratégica para alinear metas de pareja y familia. Creación del presupuesto unificado del hogar, fondos educativos y proyectos de vida en común.
              </p>
            </div>
            <a
              href="https://wa.me/595981000000?text=Hola%20Valeria,%20quisiera%20consultar%20sobre%20eFI%20Family%20Care"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-efi-sand hover:text-efi-gold flex items-center gap-2 transition-colors pt-4 border-t border-white/5"
            >
              Consultar sobre Family Care →
            </a>
          </div>

          {/* Service 3: eFI Wealth Flow */}
          <div className="glass-panel p-8 rounded-3xl flex flex-col justify-between hover:border-white/20 transition-all duration-300">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 text-efi-gold flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-serif font-bold text-efi-sand mb-2">
                eFI Wealth Flow
              </h4>
              <span className="inline-block text-[11px] font-semibold text-efi-gold uppercase tracking-wider mb-4">
                Gestión Financiera Mensual
              </span>
              <p className="text-xs text-efi-muted leading-relaxed mb-6">
                Servicio continuo mensual para quienes delegan por completo el procesamiento operativo de sus números. Incluye acceso a tu portal ejecutivo y revisión periódica de patrimonio.
              </p>
            </div>
            <a
              href="https://wa.me/595981000000?text=Hola%20Valeria,%20quisiera%20consultar%20sobre%20eFI%20Wealth%20Flow"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-efi-sand hover:text-efi-gold flex items-center gap-2 transition-colors pt-4 border-t border-white/5"
            >
              Consultar sobre Wealth Flow →
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
