import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import HowItWorks from './components/HowItWorks';
import ServicesCatalog from './components/ServicesCatalog';
import PortalMockup from './components/PortalMockup';
import FounderStatement from './components/FounderStatement';
import Authority from './components/Authority';
import FooterCTA from './components/FooterCTA';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-efi-dark text-efi-sand font-sans selection:bg-efi-gold/30 selection:text-efi-gold-light">
      <Navbar />
      <main>
        <Hero />
        <PainPoints />
        <HowItWorks />
        <ServicesCatalog />
        <PortalMockup />
        <FounderStatement />
        <Authority />
      </main>
      <FooterCTA />
      <FloatingWhatsApp />
    </div>
  );
}
