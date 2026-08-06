import React from 'react';

export default function FounderStatement() {
  return (
    <section className="py-28 relative overflow-hidden bg-efi-dark border-y border-white/5">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-pine-glow pointer-events-none opacity-30"></div>

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        
        {/* Large Editorial Statement */}
        <blockquote className="text-3xl sm:text-5xl lg:text-6xl font-serif font-light text-efi-sand leading-[1.25] tracking-tight mb-8">
          "No creemos en el control obsesivo de centavos ni en juzgar tus gustos.{' '}
          <span className="italic font-normal text-efi-muted">
            Creemos en darte la tranquilidad de saber exactamente dónde estás parado.
          </span>"
        </blockquote>

        {/* Founder Attribution */}
        <div className="flex items-center justify-center gap-3">
          <span className="w-8 h-[1px] bg-efi-pine/50"></span>
          <span className="text-sm font-semibold uppercase tracking-widest text-efi-pine">
            Valeria Cuenca · Fundadora eFI Studio
          </span>
          <span className="w-8 h-[1px] bg-efi-pine/50"></span>
        </div>

      </div>
    </section>
  );
}
