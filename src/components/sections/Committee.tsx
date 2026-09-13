'use client';

import { motion } from 'framer-motion';

const PLACEHOLDER = "https://img.magnific.com/free-photo/close-up-portrait-young-bearded-man-white-shirt-jacket-posing-camera-with-broad-smile-isolated-gray_171337-629.jpg?semt=ais_hybrid&w=740&q=80";

const OFFICE_BEARERS = [
  { image: PLACEHOLDER, name: 'Prabhat Kumar, IRS', role: 'Chairman' },
  { image: PLACEHOLDER, name: 'Dr. Amitabh Ranjan', role: 'Vice Chairman' },
  { image: PLACEHOLDER, name: 'Rajeev Singh', role: 'General Secretary' },
  { image: PLACEHOLDER, name: 'Ashish Kela', role: 'Treasurer' },
];

const ADVISORS = [
  { image: PLACEHOLDER, name: 'Prof. V. Kamakoti', role: 'Director, IIT Madras' },
  { image: PLACEHOLDER, name: 'Dr. K. N. Satyanarayana', role: 'Director, IIT Tirupati' },
  { image: PLACEHOLDER, name: 'Prof. Mahesh Panchagnula', role: 'Ex Dean, IIT Madras' },
];

const CORE_COMMITTEE = [
  { image: PLACEHOLDER, name: 'Swadeep Pillarisetti', role: 'Chair' },
  { image: PLACEHOLDER, name: 'Rajesh Kumar Dasari', role: 'Co-Chair' },
];

const CORE_COMMITTEE_MEMBERS = [
  { image: PLACEHOLDER, name: 'Sudhakar Gande', role: '' },
  { image: PLACEHOLDER, name: 'M S Reddy', role: '' },
  { image: PLACEHOLDER, name: 'Dr. Ramunaidu Randhi', role: '' },
  { image: PLACEHOLDER, name: 'Dr. Gundala Nagaraju', role: '' },
];

const COMMITTEE_MEMBERS = [
  { image: PLACEHOLDER, name: 'Prof. Murali Krishna\nIyyanki' },
  { image: PLACEHOLDER, name: 'Rajesh Rathi' },
  { image: PLACEHOLDER, name: 'Neeraj Kumar' },
  { image: PLACEHOLDER, name: 'Praveen Kumar' },
  { image: PLACEHOLDER, name: 'Phani Arega' },
  { image: PLACEHOLDER, name: 'Sai Teja Duggempudi' },
  { image: PLACEHOLDER, name: 'Tejavath Jagadeesh' },
  { image: PLACEHOLDER, name: 'Dr. Anjanna Matta' },
  { image: PLACEHOLDER, name: 'C P Madhusudan' },
  { image: PLACEHOLDER, name: 'Thejaswini Kalasamudram' },
  { image: PLACEHOLDER, name: 'Gadi Akhil Sai Ram' },
  { image: PLACEHOLDER, name: 'Kshitij Tiwari' },
  { image: PLACEHOLDER, name: 'Sanskreeti Raj' },
  { image: PLACEHOLDER, name: 'Vishakh Agarwal' },
  { image: PLACEHOLDER, name: 'Vishal Bhandari' },
];

const SectionTitle = ({ title }: { title: string }) => (
  <div className="flex flex-col items-center mb-12">
    <h2 className="text-2xl md:text-3xl font-black text-[#153063] uppercase tracking-wide text-center">
      {title}
    </h2>
  </div>
);

const CircularProfile = ({ person, large = false }: { person: any, large?: boolean }) => (
  <div className="flex flex-col items-center text-center">
    <div className={`relative mb-6 ${large ? 'w-48 h-48 md:w-56 md:h-56' : 'w-32 h-32 md:w-40 md:h-40'}`}>
      <div className="absolute inset-0 bg-[#E13926] rounded-full rounded-br-none scale-105" />
      <img src={person.image} alt={person.name} className="w-full h-full object-cover rounded-full relative z-10 border-[4px] border-white bg-gray-100" />
    </div>
    <h3 className="text-sm md:text-base font-bold text-[#050505] leading-tight whitespace-pre-line mb-1">
      {person.name}
    </h3>
    {person.role && (
      <p className="text-xs md:text-sm text-gray-600 font-medium whitespace-pre-line">
        {person.role}
      </p>
    )}
  </div>
);

export default function Committee() {
  return (
    <section id="committee" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        
        {/* OFFICE BEARERS */}
        <div className="mb-20">
          <SectionTitle title="PANIIT ALUMNI INDIA OFFICE BEARERS" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {OFFICE_BEARERS.map((person, i) => (
              <CircularProfile key={i} person={person} />
            ))}
          </div>
        </div>

        {/* ADVISORS */}
        <div className="mb-20">
          <SectionTitle title="SUMMIT ADVISORS" />
          <div className="flex flex-wrap justify-center gap-12">
            {ADVISORS.map((person, i) => (
              <CircularProfile key={i} person={person} large />
            ))}
          </div>
        </div>

        {/* CORE COMMITTEE */}
        <div className="mb-20">
          <SectionTitle title="SUMMIT ORGANISING CORE COMMITTEE" />
          <div className="flex flex-wrap justify-center gap-16 mb-12">
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
            {COMMITTEE_MEMBERS.map((person, i) => (
              <CircularProfile key={i} person={person} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
