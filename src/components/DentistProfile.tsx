/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Award, GraduationCap, HeartHandshake, Smile } from 'lucide-react';

export default function DentistProfile() {
  const achievements = [
    {
      title: 'Gold Medalist',
      description: 'Awarded for exceptional excellence in Restorative Dentistry, 2012.',
      icon: Award
    },
    {
      title: 'Post-Graduation',
      description: 'Completed Prosthodontics at the prestigious National Institute of Dental Sciences.',
      icon: GraduationCap
    },
    {
      title: '15,000+ Cases',
      description: 'Extensive background of successful clinical restoration and implant procedures across two decades of practice.',
      icon: HeartHandshake
    }
  ];

  return (
    <section id="dentist" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Portrait */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Offset decorative background frame */}
              <div className="absolute -inset-4 bg-secondary/10 rounded-2xl -rotate-2" />
              
              <img 
                className="relative z-10 w-full rounded-2xl shadow-xl aspect-[4/5] object-cover" 
                alt="Dr. Priya Sharma smiling warmly" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEJH4DopcV1qmRWYjsGg_K3RTSAkM4RROdP5oZGFH8bVWXG2BsYLhM0Du5kTg8_dkWk7cyixNFV4dVzkK6DRgmkDtyYoBShmQfvN6yTvR8fLZt9pW7CzMNnSJguP6ZDXxGwDaPj1MegInZIkapo-TnqfGZ3Ab0OMO54iSRz2RxKlkyREzAHsV9KebmxzZPseVIWJsDQdPGjn2mfvzR-oATJirOOtiT-iaRc0yJGQjyJMIQ4ZjVfUMfbhkjJ0Rsowrd-h1ydFB5qoI"
              />

              {/* Dynamic availability tag */}
              <div className="absolute top-6 left-6 z-20 bg-primary/95 text-white py-2.5 px-4 rounded-full font-sans text-xs font-semibold flex items-center gap-2 shadow-lg backdrop-blur-md border border-white/10">
                <span className="w-2.5 h-2.5 bg-secondary rounded-full animate-pulse" />
                Available Today for Consultation
              </div>
            </motion.div>
          </div>

          {/* Right Column: Profile and Bio */}
          <div className="lg:col-span-7 space-y-8 order-1 lg:order-2">
            <div className="space-y-3">
              <div className="inline-block px-4 py-1 bg-secondary/10 text-secondary rounded-full font-sans text-xs uppercase tracking-widest font-bold">
                Meet Our Lead Specialist
              </div>
              <h2 className="font-headline font-bold text-4xl text-primary leading-tight">
                Dr. Priya Sharma
              </h2>
              <p className="text-secondary font-sans font-bold tracking-widest text-sm uppercase">
                BDS, MDS - Prosthodontics & Oral Implantology
              </p>
            </div>

            <p className="font-sans text-base sm:text-lg text-on-surface-variant leading-relaxed">
              Dr. Priya Sharma is a highly skilled prosthodontist dedicated to delivering elite cosmetic tooth restoration and dental implants. Believing in a holistic approach, she custom-builds treatment courses that prioritize pain eradication and optimal chewing dynamics.
            </p>

            {/* Achievement bullet grid */}
            <div className="space-y-5">
              {achievements.map((ach) => {
                const IconComp = ach.icon;
                return (
                  <div key={ach.title} className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
                        <IconComp className="w-5 h-5 text-secondary" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-headline font-bold text-base text-primary">
                        {ach.title}
                      </h4>
                      <p className="font-sans text-sm text-on-surface-variant leading-relaxed mt-0.5">
                        {ach.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quote Block */}
            <blockquote className="relative bg-background p-6 rounded-2xl border-l-4 border-secondary/80 italic text-on-surface-variant leading-relaxed">
              <Smile className="w-8 h-8 text-secondary/15 absolute top-4 right-4" />
              "My professional mission is to dissolve general dental anxieties and restore each patient's ultimate oral confidence. We design custom treatment plans that combine clinical precision with standard restorative aesthetics."
            </blockquote>
          </div>

        </div>
      </div>
    </section>
  );
}
