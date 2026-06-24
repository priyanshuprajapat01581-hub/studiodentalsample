/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import DentistProfile from './components/DentistProfile';
import Gallery from './components/Gallery';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import AppointmentAssistant from './components/AppointmentAssistant';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
  const [selectedService, setSelectedService] = useState('');

  const handleBookClick = () => {
    // Reset/trigger scroll to the appointment form
    setSelectedService('General Checkup');
    const el = document.getElementById('appointment');
    if (el) {
      const headerOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleBookSpecificService = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
  };

  return (
    <div className="min-h-screen bg-background text-on-surface font-sans selection:bg-secondary/35 selection:text-primary">
      {/* Dynamic sticky header */}
      <Header onBookClick={handleBookClick} />

      {/* Main visual segments */}
      <main className="overflow-x-hidden">
        {/* Hero Landing */}
        <Hero onBookClick={handleBookClick} />

        {/* Brand Story and Experience */}
        <About />

        {/* Treatment Catalog & Modal Details */}
        <Services onBookSpecificService={handleBookSpecificService} />

        {/* Doctor profile */}
        <DentistProfile />

        {/* Clinical Image Lightbox Gallery */}
        <Gallery />

        {/* Why Choose Us & Clinical statistics */}
        <WhyChooseUs />

        {/* Testimonials */}
        <Testimonials />

        {/* Interactive Virtual Dental Appointment Generator */}
        <AppointmentAssistant preselectedService={selectedService} />

        {/* Accordion FAQ support */}
        <FAQ />
      </main>

      {/* Structured Footer with Map and direct contact utilities */}
      <Footer onBookClick={handleBookClick} />
    </div>
  );
}
