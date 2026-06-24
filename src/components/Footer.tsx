/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Smile, Globe, Instagram, Share2, MapPin, Phone, Mail, ChevronRight } from 'lucide-react';

interface FooterProps {
  onBookClick: () => void;
}

export default function Footer({ onBookClick }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer id="contact" className="bg-primary pt-20 pb-10 text-white relative border-t border-white/5 overflow-hidden">
      
      {/* Decorative vector overlay */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-secondary/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 relative z-10">
        
        {/* Brand Column */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center border border-secondary/35">
              <Smile className="w-6 h-6 text-secondary" />
            </div>
            <div className="flex flex-col">
              <span className="font-headline font-bold text-xl text-white tracking-tight leading-none">
                Smile Care
              </span>
              <span className="text-[10px] text-secondary tracking-widest uppercase font-semibold mt-0.5">
                Dental Clinic
              </span>
            </div>
          </div>
          <p className="text-white/60 text-sm leading-relaxed font-sans">
            Redefining professional dental excellence through cutting-edge diagnostics, advanced clinical sterilizations, and empathetic, personalized patient care. Serving beautiful smiles since 2005.
          </p>
          <div className="flex gap-4 pt-2">
            <a 
              href="#" 
              className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/70 hover:text-white hover:bg-secondary hover:border-secondary transition-all"
              aria-label="Smile Care Web Portal"
            >
              <Globe className="w-4 h-4" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/70 hover:text-white hover:bg-secondary hover:border-secondary transition-all"
              aria-label="Smile Care Instagram Profile"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/70 hover:text-white hover:bg-secondary hover:border-secondary transition-all"
              aria-label="Share Dental Portal"
            >
              <Share2 className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div>
          <h4 className="font-headline font-bold text-lg text-white mb-6 tracking-wide">
            Quick Navigation
          </h4>
          <ul className="space-y-4 font-sans text-sm">
            {[
              { label: 'Home Page', href: '#home' },
              { label: 'About Clinic', href: '#about' },
              { label: 'Services Catalog', href: '#services' },
              { label: 'Our Lead Doctor', href: '#dentist' },
              { label: 'Clinical Gallery', href: '#gallery' },
              { label: 'Patient Reviews', href: '#testimonials' },
              { label: 'FAQ Support', href: '#faq' }
            ].map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-white/60 hover:text-secondary transition-colors flex items-center gap-1 group"
                >
                  <ChevronRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-secondary" />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info Column */}
        <div className="space-y-6">
          <h4 className="font-headline font-bold text-lg text-white mb-6 tracking-wide">
            Contact Information
          </h4>
          
          <div className="flex gap-4 items-start">
            <div className="mt-1 flex-shrink-0">
              <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                <MapPin className="w-4 h-4 text-secondary" />
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed font-sans">
              123 Health Plaza, City Center,<br />
              Metro Heights, MH 400012
            </p>
          </div>

          <div className="flex gap-4 items-start">
            <div className="mt-1 flex-shrink-0">
              <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                <Phone className="w-4 h-4 text-secondary" />
              </div>
            </div>
            <div className="text-white/60 text-sm font-sans space-y-1">
              <a href="tel:+917574844130" className="hover:text-white transition-colors block">
                +91 75748 44130 (Clinic)
              </a>
              <a href="tel:+919876543210" className="hover:text-white transition-colors block">
                +91 98765 43210 (Emergencies)
              </a>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="mt-1 flex-shrink-0">
              <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                <Mail className="w-4 h-4 text-secondary" />
              </div>
            </div>
            <div className="text-white/60 text-sm font-sans space-y-1">
              <a href="mailto:appointments@smilecare.com" className="hover:text-white transition-colors block">
                appointments@smilecare.com
              </a>
              <a href="mailto:info@smilecare.com" className="hover:text-white transition-colors block">
                info@smilecare.com
              </a>
            </div>
          </div>
        </div>

        {/* Find Us Column */}
        <div className="space-y-6">
          <h4 className="font-headline font-bold text-lg text-white mb-6 tracking-wide">
            Find Our Clinic
          </h4>
          <div className="w-full aspect-video bg-white/5 rounded-xl overflow-hidden border border-white/10 relative group">
            <img 
              alt="Clinic Location Map in Mumbai" 
              className="w-full h-full object-cover opacity-50 group-hover:opacity-75 transition-opacity duration-300"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJh_cefpdF1YlfkCi9ka4Y3X_G8VWqeexSGq1y7P9bbAoDcZ-xiQ3GDHabXgMxNWHepfO3uRh1KViBeXQo9ZsSzzK3Dsir4QBGB5Aw_2uyLmaXtNgYnYpo2T6PECbAfZcuBrsUeK60994rrO3eRTUNWxvJhyAL_XCHFFqwtJqpHgXN6nU2b4MHN4hP9rtTaPK7OAhfz8CmwXnzpX338j4NRXU4z9G6Ibh6f_Cf78aJZT4N1dbsPVVpNTqN_4EM9fmi15r-3q1HW0k"
            />
            <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-300 pointer-events-none" />
          </div>
          <button
            onClick={onBookClick}
            className="w-full bg-secondary hover:bg-secondary/95 text-white font-headline font-bold py-3.5 rounded-xl text-center text-xs uppercase tracking-wider transition-all duration-200 shadow-md hover:scale-[1.01] active:scale-[0.99]"
          >
            Instant Booking via WhatsApp
          </button>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40 font-sans">
        <p>© {currentYear} Smile Care Dental Clinic. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Cookies Policy</a>
        </div>
      </div>
    </footer>
  );
}
