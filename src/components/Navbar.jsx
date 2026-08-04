import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappUrl = "https://wa.me/595991480481?text=Hola%20Valeria,%20quisiera%20agendar%20mi%20eFI%20Clarity%20Session";

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-efi-dark/95 backdrop-blur-md border-b border-white/10 py-3 shadow-xl' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-efi-card to-efi-surface border border-efi-gold/30 flex items-center justify-center group-hover:border-efi-gold transition-colors shadow-lg">
              <span className="font-serif font-bold text-xl text-efi-gold">eFI</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-xl text-efi-sand tracking-wide group-hover:text-efi-gold transition-colors">
                eFI Studio
              </span>
              <span className="text-[10px] tracking-widest text-efi-muted uppercase -mt-1 font-semibold">
                Finanzas Boutique
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#diferencial" className="text-sm text-efi-muted hover:text-efi-sand transition-colors">
              Por qué eFI
            </a>
            <a href="#como-funciona" className="text-sm text-efi-muted hover:text-efi-sand transition-colors">
              Cómo Funciona
            </a>
            <a href="#servicios" className="text-sm text-efi-muted hover:text-efi-sand transition-colors">
              Servicios
            </a>
            <a href="#portal-preview" className="text-sm text-efi-gold font-medium transition-colors flex items-center gap-2 bg-efi-gold/10 px-3.5 py-1 rounded-full border border-efi-gold/30">
              <span className="w-2 h-2 rounded-full bg-efi-gold animate-pulse"></span>
              Portal de Clientes
            </a>
            <a href="#autoridad" className="text-sm text-efi-muted hover:text-efi-sand transition-colors">
              Fundadora
            </a>
          </nav>

          {/* Action CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-efi-dark bg-gradient-to-r from-efi-gold-light via-efi-gold to-efi-gold-hover hover:shadow-glow-gold hover:scale-[1.02] transition-all duration-200"
            >
              Clarity Session (90 min)
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-efi-sand hover:text-efi-gold transition-colors"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-efi-surface border-b border-white/10 px-4 pt-4 pb-6 space-y-4 shadow-2xl">
          <a 
            href="#diferencial" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base text-efi-sand hover:text-efi-gold py-1"
          >
            Por qué eFI
          </a>
          <a 
            href="#como-funciona" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base text-efi-sand hover:text-efi-gold py-1"
          >
            Cómo Funciona
          </a>
          <a 
            href="#servicios" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base text-efi-sand hover:text-efi-gold py-1"
          >
            Servicios
          </a>
          <a 
            href="#portal-preview" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base text-efi-gold font-medium py-1"
          >
            Portal de Clientes
          </a>
          <a 
            href="#autoridad" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base text-efi-sand hover:text-efi-gold py-1"
          >
            Fundadora
          </a>
          <div className="pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-efi-dark bg-efi-gold"
            >
              Clarity Session (90 min)
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
