/**
 * UI: Amanah Web Storefront Terms of Service
 * STRICT PROTOCOL APPLIED: UK English. No hyphens in prose.
 * Amanah Collective Ltd ©️ 2026
 */

import React from 'react';
import Link from 'next/link';

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-[#FAF9F6] flex flex-col items-center pt-16 pb-24 px-6 md:px-12 font-sans text-[#051410] overflow-x-hidden">
      
      <div className="w-full max-w-4xl flex flex-col items-center text-center mb-16 mt-4">
        <h2 className="text-[#B8860B] text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase mb-6">The Legal Shield</h2>
        <h1 className="text-4xl md:text-5xl font-serif leading-tight text-[#051410] mb-8">
          Terms of Service
        </h1>
        <div className="w-12 h-[1px] bg-[#B8860B]"></div>
      </div>

      <div className="w-full max-w-3xl space-y-10 text-base text-[#051410]/80 leading-relaxed font-serif">
        
        <section>
          <h3 className="text-xl font-serif text-[#051410] mb-4">1. Acceptance of Terms</h3>
          <p>
            By accessing the Amanah Digital Sanctuary, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the service. Our foundation is built on Ihsan and mutual respect.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-serif text-[#051410] mb-4">2. Community Standards</h3>
          <p>
            The Sanctuary is an ad free environment dedicated to focus and reflection. Users agree to engage with the provided resources in a manner that upholds uncompromising modesty and respect for the Ummah.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-serif text-[#051410] mb-4">3. Intellectual Property</h3>
          <p>
            All original digital assets, hardware designs, and platform interfaces are the exclusive intellectual property of Amanah Collective Ltd. The Noble Quran text and translations remain preserved for all, while the specific software architecture of this platform is protected by UK copyright law.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-serif text-[#051410] mb-4">4. Hardware Preorders</h3>
          <p>
            When securing a hardware allocation, your funds are directly supporting the manufacturing process in accordance with our Debt Free Stewardship model. Delivery timelines are estimates, and we remain committed to full transparency throughout the manufacturing journey.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-serif text-[#051410] mb-4">5. Governing Law</h3>
          <p>
            These terms shall be governed and construed in accordance with the laws of the United Kingdom, without regard to its conflict of law provisions.
          </p>
        </section>

      </div>
    </main>
  );
}