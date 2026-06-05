/**
 * UI: Amanah Web Storefront - Our Story
 * Description: The foundation and journey of the brand.
 * STRICT PROTOCOL APPLIED: UK English only. Pure Islamic terminology. Natural punctuation.
 * Amanah Collective Ltd ©️ 2026
 */

import React from 'react';
import Link from 'next/link';

export default function OurStory() {
  return (
    <main className="min-h-screen bg-[#FAF9F6] flex flex-col items-center pt-16 pb-24 px-6 md:px-12 font-sans text-[#051410] overflow-x-hidden">
      
      {/* Sanctuary Navigation */}
      <nav className="w-full max-w-5xl flex justify-center items-center gap-10 text-[10px] md:text-xs font-bold tracking-[0.2em] mb-16 uppercase">
        <Link href="/" className="hover:text-[#B8860B] transition-colors duration-300">Return to Sanctuary</Link>
        <span className="w-[1px] h-4 bg-[#051410]/20"></span>
        <Link href="/manifesto" className="hover:text-[#B8860B] transition-colors duration-300">The Manifesto</Link>
      </nav>

      {/* Hero Section */}
      <div className="w-full max-w-4xl flex flex-col items-center text-center mb-24 mt-4">
        <h2 className="text-[#B8860B] text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase mb-6">Our Foundation</h2>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight text-[#051410] mb-10">
          We wanted a sanctuary. <br className="hidden md:block" />
          <span className="italic text-[#051410]/80">So we built one.</span>
        </h1>
        <div className="w-12 h-[1px] bg-[#B8860B]"></div>
      </div>

      {/* The Story Content */}
      <div className="w-full max-w-3xl space-y-12 md:space-y-16 text-base md:text-lg text-[#051410]/80 leading-relaxed font-serif">
        
        <section>
          <h3 className="text-xl md:text-2xl font-serif text-[#051410] mb-6">The Catalyst</h3>
          <p className="mb-6">
            Amanah did not start in a boardroom. It started in a family home, born from a simple but heavy realisation: the technology we relied on was quietly eroding our peace. Every app, every notification, and every "smart" device was designed to extract our attention and monetise our data. 
          </p>
          <p>
            As parents looking at the next generation, we saw a future where quiet reflection and uninterrupted connection with our Creator were becoming luxuries. We realised that if we wanted a digital ecosystem that respected our modesty, protected our privacy, and elevated our faith, we could no longer wait for someone else to build it.
          </p>
        </section>

        {/* Highlight Callout */}
        <section className="border-l-2 border-[#B8860B] pl-8 md:pl-12 my-16 py-4">
           <p className="text-xl md:text-2xl font-serif text-[#051410] italic leading-relaxed">
             "We stopped asking how to survive the noise of the modern world, and started asking how to silence it entirely."
           </p>
        </section>

        <section>
          <h3 className="text-xl md:text-2xl font-serif text-[#051410] mb-6">The Architecture of Focus</h3>
          <p className="mb-6">
            The journey began with a single rule: zero surveillance. We set out to engineer the Amanah Dhikr Ring. It is a piece of hardware milled from aerospace titanium and premium ceramics, completely devoid of screens and tracking mechanisms. It was designed to do one thing flawlessly: act as a discrete, haptic companion for Tasbih.
          </p>
          <p className="mb-6">
            From there, the vision expanded into the Amanah Digital Sanctuary. We did not just build an application; we built a fortress for your faith. The platform is engineered to seamlessly integrate into your daily life, offering pure, looping Hifz audio, profound daily Tafsir reflections, and beautifully curated Islamic resources. 
          </p>
          <p>
            Every feature, from the strictly ad-free environment to the absolute zero-tracking data policy, is designed to elevate your spiritual journey rather than exploit it. Every pixel and every line of code was crafted to adhere to uncompromising modesty and quiet luxury, providing you with the ultimate peace of mind.
          </p>
        </section>

      </div>

      {/* Call to Action */}
      <div className="mt-24 mb-12 flex flex-col sm:flex-row gap-6">
        <Link href="/hardware" className="px-10 py-4 border border-[#051410] bg-[#051410] text-[#FAF9F6] text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#B8860B] hover:border-[#B8860B] transition-all duration-300 text-center">
          Explore the Hardware
        </Link>
        <Link href="/login" className="px-10 py-4 border border-[#051410] text-[#051410] text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#051410] hover:text-[#FAF9F6] transition-all duration-300 text-center">
          Enter the Sanctuary
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