/**
 * UI: Amanah Web Storefront - Inner Sanctuary Dashboard
 * Description: The distraction-free foundation for members.
 * STRICT PROTOCOL APPLIED: UK English. No performance tracking or streaks.
 * © 2026 Amanah Co. & Gemini Collaboration. All Rights Reserved.
 */

import React from 'react';
import Link from 'next/link';

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-[#FAF9F6] flex flex-col items-center pt-12 pb-24 px-6 md:px-12 font-sans text-[#051410] overflow-x-hidden">
      
      {/* Top Navigation */}
      <nav className="w-full max-w-6xl flex justify-between items-center mb-16 uppercase text-[10px] md:text-xs font-bold tracking-[0.2em] border-b border-[#051410]/5 pb-6">
         <span className="text-[#B8860B] tracking-[0.3em]">
           The Sanctuary
         </span>
         <div className="flex gap-6 md:gap-10">
           <Link href="/hardware" className="hover:text-[#B8860B] transition-colors duration-300">Hardware</Link>
           <Link href="/" className="hover:text-[#B8860B] transition-colors duration-300">Log Out</Link>
         </div>
      </nav>

      {/* Spiritual Anchor: Dates and Prayer Reminder */}
      <div className="w-full max-w-5xl flex flex-col items-center text-center mb-20 mt-4">
         <div className="flex flex-col md:flex-row items-center gap-4 md:gap-12 mb-10">
            <p className="text-sm md:text-base font-serif text-[#051410]/70">15 June 2026</p>
            <div className="hidden md:block w-1 h-1 rounded-full bg-[#B8860B]"></div>
            <p className="text-xl md:text-2xl font-serif text-[#B8860B]">30 Dhu al-Hijjah 1447</p>
         </div>
         
         <div className="px-8 py-4 bg-[#051410] rounded-full shadow-lg">
            <p className="text-[#FAF9F6] text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">
               Next Prayer: Asr <span className="text-[#B8860B] mx-2">•</span> Disconnect and worship
            </p>
         </div>
      </div>

      {/* Dashboard Modules Placeholder */}
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Daily Reflection Module */}
        <div className="border border-[#051410]/10 rounded-[2rem] p-10 bg-white shadow-sm flex flex-col justify-center items-center text-center min-h-[300px] hover:border-[#B8860B]/30 transition-colors duration-300 cursor-pointer">
           <span className="text-[#B8860B] mb-4">
             <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
           </span>
           <h3 className="text-xl font-serif text-[#051410] mb-2">Daily Reflection</h3>
           <p className="text-[10px] uppercase tracking-[0.2em] text-[#051410]/50 font-bold">Knowledge Hub</p>
        </div>

{/* Section 3: Sanctuary Audio */}
<section className="bg-[#051410] rounded-3xl p-8 text-center text-stone-200 border border-[#B8860B]/20 relative overflow-hidden">
          {/* Subtle Arch Background */}
          <div className="absolute inset-0 opacity-5 pointer-events-none flex justify-center items-center">
             <div className="w-64 h-80 border border-stone-200 rounded-t-full"></div>
          </div>
          
          <div className="relative z-10">
            <h2 className="text-xl font-serif text-[#B8860B] mb-2 tracking-wide">Continuous Hifz</h2>
            <p className="text-xs uppercase tracking-[0.2em] opacity-60 mb-8">Pure Loop • Zero Tracking</p>
            
            {/* The Minimal Player Interface */}
            <div className="flex flex-col items-center gap-6 max-w-sm mx-auto">
              
              {/* Now Playing Info */}
              <div className="text-center mb-4">
                <h3 className="text-lg font-semibold tracking-wide">Surah Al-Mulk</h3>
                <p className="text-sm opacity-50 mt-1">Mishary Rashid Alafasy</p>
              </div>

              {/* Loop Controls */}
              <div className="flex items-center justify-center gap-8 w-full bg-stone-900/50 p-4 rounded-full border border-stone-800">
                <button className="text-stone-400 hover:text-[#B8860B] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
                </button>
                
                <button className="bg-[#B8860B] text-[#051410] w-12 h-12 rounded-full flex items-center justify-center hover:scale-105 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                </button>

                <button className="text-stone-400 hover:text-[#B8860B] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 4 15 12 5 20 5 4"/><line x1="19" y1="5" x2="19" y2="19"/></svg>
                </button>
              </div>

              {/* Minimal Progress Bar */}
              <div className="w-full mt-2">
                <div className="h-1 bg-stone-800 rounded-full overflow-hidden">
                  <div className="h-full bg-[#B8860B] w-1/3"></div>
                </div>
                <div className="flex justify-between text-[10px] text-stone-500 mt-2 font-mono">
                  <span>02:45</span>
                  <span>08:30</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="border border-[#051410]/10 rounded-[2rem] p-10 bg-[#EAE6DF] shadow-sm flex flex-col justify-center items-center text-center min-h-[300px] hover:border-[#B8860B]/30 transition-colors duration-300 cursor-pointer">
           <span className="text-[#051410] mb-4">
             <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"></path></svg>
           </span>
           <h3 className="text-xl font-serif text-[#051410] mb-2">Hifz Audio Player</h3>
           <p className="text-[10px] uppercase tracking-[0.2em] text-[#051410]/50 font-bold">Pure Loop Integration</p>
        </div>

      </div>
      
    </main>
  );
}