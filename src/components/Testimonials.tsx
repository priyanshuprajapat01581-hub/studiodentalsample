/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { TestimonialItem } from '../types';

export default function Testimonials() {
  const testimonials: TestimonialItem[] = [
    {
      id: 'ananya',
      name: 'Ananya R.',
      location: 'Mumbai',
      quote: 'I used to be absolutely terrified of standard dental visits. Dr. Priya and her clinical nursing team made me feel so respected and comfortable that I genuinely look forward to my bi-annual cleanings now!',
      rating: 5
    },
    {
      id: 'rahul',
      name: 'Rahul V.',
      location: 'Delhi',
      quote: 'The microscopic clear orthodontic aligners I received here completely changed my facial dynamics. They were virtually invisible at work, and the visual symmetry of my teeth is now flawless.',
      rating: 5
    },
    {
      id: 'sarah',
      name: 'Sarah K.',
      location: 'Bangalore',
      quote: 'A genuinely top-class sterile environment. They diagnosed and resolved my painful crown fracture on a Sunday evening with unbelievable precision and immediate relief. Highly recommend Smile Care.',
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary rounded-full font-sans text-xs uppercase tracking-widest font-bold">
            Real Patient Reviews
          </div>
          <h2 className="font-headline font-bold text-3xl sm:text-4xl text-primary">
            Patient Testimonials
          </h2>
          {/* Full Star Rating visualization */}
          <div className="flex justify-center gap-1 text-amber-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-500 text-amber-500" />
            ))}
          </div>
          <p className="font-sans text-xs uppercase tracking-widest font-bold text-secondary">
            Rated 4.9/5 stars based on 1,200+ local reviews
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, idx) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-background p-8 rounded-2xl border border-outline-variant/60 relative flex flex-col justify-between hover:shadow-lg transition-shadow duration-300 group"
            >
              {/* Floating quote bubble icon */}
              <Quote className="w-12 h-12 text-secondary/10 absolute top-6 right-6 group-hover:scale-110 transition-transform duration-300" />
              
              <div className="space-y-4">
                {/* Minor Rating Row */}
                <div className="flex gap-0.5 text-amber-500">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                  ))}
                </div>

                <p className="italic text-on-surface-variant font-sans text-sm sm:text-base leading-relaxed relative z-10">
                  "{test.quote}"
                </p>
              </div>

              <div className="pt-6 border-t border-outline-variant/50 mt-6 flex items-center justify-between">
                <div>
                  <h4 className="font-headline font-bold text-sm text-primary">
                    {test.name}
                  </h4>
                  <p className="text-[10px] text-on-surface-variant uppercase tracking-widest font-medium mt-0.5">
                    Verified Patient • {test.location}
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center font-bold text-xs text-secondary font-headline">
                  {test.name.substring(0, 1)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
