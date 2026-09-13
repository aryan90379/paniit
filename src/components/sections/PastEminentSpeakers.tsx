'use client';

import { motion } from 'framer-motion';

const PLACEHOLDER = "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22%23cbd5e1%22%3E%3Cpath%20d%3D%22M12%2012c2.21%200%204-1.79%204-4s-1.79-4-4-4-4%201.79-4%204%201.79%204%204%204zm0%202c-2.67%200-8%201.34-8%204v2h16v-2c0-2.66-5.33-4-8-4z%22%2F%3E%3C%2Fsvg%3E";

const PAST_SPEAKERS = [
  { image: PLACEHOLDER, name: 'Sri Narendra Modi', desc: "Hon'ble Prime Minister, India" },
  { image: PLACEHOLDER, name: 'Dr. APJ Abdul Kalam', desc: 'Former President, India' },
  { image: PLACEHOLDER, name: 'Dr. Manmohan Singh', desc: 'Former Prime Minister, India' },
  { image: PLACEHOLDER, name: 'Gurudev Sri Sri Ravi Shankar', desc: '' },
  { image: PLACEHOLDER, name: 'Sri Bill Clinton', desc: 'Former President, USA' },
  { image: PLACEHOLDER, name: 'Sri Bill Gates', desc: 'Chairman, Gates Foundation' },
  { image: PLACEHOLDER, name: 'Sri NR Narayana Murthy', desc: 'Founder, Infosys' },
  { image: PLACEHOLDER, name: 'Sri Manohar Parrikar', desc: 'Former Chief Minister, Goa' },
  { image: PLACEHOLDER, name: 'Sri Amartya Sen', desc: 'Nobel Prize Winner and Professor, Harvard' },
  { image: PLACEHOLDER, name: 'Sri Nandan M. Nilekani', desc: 'Co-Founder & Chairman, Infosys' },
  { image: PLACEHOLDER, name: 'Sri Thawar Chand Gehlot', desc: 'Governor of Karnataka' },
  { image: PLACEHOLDER, name: 'Sri Vinod Khosla', desc: 'Founder & MD, Khosla Ventures' },
  { image: PLACEHOLDER, name: 'Sri A S Kiran Kumar', desc: 'Former Chairman, ISRO' },
  { image: PLACEHOLDER, name: 'Sri Carl Bass', desc: 'Former President & CEO, Autodesk' },
  { image: PLACEHOLDER, name: 'Sri Nitin Gadkari', desc: 'Union Minister, Road Transport & Highways' },
  { image: PLACEHOLDER, name: 'Sri Piyush Goyal', desc: 'Union Minister, Commerce and Industry of India' },
  { image: PLACEHOLDER, name: 'Sri Abhay Karandikar', desc: 'Member, NITI Aayog' },
  { image: PLACEHOLDER, name: 'Sri MK Stalin', desc: 'Chief Minister, Tamil Nadu' },
  { name: 'Sri Dr. V Anantha Nageswaran', desc: 'Chief Economic Advisor, Government of India' },
  { name: 'Sri Sudhansh Panth', desc: 'IAS (IITKGP) Chief Secretary Rajasthan' },
  { name: 'Sri Navin Mittal, IAS', desc: 'Special Chief Secretary, Policy, Regulation & Energy at Govt. of Telangana' },
  { name: 'Sri Phani Kishan Addepalli', desc: 'Cofounder, Swiggy' },
  { name: 'Sri Ankit Mehta', desc: 'CEO, ideaForge' },
  { name: 'Sri Tarun Mehta', desc: 'Cofounder & CEO, Ather Energy' },
  { name: 'Smt. Asha Jadeja Motwani', desc: 'Founder, Motwani Jadeja Family Foundation' },
  { name: 'Smt. Sharon Pickering', desc: 'Vice-Chancellor and President of Monash University' },
  { name: 'Sri Markus Schäfer', desc: 'Board of Directors Member & CTO Mercedes-Benz Group AG' },
  { name: 'Sri Naotaka Nishiyama', desc: 'Founder & CEO, Talendy' },
  { name: 'Sri Lal Chand Bisu', desc: 'Cofounder & CEO Kuku FM' },
  { name: 'Sri Venkat Padmanabhan', desc: 'Managing Director, Microsoft Research India' },
  { name: 'Sri Harsh Jain', desc: 'Cofounder & COO, Groww' },
  { name: 'Sri Abhishek Bansal', desc: 'Cofounder & CEO, Shadowfax' },
];

export default function PastEminentSpeakers() {
  return (
    <section className="py-24 bg-white relative border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-[#153063] mb-4 tracking-tight uppercase"
          >
            Eminent Speakers From Past PanIIT Events
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-6 gap-y-12">
          {PAST_SPEAKERS.map((speaker, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 6) * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="relative w-28 h-28 md:w-36 md:h-36 mb-6 group-hover:scale-105 transition-transform">
                <div className="absolute inset-0 bg-[#E13926] rounded-full rounded-br-none scale-105" style={{ transformOrigin: 'center' }} />
                <img 
                  src={speaker.image || PLACEHOLDER} 
                  alt={speaker.name} 
                  className="w-full h-full object-cover rounded-full relative z-10 border-[3px] border-white bg-gray-100"
                />
              </div>
              <h3 className="font-bold text-gray-900 text-sm md:text-base leading-tight mb-1">{speaker.name}</h3>
              {speaker.desc && (
                <p className="text-xs md:text-sm text-gray-600">{speaker.desc}</p>
              )}
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16 font-bold text-xl text-gray-400">
          + Many More
        </div>

      </div>
    </section>
  );
}
