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

  const whatsappUrl = "https://wa.me/595971791069?text=Hola%20Valeria,%20quisiera%20agendar%20mi%20eFI%20Clarity%20Session";

  const navLinks = [
    { name: "Filosofía", href: "#filosofia" },
    { name: "Metodología", href: "#como-funciona" },
    { name: "Programas & Precios", href: "#servicios" },
    { name: "Autodiagnóstico", href: "#diagnostico" },
    { name: "Portal eFI", href: "#portal-preview", highlight: true },
    { name: "Testimonios", href: "#testimonios" },
    { name: "FAQ", href: "#faq" },
  ];

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
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className={`text-xs font-medium transition-colors ${
                  link.highlight
                    ? 'text-efi-gold flex items-center gap-1.5 bg-efi-gold/10 px-3 py-1 rounded-full border border-efi-gold/30'
                    : 'text-efi-muted hover:text-efi-sand'
                }`}
              >
                {link.highlight && <span className="w-1.5 h-1.5 rounded-full bg-efi-gold animate-pulse"></span>}
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTA */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider text-efi-dark bg-gradient-to-r from-efi-gold-light via-efi-gold to-efi-gold-hover hover:shadow-glow-gold hover:scale-[1.02] transition-all duration-200"
            >
              Clarity Session (90 min)
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-efi-sand hover:text-efi-gold transition-colors"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-efi-surface border-b border-white/10 px-4 pt-4 pb-6 space-y-3 shadow-2xl">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block text-base py-1 ${
                link.highlight ? 'text-efi-gold font-semibold' : 'text-efi-sand hover:text-efi-gold'
              }`}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3">
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
