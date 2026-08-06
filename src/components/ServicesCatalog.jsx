import React from 'react';
import { Sparkles, ArrowRight, Check, ShieldCheck } from 'lucide-react';

export default function ServicesCatalog() {
  const programs = [
    {
      id: "clarity",
      title: "eFI Clarity Session",
      badge: "Puerta de Entrada",
      price: "Gs. 450.000",
      period: "Sesión única de 90 min",
      highlight: true,
      desc: "Sesión intensiva para mapear tus números actuales, solucionar dudas urgentes y salir con tu planilla anual personalizada ese mismo día.",
      features: [
        "Diagnóstico completo de liquidez e ingresos",
        "Planilla anual ejecutiva personalizada",
        "Estructuración de fondo de tranquilidad",
        "Hoja de ruta con decisiones accionables"
      ],
      ctaText: "Reservar Clarity Session",
      whatsappUrl: "https://wa.me/595971791069?text=Hola%20Valeria,%20quisiera%20reservar%20mi%20eFI%20Clarity%20Session"
    },
    {
      id: "personal",
      title: "eFI Personal Finance",
      badge: "Programa Individual",
      price: "Gs. 2.900.000",
      period: "4 sesiones · 1 mes",
      highlight: false,
      desc: "Proceso intensivo. Salís con tu presupuesto mensual definido y tu primera meta de ahorro con fecha.",
      features: [
        "4 sesiones individuales de seguimiento",
        "Diseño de sistema presupuestario a medida",
        "Tablero de control de hábitos de consumo",
        "Soporte directo vía WhatsApp durante el mes"
      ],
      ctaText: "Empezar Personal Finance",
      whatsappUrl: "https://wa.me/595971791069?text=Hola%20Valeria,%20quisiera%20empezar%20eFI%20Personal%20Finance"
    },
    {
      id: "family",
      title: "eFI Family Care",
      badge: "Finanzas en Pareja / Familia",
      price: "Gs. 4.900.000",
      period: "4 sesiones · Cobertura Familiar",
      highlight: false,
      desc: "Facilitación neutral. Salen con la distribución de gastos del hogar acordada y un plan de metas compartido por escrito.",
      features: [
        "4 sesiones conjuntas de facilitación",
        "Presupuesto familiar y distribución de gastos",
        "Planificación de metas (hogar, viajes, educación)",
        "Estrategia de tranquilidad para el grupo familiar"
      ],
      ctaText: "Empezar Family Care",
      whatsappUrl: "https://wa.me/595971791069?text=Hola%20Valeria,%20quisiera%20empezar%20eFI%20Family%20Care"
    },
    {
      id: "wealth",
      title: "eFI Wealth Flow",
      badge: "Retainer Mensual Continuo",
      price: "Gs. 1.200.000",
      period: "por mes (suscripción)",
      highlight: false,
      desc: "Delegá la carga operativa. Recibís un flujo continuo de análisis y reportes de desvíos cada mes, sin tener que pedirlos.",
      features: [
        "Procesamiento operativo mensual de datos",
        "Reportes ejecutivos periódicos de rendimiento",
        "Análisis de desvíos y ajustes en tiempo real",
        "Acceso completo a tu Portal eFI Interactivo"
      ],
      ctaText: "Consultar Wealth Flow",
      whatsappUrl: "https://wa.me/595971791069?text=Hola%20Valeria,%20quisiera%20consultar%20disponibilidad%20para%20eFI%20Wealth%20Flow"
    }
  ];

  return (
    <section id="servicios" className="py-24 bg-efi-surface/30 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-efi-pine block mb-3">
            Programas & Tabla Comparativa
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-efi-sand mb-4">
            Planes diseñados para cada etapa de tu vida
          </h2>
          <p className="text-base text-efi-muted">
            Transparencia total en precios en Guaraníes y alcance claro de cada servicio. Sin sorpresas ni costos ocultos.
          </p>
        </div>

        {/* Pricing Cards Grid (4 Programs) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {programs.map((prog) => (
            <div
              key={prog.id}
              className={`flex flex-col justify-between p-7 rounded-3xl transition-all duration-300 relative ${
                prog.highlight
                  ? 'bg-efi-card border-2 border-efi-pine shadow-glow-pine scale-[1.02]'
                  : 'bg-efi-surface/70 border border-white/10 hover:border-efi-pine/40'
              }`}
            >
              {prog.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-efi-pine text-efi-sand font-bold text-[10px] uppercase tracking-wider flex items-center gap-1 shadow-lg">
                  <Sparkles className="w-3 h-3" />
                  Más Elegido
                </div>
              )}

              <div>
                <span className="text-[11px] font-semibold text-efi-pine uppercase tracking-wider block mb-2">
                  {prog.badge}
                </span>

                <h3 className="text-2xl font-serif font-bold text-efi-sand mb-3">
                  {prog.title}
                </h3>

                <div className="mb-4">
                  <span className="block font-serif text-3xl font-bold text-efi-sand">
                    {prog.price}
                  </span>
                  <span className="text-xs text-efi-muted uppercase font-semibold">
                    {prog.period}
                  </span>
                </div>

                <p className="text-sm text-efi-muted leading-relaxed mb-6 border-b border-white/10 pb-6">
                  {prog.desc}
                </p>

                {/* Bullets List */}
                <ul className="space-y-3 mb-8">
                  {prog.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-efi-sand leading-tight">
                      <Check className="w-4 h-4 text-efi-pine shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div>
                <a
                  href={prog.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                    prog.highlight
                      ? 'text-efi-sand bg-efi-pine hover:bg-efi-pine-hover hover:shadow-glow-pine'
                      : 'text-efi-sand bg-efi-card hover:bg-efi-pine/20 hover:text-efi-pine-light border border-white/10'
                  }`}
                >
                  {prog.ctaText}
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Subtitle Guarantee & Scarcity Note */}
        <div className="mt-12 space-y-4">
          <div className="text-center text-xs text-efi-muted flex flex-col sm:flex-row items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-efi-pine" />
            <span>Todos los programas incluyen 100% de confidencialidad y garantía de satisfacción eFI.</span>
          </div>
          <div className="text-center text-xs font-semibold text-efi-pine tracking-wide">
            Para sostener la calidad y la atención personalizada, trabajamos con un número limitado de cupos por mes.
          </div>
        </div>

      </div>
    </section>
  );
}
