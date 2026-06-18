/**
 * UI: Amanah Web Storefront - Software Ecosystem
 * Description: Cinematic showcase of the Amanah Application.
 * Highlights the True Offline Quran Engine (Indo-Pak script),
 * completely faceless visual guides, and zero-tracking architecture.
 * Amanah Collective Ltd ©️ 2026
 */

import React from 'react';
import Link from 'next/link';

export default function Software() {
  return (
    <main className="w-full flex flex-col items-center pt-12 pb-24 px-6 md:px-12 font-sans text-[#051410] overflow-x-hidden">
      
      {/* Elegant Top Navigation */}
      <nav className="w-full max-w-6xl flex justify-between items-center mb-16 uppercase text-[10px] md:text-xs font-bold tracking-[0.2em] border-b border-[#051410]/5 pb-6">
         <Link href="/" className="text-[#B8860B] tracking-[0.3em] hover:text-[#051410] transition-colors duration-300">
           Return to Sanctuary
         </Link>
         <div className="flex gap-6 md:gap-10">
           <Link href="/hardware" className="hover:text-[#B8860B] transition-colors duration-300">Hardware</Link>
           <Link href="/login" className="hover:text-[#B8860B] transition-colors duration-300">Member Access</Link>
         </div>
      </nav>

      {/* Hero Section */}
      <div className="w-full max-w-5xl flex flex-col items-center text-center mb-24 mt-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-8 text-[#051410] tracking-wide">
          Pure Focus. Zero Distraction.
        </h1>
        <p className="text-base md:text-lg text-[#051410]/80 leading-relaxed max-w-2xl font-medium mb-12">
          The Amanah Application is a digital fortress for your faith. No behavior tracking, no gamified streaks, and no intrusive algorithms. Just quiet luxury and profound tranquility.
        </p>

        {/* Temporary App Store Badges */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <div className="border border-[#051410]/20 px-8 py-3 rounded-xl flex flex-col items-center justify-center bg-[#FAF9F6] shadow-sm opacity-70 cursor-not-allowed">
             <span className="text-[10px] uppercase tracking-widest font-bold text-[#B8860B] mb-1">App Store</span>
             <span className="text-xs font-semibold text-[#051410]">Pending Review</span>
          </div>
          <div className="border border-[#051410]/20 px-8 py-3 rounded-xl flex flex-col items-center justify-center bg-[#FAF9F6] shadow-sm opacity-70 cursor-not-allowed">
             <span className="text-[10px] uppercase tracking-widest font-bold text-[#B8860B] mb-1">Google Play</span>
             <span className="text-xs font-semibold text-[#051410]">Pending Review</span>
          </div>
        </div>
      </div>

{/* Feature Grid Architecture */}
<div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Core Feature 1: The Quran Engine */}
        <div className="bg-[#051410] text-[#FAF9F6] p-10 rounded-[2rem] flex flex-col h-full shadow-xl relative overflow-hidden border border-[#B8860B]/20">
          <div className="absolute top-0 right-0 w-24 h-24 bg-[#B8860B]/10 rounded-bl-full blur-xl"></div>
          <h3 className="text-xl font-serif text-[#B8860B] mb-4 relative z-10">True Offline Quran</h3>
          <p className="text-sm leading-relaxed opacity-90 relative z-10 flex-grow">
            Built from the ground up to support the familiar, tactile Indo-Pak script. Seamlessly toggle to Uthmani text with permanent, private ayah-level bookmarking. Completely accessible without an internet connection.
          </p>
        </div>

        {/* Core Feature 2: Visual Education */}
        <div className="bg-[#051410] text-[#FAF9F6] p-10 rounded-[2rem] flex flex-col h-full shadow-xl relative overflow-hidden border border-[#B8860B]/20">
          <div className="absolute top-0 right-0 w-24 h-24 bg-[#B8860B]/10 rounded-bl-full blur-xl"></div>
          <h3 className="text-xl font-serif text-[#B8860B] mb-4 relative z-10">Uncompromising Etiquette</h3>
          <p className="text-sm leading-relaxed opacity-90 relative z-10 flex-grow">
            Our step-by-step visual guides for Wudu and Salah are crafted with pure ethical representation. Utilizing dignified male silhouettes only, ensuring an environment of utmost modesty and respect.
          </p>
        </div>

        {/* Core Feature 3: The Sanctuary */}
        <div className="bg-[#051410] text-[#FAF9F6] p-10 rounded-[2rem] flex flex-col h-full shadow-xl relative overflow-hidden border border-[#B8860B]/20">
           <div className="absolute top-0 right-0 w-24 h-24 bg-[#B8860B]/10 rounded-bl-full blur-xl"></div>
          <h3 className="text-xl font-serif text-[#B8860B] mb-4 relative z-10">The Jumu'ah Hub</h3>
          <p className="text-sm leading-relaxed opacity-90 relative z-10 flex-grow">
            A dedicated portal featuring the minimalist Qibla Sensor, continuous Surah Al-Kahf hifz loops, and a structured Sunnah checklist. Experience a digital environment that honours your spiritual rhythm.
          </p>
        </div>

      </div>

    </main>
  );
}