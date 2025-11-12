import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Hero from '@/components/Home/Hero/Hero';

// Loading Component
const LoadingSection = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-950 to-black">
    <div className="text-center">
      <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-t-2 border-[#FFBBE1] mx-auto mb-4"></div>
      <p className="text-gray-400 font-semibold">Loading...</p>
    </div>
  </div>
);

// Lazy load components for better performance
const About = dynamic(() => import('@/components/Home/About/About'), {
  loading: () => <LoadingSection />,
  ssr: true, // Enable SSR for SEO
});

const Skills = dynamic(() => import('@/components/Home/Skills/Skills'), {
  loading: () => <LoadingSection />,
  ssr: true,
});

const Project = dynamic(() => import('@/components/Home/Projects/Project'), {
  loading: () => <LoadingSection />,
  ssr: true,
});

const Services = dynamic(() => import('@/components/Home/Services/Services'), {
  loading: () => <LoadingSection />,
  ssr: true,
});

const HomePage = () => {
  return (
    <div className='overflow-hidden'>
      {/* Hero loads immediately - most important */}
      <Hero />
      
      {/* Other sections lazy load with Suspense */}
      <Suspense fallback={<LoadingSection />}>
        <About />
      </Suspense>
      
      <Suspense fallback={<LoadingSection />}>
        <Skills />
      </Suspense>
      
      <Suspense fallback={<LoadingSection />}>
        <Project />
      </Suspense>
      
      <Suspense fallback={<LoadingSection />}>
        <Services />
      </Suspense>
    </div>
  );
};

export default HomePage;