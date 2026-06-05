/**
 * UI: Amanah Web Storefront - The Quran Portal
 * Description: A universal, beginner-friendly sanctuary for reading and downloading the Quran.
 * Features Indo-Pak script aesthetics, pure transliteration, and a zero-tracking download.
 * STRICT PROTOCOL APPLIED: UK English only. Pure Islamic terminology.
 * Amanah Collective Ltd ©️ 2026
 */

import React from 'react';
import Link from 'next/link';

export default function QuranPortal() {
  return (
    <main className="min-h-screen bg-[#FAF9F6] flex flex-col items-center pt-16 pb-24 px-6 md:px-12 font-sans text-[#051410] overflow-x-hidden">
      
      {/* Sanctuary Navigation */}
      <nav className="w-full max-w-5xl flex justify-center items-center gap-10 text-[10px] md:text-xs font-bold tracking-[0.2em] mb-16 uppercase">
        <Link href="/" className="hover:text-[#B8860B] transition-colors duration-300">Return to Sanctuary</Link>
        <span className="w-[1px] h-4 bg-[#051410]/20"></span>
        <Link href="/manifesto" className="hover:text-[#B8860B] transition-colors duration-300">The Manifesto</Link>
      </nav>

      {/* Hero Section */}
      <div className="w-full max-w-4xl flex flex-col items-center text-center mb-20 mt-4">
        <h2 className="text-[#B8860B] text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase mb-6">The Noble Quran</h2>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight text-[#051410] mb-8">
          Pure. Uninterrupted. Free.
        </h1>
        <p className="max-w-2xl text-sm md:text-base text-[#051410]/70 leading-loose">
          A universal digital environment designed for every level of your journey. No tracking, no advertisements, and no distractions. Just the words of Allah, beautifully preserved.
        </p>
      </div>

      {/* The Reading Gateway - Surah Al-Fatihah Example */}
      <div className="w-full max-w-3xl bg-white border border-[#B8860B]/20 rounded-[2rem] shadow-xl p-10 md:p-16 mb-20 relative overflow-hidden">
        {/* Subtle decorative background element */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#FAF9F6] via-[#B8860B]/40 to-[#FAF9F6]"></div>

        <div className="text-center mb-12">
           <h3 className="text-xl md:text-2xl font-serif text-[#051410] mb-2">Surah Al-Fatihah</h3>
           <p className="text-[#B8860B] text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">The Opening</p>
        </div>

        <div className="flex flex-col gap-12 text-center">
          {/* Verse 1 */}
          <div className="flex flex-col gap-4">
             {/* Note: This assumes a standard font, but you will link your Indo-Pak web font here later */}
             <p className="text-3xl md:text-4xl font-serif text-[#051410] leading-relaxed" dir="rtl">
               بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
             </p>
             <p className="text-[#051410]/80 font-serif italic text-lg md:text-xl">
               Bismillahir Rahmanir Rahim
             </p>
             <p className="text-sm md:text-base text-[#051410]/60 uppercase tracking-wide text-[10px] font-bold">
               In the name of Allah, the Entirely Merciful, the Especially Merciful.
             </p>
          </div>
          
          <div className="w-8 h-[1px] bg-[#B8860B]/30 mx-auto"></div>

          {/* Verse 2 */}
          <div className="flex flex-col gap-4">
             <p className="text-3xl md:text-4xl font-serif text-[#051410] leading-relaxed" dir="rtl">
               الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ
             </p>
             <p className="text-[#051410]/80 font-serif italic text-lg md:text-xl">
               Alhamdu lillahi rabbil 'alamin
             </p>
             <p className="text-sm md:text-base text-[#051410]/60 uppercase tracking-wide text-[10px] font-bold">
               [All] praise is [due] to Allah, Lord of the worlds.
             </p>
          </div>
        </div>
      </div>

      {/* The Download Section (The Noble Gift) */}
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-[#051410] rounded-[2rem] p-10 md:p-14 shadow-2xl relative overflow-hidden">
         <div className="absolute top-0 right-0 w-48 h-48 bg-[#B8860B]/10 rounded-bl-[100px] blur-3xl"></div>
         
         <div className="relative z-10 flex flex-col gap-6 text-left">
           <h3 className="text-3xl font-serif text-[#B8860B]">Carry the Sanctuary.</h3>
           <p className="text-[#FAF9F6]/80 text-sm leading-relaxed">
             We believe the highest honour is to share the Quran freely. Download the complete text in the beautiful Indo-Pak script directly to your device. It is a permanent gift from Amanah, ensuring you have access to the words of Allah wherever you go, completely free of surveillance.
           </p>
         </div>

         <div className="relative z-10 flex justify-center md:justify-end">
           <a href="#" className="inline-flex items-center justify-center gap-3 bg-[#B8860B] text-[#051410] py-5 px-8 rounded-full text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#FAF9F6] transition-all duration-300 shadow-lg hover:shadow-xl w-full md:w-auto text-center">
             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
             Download Full Quran
           </a>
         </div>
      </div>

      {/* Official Footer */}
      <footer className="mt-24 text-center border-t border-[#051410]/10 w-full max-w-5xl pt-10">
        <p className="text-[10px] font-bold tracking-[0.3em] text-[#051410]/40 uppercase">
          Amanah Collective Ltd ©️ 2026
        </p>
      </footer>
      
    </main>
  );
}