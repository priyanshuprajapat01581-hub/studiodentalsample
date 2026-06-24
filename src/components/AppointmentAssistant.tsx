/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Phone, Sparkles, AlertCircle, CheckCircle, Send, MessageSquare, MessageCircle } from 'lucide-react';

interface AppointmentAssistantProps {
  preselectedService: string;
}

export default function AppointmentAssistant({ preselectedService }: AppointmentAssistantProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'General Checkup',
    date: '',
    timeSlot: 'Morning (9:00 AM - 12:00 PM)',
    notes: ''
  });

  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Auto-fill service when clicked from treatment cards
  useEffect(() => {
    if (preselectedService) {
      setFormData(prev => ({ ...prev, service: preselectedService }));
      // Scroll to appointment container
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
    }
  }, [preselectedService]);

  const servicesList = [
    'General Checkup',
    'Professional Cleaning',
    'Root Canal Therapy',
    'Braces & Aligners',
    'Teeth Whitening',
    'Pediatric Care',
    'Dental Implants',
    'Other emergency consultation'
  ];

  const timeSlots = [
    'Morning (9:00 AM - 12:00 PM)',
    'Afternoon (12:00 PM - 4:00 PM)',
    'Evening (4:00 PM - 8:00 PM)'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.name.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }
    if (!formData.phone.trim()) {
      setErrorMessage('Please enter your contact mobile number.');
      return;
    }
    if (!formData.date) {
      setErrorMessage('Please select a preferred date for the appointment.');
      return;
    }

    // Format pre-filled WhatsApp message
    const line1 = `Hi Smile Care! I would like to request a dental appointment.`;
    const line2 = `• Patient Name: ${formData.name}`;
    const line3 = `• Contact Phone: ${formData.phone}`;
    const line4 = `• Requested Service: ${formData.service}`;
    const line5 = `• Preferred Date: ${formData.date}`;
    const line6 = `• Preferred Time Slot: ${formData.timeSlot}`;
    const line7 = formData.notes.trim() ? `• Additional Symptoms: ${formData.notes}` : '';

    const fullMessage = [line1, line2, line3, line4, line5, line6, line7].filter(Boolean).join('\n');
    const encodedText = encodeURIComponent(fullMessage);
    const whatsappUrl = `https://wa.me/917574844130?text=${encodedText}`;

    // Show success dialog
    setBookingSuccess(true);

    // Open WhatsApp link in a new tab safely
    setTimeout(() => {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }, 800);
  };

  const handleReset = () => {
    setBookingSuccess(false);
    setFormData({
      name: '',
      phone: '',
      service: 'General Checkup',
      date: '',
      timeSlot: 'Morning (9:00 AM - 12:00 PM)',
      notes: ''
    });
  };

  // Get current date string formatted as YYYY-MM-DD for standard min date attribute
  const todayStr = new Date().toISOString().split('T')[0];

  return (
    <section id="appointment" className="py-20 bg-background relative scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <h2 className="font-headline font-bold text-3xl sm:text-4xl text-primary">
            Schedule Your Smile Consultation
          </h2>
          <p className="font-sans text-base text-on-surface-variant leading-relaxed">
            Fill out your details below. Our system will generate a pre-formatted message to instantly dispatch to our clinic WhatsApp desk for quick confirmation.
          </p>
        </div>

        {/* Dynamic Card Container */}
        <div className="bg-surface rounded-2xl shadow-xl border border-outline-variant/65 p-6 sm:p-10 relative overflow-hidden">
          
          <div className="absolute top-0 left-0 right-0 h-2 bg-secondary" />

          <AnimatePresence mode="wait">
            {!bookingSuccess ? (
              <motion.form
                key="booking-form"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                onSubmit={handleFormSubmit}
                className="space-y-6"
              >
                {/* Form Error Message */}
                {errorMessage && (
                  <div className="p-4 bg-rose-50 border border-rose-200 text-rose-800 rounded-xl flex items-center gap-2 text-sm">
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="space-y-1.5">
                    <label htmlFor="name-input" className="block text-xs font-bold text-primary uppercase tracking-wide">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      id="name-input"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-3 bg-background border border-outline-variant rounded-xl text-primary font-sans focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all"
                    />
                  </div>

                  {/* Phone Input */}
                  <div className="space-y-1.5">
                    <label htmlFor="phone-input" className="block text-xs font-bold text-primary uppercase tracking-wide">
                      Contact Mobile Number
                    </label>
                    <input
                      type="tel"
                      id="phone-input"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full px-4 py-3 bg-background border border-outline-variant rounded-xl text-primary font-sans focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Service Selector */}
                  <div className="space-y-1.5">
                    <label htmlFor="service-select" className="block text-xs font-bold text-primary uppercase tracking-wide">
                      Dental Treatment
                    </label>
                    <select
                      id="service-select"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-background border border-outline-variant rounded-xl text-primary font-sans focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all appearance-none cursor-pointer"
                    >
                      {servicesList.map(srv => (
                        <option key={srv} value={srv}>{srv}</option>
                      ))}
                    </select>
                  </div>

                  {/* Preferred Date Selector */}
                  <div className="space-y-1.5">
                    <label htmlFor="date-select" className="block text-xs font-bold text-primary uppercase tracking-wide">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      id="date-select"
                      name="date"
                      required
                      min={todayStr}
                      value={formData.date}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-background border border-outline-variant rounded-xl text-primary font-sans focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all cursor-pointer"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Preferred Time Slot */}
                  <div className="space-y-1.5">
                    <label htmlFor="time-select" className="block text-xs font-bold text-primary uppercase tracking-wide">
                      Preferred Time Slot
                    </label>
                    <select
                      id="time-select"
                      name="timeSlot"
                      value={formData.timeSlot}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-background border border-outline-variant rounded-xl text-primary font-sans focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all appearance-none cursor-pointer"
                    >
                      {timeSlots.map(slot => (
                        <option key={slot} value={slot}>{slot}</option>
                      ))}
                    </select>
                  </div>

                  {/* Clinical Note Disclaimer badge */}
                  <div className="bg-secondary-container/30 border border-secondary/20 p-4 rounded-xl flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <div>
                      <h5 className="text-xs font-bold text-primary">Emergency Advisory</h5>
                      <p className="text-[11px] text-on-surface-variant leading-relaxed mt-0.5">
                        If you are experiencing severe oral hemorrhage or intense trauma, please bypass this digital form and telephone our emergency line directly.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Additional notes/symptoms */}
                <div className="space-y-1.5">
                  <label htmlFor="notes-area" className="block text-xs font-bold text-primary uppercase tracking-wide">
                    Describe any specific symptoms (Optional)
                  </label>
                  <textarea
                    id="notes-area"
                    name="notes"
                    rows={3}
                    value={formData.notes}
                    onChange={handleInputChange}
                    placeholder="e.g. Mild pain in upper left molar when chewing cold food..."
                    className="w-full px-4 py-3 bg-background border border-outline-variant rounded-xl text-primary font-sans focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all resize-none"
                  />
                </div>

                {/* Action Row */}
                <div className="pt-4 flex flex-col sm:flex-row gap-4 items-center justify-between border-t border-outline-variant/50">
                  <p className="text-[11px] text-on-surface-variant text-center sm:text-left">
                    🔒 We protect patient data. Booking details are routed directly to WhatsApp.
                  </p>
                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-secondary hover:bg-secondary/90 text-white font-headline font-bold py-4 px-8 rounded-xl transition-all duration-200 uppercase tracking-wide text-sm shadow-md hover:shadow-lg active:scale-95 flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5 fill-white text-secondary" />
                    Send Booking via WhatsApp
                  </button>
                </div>
              </motion.form>
            ) : (
              <motion.div
                key="booking-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="text-center py-8 space-y-6"
              >
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto border border-secondary/35 text-secondary animate-bounce">
                  <CheckCircle className="w-10 h-10" />
                </div>

                <div className="space-y-2">
                  <h3 className="font-headline font-bold text-2xl text-primary">
                    Message Dispatched Successfully!
                  </h3>
                  <p className="font-sans text-sm text-on-surface-variant max-w-md mx-auto leading-relaxed">
                    We have redirected your appointment profile. If WhatsApp did not open automatically, please tap the button below.
                  </p>
                </div>

                {/* Recapitulation of information */}
                <div className="bg-background border border-outline-variant/60 rounded-xl p-6 text-left max-w-lg mx-auto space-y-2">
                  <h4 className="font-sans font-bold text-xs uppercase text-primary border-b border-outline-variant/40 pb-2 mb-3">
                    Your Booking Summary:
                  </h4>
                  <p className="font-sans text-xs text-on-surface-variant">
                    <strong className="text-primary font-semibold">Patient:</strong> {formData.name}
                  </p>
                  <p className="font-sans text-xs text-on-surface-variant">
                    <strong className="text-primary font-semibold">Service:</strong> {formData.service}
                  </p>
                  <p className="font-sans text-xs text-on-surface-variant">
                    <strong className="text-primary font-semibold">Preferred Date:</strong> {formData.date}
                  </p>
                  <p className="font-sans text-xs text-on-surface-variant">
                    <strong className="text-primary font-semibold">Preferred Slot:</strong> {formData.timeSlot}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
                  <button
                    onClick={handleFormSubmit}
                    className="flex-1 bg-secondary hover:bg-secondary/90 text-white font-headline font-bold py-3.5 px-6 rounded-xl transition-all duration-200 text-xs uppercase tracking-wider shadow-md flex items-center justify-center gap-1.5"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Re-open WhatsApp
                  </button>
                  <button
                    onClick={handleReset}
                    className="flex-1 border border-primary/20 hover:bg-background text-primary font-headline font-semibold py-3.5 px-6 rounded-xl transition-all duration-200 text-xs uppercase tracking-wider"
                  >
                    Schedule Another
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
}
