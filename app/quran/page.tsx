/**
 * UI: Amanah Web Storefront The Quran Portal
 * Description: A universal beginner friendly sanctuary for reading and downloading the Quran.
 * External download link implemented via Vercel Blob storage.
 * STRICT PROTOCOL APPLIED: UK English only. Pure Islamic terminology.
 * Amanah Collective Ltd ©️ 2026. All Rights Reserved.
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
          A universal digital environment designed for every level of your journey. No tracking no advertisements and no distractions. Just the words of Allah beautifully preserved.
        </p>
      </div>

      {/* The Story of Revelation */}
      <div className="w-full max-w-4xl flex flex-col gap-16 md:gap-20 mb-24 text-left">

        {/* The Divine Revelation */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
          <div className="md:w-1/3">
            <h3 className="text-2xl font-serif text-[#B8860B] border-b border-[#B8860B]/20 pb-4 inline-block">
              The Divine Revelation
            </h3>
          </div>
          <div className="md:w-2/3">
            <p className="text-base md:text-lg leading-relaxed text-[#051410]/90 mb-6">
              The Quran is not a book of human origin. It is the absolute and literal word of Allah the majestic Creator of the heavens and the earth. It was sent down from the highest heavens to the Prophet Muhammad Peace Be Upon Him through the Angel Jibrael Alayhis Salaam over a period of twenty three years.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-[#051410]/90">
              It serves as the final testament the ultimate criterion between right and wrong and a perfect guide for all of humanity traversing this worldly life.
            </p>
          </div>
        </div>

        {/* The Unaltered Truth */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
          <div className="md:w-1/3">
            <h3 className="text-2xl font-serif text-[#B8860B] border-b border-[#B8860B]/20 pb-4 inline-block">
              Unaltered Truth
            </h3>
          </div>
          <div className="md:w-2/3">
            <p className="text-base md:text-lg leading-relaxed text-[#051410]/90 mb-6">
              Since the very first day it was revealed until the end of time the Quran remains perfectly intact. It contains absolute truth profound wisdom and unmatched linguistic beauty. 
            </p>
            <p className="text-base md:text-lg leading-relaxed text-[#051410]/90">
              There have been absolutely no human alterations. The Arabic words you read today are the exact same words spoken by the Prophet Muhammad Peace Be Upon Him over fourteen hundred years ago. Allah Himself has promised to protect it ensuring its supreme purity can never be corrupted by the hands of men.
            </p>
          </div>
        </div>

        {/* A Living Miracle */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
          <div className="md:w-1/3">
            <h3 className="text-2xl font-serif text-[#B8860B] border-b border-[#B8860B]/20 pb-4 inline-block">
              A Living Miracle
            </h3>
          </div>
          <div className="md:w-2/3">
            <p className="text-base md:text-lg leading-relaxed text-[#051410]/90 mb-6">
              Because it is the uncorrupted word of the Divine the Quran holds an incredibly special place in the hearts of believers. It is a source of immense healing peace and guidance. 
            </p>
            <p className="text-base md:text-lg leading-relaxed text-[#051410]/90">
              The sheer rhythm and phonetic beauty of its recitation bring instant tranquillity to the human soul lifting it away from worldly anxieties and directly connecting it back to the Creator. It is a living breathing miracle that softens even the hardest of hearts.
            </p>
          </div>
        </div>

        {/* The Tradition of Hifz */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
          <div className="md:w-1/3">
            <h3 className="text-2xl font-serif text-[#B8860B] border-b border-[#B8860B]/20 pb-4 inline-block">
              The Tradition of Hifz
            </h3>
          </div>
          <div className="md:w-2/3">
            <p className="text-base md:text-lg leading-relaxed text-[#051410]/90 mb-6">
              This divine preservation is the beautiful reason why millions of Muslims across the world from young children to the elderly commit the entire Quran to memory. 
            </p>
            <p className="text-base md:text-lg leading-relaxed text-[#051410]/90">
              This monumental act known as Hifz transforms the believer into a walking vessel of divine light. It ensures the book is protected not just on paper or screens but secured deeply within the very hearts and minds of the Ummah protecting it completely from the noise and distractions of the modern world.
            </p>
          </div>
        </div>

      </div>

      {/* The Reading Gateway Surah Al Fatihah */}
      <div className="w-full max-w-3xl bg-white border border-[#B8860B]/20 rounded-[2rem] shadow-xl p-10 md:p-16 mb-20 relative overflow-hidden">
        {/* Subtle decorative background element */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#FAF9F6] via-[#B8860B]/40 to-[#FAF9F6]"></div>

        <div className="text-center mb-12">
           <h3 className="text-xl md:text-2xl font-serif text-[#051410] mb-2">Surah Al Fatihah</h3>
           <p className="text-[#B8860B] text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">The Opening</p>
        </div>

        <div className="flex flex-col gap-12 text-center">
          {/* Verse 1 */}
          <div className="flex flex-col gap-4">
             <p className="text-3xl md:text-4xl font-serif text-[#051410] leading-relaxed" dir="rtl">
               بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
             </p>
             <p className="text-[#051410]/80 font-serif italic text-lg md:text-xl">
               Bismillahir Rahmanir Rahim
             </p>
             <p className="text-sm md:text-base text-[#051410]/60 uppercase tracking-wide text-[10px] font-bold">
               In the name of Allah the Entirely Merciful the Especially Merciful.
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
               [All] praise is [due] to Allah Lord of the worlds.
             </p>
          </div>

          <div className="w-8 h-[1px] bg-[#B8860B]/30 mx-auto"></div>

          {/* Verse 3 */}
          <div className="flex flex-col gap-4">
             <p className="text-3xl md:text-4xl font-serif text-[#051410] leading-relaxed" dir="rtl">
               الرَّحْمَٰنِ الرَّحِيمِ
             </p>
             <p className="text-[#051410]/80 font-serif italic text-lg md:text-xl">
               Ar rahmanir rahim
             </p>
             <p className="text-sm md:text-base text-[#051410]/60 uppercase tracking-wide text-[10px] font-bold">
               The Entirely Merciful the Especially Merciful.
             </p>
          </div>

          <div className="w-8 h-[1px] bg-[#B8860B]/30 mx-auto"></div>

          {/* Verse 4 */}
          <div className="flex flex-col gap-4">
             <p className="text-3xl md:text-4xl font-serif text-[#051410] leading-relaxed" dir="rtl">
               مَالِكِ يَوْمِ الدِّينِ
             </p>
             <p className="text-[#051410]/80 font-serif italic text-lg md:text-xl">
               Maliki yawmid din
             </p>
             <p className="text-sm md:text-base text-[#051410]/60 uppercase tracking-wide text-[10px] font-bold">
               Sovereign of the Day of Recompense.
             </p>
          </div>

          <div className="w-8 h-[1px] bg-[#B8860B]/30 mx-auto"></div>

          {/* Verse 5 */}
          <div className="flex flex-col gap-4">
             <p className="text-3xl md:text-4xl font-serif text-[#051410] leading-relaxed" dir="rtl">
               إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ
             </p>
             <p className="text-[#051410]/80 font-serif italic text-lg md:text-xl">
               Iyyaka na'budu wa iyyaka nasta'in
             </p>
             <p className="text-sm md:text-base text-[#051410]/60 uppercase tracking-wide text-[10px] font-bold">
               It is You we worship and You we ask for help.
             </p>
          </div>

          <div className="w-8 h-[1px] bg-[#B8860B]/30 mx-auto"></div>

          {/* Verse 6 */}
          <div className="flex flex-col gap-4">
             <p className="text-3xl md:text-4xl font-serif text-[#051410] leading-relaxed" dir="rtl">
               اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ
             </p>
             <p className="text-[#051410]/80 font-serif italic text-lg md:text-xl">
               Ihdinas siratal mustaqim
             </p>
             <p className="text-sm md:text-base text-[#051410]/60 uppercase tracking-wide text-[10px] font-bold">
               Guide us to the straight path.
             </p>
          </div>

          <div className="w-8 h-[1px] bg-[#B8860B]/30 mx-auto"></div>

          {/* Verse 7 */}
          <div className="flex flex-col gap-4">
             <p className="text-3xl md:text-4xl font-serif text-[#051410] leading-relaxed" dir="rtl">
               صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ
             </p>
             <p className="text-[#051410]/80 font-serif italic text-lg md:text-xl">
               Siratal ladhina an'amta 'alayhim ghayril maghdubi 'alayhim walad dallin
             </p>
             <p className="text-sm md:text-base text-[#051410]/60 uppercase tracking-wide text-[10px] font-bold">
               The path of those upon whom You have bestowed favour not of those who have evoked [Your] anger or of those who are astray.
             </p>
          </div>
        </div>
      </div>

      {/* The Download Section The Noble Gift */}
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-[#051410] rounded-[2rem] p-10 md:p-14 shadow-2xl relative overflow-hidden">
         <div className="absolute top-0 right-0 w-48 h-48 bg-[#B8860B]/10 rounded-bl-[100px] blur-3xl"></div>
         
         <div className="relative z-10 flex flex-col gap-6 text-left">
           <h3 className="text-3xl font-serif text-[#B8860B]">Carry the Sanctuary.</h3>
           <p className="text-[#FAF9F6]/80 text-sm leading-relaxed">
             We believe the highest honour is to share the Quran freely. Download the complete text in the beautiful Indo Pak script directly to your device. It is a permanent gift from Amanah ensuring you have access to the words of Allah wherever you go completely free of surveillance.
           </p>
         </div>

         <div className="relative z-10 flex justify-center md:justify-end">
           {/* Link updated to pull directly from your secure Vercel Blob store */}
           <a 
             href="https://wcelhqj2pvhsbqm7.public.blob.vercel-storage.com/Amanah-Quran-Indo-Pak.pdf" 
             target="_blank"
             rel="noopener noreferrer"
             className="inline-flex items-center justify-center gap-3 bg-[#B8860B] text-[#051410] py-5 px-8 rounded-full text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#FAF9F6] transition-all duration-300 shadow-lg hover:shadow-xl w-full md:w-auto text-center"
           >
             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
             Download Full Quran
           </a>
         </div>
      </div>

      {/* Official Footer */}

    </main>
  );
}