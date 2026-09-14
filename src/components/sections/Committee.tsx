'use client';

import { motion } from 'framer-motion';

const PLACEHOLDER = "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22%23cbd5e1%22%3E%3Cpath%20d%3D%22M12%2012c2.21%200%204-1.79%204-4s-1.79-4-4-4-4%201.79-4%204%201.79%204%204%204zm0%202c-2.67%200-8%201.34-8%204v2h16v-2c0-2.66-5.33-4-8-4z%22%2F%3E%3C%2Fsvg%3E";

const OFFICE_BEARERS = [
  { image: PLACEHOLDER, name: 'Prabhat Kumar, IRS', role: 'Chairman' },
  { image: 'https://wabflow.b-cdn.net/paniit/organising%20committee/Dr.%20Amitabh%20Ranjan.jpg', name: 'Dr. Amitabh Ranjan', role: 'Vice Chairman' },
  { image: PLACEHOLDER, name: 'Rajeev Singh', role: 'General Secretary' },
  { image: PLACEHOLDER, name: 'Ashish Kela', role: 'Treasurer' },
];

const ADVISORS = [
  { image: "https://wabflow.b-cdn.net/paniit/dignitaries%20pictures/Prof.%20V.%20Kamakoti%20Director%2C%20IIT%20Madras.jpg", name: 'Prof. V. Kamakoti', role: 'Director, IIT Madras' },
  { image: 'https://wabflow.b-cdn.net/paniit/dignitaries%20pictures/Prof.%20Satyamnarayana_%20IIT%20Tirupathi%20director.jpeg', name: 'Dr. K. N. Satyanarayana', role: 'Director, IIT Tirupati' },
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
  { image: 'https://wabflow.b-cdn.net/paniit/organising%20committee/Dr.%20Gundala%20Nagaraju%20(right).jpg', name: 'Dr. Gundala Nagaraju', role: '' },
];

const COMMITTEE_MEMBERS = [
  { image: 'https://wabflow.b-cdn.net/paniit/organising%20committee/Abhilash%20Kondai.jpg', name: 'Abhilash Kondai' },
  { image: 'https://wabflow.b-cdn.net/paniit/organising%20committee/J%20V%20Prem%20Kumar%20Reddy.jpeg', name: 'J V Prem Kumar Reddy' },
  { image: 'https://wabflow.b-cdn.net/paniit/organising%20committee/NS%20Bhanuprakash.jpg', name: 'NS Bhanuprakash' },
  { image: 'https://wabflow.b-cdn.net/paniit/organising%20committee/Pradip%20Sasmal.jpg', name: 'Pradip Sasmal' },
  { image: 'https://wabflow.b-cdn.net/paniit/organising%20committee/Prof.%20Murali%20Krishna%20%20Iyyanki%20(left).jpg', name: 'Prof. Murali Krishna\nIyyanki' },
  { image: 'https://wabflow.b-cdn.net/paniit/organising%20committee/Rajesh%20Rathi.jpg', name: 'Rajesh Rathi' },
  { image: 'https://wabflow.b-cdn.net/paniit/organising%20committee/Neeraj%20Kumar%20(right).jpg', name: 'Neeraj Kumar' },
  { image: PLACEHOLDER, name: 'Praveen Kumar' },
  { image: 'https://wabflow.b-cdn.net/paniit/organising%20committee/Phani%20Arega.jpg', name: 'Phani Arega' },
  { image: 'https://wabflow.b-cdn.net/paniit/organising%20committee/Sai%20Teja%20Duggempudi.jpg', name: 'Sai Teja Duggempudi' },
  { image: PLACEHOLDER, name: 'Tejavath Jagadeesh' },
  { image: 'https://wabflow.b-cdn.net/paniit/organising%20committee/Dr.%20Anjanna%20Matta.jpeg', name: 'Dr. Anjanna Matta' },
  { image: 'https://wabflow.b-cdn.net/paniit/organising%20committee/C%20P%20Madhusudan_.jpg', name: 'C P Madhusudan' },
  { image: 'https://wabflow.b-cdn.net/paniit/organising%20committee/Thejaswini%20Kalasamudram.jpeg', name: 'Thejaswini Kalasamudram' },
  { image: 'https://wabflow.b-cdn.net/paniit/organising%20committee/Gadi%20Akhil%20Sai%20Ram.jpg', name: 'Gadi Akhil Sai Ram' },
  { image: 'https://wabflow.b-cdn.net/paniit/organising%20committee/Kshitij%20Tiwari.jpg', name: 'Kshitij Tiwari' },
  { image: 'https://wabflow.b-cdn.net/paniit/organising%20committee/Sanskreeti%20Raj.jpg', name: 'Sanskreeti Raj' },
  { image: PLACEHOLDER, name: 'Vishakh Agarwal' },
  { image: PLACEHOLDER, name: 'Vishal Bhandari' },
];

const SectionTitle = ({ title }: { title: string }) => (
  <div className="flex flex-col items-center mb-12">
    <h2 className="text-2xl md:text-3xl font-black text-[#06206A] uppercase tracking-wide text-center">
      {title}
    </h2>
  </div>
);

const CircularProfile = ({ person, large = false }: { person: any, large?: boolean }) => (
  <div className="flex flex-col items-center text-center group p-4 rounded-[2rem] hover:bg-[#F4ECE4] transition-all duration-300 relative cursor-default">
    <div className={`relative mb-6 group-hover:-translate-y-2 transition-transform duration-300 ${large ? 'w-48 h-48 md:w-56 md:h-56' : 'w-32 h-32 md:w-40 md:h-40'}`}>
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
