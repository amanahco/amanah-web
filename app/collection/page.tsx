/**
 * UI: Amanah Web Storefront The Collection (Physical Goods)
 * Description: Premium artisanal storefront for Tasbihs Takkes and Garments.
 * Focuses on accessible premium craftsmanship materials and absolute modesty.
 * Strictly anonymous sourcing to protect business IP. 
 * Designed with strict Quiet Luxury aesthetics. No faces/eyes in imagery.
 * Amanah Collective Ltd ©️ 2026. All Rights Reserved.
 */

import React from 'react';
import Link from 'next/link';

export default function Collection() {
  return (
    <main className="w-full flex flex-col items-center pt-12 pb-24 px-6 md:px-12 font-sans text-[#051410] bg-[#FAF9F6] min-h-screen overflow-x-hidden">
      
      {/* Elegant Top Navigation */}
      <nav className="w-full max-w-6xl flex justify-between items-center mb-20 uppercase text-[10px] md:text-xs font-bold tracking-[0.2em] border-b border-[#051410]/5 pb-6">
         <Link href="/" className="text-[#B8860B] tracking-[0.3em] hover:text-[#051410] transition-colors duration-300">
           Return to Sanctuary
         </Link>
         <div className="flex gap-4 md:gap-10">
           <Link href="/hardware" className="hover:text-[#B8860B] transition-colors duration-300">Hardware</Link>
           <Link href="/software" className="hover:text-[#B8860B] transition-colors duration-300">Software</Link>
         </div>
      </nav>

      {/* Hero Section */}
      <div className="w-full max-w-4xl flex flex-col items-center text-center mb-24 mt-4">
        <h2 className="text-xs md:text-sm font-bold tracking-[0.3em] text-[#B8860B] mb-6 uppercase">
          Bismillahir Rahmanir Rahim
        </h2>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif mb-10 text-[#051410] tracking-wide leading-tight">
          The Collection.
        </h1>
        <p className="text-lg md:text-xl text-[#051410]/80 leading-relaxed max-w-2xl font-serif italic">
          "Quiet companions for your daily remembrance. Crafted with pure intention."
        </p>
      </div>

      <div className="w-full max-w-6xl flex flex-col gap-24 mb-24">

        {/* The Tasbih Collection */}
        <section className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/2 aspect-square bg-[#051410]/5 relative overflow-hidden flex items-center justify-center p-8">
            {/* Visual Guideline Placeholder: Heavy focus on the rich textures of the beads resting on warm alabaster cotton. No faces. */}
            <div className="absolute inset-0 border border-[#B8860B]/20 m-4"></div>
            <p className="text-[#051410]/40 text-xs tracking-widest uppercase text-center font-bold">
              [Image: Macro detail of Tasbih beads resting on textured fabric. Framed by Amanah Arch.]
            </p>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col items-start px-4 lg:px-12">
            <h2 className="text-3xl font-serif text-[#051410] mb-6">The Tasbih Collection</h2>
            <p className="text-base leading-relaxed text-[#051410]/80 mb-10">
              Handcrafted by generational artisans. Carved with pure intention to serve as a quiet durable companion in your daily remembrance. We select only the finest natural materials ensuring every single bead glides smoothly allowing your focus to remain entirely on your Creator.
            </p>
            <button className="bg-[#051410] text-[#FAF9F6] px-10 py-4 text-xs uppercase tracking-widest font-bold hover:bg-[#B8860B] transition-all duration-300">
              Explore Tasbihs
            </button>
          </div>
        </section>

        {/* The Takke Selection */}
        <section className="flex flex-col lg:flex-row-reverse gap-12 items-center">
          <div className="w-full lg:w-1/2 aspect-square bg-[#051410]/5 relative overflow-hidden flex items-center justify-center p-8">
            {/* Visual Guideline Placeholder: Abstract lifestyle shot of the Takke folded or resting. No faces or eyes. */}
            <div className="absolute inset-0 border border-[#B8860B]/20 m-4"></div>
            <p className="text-[#051410]/40 text-xs tracking-widest uppercase text-center font-bold">
              [Image: Premium Takke resting gracefully on a geometric prayer mat. Natural soft lighting.]
            </p>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col items-start px-4 lg:px-12">
            <h2 className="text-3xl font-serif text-[#051410] mb-6">The Takke Selection</h2>
            <p className="text-base leading-relaxed text-[#051410]/80 mb-10">
              Elevating the humble prayer cap. Woven with premium breathable natural fibers for absolute comfort and quiet dignity. Designed to be worn with humility seamlessly transitioning from the sanctuary of the mosque to your daily pursuits.
            </p>
            <button className="bg-[#051410] text-[#FAF9F6] px-10 py-4 text-xs uppercase tracking-widest font-bold hover:bg-[#B8860B] transition-all duration-300">
              Explore Caps
            </button>
          </div>
        </section>

        {/* Amanah Garments */}
        <section className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/2 aspect-square bg-[#051410]/5 relative overflow-hidden flex items-center justify-center p-8">
            {/* Visual Guideline Placeholder: Fabric texture focus, olive linen draping. No faces or free-mixing. */}
            <div className="absolute inset-0 border border-[#B8860B]/20 m-4"></div>
            <p className="text-[#051410]/40 text-xs tracking-widest uppercase text-center font-bold">
              [Image: Close up of olive linen draped elegantly over a hanger within the Amanah Archway.]
            </p>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col items-start px-4 lg:px-12">
            <h2 className="text-3xl font-serif text-[#051410] mb-6">Amanah Garments</h2>
            <p className="text-base leading-relaxed text-[#051410]/80 mb-10">
              Uncompromising modesty meets quiet luxury. Featuring rich ethically sourced linens and warm alabaster cottons crafted strictly to preserve the dignity of the believer. Our garments are intentionally tailored with a relaxed drape ensuring absolute comfort and compliance with Islamic principles.
            </p>
            <button className="bg-[#051410] text-[#FAF9F6] px-10 py-4 text-xs uppercase tracking-widest font-bold hover:bg-[#B8860B] transition-all duration-300">
              Explore Garments
            </button>
          </div>
        </section>

      </div>

      {/* Gentle Call to Action */}
      <div className="w-full max-w-4xl bg-white border border-[#B8860B]/20 p-12 md:p-16 rounded-2xl text-center shadow-sm">
        <h3 className="text-2xl font-serif text-[#051410] mb-4">
          The Intention of Gifting
        </h3>
        <p className="text-sm md:text-base leading-relaxed text-[#051410]/70 mb-8 max-w-xl mx-auto">
          "Exchange gifts as that will lead to increasing your love to one another." When checking out select the Amanah Gift option to include a personal Dua for a loved one.
        </p>
      </div>

    </main>
  );
}