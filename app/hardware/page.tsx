/**
 * UI: Amanah Web Storefront - Hardware Sanctuary (Seamless Integration)
 * Description: Removes all "card" effects (shadows, rounded corners).
 * Applies mix-blend-multiply to dissolve the image's background into the 
 * Alabaster webpage, making the baked-in design look completely native.
 * Amanah Collective Ltd ©️ 2026
 */

import React from 'react';
import Link from 'next/link';

export default function Hardware() {
  return (
    <main className="min-h-screen bg-[#FAF9F6] flex flex-col items-center pt-16 pb-16 px-4">
      
      {/* Navigation - Clean and connected to the gateway */}
      <nav className="w-full max-w-4xl mx-auto flex justify-center items-center gap-x-10 text-[10px] md:text-xs font-bold tracking-[0.2em] text-[#051410] mb-8 uppercase">
        <Link href="/" className="hover:text-[#B8860B] transition-colors duration-300">Return to Sanctuary</Link>
        <span className="opacity-30">|</span>
        <Link href="/login" className="hover:text-[#B8860B] transition-colors duration-300">Member Access</Link>
      </nav>

      {/* Hero Image - Seamlessly blended into the Alabaster background */}
      <div className="w-full max-w-5xl flex justify-center items-center">
        <img 
          src="/amanah-ring-concept.png" 
          alt="Amanah Dhikr Smart Rings" 
          className="w-full h-auto object-contain mix-blend-multiply"
        />
      </div>

      {/* Official Footer */}
      <footer className="mt-12 text-[10px] font-bold tracking-[0.2em] text-[#051410]/50 uppercase">
        Amanah Collective Ltd ©️ 2026
      </footer>

    </main>
  );
}