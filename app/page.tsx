/**
 * UI: Amanah Web Storefront - Perfect Symmetry
 * Description: Background anchored to top-center (origin-top) to maintain flawless screen symmetry.
 * Hacky menu offsets removed. All text now perfectly centered within the true middle of the arch.
 * Amanah Collective Ltd ©️ 2026
 */

import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen relative flex flex-col items-center pt-24 md:pt-[8vw] px-4 pb-12 overflow-x-hidden">
      
      {/* 1. The Fixed Architecture */}
      <div className="fixed inset-0 w-full h-[100dvh] z-0 overflow-hidden bg-[#FAF9F6]">
        {/* origin-top ensures the image scales outward equally, keeping the arch perfectly centered while pushing the bottom watermark off-screen. */}
        <img 
          src="/amanah-sanctuary-bg.png" 
          alt="Amanah Sanctuary" 
          className="w-full h-full object-cover object-top scale-[1.05] origin-top"
        />
      </div>

      {/* 2. The Interactive Text Sanctuary */}
      <div className="relative z-10 w-full max-w-3xl flex flex-col items-center text-center mt-8 px-6 md:px-10">

        {/* Expanded Top Navigation Menu (Perfectly Centered, Offsets Removed) */}
        <nav className="w-full max-w-md mx-auto flex flex-wrap justify-center items-center gap-x-3 gap-y-4 md:gap-x-5 text-[10px] md:text-xs font-bold tracking-[0.15em] text-[#B8860B] mb-16 drop-shadow-md uppercase">
          <Link href="/manifesto" className="cursor-pointer hover:text-[#0b2f28] transition-colors">Manifesto</Link>
          <Link href="/story" className="cursor-pointer hover:text-[#0b2f28] transition-colors">Our Story</Link>
          <Link href="/hardware" className="cursor-pointer hover:text-[#0b2f28] transition-colors">Hardware</Link>
          <Link href="/quran" className="cursor-pointer hover:text-[#0b2f28] transition-colors text-center leading-[1.2]">
            Quran<br />Download
          </Link>
        </nav>

        {/* Brand Header */}
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-[#0b2f28] mb-4 drop-shadow-sm">
          Amanah
        </h1>
        <h2 className="text-xs md:text-sm font-bold tracking-[0.25em] text-[#B8860B] mb-12 uppercase drop-shadow-sm">
          Your Digital Sanctuary
        </h2>

        {/* The Manifesto Block */}
        <div className="text-[#0b2f28] text-base md:text-lg leading-relaxed space-y-7 max-w-xl mx-auto font-medium">
          <p>
            Built on uncompromising modesty, privacy-first technology, and zero tracking.
          </p>
          <p>
            We are creating an ecosystem designed purely for your peace of mind. No surveillance, no intrusive algorithms. Just a serene gateway to your daily habits and faith.
          </p>
        </div>

        {/* Coming Soon: Hardware Section */}
        <div className="mt-16 pt-16 border-t border-[#B8860B]/30 w-full max-w-lg mx-auto">
          <div className="text-[#B8860B] text-xs tracking-[0.1em] font-bold mb-4 uppercase">
            In Development
          </div>
          <h3 className="text-[#0b2f28] text-2xl md:text-3xl font-bold mb-6">
            Aerospace Titanium & Ceramic
          </h3>
          <p className="text-[#0b2f28]/90 text-sm md:text-base leading-relaxed mb-12">
            A physical extension of your digital sanctuary. We are engineering a premium wearable device with haptic feedback, completely free of screens and digital distractions. Pure privacy. Quiet luxury.
          </p>
          <Link href="/hardware" className="inline-block border-2 border-[#0b2f28] text-[#0b2f28] px-10 py-4 text-xs uppercase tracking-widest font-bold hover:bg-[#0b2f28] hover:text-[#FAF9F6] transition-all duration-300">
            Explore the Hardware
          </Link>
        </div>

      </div>

      {/* Official Footer with Comprehensive Social Links Restored for Landing Page Layering */}
      <footer className="relative z-10 mt-auto pt-24 pb-8 flex flex-col items-center gap-6 w-full">
        
        {/* Amanah Socials Ecosystem */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-4 md:gap-x-8 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-[#051410]">
          <a href="https://instagram.com/amanah_collective" target="_blank" rel="noopener noreferrer" className="hover:text-[#B8860B] transition-colors duration-300">Instagram</a>
          <a href="https://twitter.com/amanah_c0" target="_blank" rel="noopener noreferrer" className="hover:text-[#B8860B] transition-colors duration-300">X (Twitter)</a>
          <a href="https://tiktok.com/@amanah.co99" target="_blank" rel="noopener noreferrer" className="hover:text-[#B8860B] transition-colors duration-300">TikTok</a>
          <a href="https://youtube.com/@AmanahCollective" target="_blank" rel="noopener noreferrer" className="hover:text-[#B8860B] transition-colors duration-300">YouTube</a>
        </div>

        {/* Verified Amanah Watermark */}
        <p className="text-[10px] md:text-xs font-semibold tracking-[0.15em] text-[#0b2f28] uppercase drop-shadow-sm opacity-80">
          Amanah Collective Ltd ©️ 2026
        </p>
      </footer>

    </main>
  );
}