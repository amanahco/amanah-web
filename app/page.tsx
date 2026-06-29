"use client";

/**
 * UI: Amanah Web Storefront Perfect Symmetry & Ecosystem
 * Description: Background anchored to top center.
 * Double footer glitch eradicated. 
 * Cross pollination links added for the Amanah Application.
 * The Invitation Dawah portal Sacred Heritage and The Noble Causes added to main navigation.
 * Live Hijri and Gregorian date anchored to the top.
 * Amanah Collective Ltd ©️ 2026. All Rights Reserved.
 */

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  const [dateText, setDateText] = useState("");

  useEffect(() => {
    const today = new Date();
    
    // Natively format to UK Gregorian
    const gregorian = new Intl.DateTimeFormat('en-GB', {
      weekday: 'long', 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric'
    }).format(today);

    // Natively format to Islamic calendar in English
    const hijri = new Intl.DateTimeFormat('en-GB-u-ca-islamic-umalqura', {
       day: 'numeric', 
       month: 'long', 
       year: 'numeric'
    }).format(today);

    // Remove any native browser commas to ensure pure Amanah minimalism
    const cleanGregorian = gregorian.replace(/,/g, '');
    const cleanHijri = hijri.replace(/,/g, '');

    setDateText(`${cleanGregorian} | ${cleanHijri}`);
  }, []);

  return (
    <main className="w-full relative flex flex-col items-center pt-24 md:pt-[8vw] px-4 pb-12 overflow-x-hidden">
      
      {/* 1. The Fixed Architecture */}
      <div className="fixed inset-0 w-full h-[100dvh] z-[-1] overflow-hidden bg-[#FAF9F6]">
        <img 
          src="/amanah-sanctuary-bg.png" 
          alt="Amanah Sanctuary" 
          className="w-full h-full object-cover object-top scale-[1.05] origin-top"
        />
      </div>

      {/* 2. The Interactive Text Sanctuary */}
      <div className="relative z-10 w-full max-w-3xl flex flex-col items-center text-center mt-8 px-6 md:px-10">

        {/* The Live Daily Date */}
        <div className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-[#0b2f28]/70 uppercase mb-8 h-4">
          {dateText}
        </div>

        {/* Expanded Top Navigation Menu: Perfectly balanced three tier system */}
        <nav className="w-full flex flex-col items-center justify-center gap-y-3 md:gap-y-4 text-[9px] md:text-[10px] font-bold tracking-[0.15em] text-[#B8860B] mb-12 md:mb-16 drop-shadow-md uppercase">
          
          {/* Tier 1: Ethos & Knowledge */}
          <div className="flex justify-center items-center gap-x-4 md:gap-x-8">
            <Link href="/manifesto" className="cursor-pointer hover:text-[#0b2f28] transition-colors">Manifesto</Link>
            <Link href="/invitation" className="cursor-pointer hover:text-[#0b2f28] transition-colors">The Invitation</Link>
            <Link href="/heritage" className="cursor-pointer hover:text-[#0b2f28] transition-colors">Heritage</Link>
          </div>

          {/* Tier 2: Digital & Physical */}
          <div className="flex justify-center items-center gap-x-4 md:gap-x-8">
            <Link href="/software" className="cursor-pointer hover:text-[#0b2f28] transition-colors">Software</Link>
            <Link href="/hardware" className="cursor-pointer hover:text-[#0b2f28] transition-colors">Hardware</Link>
            <Link href="/quran" className="cursor-pointer hover:text-[#0b2f28] transition-colors">The Quran</Link>
          </div>

          {/* Tier 3: The Ummah */}
          <div className="flex justify-center items-center gap-x-4 md:gap-x-8">
            <Link href="/causes" className="cursor-pointer hover:text-[#0b2f28] transition-colors">The Noble Causes</Link>
          </div>

        </nav>

        {/* Brand Header */}
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-[#0b2f28] mb-4 drop-shadow-sm">
          Amanah
        </h1>
        <h2 className="text-xs md:text-sm font-bold tracking-[0.25em] text-[#B8860B] mb-12 uppercase drop-shadow-sm">
          Your Digital Sanctuary
        </h2>

        {/* The Manifesto Block perfectly matched to the lower text styles */}
        <div className="text-[#0b2f28]/90 text-sm md:text-base leading-relaxed space-y-7 max-w-xl mx-auto">
          <p>
            Built on uncompromising modesty, privacy first technology, and zero tracking.
          </p>
          <p>
            We are creating an ecosystem designed purely for your peace of mind. No surveillance, no intrusive algorithms. Just a serene gateway to your daily habits and faith.
          </p>
        </div>

        {/* Physical Ecosystem: Hardware Section */}
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
          <Link href="/hardware" className="inline-block bg-[#0b2f28] text-[#FAF9F6] px-10 py-4 text-xs uppercase tracking-widest font-bold hover:bg-transparent hover:text-[#0b2f28] border-2 border-[#0b2f28] transition-all duration-300">
            Explore the Hardware
          </Link>
        </div>
        
        {/* Digital Ecosystem: Software Section Bridge */}
        <div className="mt-16 pt-16 border-t border-[#B8860B]/30 w-full max-w-lg mx-auto">
          <div className="text-[#B8860B] text-xs tracking-[0.1em] font-bold mb-4 uppercase">
            Pending Review
          </div>
          <h3 className="text-[#0b2f28] text-2xl md:text-3xl font-bold mb-6">
            The Amanah Application
          </h3>
          <p className="text-[#0b2f28]/90 text-sm md:text-base leading-relaxed mb-12">
            Your offline sanctuary. Featuring the true tactile Indo Pak Quran engine, minimalist Qibla compass, and complete Jumu'ah hub with zero behavioural tracking.
          </p>
          <Link href="/software" className="inline-block bg-[#0b2f28] text-[#FAF9F6] px-10 py-4 text-xs uppercase tracking-widest font-bold hover:bg-transparent hover:text-[#0b2f28] border-2 border-[#0b2f28] transition-all duration-300">
            Discover the App
          </Link>
        </div>

      </div>
    </main>
  );
}