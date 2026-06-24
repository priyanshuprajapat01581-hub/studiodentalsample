/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQItem } from '../types';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      id: 'timings',
      question: 'What are your clinic timings?',
      answer: 'We are officially open Monday to Saturday from 9:00 AM to 8:00 PM. On Sundays, we are open strictly by pre-scheduled appointment only for emergency dental relief cases from 10:00 AM to 2:00 PM.'
    },
    {
      id: 'insurance',
      question: 'Do you accept major medical insurance policies?',
      answer: 'Yes! We collaborate directly with most prominent dental insurance providers across the city. Our front office reception desk will assist you with verifying insurance limits and filing clean, hassle-free claims.'
    },
    {
      id: 'walkins',
      question: 'Are walk-in consultations welcome without booking?',
      answer: 'While we highly prioritize scheduled appointments to respect everyone’s time, we absolutely accept walk-ins. To avoid potential waiting times, we strongly advise requesting a quick slot online via our WhatsApp assistant first.'
    },
    {
      id: 'emergency',
      question: 'What symptoms constitute a true dental emergency?',
      answer: 'Severe throbbing dental pain, a completely knocked-out tooth, heavy oral bleeding, an infected dental abscess, or high-impact jaw trauma are all emergencies. Please call us immediately on our emergency telephone lines.'
    },
    {
      id: 'payment',
      question: 'What payment and EMI options do you accept?',
      answer: 'We accept all major credit cards, debit cards, UPI payments, net banking, and standard cash. For higher-value restorative procedures such as titanium dental implants or aesthetic ceramic braces, we provide interest-free monthly EMI schemes.'
    }
  ];

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 bg-surface">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary rounded-full font-sans text-xs uppercase tracking-widest font-bold">
            Support Desk
          </div>
          <h2 className="font-headline font-bold text-3xl sm:text-4xl text-primary">
            Frequently Asked Questions
          </h2>
          <p className="font-sans text-base text-on-surface-variant leading-relaxed">
            Get quick, definitive answers to questions regarding appointment timings, clinical insurance networks, and critical oral emergencies.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={faq.id}
                className="bg-background rounded-2xl border border-outline-variant/60 shadow-sm overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-secondary/5 transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3.5 pr-4">
                    <HelpCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="font-headline font-bold text-sm sm:text-base text-primary">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown 
                    className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-secondary' : 'rotate-0'
                    }`} 
                  />
                </button>
                
                {/* Expandable answer div */}
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-40 border-t border-outline-variant/30 bg-white/40' : 'max-h-0'
                  }`}
                >
                  <div className="p-6 text-sm sm:text-base text-on-surface-variant leading-relaxed font-sans">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
