/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Shield, VolumeX, Users, Trophy, Star, ThumbsUp } from 'lucide-react';

export default function WhyChooseUs() {
  const pillars = [
    {
      title: 'Superior Hygiene',
      description: 'Strict multi-stage Class-B autoclave sterilizations for all surgical equipment.',
      icon: Shield
    },
    {
      title: 'Modern Tech',
      description: 'Intraoral 3D tooth scanners and digital x-rays for 99.9% diagnostic accuracy.',
      icon: Trophy
    },
    {
      title: 'Patient Comfort',
      description: 'Relaxing essential oil aromatherapy and noise-canceling headsets in every room.',
      icon: VolumeX
    },
    {
      title: 'Expert Staff',
      description: 'Continuous post-graduate surgical education for our core support and nursing teams.',
      icon: Users
    }
  ];

  const stats = [
    {
      value: '15,000+',
      label: 'Happy Patients Restored',
      icon: Users,
    },
    {
      value: '20+',
      label: 'Years of Clinic Prominence',
      icon: Star,
    },
    {
      value: '98%',
      label: 'Positive Feedback Rating',
      icon: ThumbsUp,
    }
  ];

  return (
    <section 
      id="why" 
      className="relative py-20 overflow-hidden bg-primary text-white"
    >
      {/* Absolute background image for parallax feel */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-primary/90 z-10" />
        <img 
          alt="Dental clinic technology" 
          className="w-full h-full object-cover opacity-15"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDU7acE2PsAZHKKWjnIBulVj4dQNUpgq71RmlLlZFiCd7b-sdgwQOEhE9G8wmW145otz8kPJiNe096AXl3gUXoibiIGvrrmOfsnuynGiD8XLPnnlb1yPtAp3gKqngYau3Al4bOD7zPFN85vma6MEYke9wW5ebmbFE3ZyfTXqzRFA0OyykBuEmZKUizThrRcJg3Sa8DpEpJgkjgwGZA0OeMKaLu7itLtjoM66TAGOGFLTnEfgFyIHT3UGA3aQ2lmpkIfoYmFXVdP26s"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Copy and Pillar Cards */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <div className="inline-block px-4 py-1.5 bg-white/10 rounded-full text-secondary font-sans text-xs uppercase tracking-widest font-bold">
                Our core strengths
              </div>
              <h2 className="font-headline font-bold text-3xl sm:text-4xl text-white">
                Why Choose Smile Care?
              </h2>
              <p className="font-sans text-base text-white/80 max-w-lg leading-relaxed">
                We combine top-tier global dentistry standards with a deeply empathetic, patient-first methodology to provide an unparalleled clinical experience.
              </p>
            </motion.div>

            {/* Pillar Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pillars.map((pillar, idx) => {
                const IconComp = pillar.icon;
                return (
                  <motion.div
                    key={pillar.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                    className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/15"
                  >
                    <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center mb-4 border border-secondary/30">
                      <IconComp className="w-5 h-5 text-secondary-container" />
                    </div>
                    <h4 className="font-headline font-bold text-base text-white">{pillar.title}</h4>
                    <p className="font-sans text-xs text-white/70 mt-1.5 leading-relaxed">
                      {pillar.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Side: Stats Panel */}
          <div className="flex flex-col gap-6">
            {stats.map((stat, idx) => {
              const StatIcon = stat.icon;
              return (
                <motion.div
                  key={stat.value}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.12 }}
                  className="bg-white p-8 rounded-2xl shadow-xl flex items-center gap-6 border border-outline-variant/35 group hover:scale-[1.01] transition-transform duration-200"
                >
                  <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 border border-secondary/20 group-hover:bg-secondary group-hover:border-secondary transition-colors duration-300">
                    <StatIcon className="w-8 h-8 text-secondary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="font-headline font-extrabold text-3xl sm:text-4xl text-primary leading-none">
                      {stat.value}
                    </p>
                    <p className="text-on-surface-variant font-sans text-xs uppercase tracking-wider font-bold mt-2">
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
