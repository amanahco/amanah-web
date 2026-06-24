import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sustain the Sanctuary | Amanah Vault',
  description: 'Secure your access to the Amanah Vault. Zero tracking. Zero ads. Pure focus.',
};

export default function SubscribePage() {
  return (
    <main className="min-h-screen bg-[#F5F2ED] py-16 px-4 sm:px-6 lg:px-8 font-sans selection:bg-[#2E4A35] selection:text-[#F5F2ED]">
      <div className="max-w-3xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-[#2E4A35] mb-4 tracking-wide">
            Sustain the Sanctuary
          </h1>
          <p className="text-lg text-[#545947] opacity-90 max-w-xl mx-auto">
            Amanah is entirely self-funded, independent, and secure. Support our mission to build pristine, privacy-first tools for the Ummah.
          </p>
        </div>

        {/* Pricing Cards Container */}
        <div className="space-y-6">
          
          {/* Tier 1: Pioneer Plan */}
          <div className="bg-[#FAF8F5] border border-[#545947]/15 rounded-2xl p-6 md:p-8 shadow-sm flex flex-col md:flex-row md:items-center justify-between transition-all hover:shadow-md">
            <div className="mb-6 md:mb-0 md:pr-6">
              <div className="flex items-center gap-3 mb-2">
                <h2 className="text-xl font-bold text-[#1A1A1A]">Amanah Pioneer</h2>
                <span className="bg-[#8A9A5B] text-[#F5F2ED] text-[10px] font-bold uppercase tracking-wider py-1 px-2 rounded-md">
                  First 1,000 Members
                </span>
              </div>
              <p className="text-[#545947] text-sm leading-relaxed">
                Lock in our early-adopter support rate for life. Full access to the expanding digital sanctuary.
              </p>
            </div>
            <div className="text-left md:text-right flex-shrink-0">
              <p className="text-2xl font-bold text-[#2E4A35]">£2.99</p>
              <p className="text-xs text-[#545947] uppercase tracking-wide font-semibold mt-1">/ month</p>
              <button className="mt-4 w-full md:w-auto bg-[#2E4A35] hover:bg-[#253c2b] text-[#F5F2ED] font-semibold py-2.5 px-6 rounded-xl transition-colors shadow-sm">
                Select Pioneer
              </button>
            </div>
          </div>

          {/* Tier 2: Annual Plan */}
          <div className="bg-[#FAF8F5] border border-[#545947]/15 rounded-2xl p-6 md:p-8 shadow-sm flex flex-col md:flex-row md:items-center justify-between transition-all hover:shadow-md relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-[#8A9A5B]"></div>
            <div className="mb-6 md:mb-0 md:pr-6 pl-2">
              <div className="flex items-center gap-3 mb-2">
                <h2 className="text-xl font-bold text-[#1A1A1A]">Annual Plan</h2>
                <span className="bg-[#545947]/10 text-[#545947] text-[10px] font-bold uppercase tracking-wider py-1 px-2 rounded-md">
                  Best Value
                </span>
              </div>
              <p className="text-[#545947] text-sm leading-relaxed">
                A full year of continuous ecosystem support, beautifully designed for your daily habits.
              </p>
            </div>
            <div className="text-left md:text-right flex-shrink-0">
              <p className="text-2xl font-bold text-[#2E4A35]">£35.00</p>
              <p className="text-xs text-[#545947] uppercase tracking-wide font-semibold mt-1">/ year</p>
              <button className="mt-4 w-full md:w-auto bg-[#2E4A35] hover:bg-[#253c2b] text-[#F5F2ED] font-semibold py-2.5 px-6 rounded-xl transition-colors shadow-sm">
                Select Annual
              </button>
            </div>
          </div>

          {/* Tier 3: Lifetime Founder */}
          <div className="bg-[#2E4A35] border border-[#2E4A35] rounded-2xl p-6 md:p-8 shadow-lg flex flex-col md:flex-row md:items-center justify-between transition-all transform md:-scale-x-100 hover:-translate-y-1" style={{ transform: "scaleX(1)" }}>
            <div className="mb-6 md:mb-0 md:pr-6">
              <div className="flex items-center gap-3 mb-2">
                <h2 className="text-xl font-bold text-[#F5F2ED]">Lifetime Founder</h2>
                <span className="bg-[#F5F2ED] text-[#2E4A35] text-[10px] font-bold uppercase tracking-wider py-1 px-2 rounded-md">
                  100 Slots Only
                </span>
              </div>
              <p className="text-[#F5F2ED]/80 text-sm leading-relaxed">
                Launch special. Permanent access to all current and future features. A single contribution to secure your digital sanctuary forever.
              </p>
            </div>
            <div className="text-left md:text-right flex-shrink-0">
              <p className="text-2xl font-bold text-[#F5F2ED]">£50.00</p>
              <p className="text-xs text-[#F5F2ED]/70 uppercase tracking-wide font-semibold mt-1">once</p>
              <button className="mt-4 w-full md:w-auto bg-[#F5F2ED] hover:bg-white text-[#2E4A35] font-bold py-2.5 px-6 rounded-xl transition-colors shadow-sm">
                Become a Founder
              </button>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <p className="text-xs text-[#545947] opacity-60 font-medium">
            Secure cryptographic payments processed locally via Stripe.
          </p>
          <p className="text-[10px] text-[#545947] opacity-40 mt-4">
            Amanah Collective Ltd ©️ 2026. All Rights Reserved.
          </p>
        </div>

      </div>
    </main>
  );
}