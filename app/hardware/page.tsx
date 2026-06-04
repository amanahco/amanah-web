/**
 * UI: Amanah Web Storefront - Hardware Sanctuary
 * Description: Premium, minimalist layout matching the homepage aesthetic.
 * Amanah Collective Ltd ©️ 2026
 */

import React from 'react';
import Link from 'next/link';

export default function Hardware() {
  return (
    <main className="min-h-screen bg-[#FAF9F6] flex flex-col items-center pt-24 pb-24 px-6 md:px-12">
      
      {/* Navigation */}
      <nav className="w-full max-w-5xl flex justify-center items-center gap-10 text-xs font-bold tracking-[0.25em] text-[#051410] mb-20 uppercase">
        <Link href="/" className="hover:text-[#B8860B] transition-colors">Return to Sanctuary</Link>
        <div className="w-[1px] h-4 bg-[#051410]/20"></div>
        <Link href="/login" className="hover:text-[#B8860B] transition-colors">Member Access</Link>
      </nav>

      {/* Hero Section */}
      <div className="w-full max-w-4xl flex flex-col items-center text-center">
        <h2 className="text-[10px] tracking-[0.3em] font-bold text-[#B8860B] uppercase mb-6">In Development</h2>
        <h1 className="text-4xl md:text-5xl font-serif text-[#051410] mb-12">Silent Companions.</h1>
        
        {/* The Clean Concept Image */}
        <div className="w-full mb-16 rounded-2xl overflow-hidden shadow-2xl bg-[#EAE6DF] border border-[#051410]/10">
          <img 
            src="/amanah-ring-concept.png" 
            alt="Amanah Ci Dhikr Smart Rings" 
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Description Section - Matching Homepage Elegance */}
        <div className="max-w-2xl space-y-8">
          <p className="text-lg md:text-xl font-serif text-[#051410] leading-relaxed italic">
            "Sculpted with the subtle permanence of aerospace titanium and rose gold, unified by a smooth dark ceramic core."
          </p>
          <p className="text-sm md:text-base text-[#051410]/70 leading-loose">
            Designed entirely for Dhikr and Tasbih, the Amanah Ci ring acts as a discrete haptic companion for your daily spiritual journey. By removing screens and intrusive data tracking, we restore the sanctity of your focus.
          </p>
        </div>

        {/* Call to Action */}
        <div className="mt-20">
          <Link href="/login" className="px-8 py-4 bg-[#051410] text-[#FAF9F6] text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#B8860B] transition-all duration-300">
            Secure Your Access
          </Link>
        </div>

      </div>

      <footer className="mt-32 text-[10px] font-bold tracking-[0.2em] text-[#051410]/40 uppercase">
        Amanah Collective Ltd ©️ 2026
      </footer>

    </main>
  );
}