/**
 * UI: Amanah Web Storefront - The Manifesto & Our Story
 * Description: The philosophical foundation of the brand.
 * All family names have been strictly removed to ensure absolute founder privacy.
 * Amanah Collective Ltd ©️ 2026
 */

import React from 'react';
import Link from 'next/link';

export default function Manifesto() {
  return (
    <main className="min-h-screen bg-[#FAF9F6] flex flex-col items-center pt-16 pb-24 px-6 md:px-12 font-sans text-[#051410] overflow-x-hidden">
      
      {/* Sanctuary Navigation */}
      <nav className="w-full max-w-5xl flex justify-center items-center gap-10 text-[10px] md:text-xs font-bold tracking-[0.2em] mb-16 uppercase">
        <Link href="/" className="hover:text-[#B8860B] transition-colors duration-300">Return to Sanctuary</Link>
        <span className="w-[1px] h-4 bg-[#051410]/20"></span>
        <Link href="/hardware" className="hover:text-[#B8860B] transition-colors duration-300">Hardware</Link>
      </nav>

      {/* Hero Section */}
      <div className="w-full max-w-4xl flex flex-col items-center text-center mb-24 mt-4">
        <h2 className="text-[#B8860B] text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase mb-6">Our Story & Mission</h2>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight text-[#051410] mb-10">
          Where you are from is geography. <br className="hidden md:block" />
          <span className="italic text-[#051410]/80">What you are is your legacy.</span>
        </h1>
        <div className="w-12 h-[1px] bg-[#B8860B]"></div>
      </div>

      {/* The Manifesto Content */}
      <div className="w-full max-w-3xl space-y-12 md:space-y-16 text-base md:text-lg text-[#051410]/80 leading-relaxed font-serif">
        
        <section>
          <p className="mb-6">
            The modern world demands our constant attention, fracturing our focus and turning our spirituality into a part-time endeavor. We built Amanah to reject this. We believe that true faith is not a destination we occasionally visit, but the sanctuary in which we reside. 
          </p>
          <p>
            Our legacy is not defined by borders or geography, but by an unyielding commitment to the preservation of faith across generations. Amanah Collective Ltd was born from a father’s desire to protect that focus for his family—a digital and physical shield against the noise of the surveillance economy.
          </p>
        </section>

        <section className="bg-[#051410] text-[#FAF9F6] p-10 md:p-14 rounded-[2rem] shadow-xl my-16 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-32 h-32 bg-[#B8860B]/10 rounded-bl-[100px] blur-2xl"></div>
           <h3 className="text-2xl font-serif text-[#B8860B] mb-6 relative z-10">One Ummah. One Body.</h3>
           <p className="text-[#FAF9F6]/90 relative z-10 text-sm md:text-base leading-loose">
             In His Last Sermon, our beloved Prophet Muhammad (ﷺ) dismantled the illusions of superiority. No race, no geography, and no origin elevates a person above another—only Taqwa (piety) and good action. We are one body, connected by our faith in the Almighty. Every line of code we write and every piece of hardware we mill is dedicated to uniting and empowering this Ummah.
           </p>
        </section>

        <section>
          <h3 className="text-xl md:text-2xl font-serif text-[#051410] mb-6">A Golden Age of Focus</h3>
          <p className="mb-6">
            We are investing in the youth, equipping them with tools that facilitate connection with the Creator without extracting their data in return. Our ecosystem is built entirely on zero-tracking, uncompromising modesty, and quiet luxury.
          </p>
          <p>
            This is more than a technology company. It is a Sadaqah Jariyah—a continuous charity dedicated to ensuring the future of our youth is grounded in firm belief, knowledge, and victorious leadership. The future will be good, Insha'Allah.
          </p>
        </section>

      </div>

      {/* Call to Action */}
      <div className="mt-24 mb-12">
        <Link href="/login" className="px-10 py-4 border border-[#051410] text-[#051410] text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#051410] hover:text-[#FAF9F6] transition-all duration-300">
          Join The Sanctuary
        </Link>
      </div>

      {/* Official Footer */}
      <footer className="mt-16 text-center border-t border-[#051410]/10 w-full max-w-5xl pt-10">
        <p className="text-[10px] font-bold tracking-[0.3em] text-[#051410]/40 uppercase">
          Amanah Collective Ltd ©️ 2026
        </p>
      </footer>
      
    </main>
  );
}