/**
 * UI: Amanah Web Storefront - Hardware Sanctuary
 * Description: Premium dark mode presentation of the Titanium & Ceramic Ring.
 * Updated to include the new centered navigation and 'Member Access' placeholder.
 * Amanah Collective Ltd ©️ 2026
 */

import React from 'react';
import Link from 'next/link';

export default function Hardware() {
  return (
    <main className="min-h-screen bg-[#051410] flex flex-col items-center pt-24 px-6 md:px-12 pb-16 overflow-x-hidden">
      
      {/* Top Navigation Bar - Matching the new perfect layout */}
      <nav className="w-full max-w-4xl flex flex-wrap justify-between items-center mb-24 border-b border-[#B8860B]/20 pb-6 gap-y-6">
        <Link href="/" className="text-xl md:text-2xl font-bold tracking-widest text-[#FAF9F6] hover:text-[#B8860B] transition-colors">
          Amanah
        </Link>
        <div className="flex items-center gap-x-6 text-[10px] md:text-xs font-bold tracking-[0.15em] text-[#B8860B] uppercase">
          <Link href="/" className="hover:text-[#FAF9F6] transition-colors">Sanctuary</Link>
          <Link href="/login" className="px-4 py-2 border border-[#B8860B] hover:bg-[#B8860B] hover:text-[#051410] transition-colors">
            Member Access
          </Link>
        </div>
      </nav>

      {/* Main Hardware Showcase */}
      <div className="w-full max-w-3xl flex flex-col items-center text-center mt-8">
        
        <div className="text-[#B8860B] text-xs tracking-[0.2em] font-bold mb-6 uppercase">
          In Development
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#FAF9F6] mb-8 drop-shadow-sm">
          Aerospace Titanium <br />
          <span className="text-[#B8860B]">& Ceramic</span>
        </h1>

        <div className="w-16 h-[1px] bg-[#B8860B]/50 mb-12"></div>

        {/* Core Philosophy & Materials */}
        <div className="text-[#FAF9F6]/90 text-base md:text-lg leading-relaxed space-y-8 max-w-2xl mx-auto font-medium">
          <p>
            A physical extension of your digital sanctuary. We are engineering a premium wearable device crafted from uncompromising materials.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 text-left">
            {/* Feature 1 */}
            <div className="space-y-4">
              <h3 className="text-[#B8860B] text-xs tracking-[0.2em] uppercase font-bold">Zero Screens</h3>
              <p className="text-sm leading-relaxed text-[#FAF9F6]/80">
                Designed to remove digital distractions. Intuitive haptic feedback gently guides your daily habits without demanding your visual attention.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="space-y-4">
              <h3 className="text-[#B8860B] text-xs tracking-[0.2em] uppercase font-bold">Privacy First</h3>
              <p className="text-sm leading-relaxed text-[#FAF9F6]/80">
                Built on an absolute zero-tracking architecture. Your data remains yours. No surveillance, no cloud harvesting, pure peace of mind.
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Official Footer */}
      <footer className="mt-auto pt-32 pb-8 flex flex-col items-center gap-6 w-full max-w-4xl border-t border-[#B8860B]/10">
        <p className="text-[10px] md:text-xs font-semibold tracking-[0.15em] text-[#B8860B] uppercase opacity-70">
          Amanah Collective Ltd ©️ 2026
        </p>
      </footer>

    </main>
  );
}