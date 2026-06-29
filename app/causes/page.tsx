/**
 * UI: Amanah Web Storefront The Noble Causes
 * Description: A serene educational guide on Zakat Fitranah and continuous charity.
 * Features the Sunnah of everyday charity and trusted donation bridges.
 * Designed with strict Quiet Luxury aesthetics.
 * Amanah Collective Ltd ©️ 2026. All Rights Reserved.
 */

import React from 'react';
import Link from 'next/link';

export default function Causes() {
  return (
    <main className="w-full flex flex-col items-center pt-12 pb-24 px-6 md:px-12 font-sans text-[#051410] bg-[#FAF9F6] min-h-screen overflow-x-hidden">
      
      {/* Elegant Top Navigation */}
      <nav className="w-full max-w-6xl flex justify-between items-center mb-20 uppercase text-[10px] md:text-xs font-bold tracking-[0.2em] border-b border-[#051410]/5 pb-6">
         <Link href="/" className="text-[#B8860B] tracking-[0.3em] hover:text-[#051410] transition-colors duration-300">
           Return to Sanctuary
         </Link>
         <div className="flex gap-6 md:gap-10">
           <Link href="/invitation" className="hover:text-[#B8860B] transition-colors duration-300">The Invitation</Link>
           <Link href="/heritage" className="hover:text-[#B8860B] transition-colors duration-300">Heritage</Link>
         </div>
      </nav>

      {/* Hero Section */}
      <div className="w-full max-w-4xl flex flex-col items-center text-center mb-24 mt-4">
        <h2 className="text-xs md:text-sm font-bold tracking-[0.3em] text-[#B8860B] mb-6 uppercase">
          Bismillahir Rahmanir Rahim
        </h2>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif mb-10 text-[#051410] tracking-wide leading-tight">
          The Noble Causes.
        </h1>
        <p className="text-lg md:text-xl text-[#051410]/80 leading-relaxed max-w-2xl font-serif italic">
          "Those who spend their wealth in charity by night and by day secretly and publicly will find their reward with their Lord."
        </p>
      </div>

      <div className="w-full max-w-4xl flex flex-col gap-16 md:gap-24 mb-24 text-left">

        {/* The Obligation of Wealth */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
          <div className="md:w-1/3">
            <h3 className="text-2xl font-serif text-[#B8860B] border-b border-[#B8860B]/20 pb-4 inline-block">
              The Obligation of Wealth
            </h3>
          </div>
          <div className="md:w-2/3">
            <p className="text-base md:text-lg leading-relaxed text-[#051410]/90 mb-6">
              Zakat is an absolute pillar of Islam. It is a compulsory act of worship for every Muslim who possesses wealth above a specific threshold. Far from being a simple tax it is a divine mechanism designed to purify our worldly earnings and ensure the most vulnerable members of our Ummah are protected.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-[#051410]/90">
              By giving a small percentage of our accumulated wealth back to those in need we acknowledge that everything we own ultimately belongs to the Creator. It bridges the gap between the wealthy and the poor fostering profound love and communal responsibility.
            </p>
          </div>
        </div>

        {/* The Purification of Fasting */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
          <div className="md:w-1/3">
            <h3 className="text-2xl font-serif text-[#B8860B] border-b border-[#B8860B]/20 pb-4 inline-block">
              Purification of Fasting
            </h3>
          </div>
          <div className="md:w-2/3">
            <p className="text-base md:text-lg leading-relaxed text-[#051410]/90 mb-6">
              As the blessed month of Ramadan concludes the Ummah is required to offer Zakat al Fitr commonly known as Fitranah. While the exact monetary amount per head changes slightly depending on the local economy and currency the divine purpose remains eternal. 
            </p>
            <p className="text-base md:text-lg leading-relaxed text-[#051410]/90">
              It serves two magnificent purposes. First it purifies the fasting believer from any shortcomings or idle talk during the sacred month. Second it ensures that every single person regardless of their financial standing has food to eat and can celebrate the joy of Eid with complete dignity.
            </p>
          </div>
        </div>

        {/* The Charity of the Heart */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
          <div className="md:w-1/3">
            <h3 className="text-2xl font-serif text-[#B8860B] border-b border-[#B8860B]/20 pb-4 inline-block">
              The Charity of the Heart
            </h3>
          </div>
          <div className="md:w-2/3">
            <p className="text-base md:text-lg leading-relaxed text-[#051410]/90 mb-6">
              There is a beautiful moment in our history when the poorer companions approached the Prophet Muhammad Peace Be Upon Him. They were heavy hearted believing the wealthy were securing all the heavenly rewards because they could give abundantly in worldly charity while the poor could not. 
            </p>
            <p className="text-base md:text-lg leading-relaxed text-[#051410]/90 mb-6">
              The Prophet with his infinite wisdom smiled upon them. He taught them that wealth is not the only currency of charity. He revealed that every single time a believer says SubhanAllah it is a charity. Every Alhamdulillah is a charity. Every Allahu Akbar is a charity.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-[#051410]/90">
              This profound truth is the very foundation of the Amanah Application and our upcoming tactile dhikr ring. Even if you do not have worldly wealth to give every single silent slide of the titanium ring and every count logged in your digital sanctuary is recorded as a magnificent act of charity in the heavens.
            </p>
          </div>
        </div>

        {/* The Sunnah of Charity Grid */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start mt-8">
          <div className="md:w-1/3">
            <h3 className="text-2xl font-serif text-[#B8860B] border-b border-[#B8860B]/20 pb-4 inline-block">
              The Sunnah of Charity
            </h3>
          </div>
          <div className="md:w-2/3">
            <p className="text-base md:text-lg leading-relaxed text-[#051410]/90 mb-10">
              Charity in Islam extends far beyond monetary wealth. The Prophet Muhammad Peace Be Upon Him taught us that everyday acts of kindness physical support and spiritual devotion carry the exact same divine weight.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="bg-white p-8 rounded-2xl border border-[#B8860B]/20 shadow-sm">
                <h4 className="text-[#B8860B] font-bold tracking-widest uppercase text-[10px] mb-3">Acts of Kindness</h4>
                <p className="text-sm text-[#051410]/80 leading-relaxed">
                  A simple sincere smile directed at another person is an immediate charity. Removing a harmful obstacle from a path or initiating peace by greeting someone carries immense eternal reward.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-[#B8860B]/20 shadow-sm">
                <h4 className="text-[#B8860B] font-bold tracking-widest uppercase text-[10px] mb-3">Physical Help</h4>
                <p className="text-sm text-[#051410]/80 leading-relaxed">
                  Assisting the elderly supporting those with disabilities planting greenery for the earth or even providing water to a thirsty animal are all profound acts of continuous charity.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-[#B8860B]/20 shadow-sm">
                <h4 className="text-[#B8860B] font-bold tracking-widest uppercase text-[10px] mb-3">Social Support</h4>
                <p className="text-sm text-[#051410]/80 leading-relaxed">
                  Teaching someone to read offering sincere counsel reconciling two disputing parties and dedicating pure effort to comforting your family are elevated as noble spiritual acts.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-[#B8860B]/20 shadow-sm">
                <h4 className="text-[#B8860B] font-bold tracking-widest uppercase text-[10px] mb-3">Spiritual Devotion</h4>
                <p className="text-sm text-[#051410]/80 leading-relaxed">
                  Every step walked toward the mosque every silent prayer made for a friend facing hardship and every whisper of Dhikr in the remembrance of Allah is recorded as a distinct charity.
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* The Trusted Bridges */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start pt-8 border-t border-[#B8860B]/10">
          <div className="md:w-1/3">
            <h3 className="text-2xl font-serif text-[#B8860B] border-b border-[#B8860B]/20 pb-4 inline-block">
              The Trusted Bridges
            </h3>
          </div>
          <div className="md:w-2/3">
            <p className="text-base md:text-lg leading-relaxed text-[#051410]/90 mb-8">
              Amanah does not collect or hold charitable donations. We believe in providing pristine direct pathways to organisations that have spent decades serving the Ummah with absolute integrity. We highly encourage you to support these noble causes whether building water wells aiding our brothers and sisters in Palestine and Sudan or sponsoring orphans.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Ummah Welfare Trust Card */}
              <a href="https://uwt.org" target="_blank" rel="noopener noreferrer" className="group block bg-white border border-[#B8860B]/20 p-8 rounded-2xl hover:shadow-xl transition-all duration-300">
                <h4 className="text-lg font-serif text-[#051410] mb-3 group-hover:text-[#B8860B] transition-colors duration-300">Ummah Welfare Trust</h4>
                <p className="text-sm text-[#051410]/70 leading-relaxed mb-6">
                  A cherished organisation close to our founders family history providing absolute transparency and vital emergency relief across the globe.
                </p>
                <span className="text-[#B8860B] text-[10px] uppercase tracking-widest font-bold flex items-center gap-2">
                  Visit Direct Portal <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </span>
              </a>

              {/* Islamic Relief Card */}
              <a href="https://www.islamic-relief.org.uk" target="_blank" rel="noopener noreferrer" className="group block bg-white border border-[#B8860B]/20 p-8 rounded-2xl hover:shadow-xl transition-all duration-300">
                <h4 className="text-lg font-serif text-[#051410] mb-3 group-hover:text-[#B8860B] transition-colors duration-300">Islamic Relief</h4>
                <p className="text-sm text-[#051410]/70 leading-relaxed mb-6">
                  A globally recognised charity supporting long term sustainable development orphan sponsorship and urgent crisis response.
                </p>
                <span className="text-[#B8860B] text-[10px] uppercase tracking-widest font-bold flex items-center gap-2">
                  Visit Direct Portal <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </span>
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Gentle Call to Action */}
      <div className="w-full max-w-3xl bg-[#051410] text-[#FAF9F6] p-12 md:p-16 rounded-[2rem] text-center shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#B8860B]/10 rounded-bl-full blur-2xl"></div>
        <h3 className="text-2xl md:text-3xl font-serif text-[#B8860B] mb-6 relative z-10">
          The Charity of the Heart
        </h3>
        <p className="text-sm md:text-base leading-relaxed opacity-90 mb-10 relative z-10 max-w-xl mx-auto">
          Begin generating your own continuous spiritual wealth today. Discover the Amanah Application and find true sanctuary in the remembrance of Allah.
        </p>
        <Link href="/software" className="inline-block bg-[#FAF9F6] text-[#051410] px-10 py-4 rounded-full text-xs uppercase tracking-widest font-bold hover:bg-[#B8860B] hover:text-[#FAF9F6] transition-all duration-300 relative z-10">
          Discover Our Software
        </Link>
      </div>

    </main>
  );
}