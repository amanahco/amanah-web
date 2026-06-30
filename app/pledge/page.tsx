/**
 * UI: Amanah Web Storefront The Privacy Pledge
 * Description: A transparent declaration of Amanah's zero-tracking, offline-first ethics.
 * Focuses on digital sanctuary, absolute privacy, and ethical technology.
 * Designed with strict Quiet Luxury aesthetics. No faces/eyes in imagery.
 * Amanah Collective Ltd ©️ 2026. All Rights Reserved.
 */

import React from 'react';
import Link from 'next/link';

export default function Pledge() {
  return (
    <main className="w-full flex flex-col items-center pt-12 pb-24 px-6 md:px-12 font-sans text-[#051410] bg-[#FAF9F6] min-h-screen overflow-x-hidden">
      
      {/* Elegant Top Navigation */}
      <nav className="w-full max-w-6xl flex justify-between items-center mb-20 uppercase text-[10px] md:text-xs font-bold tracking-[0.2em] border-b border-[#051410]/5 pb-6">
         <Link href="/" className="text-[#B8860B] tracking-[0.3em] hover:text-[#051410] transition-colors duration-300">
           Return to Sanctuary
         </Link>
         <div className="flex gap-4 md:gap-10">
           <Link href="/software" className="hover:text-[#B8860B] transition-colors duration-300">Software</Link>
           <Link href="/hardware" className="hover:text-[#B8860B] transition-colors duration-300">Hardware</Link>
         </div>
      </nav>

      {/* Hero Section */}
      <div className="w-full max-w-4xl flex flex-col items-center text-center mb-24 mt-4">
        <h2 className="text-xs md:text-sm font-bold tracking-[0.3em] text-[#B8860B] mb-6 uppercase">
          Bismillahir Rahmanir Rahim
        </h2>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif mb-10 text-[#051410] tracking-wide leading-tight">
          The Privacy Pledge.
        </h1>
        <p className="text-lg md:text-xl text-[#051410]/80 leading-relaxed max-w-2xl font-serif italic">
          "Faith is an intimate dialogue between the believer and the Creator. It is not data to be harvested."
        </p>
      </div>

      <div className="w-full max-w-4xl flex flex-col gap-16 md:gap-24 mb-32 text-left">

        {/* The Core Ethos */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
          <div className="md:w-1/3">
            <h3 className="text-2xl font-serif text-[#B8860B] border-b border-[#B8860B]/20 pb-4 inline-block">
              Zero Surveillance
            </h3>
          </div>
          <div className="md:w-2/3">
            <p className="text-base md:text-lg leading-relaxed text-[#051410]/90 mb-6">
              The modern digital ecosystem is built on extraction. Applications monitor your habits track your location and monetize your attention. At Amanah we fundamentally reject this model. Your spiritual journey is sacred. We have engineered our software with a total absence of behavioral tracking ensuring your focus remains unbroken and your data remains yours alone.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-[#051410]/90">
              There are no analytics running in the background. We do not know when you open the Quran how many times you slide your tasbih or where you establish your prayer. Absolute privacy is not a feature it is our foundation.
            </p>
          </div>
        </div>

        {/* The Offline Sanctuary (Amanah Vault) */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
          <div className="md:w-1/3">
            <h3 className="text-2xl font-serif text-[#B8860B] border-b border-[#B8860B]/20 pb-4 inline-block">
              The Offline Vault
            </h3>
          </div>
          <div className="md:w-2/3">
            <p className="text-base md:text-lg leading-relaxed text-[#051410]/90 mb-6">
              The Amanah Application operates as a completely self contained digital vault. From the tactile Indo Pak script to the beautifully clear English transliterations every element is stored locally on your device.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-[#051410]/90">
              By removing the need for a constant internet connection we eliminate the possibility of data transmission. You can seamlessly utilize our beginner friendly audio recitations and the Qibla compass in the absolute remotest of locations knowing your device is functioning purely as a quiet tool of remembrance.
            </p>
          </div>
        </div>

        {/* Algorithmic Purity */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
          <div className="md:w-1/3">
            <h3 className="text-2xl font-serif text-[#B8860B] border-b border-[#B8860B]/20 pb-4 inline-block">
              Algorithmic Purity
            </h3>
          </div>
          <div className="md:w-2/3">
            <p className="text-base md:text-lg leading-relaxed text-[#051410]/90 mb-6">
              We do not employ gamification or dopamine driven feedback loops. There are no intrusive notifications urging you to return to the application and no leaderboards to compare your worship with others. 
            </p>
            <p className="text-base md:text-lg leading-relaxed text-[#051410]/90">
              Worship must be driven by pure intention. Amanah exists to serve you when you seek it out and to remain completely silent when you step away. We are building a gateway to tranquility not a mechanism for digital addiction.
            </p>
          </div>
        </div>

      </div>

      {/* Trust Marker */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 text-center">
        
        <div className="bg-white border border-[#B8860B]/20 p-10 rounded-2xl shadow-sm flex flex-col items-center">
          <div className="w-12 h-12 border border-[#B8860B] rounded-full flex items-center justify-center mb-6">
            <div className="w-2 h-2 bg-[#B8860B] rounded-full"></div>
          </div>
          <h4 className="text-lg font-serif text-[#051410] mb-3">No Analytics</h4>
          <p className="text-xs text-[#051410]/70 leading-relaxed uppercase tracking-widest">
            Zero Behavioral Tracking
          </p>
        </div>

        <div className="bg-white border border-[#B8860B]/20 p-10 rounded-2xl shadow-sm flex flex-col items-center">
          <div className="w-12 h-12 border border-[#B8860B] rounded-full flex items-center justify-center mb-6">
             <div className="w-4 h-[1px] bg-[#B8860B]"></div>
          </div>
          <h4 className="text-lg font-serif text-[#051410] mb-3">Local Storage</h4>
          <p className="text-xs text-[#051410]/70 leading-relaxed uppercase tracking-widest">
            100% Offline Capability
          </p>
        </div>

        <div className="bg-white border border-[#B8860B]/20 p-10 rounded-2xl shadow-sm flex flex-col items-center">
          <div className="w-12 h-12 border border-[#B8860B] rounded-full flex items-center justify-center mb-6">
            <div className="w-3 h-3 border border-[#B8860B] rotate-45"></div>
          </div>
          <h4 className="text-lg font-serif text-[#051410] mb-3">Pure Utility</h4>
          <p className="text-xs text-[#051410]/70 leading-relaxed uppercase tracking-widest">
            No Gamification
          </p>
        </div>

      </div>

      {/* Gentle Call to Action */}
      <div className="w-full max-w-3xl bg-[#051410] text-[#FAF9F6] p-12 md:p-16 rounded-[2rem] text-center shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-32 h-32 bg-[#B8860B]/10 rounded-br-full blur-2xl"></div>
        <h3 className="text-2xl md:text-3xl font-serif text-[#B8860B] mb-6 relative z-10">
          Experience the Sanctuary
        </h3>
        <p className="text-sm md:text-base leading-relaxed opacity-90 mb-10 relative z-10 max-w-xl mx-auto">
          Step into a digital space built entirely on respect, modesty, and absolute privacy. Discover the offline tools designed to nurture your daily habits.
        </p>
        <Link href="/software" className="inline-block bg-[#FAF9F6] text-[#051410] px-10 py-4 rounded-full text-xs uppercase tracking-widest font-bold hover:bg-[#B8860B] hover:text-[#FAF9F6] transition-all duration-300 relative z-10">
          Explore The Amanah App
        </Link>
      </div>

    </main>
  );
}