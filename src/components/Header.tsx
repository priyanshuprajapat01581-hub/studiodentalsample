/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Smile, Menu, X, Calendar } from 'lucide-react';

interface HeaderProps {
  onBookClick: () => void;
}

export default function Header({ onBookClick }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = ['home', 'about', 'services', 'dentist', 'gallery', 'why', 'testimonials', 'faq', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160 && rect.bottom >= 160) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Dr. Profile', href: '#dentist', id: 'dentist' },
    { label: 'Gallery', href: '#gallery', id: 'gallery' },
    { label: 'Why Us', href: '#why', id: 'why' },
    { label: 'Testimonials', href: '#testimonials', id: 'testimonials' },
    { label: 'FAQ', href: '#faq', id: 'faq' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
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
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-primary/95 shadow-md py-3 backdrop-blur-md border-b border-white/10' 
          : 'bg-primary/90 py-5 backdrop-blur-sm border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => handleLinkClick(e, '#home')}
            className="flex items-center gap-2 group focus:outline-none"
            id="logo-link"
          >
            <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center border border-secondary/30 group-hover:bg-secondary/20 transition-all">
              <Smile className="w-6 h-6 text-secondary" />
            </div>
            <div className="flex flex-col">
              <span className="font-headline font-bold text-xl md:text-2xl text-white tracking-tight leading-tight">
                Smile Care
              </span>
              <span className="text-[10px] font-sans text-secondary tracking-widest uppercase font-semibold">
                Dental Clinic
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" id="desktop-nav">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`px-3 py-2 rounded-md font-sans text-sm font-medium transition-all ${
                  activeSection === link.id
                    ? 'text-secondary font-bold'
                    : 'text-white/85 hover:text-secondary hover:bg-white/5'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Booking Button (Desktop) */}
          <div className="hidden lg:block">
            <button
              onClick={onBookClick}
              id="header-book-btn"
              className="bg-secondary hover:bg-secondary/90 text-white px-5 py-2.5 rounded-full font-sans font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Book Appointment
            </button>
          </div>

          {/* Mobile Nav Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onBookClick}
              className="bg-secondary hover:bg-secondary/90 text-white px-3 py-2 rounded-full font-sans font-semibold text-xs transition-all duration-200 flex items-center gap-1.5"
            >
              <Calendar className="w-3.5 h-3.5" />
              Book
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              id="mobile-nav-toggle"
              className="p-2 text-white hover:text-secondary focus:outline-none focus:ring-2 focus:ring-secondary/50 rounded-lg transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div 
          className="lg:hidden bg-primary/95 border-t border-white/10 backdrop-blur-lg animate-fadeIn shadow-2xl"
          id="mobile-menu"
        >
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`block px-4 py-3 rounded-lg font-headline text-base font-semibold transition-all ${
                  activeSection === link.id
                    ? 'text-secondary bg-white/5 border-l-4 border-secondary pl-3'
                    : 'text-white/90 hover:bg-white/5 hover:text-secondary'
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-white/10">
              <button
                onClick={() => {
                  setIsOpen(false);
                  onBookClick();
                }}
                className="w-full bg-secondary text-white py-3.5 rounded-lg font-sans font-bold text-center tracking-wide hover:brightness-110 active:scale-[0.99] transition-all flex items-center justify-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
