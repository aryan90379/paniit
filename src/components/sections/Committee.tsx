'use client';

import { motion } from 'framer-motion';
import { 
  CORE_COMMITTEE, 
  OFFICE_BEARERS, 
  ADVISORS, 
  COMMITTEE_MEMBERS, 
  CommitteeMember 
} from '@/data/committee';

const SectionHeading = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="text-center mb-10 md:mb-12">
    <div className="inline-flex items-center gap-2 mb-2">
      <span className="w-2 h-2 rounded-full bg-[#DD1D21]" />
      <span className="text-xs font-bold uppercase tracking-widest text-[#DD1D21]">PanIIT Summit Leadership</span>
    </div>
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#06206A] tracking-tight uppercase">
      {title}
    </h2>
    {subtitle && (
      <p className="text-sm sm:text-base text-gray-600 font-medium max-w-2xl mx-auto mt-2 leading-relaxed">
        {subtitle}
      </p>
    )}
  </div>
);

const MemberCard = ({ person }: { person: CommitteeMember }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.3 }}
    className="bg-white rounded-2xl md:rounded-3xl p-5 md:p-6 shadow-xs hover:shadow-xl border border-gray-100/90 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1.5 group relative"
  >
    {/* Profile Image with LinkedIn Badge */}
    <div className="relative w-20 h-20 md:w-24 md:h-24 mb-4 shrink-0">
      <img 
        src={person.image} 
        alt={person.name} 
        loading="lazy" 
        decoding="async" 
        className="w-full h-full object-cover rounded-full bg-slate-100 border-2 border-white shadow-xs ring-1 ring-gray-100 group-hover:scale-105 transition-transform duration-300" 
      />
      {person.linkedin && (
        <a 
          href={person.linkedin} 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label={`${person.name} on LinkedIn`}
          className="absolute bottom-0 right-0 w-6 h-6 md:w-7 md:h-7 rounded-full bg-[#0A66C2] hover:bg-[#004182] text-white flex items-center justify-center shadow-md border-2 border-white transition-all hover:scale-115 cursor-pointer z-10"
        >
          <svg className="w-3 h-3 md:w-3.5 md:h-3.5 fill-current" viewBox="0 0 24 24">
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
          </svg>
        </a>
      )}
    </div>

    {/* Name */}
    <h3 className="text-sm md:text-base font-extrabold text-[#06206A] leading-snug text-center mb-1 group-hover:text-blue-700 transition-colors">
      {person.name}
    </h3>

    {/* Role */}
    <p className="text-[11px] md:text-xs font-bold uppercase tracking-wider text-gray-400 text-center line-clamp-2">
      {person.role || 'Committee Member'}
    </p>
  </motion.div>
);

export default function Committee() {
  return (
    <section id="committee" className="py-20 md:py-28 bg-[#F8FAFC] text-gray-900 relative border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        
        {/* SECTION 1: SUMMIT ORGANISING CORE COMMITTEE */}
        <div className="mb-20">
          <SectionHeading 
            title="Summit Organising Core Committee" 
            subtitle="The leadership and core team driving the vision of PanIIT Andhra Pradesh Summit 2026."
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5 md:gap-6 justify-center">
            {CORE_COMMITTEE.map((person, i) => (
              <MemberCard key={i} person={person} />
            ))}
          </div>
        </div>

        {/* SECTION 2: PANIIT ALUMNI INDIA OFFICE BEARERS */}
        <div className="mb-20">
          <SectionHeading 
            title="PanIIT Alumni India Office Bearers" 
            subtitle="National leadership representing the apex IIT alumni organization in India."
          />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5 md:gap-6 justify-center max-w-5xl mx-auto">
            {OFFICE_BEARERS.map((person, i) => (
              <MemberCard key={i} person={person} />
            ))}
          </div>
        </div>

        {/* SECTION 3: SUMMIT ADVISORS */}
        <div className="mb-20">
          <SectionHeading 
            title="Summit Advisors" 
            subtitle="Eminent directors and academic leaders providing guidance and advisory support."
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 md:gap-6 justify-center max-w-4xl mx-auto">
            {ADVISORS.map((person, i) => (
              <MemberCard key={i} person={person} />
            ))}
          </div>
        </div>

        {/* SECTION 4: ORGANISING COMMITTEE MEMBERS */}
        <div>
          <SectionHeading 
            title="Organising Committee Members" 
            subtitle="Dedicated alumni committee members executing tracks, student hackathons, showcases, and partnerships."
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5 md:gap-6">
            {COMMITTEE_MEMBERS.map((person, i) => (
              <MemberCard key={i} person={person} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
