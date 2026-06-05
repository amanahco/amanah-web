/**
 * UI: Amanah Web Storefront - Member Access / Login
 * Description: The secure, zero-tracking gateway to the digital sanctuary.
 * STRICT PROTOCOL APPLIED: UK English only. Pure Islamic terminology. Privacy-first architecture.
 * Amanah Collective Ltd ©️ 2026
 */

import React from 'react';
import Link from 'next/link';

export default function MemberAccess() {
  return (
    <main className="min-h-screen bg-[#FAF9F6] flex flex-col items-center justify-center py-12 px-6 md:px-12 font-sans text-[#051410] overflow-x-hidden relative">
      
      {/* Background Subtle Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#B8860B]/5 rounded-bl-[200px] blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#051410]/5 rounded-tr-[200px] blur-3xl pointer-events-none"></div>

      {/* Elegant Top Navigation */}
      <nav className="absolute top-0 w-full max-w-6xl flex justify-between items-center pt-12 uppercase text-[10px] md:text-xs font-bold tracking-[0.2em]">
         <Link href="/" className="text-[#051410] tracking-[0.3em] hover:text-[#B8860B] transition-colors duration-300">
           Return to Sanctuary
         </Link>
      </nav>

      {/* Login Fortress Card */}
      <div className="w-full max-w-md bg-[#051410] rounded-[2rem] shadow-2xl overflow-hidden border border-[#B8860B]/20 relative z-10 mt-10">
        
        {/* Card Header */}
        <div className="p-10 pb-8 text-center border-b border-[#FAF9F6]/10">
          <h1 className="text-3xl font-serif text-[#B8860B] mb-3">Member Access.</h1>
          <p className="text-[#FAF9F6]/70 text-sm tracking-wide">Enter the Digital Sanctuary.</p>
        </div>

        {/* Form Section */}
        <div className="p-10">
          <form className="flex flex-col gap-6">
            
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-[#FAF9F6]/60 text-[10px] font-bold tracking-[0.2em] uppercase">Email Address</label>
              <input 
                type="email" 
                id="email" 
                placeholder="your@email.com" 
                className="w-full bg-[#FAF9F6]/5 border border-[#FAF9F6]/10 text-[#FAF9F6] px-4 py-3 rounded-lg focus:outline-none focus:border-[#B8860B] transition-colors duration-300 placeholder-[#FAF9F6]/20"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <label htmlFor="password" className="text-[#FAF9F6]/60 text-[10px] font-bold tracking-[0.2em] uppercase">Security Key</label>
                <a href="#" className="text-[#B8860B] text-[10px] hover:text-[#FAF9F6] transition-colors duration-300">Reset Access?</a>
              </div>
              <input 
                type="password" 
                id="password" 
                placeholder="••••••••" 
                className="w-full bg-[#FAF9F6]/5 border border-[#FAF9F6]/10 text-[#FAF9F6] px-4 py-3 rounded-lg focus:outline-none focus:border-[#B8860B] transition-colors duration-300 placeholder-[#FAF9F6]/20"
                required
              />
            </div>

            <button 
              type="submit" 
              className="mt-4 w-full bg-[#B8860B] text-[#051410] py-4 rounded-full text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#FAF9F6] transition-colors duration-300 shadow-lg"
            >
              Secure Login
            </button>
            
          </form>

          {/* Privacy Guarantee */}
          <div className="mt-8 text-center flex flex-col items-center gap-3">
             <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#B8860B]/10 text-[#B8860B]">
               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
             </span>
             <p className="text-[#FAF9F6]/50 text-[10px] tracking-wide max-w-[200px] leading-relaxed">
               Zero surveillance. Your focus remains entirely yours.
             </p>
          </div>
        </div>
      </div>

      {/* Registration Call to Action */}
      <div className="mt-10 text-center relative z-10">
        <p className="text-[#051410]/70 text-sm">
          Not yet a member? <Link href="/hardware" className="text-[#B8860B] font-bold hover:text-[#051410] transition-colors duration-300 border-b border-[#B8860B]/30 pb-1">Secure Your Allocation</Link>
        </p>
      </div>

      {/* Official Footer */}
      <footer className="absolute bottom-10 text-center w-full max-w-6xl">
        <p className="text-[10px] font-bold tracking-[0.3em] text-[#051410]/40 uppercase">
          Amanah Collective Ltd ©️ 2026
        </p>
      </footer>
      
    </main>
  );
}