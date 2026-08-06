import React from 'react';

export default function PainPoints() {
  return (
    <section id="diferencial" className="py-24 relative bg-efi-surface/30 border-y border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Bold Headline */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-efi-pine block">
              El problema real
            </span>
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-efi-sand leading-tight">
              Tenés buenos ingresos.{' '}
              <span className="italic font-normal text-efi-muted block mt-2">
                Lo que falta es claridad y tiempo.
              </span>
            </h2>
            <p className="text-base text-efi-muted leading-relaxed">
              Las personas con ingresos altos no sufren por falta de dinero, sino por la fricción de no tener un sistema claro y no querer pasar sus fines de semana armando planillas.
            </p>
          </div>

          {/* Right Column: 3 Clean Editorial Lines (No repetitive boxed cards) */}
          <div className="lg:col-span-7 space-y-8 pl-0 lg:pl-6 border-l-0 lg:border-l border-white/10">
            
            {/* Point 1 */}
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="font-serif font-bold text-2xl text-efi-pine">01</span>
                <h3 className="text-xl font-serif font-semibold text-efi-sand">
                  "Sé que gano bien, pero no sé exactamente a dónde se va"
                </h3>
              </div>
              <p className="text-base text-efi-muted leading-relaxed pl-9">
                Trabajás duro todo el mes, pero la dispersión de gastos y la falta de consolidación te dejan con la duda constante de si estás haciendo crecer tu liquidez.
              </p>
            </div>

            {/* Point 2 */}
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="font-serif font-bold text-2xl text-efi-pine">02</span>
                <h3 className="text-xl font-serif font-semibold text-efi-sand">
                  Sin ganas de armar Excel los domingos por la tarde
                </h3>
              </div>
              <p className="text-base text-efi-muted leading-relaxed pl-9">
                Tu tiempo libre es para tu familia y tus proyectos. Cargar comprobantes a mano o lidiar con apps desconectadas genera fricción y se termina abandonando.
              </p>
            </div>

            {/* Point 3 */}
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="font-serif font-bold text-2xl text-efi-pine">03</span>
                <h3 className="text-xl font-serif font-semibold text-efi-sand">
                  Buscás un aliado estratégico, no un asesor que te juzgue
                </h3>
              </div>
              <p className="text-base text-efi-muted leading-relaxed pl-9">
                Querés un espacio profesional confidencial que organice tus números para tomar mejores decisiones, sin cuestionar tu estilo de vida.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
