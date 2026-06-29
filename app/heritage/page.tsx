/**
 * UI: Amanah Web Storefront Sacred Heritage
 * Description: A serene educational guide covering the Creator the lunar calendar
 * sacred sites the Golden Chain of Prophethood and the Noble Companions.
 * Features a vertical timeline of key Islamic events.
 * Designed with strict Quiet Luxury aesthetics.
 * Amanah Collective Ltd ©️ 2026. All Rights Reserved.
 */

import React from 'react';
import Link from 'next/link';

export default function Heritage() {
  return (
    <main className="w-full flex flex-col items-center pt-12 pb-24 px-6 md:px-12 font-sans text-[#051410] bg-[#FAF9F6] min-h-screen overflow-x-hidden">
      
      {/* Elegant Top Navigation */}
      <nav className="w-full max-w-6xl flex justify-between items-center mb-20 uppercase text-[10px] md:text-xs font-bold tracking-[0.2em] border-b border-[#051410]/5 pb-6">
         <Link href="/" className="text-[#B8860B] tracking-[0.3em] hover:text-[#051410] transition-colors duration-300">
           Return to Sanctuary
         </Link>
         <div className="flex gap-6 md:gap-10">
           <Link href="/invitation" className="hover:text-[#B8860B] transition-colors duration-300">The Invitation</Link>
           <Link href="/causes" className="hover:text-[#B8860B] transition-colors duration-300">The Noble Causes</Link>
           <Link href="/quran" className="hover:text-[#B8860B] transition-colors duration-300">The Quran</Link>
         </div>
      </nav>

      {/* Hero Section */}
      <div className="w-full max-w-4xl flex flex-col items-center text-center mb-24 mt-4">
        <h2 className="text-xs md:text-sm font-bold tracking-[0.3em] text-[#B8860B] mb-6 uppercase">
          Bismillahir Rahmanir Rahim
        </h2>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif mb-10 text-[#051410] tracking-wide leading-tight">
          Our Sacred Heritage.
        </h1>
        <p className="text-lg md:text-xl text-[#051410]/80 leading-relaxed max-w-2xl font-serif italic">
          "Read in the name of your Lord who created."
        </p>
      </div>

      <div className="w-full max-w-4xl flex flex-col gap-16 md:gap-24 mb-32 text-left">

        {/* The Creator and His Creation */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
          <div className="md:w-1/3">
            <h3 className="text-2xl font-serif text-[#B8860B] border-b border-[#B8860B]/20 pb-4 inline-block">
              The Creator
            </h3>
          </div>
          <div className="md:w-2/3">
            <p className="text-base md:text-lg leading-relaxed text-[#051410]/90 mb-6">
              At the absolute summit of all knowledge is the understanding of Allah and His boundless mercy. His mercy encompasses every single thing and forever precedes His divine wrath. He is the majestic Creator of the universe. He fashioned the heavens and the earth in six days. Above us exist seven mighty heavens. The prophetic tradition teaches us that the distance between each heaven is a vast journey of five hundred years. This is a beautiful testament to the unimaginable scale of His dominion.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-[#051410]/90">
              From His infinite power Allah brought forth various forms of creation. He created the Angels from pure light to flawlessly execute His divine commands. Among them are Jibrael Alayhis Salaam the trusted bringer of divine revelation and Mikael Alayhis Salaam who is tasked with the nourishment of the earth. He created the Jinn from smokeless fire. Finally He fashioned mankind from earth granting us the profound gift of free will so that our hearts may consciously choose to seek His truth.
            </p>
          </div>
        </div>
        
        {/* The Lunar Rhythm */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
          <div className="md:w-1/3">
            <h3 className="text-2xl font-serif text-[#B8860B] border-b border-[#B8860B]/20 pb-4 inline-block">
              The Lunar Rhythm
            </h3>
          </div>
          <div className="md:w-2/3">
            <p className="text-base md:text-lg leading-relaxed text-[#051410]/90 mb-6">
              The Islamic Hijri calendar is governed entirely by the phases of the moon. This is a profound contrast to the solar Gregorian calendar. Because a lunar year is roughly eleven days shorter than a solar year our sacred months cycle beautifully through all the natural seasons over time. 
            </p>
            <p className="text-base md:text-lg leading-relaxed text-[#051410]/90">
              This magnificent design means a Muslim will experience the fasting of Ramadan and the pilgrimage of Hajj in the long heat of summer and the quiet cold of winter over their lifetime. It is a divine rhythm that connects us directly to the natural creation of Allah.
            </p>
          </div>
        </div>

        {/* The First House */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
          <div className="md:w-1/3">
            <h3 className="text-2xl font-serif text-[#B8860B] border-b border-[#B8860B]/20 pb-4 inline-block">
              The First House
            </h3>
          </div>
          <div className="md:w-2/3">
            <p className="text-base md:text-lg leading-relaxed text-[#051410]/90">
              The Qabah in Makkah is the absolute holiest site in Islam. It is the focal point toward which billions of Muslims turn in prayer every single day. The foundations of this sacred house were built by the Prophet Ibrahim Alayhis Salaam and his son Ismail Alayhis Salaam. It stands as an eternal physical monument to absolute monotheism and total submission to the One Creator.
            </p>
          </div>
        </div>

        {/* Sanctuaries of Madinah */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
          <div className="md:w-1/3">
            <h3 className="text-2xl font-serif text-[#B8860B] border-b border-[#B8860B]/20 pb-4 inline-block">
              Sanctuaries of Madinah
            </h3>
          </div>
          <div className="md:w-2/3">
            <p className="text-base md:text-lg leading-relaxed text-[#051410]/90 mb-6">
              When the Prophet Muhammad Peace Be Upon Him migrated to Madinah the very first act he performed was establishing Masjid Quba. It is a mosque founded entirely upon piety and purity. 
            </p>
            <p className="text-base md:text-lg leading-relaxed text-[#051410]/90">
              Shortly after this Masjid an Nabawi was built. This is the mosque of the Prophet and the second holiest site in Islam. It became the beating heart of the early Muslim community and serves today as the peaceful resting place of the final messenger.
            </p>
          </div>
        </div>

        {/* Mosque of Two Qiblas */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
          <div className="md:w-1/3">
            <h3 className="text-2xl font-serif text-[#B8860B] border-b border-[#B8860B]/20 pb-4 inline-block">
              Mosque of Two Qiblas
            </h3>
          </div>
          <div className="md:w-2/3">
            <p className="text-base md:text-lg leading-relaxed text-[#051410]/90 mb-6">
              For the early years of the revelation the Muslims turned their faces in prayer towards Masjid Al Aqsa in Jerusalem Palestine. It was a profound direction connecting them directly to the lineage of the ancient prophets. Yet the heart of the Prophet Muhammad Peace Be Upon Him deeply yearned to face the Qabah the original house built by Ibrahim Alayhis Salaam.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-[#051410]/90">
              During a prayer congregation in Madinah the divine revelation descended instructing the Prophet to turn his face towards Makkah. Without hesitation he and the entire congregation turned beautifully in the very middle of their prayer. The sacred site where this monumental obedience took place is known today as Masjid al Qiblatayn the Mosque of the Two Qiblas. It stands as an eternal testament to divine timing and absolute devotion.
            </p>
          </div>
        </div>

        {/* The Night Journey & Sidratul Muntaha */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
          <div className="md:w-1/3">
            <h3 className="text-2xl font-serif text-[#B8860B] border-b border-[#B8860B]/20 pb-4 inline-block">
              The Night Journey
            </h3>
          </div>
          <div className="md:w-2/3">
            <p className="text-base md:text-lg leading-relaxed text-[#051410]/90 mb-6">
              Masjid Al Aqsa in Jerusalem Palestine holds immense spiritual weight for all Muslims. It was the destination of the miraculous night journey known as Al Isra wal Miraj. From the sacred precincts of Makkah to the blessed lands of Al Aqsa the Prophet Muhammad Peace Be Upon Him embarked on a journey that defied the very laws of time and space. During this night he also led all the previous prophets in prayer standing before Allah alongside figures from Adam Alayhis Salaam to Isa Alayhis Salaam. It is a powerful symbol of unity and the unbroken chain of prophethood.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-[#051410]/90">
              Yet the miraculous night did not end in Jerusalem. It ascended through the seven heavens revealing the magnificent reality of the unseen. At the absolute pinnacle of this divine ascent he reached Sidratul Muntaha The Lote Tree of the Utmost Boundary. This represents the majestic frontier where no creation no angel and no other prophet had ever passed. It was here in a state of ultimate purity and proximity that our beloved Prophet stood in the direct divine presence cementing the eternal bond between the Creator and the Ummah.
            </p>
          </div>
        </div>

        {/* The Blessed Bloodline */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
          <div className="md:w-1/3">
            <h3 className="text-2xl font-serif text-[#B8860B] border-b border-[#B8860B]/20 pb-4 inline-block">
              The Blessed Bloodline
            </h3>
          </div>
          <div className="md:w-2/3">
            <p className="text-base md:text-lg leading-relaxed text-[#051410]/90 mb-6">
              Allah chose the most noble of human beings to serve as His messengers linking them through a blessed bloodline and a single unified message. The Quran confirms they are descendants of one another. This magnificent lineage begins with Adam Alayhis Salaam the father of humanity and flows through the steadfastness of Nuh Alayhis Salaam.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-[#051410]/90 mb-6">
              It shines through Ibrahim Alayhis Salaam the friend of Allah. From his two righteous sons Ismael and Ishaq the family tree branches into a majestic legacy. It continues through the beautiful patience of Yakoub and Yusuf Alayhimus Salaam. We hold profound reverence for Musa and Haroun Alayhimus Salaam who stood against tyranny and Yahya Alayhis Salaam who spoke the pure truth.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-[#051410]/90">
              This unbroken chain of brotherhood and blood connects us deeply with our Jewish and Christian neighbours because a Muslim cannot be a true believer without accepting and honouring every single one of these magnificent prophets.
            </p>
          </div>
        </div>

        {/* The Messiah and The Seal */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
          <div className="md:w-1/3">
            <h3 className="text-2xl font-serif text-[#B8860B] border-b border-[#B8860B]/20 pb-4 inline-block">
              The Messiah & The Seal
            </h3>
          </div>
          <div className="md:w-2/3">
            <p className="text-base md:text-lg leading-relaxed text-[#051410]/90 mb-6">
              Islam holds immense love for Isa Alayhis Salaam the Messiah Jesus. We believe with absolute certainty in his miraculous birth to the Virgin Maryam and we eagerly await his return to earth to restore supreme justice. To deny him is to step outside the fold of Islam entirely. 
            </p>
            <p className="text-base md:text-lg leading-relaxed text-[#051410]/90">
              This golden chain is finally sealed by the Prophet Muhammad Peace Be Upon Him the best of mankind. He did not bring a new religion but rather the final perfected and universal chapter of the exact same message given to all the prophets before him completing the favour of Allah upon humanity.
            </p>
          </div>
        </div>

        {/* The Noble Companions */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
          <div className="md:w-1/3">
            <h3 className="text-2xl font-serif text-[#B8860B] border-b border-[#B8860B]/20 pb-4 inline-block">
              The Noble Companions
            </h3>
          </div>
          <div className="md:w-2/3">
            <p className="text-base md:text-lg leading-relaxed text-[#051410]/90 mb-6">
              Our love for the Prophet Muhammad Peace Be Upon Him is incomplete without a profound love for his blessed family the Ahlul Bayt including his beloved grandsons Hasan and Husayn RA. They carried his light and legacy with unwavering devotion and purity. Alongside them we hold immense honour for the Sahabah the companions who stood by the Prophet through the hardest of trials and all the righteous souls explicitly named in the Quran by Allah.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-[#051410]/90">
              We deeply respect and send peace upon Abu Bakr as Siddiq RA who was the closest friend and the very first to believe and Umar ibn al Khattab RA whose immense strength became the absolute shield of the early believers. These noble souls along with all those closest to the Prophet were promised the highest ranks in Jannatul Firdous. Their sacrifices laid the very foundation of the Ummah we belong to today.
            </p>
          </div>
        </div>

      </div>

      {/* The Sacred Timeline */}
      <div className="w-full max-w-4xl flex flex-col items-center mb-24">
        <h3 className="text-3xl md:text-4xl font-serif text-[#051410] mb-16 text-center">
          The Timeline of Light
        </h3>

        <div className="relative w-full max-w-2xl">
          {/* Vertical Gold Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-[#B8860B]/30 transform md:-translate-x-1/2"></div>

          {/* Timeline Nodes */}
          <div className="flex flex-col gap-12">
            
            {/* Event 1 */}
            <div className="relative flex flex-col md:flex-row items-start md:items-center w-full group">
              <div className="hidden md:flex w-1/2 justify-end pr-12 text-right">
                <h4 className="text-xl font-serif text-[#B8860B]">The First House</h4>
              </div>
              <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-[#FAF9F6] border-2 border-[#B8860B] rounded-full transform -translate-x-[5px] md:-translate-x-1/2 mt-1.5 md:mt-0 group-hover:bg-[#B8860B] transition-colors duration-300"></div>
              <div className="pl-12 md:pl-12 md:w-1/2">
                <h4 className="text-xl font-serif text-[#B8860B] md:hidden mb-2">The First House</h4>
                <p className="text-sm text-[#051410]/80 leading-relaxed">
                  Prophet Ibrahim and his son Ismail raise the foundations of the Kaaba establishing the eternal focal point of pure monotheism.
                </p>
              </div>
            </div>

            {/* Event 2 */}
            <div className="relative flex flex-col md:flex-row items-start md:items-center w-full group">
              <div className="hidden md:flex w-1/2 justify-end pr-12 text-right">
                <p className="text-sm text-[#051410]/80 leading-relaxed">
                  The Prophet Muhammad Peace Be Upon Him is born in Makkah bringing the final message of divine mercy to all of humanity.
                </p>
              </div>
              <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-[#FAF9F6] border-2 border-[#B8860B] rounded-full transform -translate-x-[5px] md:-translate-x-1/2 mt-1.5 md:mt-0 group-hover:bg-[#B8860B] transition-colors duration-300"></div>
              <div className="pl-12 md:pl-12 md:w-1/2">
                <h4 className="text-xl font-serif text-[#B8860B] mb-2">Year of the Elephant</h4>
                <p className="text-sm text-[#051410]/80 leading-relaxed md:hidden">
                  The Prophet Muhammad Peace Be Upon Him is born in Makkah bringing the final message of divine mercy to all of humanity.
                </p>
              </div>
            </div>

            {/* Event 3 */}
            <div className="relative flex flex-col md:flex-row items-start md:items-center w-full group">
              <div className="hidden md:flex w-1/2 justify-end pr-12 text-right">
                <h4 className="text-xl font-serif text-[#B8860B]">The First Revelation</h4>
              </div>
              <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-[#FAF9F6] border-2 border-[#B8860B] rounded-full transform -translate-x-[5px] md:-translate-x-1/2 mt-1.5 md:mt-0 group-hover:bg-[#B8860B] transition-colors duration-300"></div>
              <div className="pl-12 md:pl-12 md:w-1/2">
                <h4 className="text-xl font-serif text-[#B8860B] md:hidden mb-2">The First Revelation</h4>
                <p className="text-sm text-[#051410]/80 leading-relaxed">
                  In the absolute quiet of Cave Hira the Angel Jibril delivers the first majestic verses of the Noble Quran. Read in the name of your Lord.
                </p>
              </div>
            </div>

            {/* Event 4 */}
            <div className="relative flex flex-col md:flex-row items-start md:items-center w-full group">
              <div className="hidden md:flex w-1/2 justify-end pr-12 text-right">
                <p className="text-sm text-[#051410]/80 leading-relaxed">
                  The momentous migration from Makkah to the illuminated city of Madinah marking the official beginning of the Islamic calendar.
                </p>
              </div>
              <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-[#FAF9F6] border-2 border-[#B8860B] rounded-full transform -translate-x-[5px] md:-translate-x-1/2 mt-1.5 md:mt-0 group-hover:bg-[#B8860B] transition-colors duration-300"></div>
              <div className="pl-12 md:pl-12 md:w-1/2">
                <h4 className="text-xl font-serif text-[#B8860B] mb-2">The Hijrah</h4>
                <p className="text-sm text-[#051410]/80 leading-relaxed md:hidden">
                  The momentous migration from Makkah to the illuminated city of Madinah marking the official beginning of the Islamic calendar.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Gentle Call to Action */}
      <div className="w-full max-w-3xl bg-[#051410] text-[#FAF9F6] p-12 md:p-16 rounded-[2rem] text-center shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#B8860B]/10 rounded-bl-full blur-2xl"></div>
        <h3 className="text-2xl md:text-3xl font-serif text-[#B8860B] mb-6 relative z-10">
          Continue the Journey
        </h3>
        <p className="text-sm md:text-base leading-relaxed opacity-90 mb-10 relative z-10 max-w-xl mx-auto">
          Knowledge is a light that clears the path to the Creator. Return to the invitation to explore the core pillars of this beautiful faith.
        </p>
        <Link href="/invitation" className="inline-block bg-[#FAF9F6] text-[#051410] px-10 py-4 rounded-full text-xs uppercase tracking-widest font-bold hover:bg-[#B8860B] hover:text-[#FAF9F6] transition-all duration-300 relative z-10">
          Return to The Invitation
        </Link>
      </div>

    </main>
  );
}