import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EngineeringFocus from './components/EngineeringFocus';
import EngineeringProcess from './components/EngineeringProcess';
import SelectedWork from './components/SelectedWork';
import ExperienceSection from './components/experience/ExperienceSection';
import TechnologyGrid from './components/TechnologyGrid';
import Certificates from './components/Certificates';
import About from './components/About';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';

/**
 * Portfolio — single page, dark engineering-first design system.
 * Section order follows the visitor journey:
 * WHO → WHAT I BUILD → HOW I BUILD → WHAT I'VE BUILT → WHERE
 * → WHAT I USE → WHO I AM → HOW TO CONTACT ME
 */
function App() {
  return (
    <div className="relative min-h-screen w-full overflow-x-clip bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <EngineeringFocus />
        <EngineeringProcess />
        <SelectedWork />
        <ExperienceSection />
        <TechnologyGrid />
        <Certificates />
        <About />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
