/**
 * UI: Amanah Web Storefront - Hardware Sanctuary (Gallery Frame)
 * Description: Solves the "sticker" effect by intentionally framing the 
 * baked-in beige Copilot image within a premium Alabaster border.
 * Integrates a subtle Sanctuary background to unify with the home page.
 * Amanah Collective Ltd ©️ 2026
 */

import React from 'react';
import Link from 'next/link';

export default function Hardware() {
  return (
    <main className="min-h-screen relative flex flex-col items-center pt-12 pb-16 px-4 md:px-12">
      
      {/* 1. Subtle Sanctuary Background to match Home Page */}
      <div className="fixed inset-0 z-0">
        {/* We use your existing archway image, heavily faded, so it feels like the same building */}
        <div className="absolute inset-0 bg-[url('/amanah-sanctuary-bg.png')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-[#FAF9F6]/90 backdrop-blur-md"></div>
      </div>

      {/* 2. Interactive Content Layer */}
      <div className="relative z-10 w-full max-w-5xl flex flex-col items-center">
        
        {/* Top Navigation - Styled as a modern, floating pill */}
        <nav className="w-full flex justify-center items-center gap-x-8 text-[10px] md:text-xs font-bold tracking-[0.2em] text-[#051410] mb-10 uppercase bg-[#FAF9F6] py-4 px-8 rounded-full shadow-sm max-w-md mx-auto border border-[#051410]/5">
          <Link href="/" className="hover:text-[#B8860B] transition-colors">Return to Sanctuary</Link>
          <span className="opacity-30">|</span>
          <Link href="/login" className="hover:text-[#B8860B] transition-colors">Member Access</Link>
        </nav>

        {/* The Copilot Image - Framed intentionally as Premium Artwork */}
        <div className="w-full bg-[#FAF9F6] p-4 md:p-6 rounded-[2rem] md:rounded-[3rem] shadow-2xl border border-[#B8860B]/10">
          <div className="w-full rounded-xl md:rounded-[2rem] overflow-hidden">
            <img 
              src="/amanah-ring-concept.png" 
              alt="Amanah Co Dhikr Smart Rings" 
              className="w-full h-auto block"
            />
          </div>
        </div>

        {/* Official Footer */}
        <footer className="mt-12 text-center">
          <p className="text-[10px] font-bold tracking-[0.2em] text-[#051410]/60 uppercase">
            Amanah Collective Ltd ©️ 2026
          </p>
        </footer>

      </div>
    </main>
  );
}