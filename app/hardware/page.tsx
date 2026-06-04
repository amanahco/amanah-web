/**
 * UI: Amanah Web Storefront - Hardware Sanctuary
 * Description: Travertine marble aesthetic.
 * Features the Amanah Ci Dhikr Smart Ring (Titanium & Rose Gold with unified ceramic core).
 * Updated text to reflect the true, gem-less design.
 * Amanah Collective Ltd ©️ 2026
 */

import React from 'react';
import Link from 'next/link';

export default function Hardware() {
  return (
    <main className="min-h-screen flex flex-col items-center pt-8 pb-16 overflow-x-hidden relative">
      
      {/* 1. The Fixed Travertine Architecture */}
      <div className="fixed inset-0 w-full h-[100dvh] z-0 overflow-hidden bg-[#EAE6DF]">
        <div className="absolute inset-0 w-full h-full opacity-60 bg-[url('/amanah-sanctuary-bg.png')] bg-cover bg-center mix-blend-multiply"></div>
      </div>

      {/* 2. The Interactive Sanctuary */}
      <div className="relative z-10 w-full max-w-6xl flex flex-col items-center text-center mt-4 px-4 md:px-10">

        {/* Top Header / Branding */}
        <h2 className="text-xl md:text-2xl font-serif tracking-widest text-[#B8860B] mb-12 drop-shadow-sm mt-4">
          Amanah
        </h2>

        {/* Central Exhibition Box */}
        <div className="relative w-full max-w-5xl bg-[#FAF9F6] rounded-[2rem] md:rounded-[3rem] shadow-2xl overflow-hidden flex flex-col md:flex-row p-6 md:p-12 mt-4">
          
          {/* Main Image Container */}
          <div className="w-full md:w-2/3 flex flex-col justify-center items-center relative z-10 mb-8 md:mb-0">
            <img 
              src="/amanah-ring-concept.png" 
              alt="Amanah Ci Dhikr Smart Rings - Titanium and Rose Gold" 
              className="w-full max-w-2xl h-auto object-cover rounded-xl mb-12"
            />
            
            {/* Typography & Core Features */}
            <div className="text-center px-4">
              <h1 className="text-3xl md:text-4xl font-serif text-[#051410] mb-4">
                Silent Companions for Your Journey.
              </h1>
              <p className="text-[#051410]/80 text-sm md:text-base max-w-lg mx-auto font-medium leading-relaxed mb-8">
                Sculpted with the subtle permanence of brushed titanium and polished rose gold, unified by a smooth, dark ceramic core. Designed completely free of distractions, keeping Dhikr at the heart of your daily life.
              </p>
              
              <div className="flex flex-wrap justify-center gap-6 text-[#051410] text-xs font-bold tracking-widest uppercase">
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                  Discreet Haptic Focus.
                </span>
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                  Biocompatible and Hard-wearing.
                </span>
              </div>
            </div>
          </div>

          {/* Floating Member Access Box */}
          <div className="w-full md:w-1/3 md:absolute md:bottom-12 md:right-12 bg-[#1A2E28] text-[#FAF9F6] p-8 rounded-2xl shadow-xl z-20 flex flex-col justify-center">
            <h3 className="text-xl font-serif text-[#B8860B] mb-6">Fund Your Privacy.</h3>
            
            <div className="space-y-6 mb-8 text-sm">
              <div className="flex items-start gap-3">
                <span className="text-[#B8860B] mt-1">→</span>
                <p><strong className="block text-[#FAF9F6]">Amanah Sanctuary Access.</strong> Looping Hifz audio, daily tafsir reflections.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#B8860B] mt-1">☖</span>
                <p><strong className="block text-[#FAF9F6]">Founder's Hardware Tier.</strong> Early access to rings, discounts, complete data sovereignty.</p>
              </div>
            </div>

            <Link href="/login" className="block text-center bg-[#B8860B] text-[#051410] py-3 px-6 rounded text-xs font-bold tracking-widest uppercase hover:bg-[#FAF9F6] transition-colors duration-300">
              Explore Tiers
            </Link>
            
            <p className="text-[10px] text-[#FAF9F6]/50 mt-6 tracking-wider uppercase text-center">
              Amanah Project 2026
            </p>
          </div>

        </div>
        
        {/* Simple back navigation */}
        <div className="mt-12 text-center relative z-20">
          <Link href="/" className="text-xs font-bold tracking-[0.2em] text-[#051410] hover:text-[#B8860B] transition-colors uppercase">
            ← Return to Gateway
          </Link>
        </div>

      </div>
    </main>
  );
}