'use client';

import { ADVISORS, CORE_COMMITTEE, COMMITTEE_MEMBERS, PLACEHOLDER } from '@/data/committee';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import SectionHeading from '@/components/ui/SectionHeading';

const CircularProfile = ({ person, large = false }: { person: { image?: string; name: string; role?: string }, large?: boolean }) => (
  <div className="group flex flex-col items-center text-center p-4 cursor-default">
    <div className={`relative mb-6 ${large ? 'w-40 h-40 md:w-52 md:h-52' : 'w-28 h-28 md:w-36 md:h-36'}`}>
      <img 
        src={person.image || PLACEHOLDER} 
        alt={person.name} 
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).src = PLACEHOLDER;
        }}
        className="w-full h-full object-cover rounded-full bg-white portrait-ring" 
      />
    </div>
    <h3 className="text-sm md:text-base font-semibold text-[#06206A] leading-tight whitespace-pre-line mb-1">
      {person.name}
    </h3>
    {person.role && (
      <p className="text-sm md:text-base text-slate-500 whitespace-pre-line">
        {person.role}
      </p>
    )}
  </div>
);

export default function CommitteePage() {
  return (
    <main className="min-h-screen bg-paper pt-24 md:pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        
        <div className="mb-12">
          <Link prefetch={false} href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-[#06206A] transition-colors font-medium text-sm">
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>

        <SectionHeading
          title="Summit Committee"
          subtitle="Meet the visionaries, advisors, and organizing members driving the PanIIT Andhra Pradesh Summit 2026."
          className="mb-16 md:mb-20"
        />
        
        <div className="mb-24">
          <SectionHeading title="Summit Advisors" className="mb-12" />
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {ADVISORS.map((person, i) => (
              <CircularProfile key={i} person={person} large />
            ))}
          </div>
        </div>

        {/* CORE COMMITTEE */}
        <div className="mb-16">
          <SectionHeading title="Summit Organising Core Committee" className="mb-12" />
          {/* Chair & Co-Chair — large */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-12">
            {CORE_COMMITTEE.slice(0, 2).map((person, i) => (
              <CircularProfile key={i} person={person} large />
            ))}
          </div>
          {/* Rest of core committee — regular size */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {CORE_COMMITTEE.slice(2).map((person, i) => (
              <CircularProfile key={i} person={person} />
            ))}
          </div>
          {/* Organising Committee Members — same section, no extra heading */}
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
