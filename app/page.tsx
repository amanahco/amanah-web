/**
 * UI: Amanah Web Storefront - Landing / Our Story
 * Description: Clean, privacy-first digital gateway.
 * Amanah Collective Ltd ©️
 * © 2026 Amanah Co. & Gemini Collaboration. All Rights Reserved.
 */

import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 text-center bg-[#FAF9F6]">
      <div className="max-w-3xl space-y-10">
        
        {/* Brand Header */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#2E4A35]">
            Amanah
          </h1>
          <h2 className="text-xl md:text-2xl font-light text-[#4A4A4A] uppercase tracking-widest">
            Your Digital Sanctuary
          </h2>
        </div>
        
        {/* The Manifesto */}
        <div className="pt-10 border-t border-[#E8E8E8] mt-8">
          <p className="text-lg md:text-xl leading-relaxed text-[#2B4522] font-medium">
            Built on uncompromising modesty, privacy-first technology, and zero tracking. 
          </p>
          <p className="text-md md:text-lg leading-relaxed text-[#4A4A4A] mt-6">
            We are creating an ecosystem designed purely for your peace of mind. No surveillance, no intrusive algorithms. Just a serene gateway to your daily habits and faith.
          </p>
        </div>

      </div>
    </main>
  );
}