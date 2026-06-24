/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Stethoscope, 
  Sparkles, 
  Activity, 
  Layers, 
  Smile, 
  Baby, 
  ArrowRight, 
  X, 
  Clock, 
  ShieldCheck, 
  Heart 
} from 'lucide-react';
import { ServiceItem } from '../types';

interface ServicesProps {
  onBookSpecificService: (serviceTitle: string) => void;
}

export default function Services({ onBookSpecificService }: ServicesProps) {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const services: ServiceItem[] = [
    {
      id: 'general',
      title: 'General Checkup',
      description: 'Comprehensive screening and digital diagnostics to map out your long-term oral health.',
      longDescription: 'Our General Checkup features a thorough digital mapping of your mouth. We use low-radiation intraoral cameras and x-rays to catch cavities early. Highly recommended every 6 months to avoid emergency surgery.',
      iconName: 'Stethoscope'
    },
    {
      id: 'cleaning',
      title: 'Professional Cleaning',
      description: 'Scaling and ultrasonic polishing to remove stubborn plaque and deep dental tartar.',
      longDescription: 'Plaque and tartar can lead to gum disease if left untreated. Our deep ultrasonic cleaning cleans below the gumline painlessly, polishing your enamel for that pristine white finish and fresh breath.',
      iconName: 'Sparkles'
    },
    {
      id: 'root-canal',
      title: 'Root Canal Therapy',
      description: 'Pain-free microscopic therapy by root specialists to rescue infected or damaged teeth.',
      longDescription: 'Forget the outdated myths, as our root canal treatments are virtually painless! Using high-resolution digital microscopes, we extract damaged nerve tissues, sanitize the root canal, and seal it with precision crowns.',
      iconName: 'Activity'
    },
    {
      id: 'braces',
      title: 'Braces & Aligners',
      description: 'Straighten your jaw alignments and teeth with traditional braces or invisible clear aligners.',
      longDescription: 'Get a symmetrical smile at any age! We offer traditional aesthetic ceramic braces as well as ultra-modern, invisible thermo-plastic aligners that allow you to live your lifestyle while correcting alignment issues.',
      iconName: 'Layers'
    },
    {
      id: 'whitening',
      title: 'Teeth Whitening',
      description: 'Brighten your smile up to 8 shades in a single quick, dentist-supervised laser whitening session.',
      longDescription: 'Using pH-balanced whitening gels triggered by state-of-the-art cold-light laser systems, we break down deep caffeine, tea, or food stains safely without stripping away your precious enamel layers.',
      iconName: 'Smile'
    },
    {
      id: 'pediatric',
      title: 'Pediatric Care',
      description: 'Kind, gentle dental hygiene and cavity protection tailored specifically for kids.',
      longDescription: 'We love kids! Our pediatric experts focus on cavity-preventing sealant coatings, fluoride treatments, and friendly habit building inside a playful, highly relaxed, stress-free clinical setting.',
      iconName: 'Baby'
    }
  ];

  const getIcon = (name: string) => {
    switch (name) {
      case 'Stethoscope': return <Stethoscope className="w-6 h-6 text-secondary" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-secondary" />;
      case 'Activity': return <Activity className="w-6 h-6 text-secondary" />;
      case 'Layers': return <Layers className="w-6 h-6 text-secondary" />;
      case 'Smile': return <Smile className="w-6 h-6 text-secondary" />;
      case 'Baby': return <Baby className="w-6 h-6 text-secondary" />;
      default: return <Stethoscope className="w-6 h-6 text-secondary" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary rounded-full font-sans text-xs uppercase tracking-widest font-bold">
            Treatment Catalog
          </div>
          <h2 className="font-headline font-bold text-3xl sm:text-4xl text-primary">
            Our Premium Services
          </h2>
          <p className="font-sans text-base text-on-surface-variant leading-relaxed">
            From basic preventive maintenance to sophisticated microscopic root canals and cosmetic smile designing, our expert doctors provide unparalleled dental solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="group bg-surface p-8 rounded-2xl border border-outline-variant hover:border-secondary transition-all duration-300 hover:shadow-xl relative flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                  <div className="group-hover:scale-110 transition-transform">
                    {getIcon(service.iconName)}
                  </div>
                </div>
                <h3 className="font-headline font-semibold text-xl text-primary mb-3">
                  {service.title}
                </h3>
                <p className="font-sans text-sm text-on-surface-variant leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>
              
              <button
                onClick={() => setSelectedService(service)}
                className="text-secondary hover:text-secondary/80 font-sans font-bold text-sm flex items-center gap-1.5 cursor-pointer mt-auto"
              >
                Learn Details
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Details Modal */}
        <AnimatePresence>
          {selectedService && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Overlay Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedService(null)}
                className="absolute inset-0 bg-primary/40 backdrop-blur-sm"
              />

              {/* Modal Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative bg-surface rounded-2xl p-6 md:p-8 shadow-2xl max-w-2xl w-full z-10 border border-outline-variant overflow-hidden"
              >
                {/* Header Graphic */}
                <div className="absolute top-0 left-0 right-0 h-2 bg-secondary" />

                {/* Close Button */}
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 p-2 text-on-surface-variant hover:text-primary hover:bg-background rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                    {getIcon(selectedService.iconName)}
                  </div>
                  <div>
                    <h3 className="font-headline font-bold text-2xl text-primary">
                      {selectedService.title}
                    </h3>
                    <p className="text-xs uppercase text-secondary tracking-widest font-bold">
                      Smile Care Premium Dentistry
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <p className="font-sans text-base text-on-surface-variant leading-relaxed">
                    {selectedService.longDescription}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-4 border-y border-outline-variant">
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-secondary flex-shrink-0" />
                      <div>
                        <p className="text-[10px] uppercase text-on-surface-variant font-bold">Est. Duration</p>
                        <p className="text-sm font-semibold text-primary">45 - 90 Minutes</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-5 h-5 text-secondary flex-shrink-0" />
                      <div>
                        <p className="text-[10px] uppercase text-on-surface-variant font-bold">Hygiene Level</p>
                        <p className="text-sm font-semibold text-primary">100% Autoclaved</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Heart className="w-5 h-5 text-secondary flex-shrink-0" />
                      <div>
                        <p className="text-[10px] uppercase text-on-surface-variant font-bold">Sedation Options</p>
                        <p className="text-sm font-semibold text-primary">Available</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <button
                      onClick={() => {
                        onBookSpecificService(selectedService.title);
                        setSelectedService(null);
                      }}
                      className="flex-1 bg-secondary hover:bg-secondary/90 text-white font-headline font-bold py-3 px-6 rounded-xl transition-all duration-200 text-center uppercase tracking-wider text-xs shadow-md"
                    >
                      Book {selectedService.title}
                    </button>
                    <button
                      onClick={() => setSelectedService(null)}
                      className="flex-1 border border-primary/20 hover:bg-background text-primary font-headline font-semibold py-3 px-6 rounded-xl transition-all duration-200 text-center uppercase tracking-wider text-xs"
                    >
                      Close Details
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
