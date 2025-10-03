import type { Metadata } from 'next';

import Features from './components/features';
import Hero from './components/hero';
import Pricing from './components/pricing';
import Process from './components/process';

export const metadata: Metadata = {
  title: 'Cafe Website Template Demo',
  description:
    'Professional and affordable website for independent cafes and restaurants. Fast, mobile-friendly, and easy to update yourself.',
};

export default function AboutPage() {
  return (
    <>
      <Hero titleClassName="w-full" />
      <Features />
      <Process />
      <Pricing />
    </>
  );
}
