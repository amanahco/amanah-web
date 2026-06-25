/**
 * UI: Amanah Web Storefront Member Access (Magic Link & Contribution)
 * Description: The secure passwordless gateway to the digital sanctuary.
 * STRICT PROTOCOL APPLIED: UK English only. Pure Islamic terminology. Privacy first architecture.
 * Amanah Collective Ltd ©️ 2026. All Rights Reserved.
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
          <p className="text-[#FAF9F6]/70 text-sm tracking-wide">Enter via secure passwordless authentication.</p>
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

            {/* Converted to a Link to seamlessly route to Dashboard for your testing */}
            <Link 
              href="/dashboard" 
              className="mt-2 w-full bg-[#B8860B] text-[#051410] py-4 rounded-full text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#FAF9F6] transition-colors duration-300 shadow-lg text-center block"
            >
              Send Secure Link
            </Link>
            
          </form>

          {/* Privacy Guarantee */}
          <div className="mt-8 text-center flex flex-col items-center gap-3">
             <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#B8860B]/10 text-[#B8860B]">
               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
             </span>
             <p className="text-[#FAF9F6]/50 text-[10px] tracking-wide max-w-[200px] leading-relaxed">
               A single use link will be dispatched. Zero surveillance.
             </p>
          </div>
        </div>
      </div>

      {/* Registration & Contribution Call to Action */}
      <div className="mt-12 w-full max-w-md flex flex-col items-center text-center gap-6 relative z-10">
        
        {/* Hardware Allocation Route */}
        <p className="text-[#051410]/70 text-sm">
          Not yet a member? <br className="md:hidden"/> 
          <Link href="/hardware" className="text-[#B8860B] font-bold hover:text-[#051410] transition-colors duration-300 border-b border-[#B8860B]/30 pb-1 ml-1">Secure Your Hardware Allocation</Link>
        </p>
        
        {/* Visual Divider */}
        <div className="flex items-center gap-4 w-3/4 opacity-30">
          <div className="h-[1px] flex-grow bg-[#051410]"></div>
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase">Or</span>
          <div className="h-[1px] flex-grow bg-[#051410]"></div>
        </div>

        {/* Support the Mission Route - NOW CONNECTED TO /SUBSCRIBE */}
        <p className="text-[#051410]/70 text-sm">
          Wish to support the continuous charity without hardware? <br className="md:hidden"/>
          <Link href="/subscribe" className="text-[#B8860B] font-bold hover:text-[#051410] transition-colors duration-300 border-b border-[#B8860B]/30 pb-1 ml-1 mt-2 inline-block">Make a Direct Contribution</Link>
        </p>

      </div>
      
    </main>
  );
}