/**
 * UI: Amanah Web Storefront - The Invitation (Dawah Portal)
 * Description: A serene, universal introduction to Islam.
 * Focuses on Tawheed, the Noble Quran, the Sunnah, the Five Pillars, and Ihsan.
 * Designed with strict Quiet Luxury aesthetics.
 * Amanah Collective Ltd ©️ 2026
 */

import React from 'react';
import Link from 'next/link';

export default function Invitation() {
  return (
    <main className="w-full flex flex-col items-center pt-12 pb-24 px-6 md:px-12 font-sans text-[#051410] bg-[#FAF9F6] min-h-screen overflow-x-hidden">
      
      {/* Elegant Top Navigation */}
      <nav className="w-full max-w-6xl flex justify-between items-center mb-20 uppercase text-[10px] md:text-xs font-bold tracking-[0.2em] border-b border-[#051410]/5 pb-6">
         <Link href="/" className="text-[#B8860B] tracking-[0.3em] hover:text-[#051410] transition-colors duration-300">
           Return to Sanctuary
         </Link>
         <div className="flex gap-6 md:gap-10">
           <Link href="/quran" className="hover:text-[#B8860B] transition-colors duration-300">The Quran</Link>
           <Link href="/manifesto" className="hover:text-[#B8860B] transition-colors duration-300">Manifesto</Link>
         </div>
      </nav>

      {/* Hero Section */}
      <div className="w-full max-w-4xl flex flex-col items-center text-center mb-24 mt-4">
        <h2 className="text-xs md:text-sm font-bold tracking-[0.3em] text-[#B8860B] mb-6 uppercase">
          Bismillahir Rahmanir Rahim
        </h2>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif mb-10 text-[#051410] tracking-wide leading-tight">
          An Invitation to Peace.
        </h1>
        <p className="text-lg md:text-xl text-[#051410]/80 leading-relaxed max-w-2xl font-serif italic">
          "O humanity, indeed the truth has come to you from your Lord."
        </p>
      </div>

      {/* The Three Pillars of the Message */}
      <div className="w-full max-w-4xl flex flex-col gap-16 md:gap-24 mb-24 text-left">
        
        {/* Tawheed */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
          <div className="md:w-1/3">
            <h3 className="text-2xl font-serif text-[#B8860B] border-b border-[#B8860B]/20 pb-4 inline-block">
              1. The Oneness of Allah
            </h3>
          </div>
          <div className="md:w-2/3">
            <p className="text-base md:text-lg leading-relaxed text-[#051410]/90">
              At the absolute core of our existence is Tawheed. This is the profound understanding that there is only One Creator, Sustainer, and Lord of the universe. He is Allah. He has no partners, no equals, and no beginning or end. True peace is found when the human heart submits to the One who fashioned it.
            </p>
          </div>
        </div>

        {/* The Quran */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
          <div className="md:w-1/3">
            <h3 className="text-2xl font-serif text-[#B8860B] border-b border-[#B8860B]/20 pb-4 inline-block">
              2. The Noble Quran
            </h3>
          </div>
          <div className="md:w-2/3">
            <p className="text-base md:text-lg leading-relaxed text-[#051410]/90">
              The Quran is the literal, uncorrupted word of Allah, sent down as a mercy and a manual for all of humanity. It is a timeless guidance that speaks directly to the soul, offering clarity in moments of doubt and a perfect framework for a just, balanced, and deeply fulfilling life.
            </p>
          </div>
        </div>

        {/* The Sunnah */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
          <div className="md:w-1/3">
            <h3 className="text-2xl font-serif text-[#B8860B] border-b border-[#B8860B]/20 pb-4 inline-block">
              3. The Final Messenger
            </h3>
          </div>
          <div className="md:w-2/3">
            <p className="text-base md:text-lg leading-relaxed text-[#051410]/90">
              The Prophet Muhammad ﷺ (Peace Be Upon Him) is the final messenger sent to mankind. His life (the Sunnah) is the living, breathing embodiment of the Quran. From how he treated his family with profound gentleness, to his unyielding dedication to justice, his example is the ultimate blueprint for human character.
            </p>
          </div>
        </div>

      </div>

      {/* The Five Pillars of Islam */}
      <div className="w-full max-w-4xl flex flex-col gap-16 md:gap-24 mb-24 text-left border-t border-[#051410]/5 pt-24">
        
        <div className="text-center mb-8">
           <h2 className="text-3xl md:text-4xl font-serif text-[#051410] mb-4">The Five Pillars</h2>
           <p className="text-xs md:text-sm text-[#B8860B] uppercase tracking-[0.2em] font-bold">The Foundation of Practice</p>
        </div>

        {/* Shahadah */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
          <div className="md:w-1/3">
            <h3 className="text-2xl font-serif text-[#B8860B] border-b border-[#B8860B]/20 pb-4 inline-block">
              1. The Declaration
            </h3>
          </div>
          <div className="md:w-2/3">
            <p className="text-base md:text-lg leading-relaxed text-[#051410]/90">
              The Shahadah is the absolute foundation of faith. It is the sincere verbal testimony that there is no deity worthy of worship except Allah and that Muhammad is His final messenger. This simple declaration is the gateway to eternal peace.
            </p>
          </div>
        </div>

        {/* Salah */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
          <div className="md:w-1/3">
            <h3 className="text-2xl font-serif text-[#B8860B] border-b border-[#B8860B]/20 pb-4 inline-block">
              2. The Prayer
            </h3>
          </div>
          <div className="md:w-2/3">
            <p className="text-base md:text-lg leading-relaxed text-[#051410]/90">
              Salah is our direct and uninterrupted connection to the Creator. We stand in prayer five times a day to realign our focus. It is a physical and spiritual sanctuary that provides pure tranquillity amidst the noise of the modern world.
            </p>
          </div>
        </div>

        {/* Zakat */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
          <div className="md:w-1/3">
            <h3 className="text-2xl font-serif text-[#B8860B] border-b border-[#B8860B]/20 pb-4 inline-block">
              3. The Charity
            </h3>
          </div>
          <div className="md:w-2/3">
            <p className="text-base md:text-lg leading-relaxed text-[#051410]/90">
              Zakat is the purification of our wealth. We are entrusted to uplift those in need by sharing a calculated portion of what Allah has generously provided us. It removes greed from the heart and builds a society rooted in profound care for others.
            </p>
          </div>
        </div>

        {/* Sawm */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
          <div className="md:w-1/3">
            <h3 className="text-2xl font-serif text-[#B8860B] border-b border-[#B8860B]/20 pb-4 inline-block">
              4. The Fasting
            </h3>
          </div>
          <div className="md:w-2/3">
            <p className="text-base md:text-lg leading-relaxed text-[#051410]/90">
              Sawm is a dedicated time of profound discipline and spiritual elevation. We abstain from food and drink during the daylight hours of Ramadan to build empathy for the less fortunate. It allows us to reset our desires and attain true God consciousness.
            </p>
          </div>
        </div>

        {/* Hajj */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
          <div className="md:w-1/3">
            <h3 className="text-2xl font-serif text-[#B8860B] border-b border-[#B8860B]/20 pb-4 inline-block">
              5. The Pilgrimage
            </h3>
          </div>
          <div className="md:w-2/3">
            <p className="text-base md:text-lg leading-relaxed text-[#051410]/90">
              Hajj is the ultimate journey of unity and submission. Muslims from all corners of the earth gather at the House of Allah in Makkah. We strip away all worldly status to stand together as one single body in devotion to our Lord.
            </p>
          </div>
        </div>

      </div>

      {/* Ihsan (Spiritual Excellence) */}
      <div className="w-full max-w-4xl text-center border-t border-[#051410]/5 pt-24 mb-24 px-4">
        <h2 className="text-3xl md:text-4xl font-serif text-[#051410] mb-6">Ihsan: Spiritual Excellence</h2>
        <p className="text-lg md:text-xl text-[#051410]/90 leading-relaxed max-w-2xl mx-auto font-serif italic">
          "To worship Allah as if you see Him, and if you do not see Him, He sees you."
        </p>
        <p className="text-base md:text-lg text-[#051410]/80 leading-relaxed max-w-2xl mx-auto mt-8">
          This is the highest tier of faith. Amanah is built entirely on this principle. By removing digital noise and surveillance, we strive to create an environment where your intentions remain pure and your focus remains entirely on your Creator.
        </p>
      </div>

      {/* Gentle Call to Action */}
      <div className="w-full max-w-3xl bg-[#051410] text-[#FAF9F6] p-12 md:p-16 rounded-[2rem] text-center shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#B8860B]/10 rounded-bl-full blur-2xl"></div>
        <h3 className="text-2xl md:text-3xl font-serif text-[#B8860B] mb-6 relative z-10">
          Begin Your Journey
        </h3>
        <p className="text-sm md:text-base leading-relaxed opacity-90 mb-10 relative z-10 max-w-xl mx-auto">
          Faith is not a destination you reach overnight. It is a gentle, continuous journey of the heart. We invite you to explore the final revelation for yourself.
        </p>
        <Link href="/quran" className="inline-block bg-[#FAF9F6] text-[#051410] px-10 py-4 rounded-full text-xs uppercase tracking-widest font-bold hover:bg-[#B8860B] hover:text-[#FAF9F6] transition-all duration-300 relative z-10">
          Read the Noble Quran
        </Link>
      </div>

    </main>
  );
}