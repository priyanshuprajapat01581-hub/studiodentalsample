/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  iconName: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  quote: string;
  rating: number;
}

export interface GalleryItem {
  id: string;
  imageUrl: string;
  alt: string;
  caption: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
