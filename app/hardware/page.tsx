/**
 * UI: Amanah Web Storefront - Hardware Sanctuary
 * Description: Fully integrated poster layout. 
 * Restored top navigation and changed background to pure Alabaster (#FAF9F6) 
 * so the baked-in Copilot image blends flawlessly into the website architecture.
 * Amanah Collective Ltd ©️ 2026
 */

import React from 'react';
import Link from 'next/link';

export default function Hardware() {
  return (
    <main className="min-h-screen bg-[#FAF9F6] flex flex-col items-center pt-12 md:pt-16 px-4 md:px-10 pb-16 overflow-x-hidden">
      
      {/* Restored Website Navigation - Keeps the user connected to the storefront */}
      <nav className="w-full max-w-4xl mx-auto flex justify-center items-center gap-x-8 md:gap-x-12 text-[10px] md:text-xs font-bold tracking-[0.2em] text-[#B8860B] mb-12 uppercase drop-shadow-sm">
        <Link href="/" className="hover:text-[#051410] transition-colors duration-300">
          Return to Sanctuary
        </Link>
        <span className="text-[#B8860B]/30">|</span>
        <Link href="/login" className="hover:text-[#051410] transition-colors duration-300">
          Member Access
        </Link>
      </nav>

      {/* The Showcase Presentation */}
      <div className="w-full max-w-5xl flex flex-col items-center">
        
        {/* The Copilot Image - Framed to look native and premium */}
        <div className="w-full relative shadow-2xl rounded-2xl md:rounded-[2rem] overflow-hidden border border-[#051410]/5 bg-[#FAF9F6]">
          <img 
            src="/amanah-ring-concept.png" 
            alt="Amanah Ci Dhikr Smart Rings" 
            className="w-full h-auto block object-cover"
          />
        </div>

      </div>

      {/* Official Footer */}
      <footer className="mt-20 text-center relative z-20">
        <p className="text-[10px] font-bold tracking-[0.2em] text-[#051410]/60 uppercase">
          Amanah Collective Ltd ©️ 2026
        </p>
      </footer>

    </main>
  );
}