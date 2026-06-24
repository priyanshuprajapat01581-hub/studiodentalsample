/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Calendar, Phone, CheckCircle } from 'lucide-react';

interface HeroProps {
  onBookClick: () => void;
}

export default function Hero({ onBookClick }: HeroProps) {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image and Overlays */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/70 to-primary/85 z-10" />
        <img 
          alt="Dental clinic interior" 
          className="w-full h-full object-cover scale-105 filter blur-[1px]"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDU7acE2PsAZHKKWjnIBulVj4dQNUpgq71RmlLlZFiCd7b-sdgwQOEhE9G8wmW145otz8kPJiNe096AXl3gUXoibiIGvrrmOfsnuynGiD8XLPnnlb1yPtAp3gKqngYau3Al4bOD7zPFN85vma6MEYke9wW5ebmbFE3ZyfTXqzRFA0OyykBuEmZKUizThrRcJg3Sa8DpEpJgkjgwGZA0OeMKaLu7itLtjoM66TAGOGFLTnEfgFyIHT3UGA3aQ2lmpkIfoYmFXVdP26s"
        />
      </div>

      {/* Floating abstract decorative graphics to prevent clinical dullness */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-secondary/10 rounded-full filter blur-3xl mix-blend-screen animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-secondary/5 rounded-full filter blur-3xl mix-blend-screen animate-pulse pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white mt-8 md:mt-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-6"
        >
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-secondary-container font-sans text-xs uppercase tracking-wider font-semibold">
            <CheckCircle className="w-3.5 h-3.5 text-secondary" />
            Empowering Healthy Smiles Since 2005
          </div>

          <h1 className="font-headline font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight drop-shadow-md">
            Your Family's Smile, <br className="hidden sm:inline" />
            <span className="text-secondary-container relative">
              Our Top Priority
              <span className="absolute left-0 bottom-1 w-full h-[3px] bg-secondary rounded-full" />
            </span>
          </h1>

          <p className="font-sans text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Expert dental care delivered with deep compassion and the latest clinical technology. 
            We customize treatments to create beautiful, healthy smiles that last a lifetime.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 max-w-lg mx-auto sm:max-w-none">
            <button
              onClick={onBookClick}
              className="bg-secondary hover:bg-secondary/90 hover:scale-[1.03] text-white px-8 py-4 rounded-xl font-headline font-bold text-base sm:text-lg shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2 group"
            >
              <Calendar className="w-5 h-5 group-hover:rotate-6 transition-transform" />
              Book Appointment
            </button>
            <a
              href="tel:+917574844130"
              className="bg-white/10 hover:bg-white/15 hover:scale-[1.03] backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-xl font-headline font-bold text-base sm:text-lg active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5 text-white" />
              Call Clinic
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
