/**
 * UI: Amanah Web Storefront - Landing / Our Story
 * Description: Immersive, full-color architectural gateway.
 * Amanah Collective Ltd ©️ 2026
 */

import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF9F6] p-4 md:p-8 flex flex-col items-center">
      
      {/* The Grand Solid Forest Green Arch Frame */}
      <div className="w-full max-w-6xl flex-1 rounded-t-[12rem] md:rounded-t-[25rem] relative overflow-hidden flex flex-col items-center shadow-2xl bg-[#2E4A35]">

        {/* 1. The Immersive Gold Lattice Overlay */}
        <div className="absolute top-0 left-0 w-full h-[30rem] md:h-[45rem] pointer-events-none z-0">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <defs>
              <linearGradient id="solid-gold" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#AA7C11" />
                <stop offset="50%" stopColor="#F3E5AB" />
                <stop offset="100%" stopColor="#D4AF37" />
              </linearGradient>
              
              <pattern id="rich-lattice" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                {/* Thicker, richer geometric lines filling the space */}
                <path d="M50 0L100 50L50 100L0 50z" fill="none" stroke="url(#solid-gold)" strokeWidth="2" opacity="0.3"/>
                <path d="M50 25L75 50L50 75L25 50z" fill="none" stroke="url(#solid-gold)" strokeWidth="4" opacity="0.5"/>
                <circle cx="50" cy="50" r="4" fill="url(#solid-gold)" opacity="0.7"/>
                <circle cx="0" cy="0" r="6" fill="url(#solid-gold)" opacity="0.4"/>
                <circle cx="100" cy="0" r="6" fill="url(#solid-gold)" opacity="0.4"/>
              </pattern>

              {/* Fade the gold pattern into the solid green background */}
              <linearGradient id="green-fade" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2E4A35" stopOpacity="0" />
                <stop offset="70%" stopColor="#2E4A35" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#2E4A35" stopOpacity="1" />
              </linearGradient>
            </defs>
            
            <rect x="0" y="0" width="100%" height="100%" fill="url(#rich-lattice)" />
            <rect x="0" y="0" width="100%" height="100%" fill="url(#green-fade)" />
          </svg>
        </div>

        {/* 2. Double Inner Border (Solid Gold) */}
        <div className="absolute inset-3 md:inset-5 border-2 border-[#D4AF37] opacity-60 rounded-t-[11.5rem] md:rounded-t-[24.5rem] pointer-events-none z-0 shadow-[inset_0_4px_30px_rgba(212,175,55,0.15)]"></div>

        {/* 3. The Illuminated Crescent Moon Apex */}
        <div className="absolute top-12 md:top-16 left-1/2 -translate-x-1/2 z-10 text-[#D4AF37]">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.2"/>
          </svg>
        </div>

        {/* Top Navigation - Alabaster & Gold on Deep Green */}
        <nav className="w-full pt-36 md:pt-48 flex flex-col md:flex-row justify-between items-center px-8 md:px-20 z-20 relative">
          <div className="text-2xl md:text-3xl font-bold tracking-widest text-[#FAF9F6]">
            Amanah
          </div>
          <div className="mt-6 md:mt-0 flex space-x-10 md:space-x-16 text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
            <span className="cursor-pointer hover:text-[#FAF9F6] transition-colors duration-300">Manifesto</span>
            <span className="cursor-pointer hover:text-[#FAF9F6] transition-colors duration-300">Hardware</span>
          </div>
        </nav>

        {/* Main Content Area - Inverted to Alabaster for sharp contrast */}
        <div className="flex-1 flex flex-col items-center justify-center py-20 w-full z-10 relative px-6">
          <div className="max-w-3xl space-y-16 text-center w-full">
            
            {/* Brand Header */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#FAF9F6]">
                Amanah
              </h1>
              <h2 className="text-lg md:text-2xl font-light text-[#D4AF37] uppercase tracking-widest">
                Your Digital Sanctuary
              </h2>
            </div>
            
            {/* The Manifesto */}
            <div className="pt-12 border-t border-[#D4AF37]/30">
              <p className="text-lg md:text-xl leading-relaxed text-[#FAF9F6] font-medium">
                Built on uncompromising modesty, privacy-first technology, and zero tracking. 
              </p>
              <p className="text-md md:text-lg leading-relaxed text-[#FAF9F6]/80 mt-8">
                We are creating an ecosystem designed purely for your peace of mind. No surveillance, no intrusive algorithms. Just a serene gateway to your daily habits and faith.
              </p>
            </div>

            {/* Coming Soon: Hardware */}
            <div className="pt-16 border-t border-[#D4AF37]/30">
              <div className="space-y-8">
                <h3 className="text-xs font-bold tracking-[0.2em] text-[#D4AF37] uppercase">
                  In Development
                </h3>
                <h4 className="text-2xl md:text-3xl font-medium text-[#FAF9F6]">
                  Aerospace Titanium & Ceramic
                </h4>
                <p className="text-md md:text-lg leading-relaxed text-[#FAF9F6]/80">
                  A physical extension of your digital sanctuary. We are engineering a premium wearable device with haptic feedback, completely free of screens and digital distractions. Pure privacy. Quiet luxury.
                </p>
                <div className="pt-8 pb-10">
                  <span className="inline-block border border-[#D4AF37] text-[#D4AF37] px-10 py-4 text-xs uppercase tracking-widest font-semibold hover:bg-[#D4AF37] hover:text-[#2E4A35] transition-all duration-300">
                    Coming Soon
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Official Footer */}
        <footer className="w-full py-8 border-t border-[#D4AF37]/30 opacity-70 text-center z-10 relative">
          <p className="text-xs text-[#FAF9F6] uppercase tracking-wider font-medium">
            Amanah Collective Ltd ©️ 2026
          </p>
        </footer>

      </div>
    </main>
  );
}