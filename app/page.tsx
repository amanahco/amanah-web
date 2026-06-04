/**
 * UI: Amanah Web Storefront - Final Rectification
 * Description: Restored the exact unified scroll and full background coverage. 
 * Removing all CSS blobs and overrides. bg-cover naturally crops out the AI watermark on scrolling heights.
 * Amanah Collective Ltd ©️ 2026
 */

import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <main 
      className="min-h-screen flex flex-col items-center pt-24 md:pt-36 px-4 pb-12 overflow-x-hidden bg-[#051410] bg-top bg-cover bg-no-repeat"
      style={{ backgroundImage: "url('/amanah-sanctuary-bg.png')" }}
    >

      {/* The Interactive Text Sanctuary */}
      <div className="relative z-10 w-full max-w-3xl flex flex-col items-center text-center mt-8 px-6 md:px-10">

        {/* Expanded Top Navigation Menu */}
        <nav className="w-full flex flex-wrap justify-center gap-x-6 gap-y-4 md:gap-x-10 text-[10px] md:text-xs font-bold tracking-[0.2em] text-[#B8860B] mb-16 drop-shadow-md uppercase">
          <Link href="/manifesto" className="cursor-pointer hover:text-[#0b2f28] transition-colors">Manifesto</Link>
          <Link href="/story" className="cursor-pointer hover:text-[#0b2f28] transition-colors">Our Story</Link>
          <Link href="/hardware" className="cursor-pointer hover:text-[#0b2f28] transition-colors">Hardware</Link>
          <Link href="/quran" className="cursor-pointer hover:text-[#0b2f28] transition-colors">Quran Download</Link>
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
            Aerospace Titanium &amp; Ceramic
          </h3>
          <p className="text-[#0b2f28]/90 text-sm md:text-base leading-relaxed mb-12">
            A physical extension of your digital sanctuary. We are engineering a premium wearable device with haptic feedback, completely free of screens and digital distractions. Pure privacy. Quiet luxury.
          </p>
          <button className="inline-block border-2 border-[#0b2f28] text-[#0b2f28] px-10 py-4 text-xs uppercase tracking-widest font-bold hover:bg-[#0b2f28] hover:text-[#FAF9F6] transition-all duration-300">
            Coming Soon
          </button>
        </div>

      </div>

      {/* Official Footer with Comprehensive Social Links */}
      <footer className="relative z-10 mt-auto pt-24 pb-8 flex flex-col items-center gap-6 w-full">
        
        {/* Amanah Socials Ecosystem */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-4 md:gap-x-8 text-[10px] md:text-xs font-bold tracking-[0.15em] text-[#B8860B] uppercase">
          <Link href="#" className="cursor-pointer hover:text-[#0b2f28] transition-colors">Instagram</Link>
          <Link href="#" className="cursor-pointer hover:text-[#0b2f28] transition-colors">X (Twitter)</Link>
          <Link href="#" className="cursor-pointer hover:text-[#0b2f28] transition-colors">TikTok</Link>
          <Link href="#" className="cursor-pointer hover:text-[#0b2f28] transition-colors">YouTube</Link>
        </div>

        {/* Verified Amanah Watermark */}
        <p className="text-[10px] md:text-xs font-semibold tracking-[0.15em] text-[#0b2f28] uppercase drop-shadow-sm opacity-80">
          Amanah Collective Ltd ©️ 2026
        </p>
      </footer>

    </main>
  );
}