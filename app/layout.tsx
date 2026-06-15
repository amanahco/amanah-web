import './globals.css'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Amanah Co',
  description: 'The Digital Sanctuary',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-[#FAF9F6] text-[#051410] font-sans antialiased overflow-x-hidden flex flex-col min-h-screen">
        
        <div className="flex-grow">
          {children}
        </div>
        
        {/* The Global Sanctuary Base */}
        <footer className="w-full border-t border-[#051410]/10 pt-12 pb-16 flex flex-col items-center bg-[#FAF9F6]">
          
          {/* Organic Growth Touchpoints */}
          <div className="flex gap-10 mb-8 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-[#051410]">
            <a href="https://tiktok.com/@amanahco" target="_blank" rel="noopener noreferrer" className="hover:text-[#B8860B] transition-colors duration-300">TikTok</a>
            <a href="https://youtube.com/@amanahco" target="_blank" rel="noopener noreferrer" className="hover:text-[#B8860B] transition-colors duration-300">YouTube</a>
          </div>
          
          {/* The Legal Shield Placeholders */}
          <div className="flex gap-8 mb-10 text-[10px] text-[#051410]/60 uppercase tracking-[0.1em] font-semibold">
            <Link href="/privacy" className="hover:text-[#B8860B] transition-colors duration-300">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#B8860B] transition-colors duration-300">Terms of Service</Link>
          </div>
          
          {/* Official Watermark */}
          <p className="text-[10px] font-bold tracking-[0.3em] text-[#051410]/40 uppercase">
            Amanah Collective Ltd ©️ 2026
          </p>

        </footer>
      </body>
    </html>
  )
}