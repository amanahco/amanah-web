/**
 * UI: Amanah Web Storefront - Hardware Sanctuary (Poster Layout)
 * Description: Cleaned up the chaotic background to a solid travertine color. 
 * Since the current concept image contains all the text and UI elements baked in, 
 * HTML text duplicates have been removed to present the image beautifully as a full poster.
 * Amanah Collective Ltd ©️ 2026
 */

import React from 'react';
import Link from 'next/link';

export default function Hardware() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center pt-12 pb-16 overflow-x-hidden bg-[#EAE6DF]">
      
      {/* The Poster Showcase */}
      <div className="relative w-full max-w-6xl px-4 md:px-10 flex flex-col items-center mt-4">
        
        {/* Displaying the full concept mockup as a unified poster */}
        <img 
          src="/amanah-ring-concept.png" 
          alt="Amanah Ci Dhikr Smart Rings Presentation" 
          className="w-full h-auto rounded-2xl md:rounded-[2rem] shadow-2xl border border-[#051410]/5"
        />

        {/* Simple back navigation */}
        <div className="mt-16 text-center relative z-20">
          <Link href="/" className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-[#051410] hover:text-[#B8860B] transition-colors uppercase">
            ← Return to Gateway
          </Link>
        </div>

      </div>
    </main>
  );
}