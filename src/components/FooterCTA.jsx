import React from 'react';
import { ArrowRight, Clock, Shield, MessageCircle } from 'lucide-react';

export default function FooterCTA() {
  const whatsappUrl = "https://wa.me/595971791069?text=Hola%20Valeria,%20quisiera%20agendar%20mi%20eFI%20Clarity%20Session";

  return (
    <footer className="relative bg-efi-dark border-t border-white/10 pt-20 pb-12 overflow-hidden">
      {/* Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gold-glow pointer-events-none opacity-30"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Banner CTA */}
        <div className="max-w-4xl mx-auto text-center p-8 sm:p-12 rounded-3xl glass-panel-gold border-efi-gold/40 shadow-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-efi-gold/20 border border-efi-gold/40 text-efi-gold text-xs font-semibold uppercase tracking-wider mb-6">
            <Clock className="w-3.5 h-3.5" />
            Primer Paso de Baja Fricción
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-efi-sand mb-4">
            Empezá con una sesión de 90 minutos.
          </h2>

          <p className="text-base sm:text-lg text-efi-muted max-w-2xl mx-auto mb-8">
            Salís con tu panorama financiero organizado, tus prioridades claras y un plan concreto armado para tu año. Sin compromisos de largo plazo.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-sm font-semibold uppercase tracking-wider text-efi-dark bg-gradient-to-r from-efi-gold-light via-efi-gold to-efi-gold-hover hover:shadow-glow-gold hover:scale-[1.02] transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              Agendar por WhatsApp con Valeria
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2 text-xs text-efi-muted">
            <Shield className="w-3.5 h-3.5 text-efi-gold" />
            Atención confidencial y personalizada · Sin pedido de claves bancarias
          </div>
        </div>

        {/* Footer Bottom Links & Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-efi-muted">
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-efi-card border border-efi-gold/30 flex items-center justify-center">
              <span className="font-serif font-bold text-efi-gold">eFI</span>
            </div>
            <span className="font-serif text-sm text-efi-sand font-semibold">eFI Studio</span>
            <span className="text-efi-subtle">| Finanzas Boutique</span>
          </div>

          <p>© {new Date().getFullYear()} eFI Studio. Todos los derechos reservados. Asunción, Paraguay.</p>

          <div className="flex gap-6 text-efi-muted">
            <a href="#diferencial" className="hover:text-efi-gold transition-colors">Diferencial</a>
            <a href="#servicios" className="hover:text-efi-gold transition-colors">Servicios</a>
            <a href="#portal-preview" className="hover:text-efi-gold transition-colors">Portal</a>
          </div>

        </div>

      </div>
    </footer>
  );
}
