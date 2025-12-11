import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import BlurBackground from './components/BlurBackground';
import Testimonials from './components/Testimonials';
import SetupGuide from './components/SetupGuide';
import SocialResponsibility from './components/SocialResponsibility';
import FAQ from './components/FAQ';
import OpenSource from './components/OpenSource';
import Founder from './components/Founder';
import Blog from './components/Blog';

function App() {
  return (
    <div className="min-h-screen text-white selection:bg-[#fa2d48] selection:text-white">
      <BlurBackground />
      <Header />
      <main>
        <Hero />
        <div className="space-y-6">
            <Features />
            <OpenSource />
            <Founder />
            <Pricing />
            <Blog />
            <SetupGuide />
            <SocialResponsibility />
            <Testimonials />
            <FAQ />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;