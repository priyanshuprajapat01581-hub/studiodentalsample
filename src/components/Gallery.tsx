/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { GalleryItem } from '../types';

export default function Gallery() {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const images: GalleryItem[] = [
    {
      id: 'chair',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDLjxSLkEDdeOcI7JsNMl9_cSKC6UNRFOaBhFHWp1x90PDzNO0SXD2-xA5qN2mNvGC3XjX6EpNDKhEk79ok6fRJVch_6WiC1VppdxJyw3nNWBDAZaM2jmpwF1Ya_4jZoaxIJeyr_F7e-7uHWfCTmDE_oag4hnxgQVuWiEGGAkyDgMl8vGO3eXUFOBZbhLppSL6WCYi3AvPv3sLHSf7wABZLcJrmd9ibhWMqRAjZXMOVpr8WGaXJUN3DJ15126Cm7nmQlh7hkZ77sVA',
      alt: 'High-tech dental examination chair',
      caption: 'Our modern surgical suite with fully sterile, ergonomic seating and digital monitors.'
    },
    {
      id: 'reception',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD9mDxgtlEQeyZwNuPH8jwjXuNFILEBxOonBlqA7JLrczh3oIZ5J3rcKhipKXxKGYUNwxryAeQnbFFNznBAOLawcp-HJ7Fzrc_p5p5l211SjFrV1fwET09xW84W-Wu9Fv5V5KnLmlJnWWtCdXvXXTqEsq_ia6oqo0To4xYcRXXtKgqLWsSHvDqN6W_9NYtjKIisx_Ye5WzUM05YG6jpPlyro7hi13Lo9HyoqgoEPyhjzClcVDP2bL-czIbpCgvRcS1VLKCCF9Xydng',
      alt: 'Smile Care reception area',
      caption: 'The welcoming lounge of our clinic, featuring marble designs and cozy waiting seats.'
    },
    {
      id: 'tools',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCQ6xHYqKBtV9A4aAmxD1ZU3aBGNqZak95AJ4MB8ANsa_GMawwCtWLHoZca4v57lX7WLLn99S4COMFXQPkiTTdCyi3n0K7em_0d2CzEb8xn66t-SlMi2HgMtyb1mYD3o3crKsIIMEkCPCqmwPUT0dDpc60ktMv_t7VB9MSyHI_rnhh_EO5tO28rBSWHOemk5OGM5qxOq4bq6Xd8dIjatZ-biAYY2Sm9_Zt10liTMM-5L1CQk3iH1su8SfeFXVWHaXDaE1HgxBX2gS4',
      alt: 'Sterile dental instruments',
      caption: 'Sealed and organized professional medical toolkits, ready for precise operations.'
    },
    {
      id: 'cleaning-hygiene',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDtLreJyAmZTTP2_wtwO5UThZNsvJJZXf5UuvhBliNGiU5wGT920W_jywl_qLw-jtlRb9LHQYVqt0YengyhGdm0E-N81e_DE1DFmP48h-QMplaHHTdQy5mPojhNyt9kksx3Ufo9B9py2owjDomqkIiWQtUg24Jl9trMIM0MtitoaV7VKiL30AP6DGGSoIhc6OmfBEl1bdFhGvgobyKSYBhqBEJF2jSx1wNbJNGHax0a0ljPr9sGe-QaCGTZRW14N91HzWFnQP3kd34',
      alt: 'Ultrasonic dental cleaning process',
      caption: 'Advanced dental hygienist performing ultrasonic scaling in a sterile clinical room.'
    },
    {
      id: 'xray',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDuhSNKC8eR6vPoFcbctnCE-0uBacbl-heC7_06AF6ToApk76v9Qpb3g9QK_7MT4BYyYL7iAFvWRX3fyrKodg9rqWK0CxnrqQS_HnhHCU_EECq1mE_9h7TCGq68xhelOlCqspYQdIVY0NxUk31CfYf6RVPn6TQDkS9yW8YUHrqPBj7KSa4Y-qA8qlgO6BWJZxBznSmq-A2pEZh4KbGWMrYynRjLd2SCjlUlUHE_We0xNnCYR7JElT0fae_XNXUchqHXUuwc-94evzk',
      alt: 'Dental panoramic x-ray monitor',
      caption: 'Comprehensive orthodontic imaging displaying a detailed mapping of the teeth structures.'
    },
    {
      id: 'exterior',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBAahyYSC5jtMau93etFUeKitn0kx8v9XKPghth7YRL4gTOkn7zCT-NDLTiDEb833GHZ70RJe7QyXS-E__L2LawToHD14XM3w1sTZCWQz2KKOJOmLZYvzAO8R_M1YHEkJiaWxNrsj7CIs5azrIqhjG76sKI9E1VJMwJ5H-p3cXeCUP4f07nP_TrFZYfR2A2iGpKmwhzJ-Nl3grEUJ_OLKb-Gv16m47GlzR8_YY767Yk2_8eHOneYzVyk9yQEGZHxQnuFiHuvh1tsSY',
      alt: 'Smile Care exterior entrance',
      caption: 'The sleek, minimalist glass facade of our dental clinic welcoming you at dusk.'
    }
  ];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex - 1 + images.length) % images.length);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex + 1) % images.length);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary rounded-full font-sans text-xs uppercase tracking-widest font-bold">
            Virtual Tour
          </div>
          <h2 className="font-headline font-bold text-3xl sm:text-4xl text-primary">
            Our Clinical Gallery
          </h2>
          <p className="font-sans text-base text-on-surface-variant leading-relaxed">
            Take a visual tour of our top-tier sterilization systems, hygienic surgeries, and cozy patient lounges designed to elevate your comfort.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, idx) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              onClick={() => setActiveImageIndex(idx)}
              className="relative rounded-2xl overflow-hidden h-64 group cursor-zoom-in shadow-md hover:shadow-xl border border-outline-variant/30"
            >
              <img 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt={img.alt} 
                src={img.imageUrl}
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="p-3 bg-white/20 backdrop-blur-md rounded-full border border-white/30 text-white transform scale-90 group-hover:scale-100 transition-transform duration-300">
                  <Maximize2 className="w-5 h-5" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white font-sans text-xs truncate">{img.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {activeImageIndex !== null && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
              {/* Dark overlay backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveImageIndex(null)}
                className="absolute inset-0 bg-primary/95 backdrop-blur-md"
              />

              {/* Close Button */}
              <button
                onClick={() => setActiveImageIndex(null)}
                className="absolute top-6 right-6 p-3 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors z-20"
                aria-label="Close lightbox"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Prev Button */}
              <button
                onClick={handlePrev}
                className="absolute left-4 p-3 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors z-20 focus:outline-none"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="absolute right-4 p-3 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors z-20 focus:outline-none"
                aria-label="Next image"
              >
                <ChevronRight className="w-8 h-8" />
              </button>

              {/* Content Panel */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative max-w-4xl w-full z-10 flex flex-col items-center gap-4 px-4"
              >
                <div className="w-full h-[65vh] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black flex items-center justify-center">
                  <img
                    src={images[activeImageIndex].imageUrl}
                    alt={images[activeImageIndex].alt}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="text-center text-white max-w-2xl px-4">
                  <h4 className="font-headline font-bold text-lg md:text-xl text-secondary-container">
                    {images[activeImageIndex].alt}
                  </h4>
                  <p className="font-sans text-sm text-white/80 mt-1.5">
                    {images[activeImageIndex].caption}
                  </p>
                  <p className="font-sans text-[11px] text-white/40 mt-3">
                    Image {activeImageIndex + 1} of {images.length}
                  </p>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
