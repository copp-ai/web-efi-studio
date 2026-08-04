import React from 'react';
import { Sparkles, ArrowRight, Clock, Check } from 'lucide-react';

export default function ServicesCatalog() {
  const whatsappClarityUrl = "https://wa.me/595991480481?text=Hola%20Valeria,%20me%20interesa%20la%20eFI%20Clarity%20Session";
  const whatsappGeneralUrl = "https://wa.me/595991480481?text=Hola%20Valeria,%20quisiera%20consultar%20sobre%20los%20servicios%20mensuales%20de%20eFI%20Studio";

  return (
    <section id="servicios" className="py-24 bg-efi-surface/30 relative border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-efi-gold block mb-3">
            Catálogo Boutique
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-efi-sand mb-4">
            Servicios diseñados para tu tranquilidad
          </h2>
          <p className="text-base text-efi-muted">
            Desde una sesión intensiva de ordenamiento hasta el acompañamiento mensual continuo.
          </p>
        </div>

        {/* Featured Service: eFI Clarity Session (Hábito de entrada) */}
        <div className="mb-16 p-8 sm:p-10 rounded-3xl glass-panel-gold relative overflow-hidden shadow-2xl border-efi-gold/40">
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
                <div className="flex items-center gap-2 text-sm text-efi-sand">
                  <Check className="w-4 h-4 text-efi-gold shrink-0" />
                  Diagnóstico completo de liquidez
                </div>
                <div className="flex items-center gap-2 text-sm text-efi-sand">
                  <Check className="w-4 h-4 text-efi-gold shrink-0" />
                  Planilla anual personalizada
                </div>
                <div className="flex items-center gap-2 text-sm text-efi-sand">
                  <Check className="w-4 h-4 text-efi-gold shrink-0" />
                  Definición de fondo de tranquilidad
                </div>
                <div className="flex items-center gap-2 text-sm text-efi-sand">
                  <Check className="w-4 h-4 text-efi-gold shrink-0" />
                  Recomendaciones accionables
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center bg-efi-card/90 p-6 rounded-2xl border border-efi-gold/20 text-center lg:text-right">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-efi-gold mb-2">
                <Clock className="w-4 h-4" />
                Duración: 90 minutos
              </div>
              <p className="text-sm text-efi-muted mb-6">
                Resultados inmediatos y una radiografía clara sin compromisos de largo plazo.
              </p>
              <a
                href={whatsappClarityUrl}
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

        {/* Secondary Services: Clean Streamlined List (No repetitive boxed cards) */}
        <div className="space-y-8 pt-6 border-t border-white/10">
          <h3 className="text-xl font-serif font-bold text-efi-sand text-center lg:text-left">
            Programas de Acompañamiento Continuo
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Service 1 */}
            <div className="space-y-3 p-4 rounded-2xl hover:bg-white/[0.02] transition-colors">
              <span className="text-xs font-semibold text-efi-gold uppercase tracking-wider block">
                Asesoría de 1 mes
              </span>
              <h4 className="text-xl font-serif font-semibold text-efi-sand">
                eFI Personal Finance
              </h4>
              <p className="text-sm text-efi-muted leading-relaxed">
                Acompañamiento personalizado para profesionales independientes y ejecutivos que buscan estructurar su presupuesto y optimizar su capacidad de ahorro.
              </p>
            </div>

            {/* Service 2 */}
            <div className="space-y-3 p-4 rounded-2xl hover:bg-white/[0.02] transition-colors border-y md:border-y-0 md:border-x border-white/10 md:px-6">
              <span className="text-xs font-semibold text-efi-gold uppercase tracking-wider block">
                Finanzas en Pareja / Familia
              </span>
              <h4 className="text-xl font-serif font-semibold text-efi-sand">
                eFI Family Care
              </h4>
              <p className="text-sm text-efi-muted leading-relaxed">
                Facilitación neutral para alinear metas familiares, presupuesto del hogar, fondos educativos y proyectos de vida en común.
              </p>
            </div>

            {/* Service 3 */}
            <div className="space-y-3 p-4 rounded-2xl hover:bg-white/[0.02] transition-colors">
              <span className="text-xs font-semibold text-efi-gold uppercase tracking-wider block">
                Gestión Financiera Mensual
              </span>
              <h4 className="text-xl font-serif font-semibold text-efi-sand">
                eFI Wealth Flow
              </h4>
              <p className="text-sm text-efi-muted leading-relaxed">
                Servicio continuo mensual para quienes delegan por completo el procesamiento operativo de sus números con acceso a su portal ejecutivo.
              </p>
            </div>

          </div>

          <div className="text-center pt-4">
            <a
              href={whatsappGeneralUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-efi-gold hover:text-efi-gold-light transition-colors"
            >
              Consultar sobre programas mensuales por WhatsApp →
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
