import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PhilosophyStrip from './components/PhilosophyStrip';
import PainPoints from './components/PainPoints';
import HowItWorks from './components/HowItWorks';
import ServicesCatalog from './components/ServicesCatalog';
import SelfDiagnostic from './components/SelfDiagnostic';
import PortalMockup from './components/PortalMockup';
import Authority from './components/Authority';
import FounderStatement from './components/FounderStatement';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import FooterCTA from './components/FooterCTA';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-efi-dark text-efi-sand font-sans selection:bg-efi-pine/30 selection:text-efi-pine-light">
      <Navbar />
      <main>
        <Hero />
        <PhilosophyStrip />
        <PainPoints />
        <HowItWorks />
        <SelfDiagnostic />
        <ServicesCatalog />
        <PortalMockup />
        <Authority />
        <FounderStatement />
        <Testimonials />
        <FAQ />
      </main>
      <FooterCTA />
      <FloatingWhatsApp />
    </div>
  );
}
