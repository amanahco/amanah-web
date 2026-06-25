/**
 * Tahir Archive: Web Subscription Portal
 * Date: 25 June 2026
 * Description: Secure checkout bridge mirroring the Amanah Vault aesthetic, with spiritually grounded copy and live Stripe links.
 * Amanah Collective Ltd ©️ 2026. All Rights Reserved.
 */

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
          <p className="text-base md:text-lg text-[#545947] opacity-90 max-w-2xl mx-auto leading-relaxed">
            Alhamdulillah for the blessing of this Ummah. Amanah is entirely self-funded, independent, and secure. By supporting this digital sanctuary, you are helping us build pure, privacy-first tools free from surveillance. We ask Allah SWT to place immense Barakah in your wealth and reward your family for standing with us. Jazakumullahu Khayran for your honorable support.
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
              <p className="text-[#545947] text-sm leading-relaxed max-w-md">
                For our early brothers and sisters who believe in this vision. We are deeply humbled by your trust. May Allah bless your daily habits and grant you peace. Lock in this foundational rate for life as we expand the sanctuary.
              </p>
            </div>
            <div className="text-left md:text-right flex-shrink-0">
              <p className="text-2xl font-bold text-[#2E4A35]">£2.99</p>
              <p className="text-xs text-[#545947] uppercase tracking-wide font-semibold mt-1">/ month</p>
              
              {/* LIVE STRIPE LINK: PIONEER */}
              <a 
                href="https://buy.stripe.com/9B600j8PT0u2d8A8lC6Vq04"
                className="mt-4 block w-full md:w-auto bg-[#2E4A35] hover:bg-[#253c2b] text-[#F5F2ED] text-center font-semibold py-2.5 px-6 rounded-xl transition-colors shadow-sm"
              >
                Select Pioneer
              </a>
            </div>
          </div>

          {/* Tier 2: Annual Plan */}
          <div className="bg-[#FAF8F5] border border-[#545947]/15 rounded-2xl p-6 md:p-8 shadow-sm flex flex-col md:flex-row md:items-center justify-between transition-all hover:shadow-md relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-[#8A9A5B]"></div>
            <div className="mb-6 md:mb-0 md:pr-6 pl-2">
              <div className="flex items-center gap-3 mb-2">
                <h2 className="text-xl font-bold text-[#1A1A1A]">Annual Plan</h2>
                <span className="bg-[#545947]/10 text-[#545947] text-[10px] font-bold uppercase tracking-wider py-1 px-2 rounded-md">
                  Sustaining Supporter
                </span>
              </div>
              <p className="text-[#545947] text-sm leading-relaxed max-w-md">
                A full year of continuous ecosystem support. We are profoundly grateful for your commitment to protecting our community's digital privacy. May Allah replace your contribution with abundant, pure Rizq and keep you steadfast.
              </p>
            </div>
            <div className="text-left md:text-right flex-shrink-0">
              <p className="text-2xl font-bold text-[#2E4A35]">£35.00</p>
              <p className="text-xs text-[#545947] uppercase tracking-wide font-semibold mt-1">/ year</p>
              
              {/* LIVE STRIPE LINK: ANNUAL */}
              <a 
                href="https://buy.stripe.com/28E5kD9TXccK1pSdFW6Vq02"
                className="mt-4 block w-full md:w-auto bg-[#2E4A35] hover:bg-[#253c2b] text-[#F5F2ED] text-center font-semibold py-2.5 px-6 rounded-xl transition-colors shadow-sm"
              >
                Select Annual
              </a>
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
              <p className="text-[#F5F2ED]/80 text-sm leading-relaxed max-w-md">
                Your generous, one-time contribution secures the foundation of this sanctuary. We honor your trust and make sincere Dua that Allah SWT builds you a sanctuary in Jannah. Permanent, lifelong access to all current and future Amanah features.
              </p>
            </div>
            <div className="text-left md:text-right flex-shrink-0">
              <p className="text-2xl font-bold text-[#F5F2ED]">£50.00</p>
              <p className="text-xs text-[#F5F2ED]/70 uppercase tracking-wide font-semibold mt-1">once</p>
              
              {/* LIVE STRIPE LINK: LIFETIME */}
              <a 
                href="https://buy.stripe.com/28E5kD1nr7Wu4C47hy6Vq03"
                className="mt-4 block w-full md:w-auto bg-[#F5F2ED] hover:bg-white text-[#2E4A35] text-center font-bold py-2.5 px-6 rounded-xl transition-colors shadow-sm"
              >
                Become a Founder
              </a>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <p className="text-xs text-[#545947] opacity-60 font-medium">
            Secure cryptographic payments processed locally via Stripe.
          </p>
          <p className="text-[10px] text-[#545947] opacity-40 mt-4 font-semibold tracking-wider">
            AMANAH COLLECTIVE LTD ©️ 2026. ALL RIGHTS RESERVED.
          </p>
        </div>

      </div>
    </main>
  );
}