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

        {/* Hifz Audio / Tasbih Module */}
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