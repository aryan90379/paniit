'use client';

import { OFFICE_BEARERS, ADVISORS, CORE_COMMITTEE, CORE_COMMITTEE_MEMBERS, COMMITTEE_MEMBERS, PLACEHOLDER } from '@/data/committee';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const SectionTitle = ({ title }: { title: string }) => (
  <div className="flex flex-col items-center mb-12">
    <h2 className="text-2xl md:text-3xl font-black text-[#06206A] uppercase tracking-wide text-center">
      {title}
    </h2>
  </div>
);

const CircularProfile = ({ person, large = false }: { person: any, large?: boolean }) => (
  <div className="flex flex-col items-center text-center group p-4 rounded-[2rem] hover:bg-gray-50 transition-all duration-300 relative cursor-default">
    <div className={`relative mb-6 group-hover:-translate-y-2 transition-transform duration-300 ${large ? 'w-48 h-48 md:w-56 md:h-56' : 'w-32 h-32 md:w-40 md:h-40'}`}>
      <div className="absolute inset-[-15%] bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-15 blur-2xl rounded-full transition-opacity duration-300 pointer-events-none" />
      <img 
        src={person.image || PLACEHOLDER} 
        alt={person.name} 
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).src = PLACEHOLDER;
        }}
        className="w-full h-full object-cover rounded-full relative z-10 bg-white border border-gray-100 shadow-sm" 
      />
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

export default function CommitteePage() {
  return (
    <main className="min-h-screen bg-white pt-24 md:pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        
        <div className="mb-12">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-[#DD1D21] transition-colors font-bold text-sm uppercase tracking-wider">
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>

        <div className="text-center mb-24">
          <h1 className="text-4xl md:text-6xl font-black text-[#06206A] uppercase tracking-tight mb-6">
            Summit Committee
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Meet the visionaries, advisors, and organizing members driving the PanIIT Andhra Pradesh Summit 2026.
          </p>
        </div>
        
        {/* OFFICE BEARERS */}
        <div className="mb-24">
          <SectionTitle title="PANIIT ALUMNI INDIA OFFICE BEARERS" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {OFFICE_BEARERS.map((person, i) => (
              <CircularProfile key={i} person={person} />
            ))}
          </div>
        </div>

        {/* ADVISORS */}
        <div className="mb-24">
          <SectionTitle title="SUMMIT ADVISORS" />
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {ADVISORS.map((person, i) => (
              <CircularProfile key={i} person={person} large />
            ))}
          </div>
        </div>

        {/* CORE COMMITTEE */}
        <div className="mb-24">
          <SectionTitle title="SUMMIT ORGANISING CORE COMMITTEE" />
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-12">
            {CORE_COMMITTEE.map((person, i) => (
              <CircularProfile key={i} person={person} large />
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {CORE_COMMITTEE_MEMBERS.map((person, i) => (
              <CircularProfile key={i} person={person} />
            ))}
          </div>
        </div>

        {/* OTHER MEMBERS */}
        <div>
          <SectionTitle title="ORGANISING COMMITTEE MEMBERS" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
            {COMMITTEE_MEMBERS.map((person, i) => (
              <CircularProfile key={i} person={person} />
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}
