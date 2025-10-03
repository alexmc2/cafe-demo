import type { LucideIcon } from 'lucide-react';
import { Images, Megaphone, Sparkles } from 'lucide-react';

import type { DemoCarouselImage } from './demo-carousel';

type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

type ProcessStep = {
  title: string;
  copy: string;
};

type HeroContent = {
  title: string;
  description: string;
  benefits: string[];
  carouselImages: DemoCarouselImage[];
  contactEmail: string;
  walkthroughHref: string;
};

type PricingContent = {
  badgeLabel: string;
  priceLabel: string;
  description: string;
  highlight: string;
  contactEmail: string;
  walkthroughHref: string;
  footnote: string;
};

export const HERO_CONTENT: HeroContent = {
  title: 'Professional website for independent cafes and restaurants',
  description:
    'Fast, mobile-friendly, and easy to update yourself. Built for independent businesses who want a professional web presence without the typical costs.',
  benefits: [
    'Have a professional website that makes your business look established',
    'Add new photos from any device',
    'Change opening hours instantly',
  ],
  carouselImages: [
    {
      src: '/images/carousel/image.png',
      alt: 'Menu editor showing items ready to publish',
    },
    {
      src: '/images/carousel/image2.png',
      alt: 'Gallery management interface with drag and drop sorting',
    },
    {
      src: '/images/carousel/image3.png',
      alt: 'Testimonial block with five star rating',
    },
  ],
  contactEmail: 'hello@cafedemo.co.uk',
  walkthroughHref: '/about/walkthrough',
};

export const FEATURES: Feature[] = [
  {
    title: 'Menu management',
    description:
      'Update items, prices, and descriptions whenever you need to. Changes go live immediately.',
    icon: Sparkles,
  },
  {
    title: 'Photo galleries',
    description:
      'Upload new images, update your story, and showcase your space. All manageable from your phone or laptop.',
    icon: Images,
  },
  {
    title: 'News and events',
    description:
      'Announce seasonal specials, events, or menu changes. Keep customers informed without any technical knowledge.',
    icon: Megaphone,
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    title: 'Initial consultation',
    copy: "We discuss your cafe or restaurant, what you want to showcase, and I'll tailor the site to match your brand.",
  },
  {
    title: 'Site development',
    copy: "You'll receive a fully functional website with your content. I'll walk you through the editing system and provide login details.",
  },
  {
    title: 'Full control',
    copy: 'Update content yourself whenever needed, or send me changes to implement. Ongoing support available.',
  },
];

export const PRICING_CONTENT: PricingContent = {
  badgeLabel: 'Pricing',
  priceLabel: '£150 flat rate',
  description:
    "Professional website setup including training on the content management system. I'm building my portfolio, which allows me to offer this at an affordable price point.",
  highlight: 'One-off payment · Training included · Local developer',
  contactEmail: 'hello@cafedemo.co.uk',
  walkthroughHref: '/about/walkthrough',
  footnote:
    'Browse the site to see what\'s included. This demo uses placeholder content - yours would feature your actual menu, photos, and business information.',
};
