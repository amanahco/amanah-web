/**
 * UI: Amanah Web Storefront - Hardware Sanctuary (Gemini Masterpiece)
 * Description: Cinematic gallery layout using the perfected Gemini image.
 * Uses an aggressive CSS crop (`scale-[1.15] translate-y-4 translate-x-4`) 
 * to completely eradicate the stubborn Gemini watermark.
 * Features the corrected "Founder's Access" luxury copy.
 * Amanah Collective Ltd ©️ 2026
 */

import React from 'react';
import Link from 'next/link';

export default function Hardware() {
  return (
    <main className="min-h-screen bg-[#FAF9F6] flex flex-col items-center pt-12 pb-24 px-6 md:px-12 font-sans text-[#051410] overflow-x-hidden">
      
      {/* Elegant Top Navigation */}
      <nav className="w-full max-w-6xl flex justify-between items-center mb-16 uppercase text-[10px] md:text-xs font-bold tracking-[0.2em] border-b border-[#051410]/5 pb-6">
         <Link href="/" className="text-[#B8860B] tracking-[0.3em] hover:text-[#051410] transition-colors duration-300">
           Return to Sanctuary
         </Link>
         <div className="flex gap-6 md:gap-10">
           <Link href="/" className="hover:text-[#B8860B] transition-colors duration-300">Sanctuary</Link>
           <Link href="/login" className="hover:text-[#B8860B] transition-colors duration-300">Member Access</Link>
         </div>
      </nav>

      {/* Hero Section */}
      <div className="w-full max-w-5xl flex flex-col items-center text-center mb-20 mt-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-12 text-[#051410] tracking-wide">
          Silent Companions.
        </h1>
        
        {/* THE CLEAN CONCEPT IMAGE - Framed perfectly with aggressive CSS crop to kill watermark */}
        <div className="w-full rounded-[2rem] overflow-hidden shadow-2xl border border-[#B8860B]/10 bg-[#EAE6DF]">
          <img 
            src="/amanah-ring-concept.png" 
            alt="Amanah Dhikr Smart Rings with Islamic Arch Etching" 
            className="w-full h-auto object-cover transform scale-[1.15] translate-y-4 translate-x-4 hover:scale-[1.18] transition-transform duration-700 ease-in-out"
          />
        </div>
      </div>

      {/* Details & Founder's Box Layout */}
      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start text-left">
        
        {/* Left Column: Product Details */}
        <div className="flex flex-col mt-4">
          <p className="text-xl md:text-2xl text-[#051410] leading-relaxed font-serif italic mb-8">
            "Sculpted with the subtle permanence of aerospace titanium and premium rose gold, unified by a smooth, dark ceramic core."
          </p>
          <p className="text-sm text-[#051410]/80 leading-loose mb-12">
            Designed entirely for Dhikr and Tasbih, the Amanah ring acts as a discrete haptic companion for your daily spiritual journey. By eliminating screens and intrusive data tracking, we restore the sanctity of your focus and faith.
          </p>
          
          <div className="flex flex-col gap-6 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-[#051410]">
            <div className="flex items-center gap-4">
               <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#B8860B]/10 text-[#B8860B]">
                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
               </span>
               Discreet Haptic Focus
            </div>
            <div className="flex items-center gap-4">
               <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#B8860B]/10 text-[#B8860B]">
                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
               </span>
               Biocompatible & Hard-wearing
            </div>
            <div className="flex items-center gap-4">
               <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#B8860B]/10 text-[#B8860B]">
                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
               </span>
               Zero Data Surveillance
            </div>
          </div>
        </div>

        {/* Right Column: Founder's Tier Box */}
        <div className="bg-[#051410] text-[#FAF9F6] p-10 md:p-14 rounded-[2rem] shadow-2xl relative overflow-hidden border border-[#B8860B]/20">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#B8860B]/10 rounded-bl-[100px] blur-2xl"></div>
          
          <h3 className="text-2xl md:text-3xl font-serif text-[#B8860B] mb-10 relative z-10">Founder's Access.</h3>
          
          <div className="space-y-8 mb-12 text-sm leading-relaxed relative z-10">
            <div className="flex items-start gap-4">
              <span className="text-[#B8860B] font-bold text-lg mt-[-3px]">→</span>
              <p><strong className="block text-[#FAF9F6] mb-2 font-serif text-lg tracking-wide">Sanctuary Membership.</strong> Looping Hifz audio, daily tafsir reflections, and a completely ad-free environment.</p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-[#B8860B] font-bold text-lg mt-[-3px]">☖</span>
              <p><strong className="block text-[#FAF9F6] mb-2 font-serif text-lg tracking-wide">Hardware Allocation.</strong> Early access to the Dhikr rings, priority discounts, and absolute data sovereignty.</p>
            </div>
          </div>

          <Link href="/login" className="block text-center bg-[#B8860B] text-[#051410] py-4 px-6 rounded-full text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#FAF9F6] transition-colors duration-300 w-full shadow-lg relative z-10">
            Secure Your Allocation
          </Link>
        </div>
      </div>

      {/* Official Footer */}
      <footer className="mt-32 text-center border-t border-[#051410]/10 w-full max-w-6xl pt-10">
        <p className="text-[10px] font-bold tracking-[0.3em] text-[#051410]/40 uppercase">
          Amanah Collective Ltd ©️ 2026
        </p>
      </footer>
      
    </main>
  );
}