'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { CORE_COMMITTEE, CORE_COMMITTEE_MEMBERS } from '@/data/committee';

const SectionTitle = ({ title }: { title: string }) => (
  <div className="flex flex-col items-center mb-12">
    <h2 className="text-2xl md:text-3xl font-black text-[#06206A] uppercase tracking-wide text-center">
      {title}
    </h2>
  </div>
);

const CircularProfile = ({ person }: { person: any }) => (
  <div className="min-w-[65vw] sm:min-w-[40vw] md:min-w-[250px] snap-center shrink-0 flex flex-col items-center text-center group p-4 rounded-[2rem] hover:bg-gray-50 transition-all duration-300 relative cursor-default">
    <div className="relative mb-6 group-hover:-translate-y-2 transition-transform duration-300 w-32 h-32 md:w-40 md:h-40">
      <div className="absolute inset-[-15%] bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-15 blur-2xl rounded-full transition-opacity duration-300 pointer-events-none" />
      <img src={person.image} alt={person.name} className="w-full h-full object-cover rounded-full relative z-10 bg-white border border-gray-100 shadow-sm" />
    </div>
    <h3 className="text-sm md:text-base font-bold text-[#06206A] leading-tight whitespace-pre-line mb-1 relative z-10 group-hover:text-indigo-600 transition-colors">
      {person.name}
    </h3>
    {person.role && (
      <p className="text-xs md:text-sm text-gray-500 font-medium whitespace-pre-line relative z-10">
        {person.role}
      </p>
    )}
  </div>
);

export default function Committee() {
  const displayMembers = [...CORE_COMMITTEE, ...CORE_COMMITTEE_MEMBERS];

  return (
    <section id="committee" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        
        <SectionTitle title="SUMMIT ORGANISING CORE COMMITTEE" />
        
        <div className="flex overflow-x-auto hide-scrollbar snap-x snap-mandatory gap-6 pb-8 px-4 md:px-0 -mx-4 md:mx-auto">
          {displayMembers.map((person, i) => (
            <CircularProfile key={i} person={person} />
          ))}

          {/* View All Card */}
          <div className="min-w-[65vw] sm:min-w-[40vw] md:min-w-[250px] snap-center shrink-0 flex flex-col items-center justify-center p-4">
            <Link href="/committee" className="group flex flex-col items-center text-center">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gray-50 border-2 border-dashed border-gray-300 flex items-center justify-center mb-6 group-hover:bg-[#E3F0FA] group-hover:border-[#43AAF0] transition-colors duration-300">
                <ArrowRight size={32} className="text-gray-400 group-hover:text-[#43AAF0] group-hover:translate-x-2 transition-all duration-300" />
              </div>
              <h3 className="text-sm md:text-base font-bold text-[#06206A] group-hover:text-[#43AAF0] transition-colors">
                View Full<br/>Committee
              </h3>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
