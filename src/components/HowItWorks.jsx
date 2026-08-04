import React from 'react';
import { FileSpreadsheet, Cpu, LayoutDashboard, Compass } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Compartís tus números sin fricción",
      description: "Nos enviás tus extractos o reportes mensuales en PDF/Excel. Sin entregar contraseñas bancarias ni accesos privados.",
      icon: FileSpreadsheet,
    },
    {
      number: "02",
      title: "Procesamos con tecnología + mirada boutique",
      description: "Combinamos inteligencia de datos con la revisión profesional de nuestro equipo para clasificar y validar cada rubro.",
      icon: Cpu,
    },
    {
      number: "03",
      title: "Recibís tu Panel de Control e Informe",
      description: "Te entregamos tu reporte ejecutivo claro en Guaraníes (Gs.) con los indicadores clave de tu salud financiera.",
      icon: LayoutDashboard,
    },
    {
      number: "04",
      title: "Decisiones con claridad mensual",
      description: "Realizamos la sesión de seguimiento para ajustar velas, optimizar liquidez y proyectar tu patrimonio sin estrés.",
      icon: Compass,
    }
  ];

  return (
    <section id="como-funciona" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-efi-gold mb-3">
            Metodología eFI
          </h2>
          <h3 className="text-3xl sm:text-4xl font-serif font-bold text-efi-sand mb-4">
            Cómo funciona el acompañamiento
          </h3>
          <p className="text-efi-muted text-base">
            Un proceso simple en 4 pasos diseñado para liberarte de la carga operativa.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div 
                key={idx}
                className="glass-panel p-6 rounded-3xl relative flex flex-col justify-between hover:border-efi-gold/40 transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-serif text-3xl font-bold text-efi-gold/40 group-hover:text-efi-gold transition-colors">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-efi-gold flex items-center justify-center group-hover:bg-efi-gold/10 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h4 className="text-lg font-serif font-semibold text-efi-sand mb-2">
                    {step.title}
                  </h4>
                  <p className="text-efi-muted text-xs leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-efi-gold"></span>
                  <span className="text-[11px] text-efi-subtle uppercase tracking-wider font-semibold">
                    Paso {idx + 1} de 4
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
