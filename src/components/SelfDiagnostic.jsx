import React, { useState } from 'react';
import { HelpCircle, CheckCircle2, ArrowRight, RotateCcw } from 'lucide-react';

export default function SelfDiagnostic() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({
    scope: null,       // individual | family | business
    goal: null,        // ordering | savings | retainer
    experience: null   // beginner | intermediate
  });

  const questions = [
    {
      id: "scope",
      title: "¿Cuál es tu situación financiera principal hoy?",
      subtitle: "Elegí la opción que mejor describe la gestión que buscás ordenar.",
      options: [
        { id: "individual", label: "Finanzas Personales", desc: "Soy profesional independiente o ejecutivo y quiero controlar mi presupuesto propio." },
        { id: "family", label: "Finanzas en Pareja / Familia", desc: "Buscamos ponernos de acuerdo en las metas del hogar y organizar fondos comunes." },
        { id: "business", label: "Finanzas del Negocio / Retainer", desc: "Quiero delegar el procesamiento operativo mensual de mis ingresos y gastos." }
      ]
    },
    {
      id: "goal",
      title: "¿Qué resultado necesitás obtener primero?",
      subtitle: "Esto nos ayuda a determinar la intensidad del programa ideal.",
      options: [
        { id: "quick_clarity", label: "Diagnóstico rápido en 90 minutos", desc: "Tener una visión clara e inmediata de mi estado actual y armar mi hoja de ruta." },
        { id: "full_structure", label: "Estructurar un sistema completo", desc: "Acompañamiento paso a paso durante 1 mes para consolidar el hábito." },
        { id: "monthly_delegate", label: "Acompañamiento continuo mensual", desc: "Reportes ejecutivos periódicos sin tener que cargar planillas manualmente." }
      ]
    },
    {
      id: "experience",
      title: "¿Qué tan cómodo/a te sentís hoy con tus planillas?",
      subtitle: "Ninguna opción requiere conocimientos contables avanzados.",
      options: [
        { id: "none", label: "Nunca logré mantener un sistema", desc: "Siento que el dinero entra y sale sin un control claro ni previsibilidad." },
        { id: "partial", label: "Tengo anotaciones pero no me sirven para decidir", desc: "Registro algunos gastos pero me falta una estrategia ejecutiva global." }
      ]
    }
  ];

  const handleSelect = (key, value) => {
    const updated = { ...answers, [key]: value };
    setAnswers(updated);
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setStep(questions.length); // Finished, show recommendation
    }
  };

  const getRecommendation = () => {
    if (answers.scope === 'family') {
      return {
        title: "eFI Family Care",
        tag: "Recomendado para tu perfil",
        price: "Gs. 4.900.000",
        duration: "4 sesiones · Cobertura Familiar",
        desc: "Facilitación neutral. Salen con la distribución de gastos del hogar acordada y un plan de metas compartido por escrito.",
        whatsappUrl: "https://wa.me/595971791069?text=Hola%20Valeria,%20hice%20el%20autodiagn%C3%B3stico%20y%20quisiera%20empezar%20eFI%20Family%20Care"
      };
    }

    if (answers.goal === 'monthly_delegate' || answers.scope === 'business') {
      return {
        title: "eFI Wealth Flow",
        tag: "Recomendado para tu perfil",
        price: "Gs. 1.200.000 / mes",
        duration: "Retainer Mensual Continuo",
        desc: "Delegá la carga operativa. Recibís un flujo continuo de análisis y reportes de desvíos cada mes, sin tener que pedirlos.",
        whatsappUrl: "https://wa.me/595971791069?text=Hola%20Valeria,%20hice%20el%20autodiagn%C3%B3stico%20y%20quisiera%20consultar%20disponibilidad%20para%20eFI%20Wealth%20Flow"
      };
    }

    if (answers.goal === 'full_structure') {
      return {
        title: "eFI Personal Finance",
        tag: "Recomendado para tu perfil",
        price: "Gs. 2.900.000",
        duration: "4 sesiones · 1 mes de acompañamiento",
        desc: "Proceso intensivo. Salís con tu presupuesto mensual definido y tu primera meta de ahorro con fecha.",
        whatsappUrl: "https://wa.me/595971791069?text=Hola%20Valeria,%20hice%20el%20autodiagn%C3%B3stico%20y%20quisiera%20empezar%20eFI%20Personal%20Finance"
      };
    }

    // Default recommendation: Clarity Session
    return {
      title: "eFI Clarity Session",
      tag: "Recomendado para tu perfil",
      price: "Gs. 450.000",
      duration: "Sesión única de 90 min",
      desc: "La puerta de entrada ideal: 90 minutos intensivos para mapear tu liquidez, detectar fugas y salir con tu hoja de ruta trazada ese mismo día.",
      whatsappUrl: "https://wa.me/595971791069?text=Hola%20Valeria,%20hice%20el%20autodiagn%C3%B3stico%20y%20quisiera%20reservar%20mi%20eFI%20Clarity%20Session"
    };
  };

  const resetQuiz = () => {
    setAnswers({ scope: null, goal: null, experience: null });
    setStep(0);
  };

  const recommendation = getRecommendation();

  return (
    <section id="diagnostico" className="py-24 bg-efi-dark relative border-t border-white/5 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-efi-gold block mb-3">
            Autodiagnóstico Interactivo
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-efi-sand mb-4">
            Descubrí qué programa se adapta a vos
          </h2>
          <p className="text-base text-efi-muted max-w-xl mx-auto">
            Respondé 3 preguntas rápidas para identificar la modalidad de trabajo recomendada para tus objetivos.
          </p>
        </div>

        {/* Diagnostic Container */}
        <div className="p-8 sm:p-10 rounded-3xl bg-efi-surface/80 border border-white/10 shadow-2xl relative">
          
          {step < questions.length ? (
            /* Active Question Step */
            <div>
              {/* Progress Bar */}
              <div className="flex items-center justify-between text-xs font-semibold text-efi-gold uppercase tracking-wider mb-6">
                <span>Paso {step + 1} de {questions.length}</span>
                <span>{Math.round(((step + 1) / questions.length) * 100)}% Completado</span>
              </div>

              <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden mb-8">
                <div 
                  className="bg-efi-gold h-full transition-all duration-300"
                  style={{ width: `${((step + 1) / questions.length) * 100}%` }}
                />
              </div>

              {/* Question Title */}
              <h3 className="text-2xl font-serif font-bold text-efi-sand mb-2">
                {questions[step].title}
              </h3>
              <p className="text-sm text-efi-muted mb-8">
                {questions[step].subtitle}
              </p>

              {/* Option List */}
              <div className="space-y-4">
                {questions[step].options.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => handleSelect(questions[step].id, opt.id)}
                    className="w-full text-left p-5 rounded-2xl bg-efi-card border border-white/10 hover:border-efi-gold/50 hover:bg-efi-card/90 transition-all group flex items-start justify-between gap-4"
                  >
                    <div>
                      <h4 className="text-lg font-serif font-bold text-efi-sand group-hover:text-efi-gold transition-colors">
                        {opt.label}
                      </h4>
                      <p className="text-sm text-efi-muted mt-1 leading-relaxed">
                        {opt.desc}
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-efi-muted group-hover:text-efi-gold group-hover:translate-x-1 transition-all shrink-0 mt-1" />
                  </button>
                ))}
              </div>

            </div>
          ) : (
            /* Recommendation Result View */
            <div className="text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-efi-gold/20 border border-efi-gold/40 text-efi-gold text-xs font-semibold uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4" />
                {recommendation.tag}
              </div>

              <h3 className="text-3xl sm:text-4xl font-serif font-bold text-efi-sand">
                {recommendation.title}
              </h3>

              <div className="inline-block bg-efi-card px-6 py-3 rounded-2xl border border-white/10">
                <span className="block font-serif text-3xl font-bold text-efi-sand">
                  {recommendation.price}
                </span>
                <span className="text-xs text-efi-muted uppercase font-semibold">
                  {recommendation.duration}
                </span>
              </div>

              <p className="text-base text-efi-muted max-w-xl mx-auto leading-relaxed">
                {recommendation.desc}
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={recommendation.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-wider text-efi-dark bg-efi-gold hover:bg-efi-gold-hover hover:shadow-glow-gold transition-all"
                >
                  Agendar este programa por WhatsApp
                  <ArrowRight className="w-4 h-4" />
                </a>

                <button
                  onClick={resetQuiz}
                  className="inline-flex items-center gap-2 text-xs text-efi-muted hover:text-efi-sand transition-colors py-2"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Reiniciar test
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
