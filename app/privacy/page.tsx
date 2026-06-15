/**
 * UI: Amanah Web Storefront Privacy Policy
 * STRICT PROTOCOL APPLIED: UK English. No hyphens in prose.
 * Amanah Collective Ltd ©️ 2026
 */

import React from 'react';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#FAF9F6] flex flex-col items-center pt-16 pb-24 px-6 md:px-12 font-sans text-[#051410] overflow-x-hidden">
      
      <div className="w-full max-w-4xl flex flex-col items-center text-center mb-16 mt-4">
        <h2 className="text-[#B8860B] text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase mb-6">The Legal Shield</h2>
        <h1 className="text-4xl md:text-5xl font-serif leading-tight text-[#051410] mb-8">
          Privacy Policy
        </h1>
        <div className="w-12 h-[1px] bg-[#B8860B]"></div>
      </div>

      <div className="w-full max-w-3xl space-y-10 text-base text-[#051410]/80 leading-relaxed font-serif">
        
        <section>
          <h3 className="text-xl font-serif text-[#051410] mb-4">1. Our Foundation and Promise</h3>
          <p>
            Amanah Collective Ltd was founded on a single uncompromising principle: your focus and faith are a sacred trust, not a commodity. We have engineered the Amanah Digital Sanctuary and the Amanah Dhikr Ring to be entirely free of surveillance capitalism. We do not track you, we do not monetise your attention, and we do not harvest your personal data.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-serif text-[#051410] mb-4">2. Information We Collect</h3>
          <p>
            To provide you with secure access to the Digital Sanctuary, we operate a passwordless, zero surveillance authentication system.
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li><strong>Email Address:</strong> We collect your email address solely to dispatch a secure single use link for entry.</li>
            <li><strong>Contribution Records:</strong> If you choose to support the Sanctuary or secure a hardware allocation, our secure payment gateway processes the transaction. We do not store your financial details.</li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-serif text-[#051410] mb-4">3. The Amanah Dhikr Ring</h3>
          <p>
            The Amanah Dhikr Ring is designed as a discrete haptic companion. Any haptic preferences or daily intentions exist purely locally between your physical ring and your personal device. We do not upload or store your habits on our servers. Your private worship remains strictly between you and your Creator.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-serif text-[#051410] mb-4">4. Third Party Tracking</h3>
          <p>
            The Amanah ecosystem is a fortress. We use zero third party analytical trackers. We host zero advertisements. We will never sell or trade your email address to any outside entity.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-serif text-[#051410] mb-4">5. Your Rights</h3>
          <p>
            Under UK regulations, you maintain absolute sovereignty over your digital footprint within our ecosystem. You have the right to access the minimal data we hold and the right to request immediate and permanent erasure of your profile from the Sanctuary at any time.
          </p>
        </section>

      </div>
    </main>
  );
}