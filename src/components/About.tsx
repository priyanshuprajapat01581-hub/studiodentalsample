/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { CheckCircle2, Shield, HeartPulse, Sparkles, Clock } from 'lucide-react';

export default function About() {
  const values = [
    {
      title: 'Certified Specialists',
      description: 'Post-graduate doctors trained in specialized endodontics, implants, and pediatrics.',
      icon: Shield,
    },
    {
      title: 'Advanced Sterilization',
      description: 'State-of-the-art Class-B autoclaves ensure completely sterile instruments for every visit.',
      icon: HeartPulse,
    },
    {
      title: 'Painless Procedures',
      description: 'Advanced local anesthetics, digital injections, and a caring touch reduce all patient stress.',
      icon: Sparkles,
    },
    {
      title: 'Emergency Care',
      description: 'Prompt diagnosis and relief for toothaches, trauma, and infections round-the-clock.',
      icon: Clock,
    },
  ];

  return (
    <section id="about" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Beautiful Dental Clinic Image & Badge */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary/10 rounded-full z-0" />
              <img 
                className="rounded-2xl shadow-2xl relative z-10 w-full aspect-video lg:aspect-[4/5] object-cover border-8 border-white" 
                alt="Modern Smile Care Clinic room" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGy45LNf6v0wULmaDP4-0cbKysb8lQHKX8Ca3gRzpIfDNvwv7AsBFo7mt7xYYkexVxo-Wgdni9JpXuejOvccjDeuJQEx7ltZkV2OcXFd-pqs38-0XKcEWcs_Iu671nOQ1n_alVkEoaTN9cFz20XBNMceGC4xcvH96QYMYg-WS0o0LSlbfzg29ywqIBr3V_w7ofJi-skpM6GMlehTS7tt-uiR8bZKXpFDcNuBmZkhBfJ7kd6_auKL_-TQJCpgWNUZRMKZhRkZYsg54"
              />
              
              {/* Dynamic Overlay badge */}
              <div className="absolute -bottom-6 -right-4 bg-primary text-white p-6 rounded-2xl shadow-xl z-20 border border-white/10 hidden sm:block">
                <div className="text-3xl font-headline font-bold text-secondary leading-none">18+</div>
                <div className="text-[10px] uppercase tracking-widest font-bold text-white/75 mt-1">
                  Years of Smile Excellence
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Brand Story & Selling Points */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <div className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary rounded-full font-sans text-xs uppercase tracking-widest font-bold">
                Since 2005
              </div>
              <h2 className="font-headline font-bold text-3xl sm:text-4xl text-primary leading-tight">
                Welcome to Smile Care Dental Clinic
              </h2>
              <p className="font-sans text-base sm:text-lg text-on-surface-variant leading-relaxed">
                At Smile Care, we believe a beautiful, radiant smile is more than just aesthetics, as it is the cornerstone of overall wellness, self-esteem, and daily confidence. Established in 2005, our clinic has delivered premium dental treatments to over 15,000 satisfied patients.
              </p>
              <p className="font-sans text-base text-on-surface-variant/90 leading-relaxed">
                We synthesize decades of multi-disciplinary clinical expertise with cutting-edge dental technology, ensuring every standard checkup, orthodontic plan, or dental surgery is painless, precise, and uniquely tailored to you.
              </p>
            </motion.div>

            {/* Structured Value Props */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-outline-variant/50">
              {values.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex gap-3"
                  >
                    <div className="mt-1 flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center">
                        <IconComponent className="w-4 h-4 text-secondary" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-sans font-bold text-sm text-primary">{item.title}</h4>
                      <p className="font-sans text-xs text-on-surface-variant mt-1 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
