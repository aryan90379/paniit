'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import { 
  CORE_COMMITTEE, 
  CORE_COMMITTEE_MEMBERS,
  OFFICE_BEARERS, 
  ADVISORS, 
  COMMITTEE_MEMBERS, 
  CommitteeMember,
  PLACEHOLDER
} from '@/data/committee';

const MemberCard = ({ person }: { person: CommitteeMember }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.1, margin: "0px 0px -50px 0px" }} style={{ WebkitTransform: "translateZ(0)", willChange: "transform, opacity" }}
    transition={{ duration: 0.3 }}
    className="group bg-white rounded-2xl p-5 md:p-6 border border-[#06206A]/8 flex flex-col items-center text-center hover:border-[#C4A35A]/50 transition-colors duration-300"
  >
    <div className="relative w-20 h-20 md:w-24 md:h-24 mb-4 shrink-0">
      <img 
        src={person.image || PLACEHOLDER} 
        alt={person.name} 
        loading="lazy" 
        decoding="async" 
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).src = PLACEHOLDER;
        }}
        className="w-full h-full object-cover rounded-full bg-slate-100 portrait-ring" 
      />
    </div>

    <h3 className="text-sm md:text-base font-semibold text-[#06206A] leading-snug text-center mb-1">
      {person.name}
    </h3>

    {person.role ? (
      <p className="text-xs md:text-sm text-slate-500 text-center line-clamp-2">
        {person.role}
      </p>
    ) : null}
  </motion.div>
);

export default function Committee() {
  return (
    <section id="committee" className="py-20 md:py-24 bg-white text-gray-900 relative">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        
        {/* SECTION 1: PANIIT ALUMNI INDIA OFFICE BEARERS */}
        <div className="mb-20">
          <SectionHeading 
            eyebrow="PanIIT Summit Leadership"
            title="PanIIT Alumni India Office Bearers" 
            subtitle="National leadership representing the apex IIT alumni organization in India."
            className="mb-10 md:mb-12"
          />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5 md:gap-6 justify-center max-w-5xl mx-auto">
            {OFFICE_BEARERS.map((person, i) => (
              <MemberCard key={i} person={person} />
            ))}
          </div>
        </div>

        {/* SECTION 2: SUMMIT ADVISORS */}
        <div className="mb-20">
          <SectionHeading 
            title="Summit Advisors" 
            subtitle="Eminent directors and academic leaders providing guidance and advisory support."
            className="mb-10 md:mb-12"
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 md:gap-6 justify-center max-w-4xl mx-auto">
            {ADVISORS.map((person, i) => (
              <MemberCard key={i} person={person} />
            ))}
          </div>
        </div>

        {/* SECTION 3: SUMMIT ORGANISING CORE COMMITTEE */}
        <div>
          <SectionHeading 
            title="Summit Organising Core Committee" 
            subtitle="The leadership and core team driving the vision of PanIIT Andhra Pradesh Summit 2026."
            className="mb-10 md:mb-12"
          />
          <div className="grid grid-cols-2 gap-4 sm:gap-5 md:gap-6 justify-center max-w-md mx-auto mb-6">
            {CORE_COMMITTEE.slice(0, 2).map((person, i) => (
              <MemberCard key={i} person={person} />
            ))}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5 md:gap-6 justify-center">
            {[...CORE_COMMITTEE_MEMBERS, ...COMMITTEE_MEMBERS].map((person, i) => (
              <MemberCard key={i} person={person} />
            ))}
            <div className="flex flex-col items-center justify-center text-center min-h-[180px] md:min-h-[200px]">
              <div className="font-serif text-lg md:text-xl font-medium text-[#06206A]">+ Many More</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
