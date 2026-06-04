/**
 * UI: Amanah Web Storefront - Hardware Sanctuary
 * Description: Unified Alabaster aesthetic to maintain flawless continuity with the gateway.
 * Added a central exhibition space for the Titanium & Ceramic concept ring image.
 * Amanah Collective Ltd ©️ 2026
 */

import React from 'react';
import Link from 'next/link';

export default function Hardware() {
  return (
    <main className="min-h-screen bg-[#FAF9F6] flex flex-col items-center pt-24 md:pt-32 px-6 md:px-12 pb-16 overflow-x-hidden">
      
      {/* Unified Navigation - Matching the Home Page aesthetic */}
      <nav className="w-full max-w-md mx-auto flex flex-wrap justify-center items-center gap-x-6 gap-y-4 md:gap-x-10 text-[10px] md:text-xs font-bold tracking-[0.15em] text-[#B8860B] mb-20 drop-shadow-md uppercase">
        <Link href="/" className="cursor-pointer hover:text-[#0b2f28] transition-colors">Return to Sanctuary</Link>
        <Link href="/login" className="cursor-pointer hover:text-[#0b2f28] transition-colors text-center leading-[1.2] border-l border-[#B8860B]/30 pl-6 md:pl-10">
          Member<br />Access
        </Link>
      </nav>

      {/* Main Hardware Showcase */}
      <div className="w-full max-w-4xl flex flex-col items-center text-center mt-4">
        
        <div className="text-[#B8860B] text-xs tracking-[0.2em] font-bold mb-6 uppercase">
          In Development
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#051410] mb-8 drop-shadow-sm">
          Aerospace Titanium <br />
          <span className="text-[#B8860B]">& Ceramic</span>
        </h1>

        <div className="w-16 h-[1px] bg-[#B8860B]/50 mb-16"></div>

        {/* The Concept Ring Exhibition Space */}
        {/* ACTION: Save your ring image as 'amanah-ring-concept.png' in the public folder */}
        <div className="relative w-full max-w-2xl aspect-square md:aspect-video mb-20 flex items-center justify-center bg-[#051410]/5 rounded-3xl overflow-hidden shadow-inner">
          <img 
            src="/amanah-ring-concept.png" 
            alt="Amanah Aerospace Titanium Smart Ring" 
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Core Philosophy & Materials */}
        <div className="text-[#051410] text-base md:text-lg leading-relaxed space-y-8 max-w-2xl mx-auto font-medium">
          <p>
            A physical extension of your digital sanctuary. We are engineering a premium wearable device crafted from uncompromising materials.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 text-left">
            {/* Feature 1 */}
            <div className="space-y-4">
              <h3 className="text-[#B8860B] text-xs tracking-[0.2em] uppercase font-bold">Zero Screens</h3>
              <p className="text-sm leading-relaxed text-[#051410]/80">
                Designed to remove digital distractions. Intuitive haptic feedback gently guides your daily habits without demanding your visual attention.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="space-y-4">
              <h3 className="text-[#B8860B] text-xs tracking-[0.2em] uppercase font-bold">Privacy First</h3>
              <p className="text-sm leading-relaxed text-[#051410]/80">
                Built on an absolute zero-tracking architecture. Your data remains yours. No surveillance, no cloud harvesting, pure peace of mind.
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Official Footer */}
      <footer className="mt-auto pt-32 pb-8 flex flex-col items-center gap-6 w-full max-w-4xl">
        <p className="text-[10px] md:text-xs font-semibold tracking-[0.15em] text-[#051410] uppercase opacity-80">
          Amanah Collective Ltd ©️ 2026
        </p>
      </footer>

    </main>
  );
}