/**
 * UI: Amanah Web Storefront - Hardware Sanctuary (Minimalist Reset)
 * Description: Clean-slate layout. Removes all conflicting HTML text and branding errors.
 * Displays the high-quality concept image as the sole visual focus.
 * Amanah Collective Ltd ©️ 2026
 */

import React from 'react';
import Link from 'next/link';

export default function Hardware() {
  return (
    <main className="min-h-screen bg-[#FAF9F6] flex flex-col items-center pt-16 pb-16 px-4">
      
      {/* Navigation */}
      <nav className="w-full max-w-4xl mx-auto flex justify-center items-center gap-x-10 text-[10px] md:text-xs font-bold tracking-[0.2em] text-[#051410] mb-12 uppercase">
        <Link href="/" className="hover:text-[#B8860B] transition-colors">Return to Sanctuary</Link>
        <span className="opacity-30">|</span>
        <Link href="/login" className="hover:text-[#B8860B] transition-colors">Member Access</Link>
      </nav>

      {/* Hero Image - Zero HTML text overlay to prevent conflicts */}
      <div className="w-full max-w-5xl">
        <img 
          src="/amanah-ring-concept.png" 
          alt="Amanah Co Dhikr Smart Rings" 
          className="w-full h-auto rounded-2xl shadow-xl"
        />
      </div>

      {/* Simple Footer */}
      <footer className="mt-16 text-[10px] font-bold tracking-[0.2em] text-[#051410]/50 uppercase">
        Amanah Collective Ltd ©️ 2026
      </footer>

    </main>
  );
}