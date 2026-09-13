'use client';

import { motion } from 'framer-motion';

const PLACEHOLDER = "https://img.magnific.com/free-photo/close-up-portrait-young-bearded-man-white-shirt-jacket-posing-camera-with-broad-smile-isolated-gray_171337-629.jpg?semt=ais_hybrid&w=740&q=80";

const PAST_SPEAKERS = [
  { name: 'Sri Narendra Modi', desc: "Hon'ble Prime Minister, India" },
  { name: 'Dr. APJ Abdul Kalam', desc: 'Former President, India' },
  { name: 'Dr. Manmohan Singh', desc: 'Former Prime Minister, India' },
  { name: 'Gurudev Sri Sri Ravi Shankar', desc: '' },
  { name: 'Sri Bill Clinton', desc: 'Former President, USA' },
  { name: 'Sri Bill Gates', desc: 'Chairman, Gates Foundation' },
  { name: 'Sri NR Narayana Murthy', desc: 'Founder, Infosys' },
  { name: 'Sri Manohar Parrikar', desc: 'Former Chief Minister, Goa' },
  { name: 'Sri Amartya Sen', desc: 'Nobel Prize Winner and Professor, Harvard' },
  { name: 'Sri Nandan M. Nilekani', desc: 'Co-Founder & Chairman, Infosys' },
  { name: 'Sri Thawar Chand Gehlot', desc: 'Governor of Karnataka' },
  { name: 'Sri Vinod Khosla', desc: 'Founder & MD, Khosla Ventures' },
  { name: 'Sri A S Kiran Kumar', desc: 'Former Chairman, ISRO' },
  { name: 'Sri Carl Bass', desc: 'Former President & CEO, Autodesk' },
  { name: 'Sri Nitin Gadkari', desc: 'Union Minister, Road Transport & Highways' },
  { name: 'Sri Piyush Goyal', desc: 'Union Minister, Commerce and Industry of India' },
  { name: 'Sri Abhay Karandikar', desc: 'Member, NITI Aayog' },
  { name: 'Sri MK Stalin', desc: 'Chief Minister, Tamil Nadu' },
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
            className="text-3xl md:text-5xl font-bold text-[#1e3a8a] mb-4 tracking-tight uppercase"
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
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden mb-4 border-[3px] border-red-600 p-1 group-hover:scale-105 transition-transform">
                <img 
                  src={PLACEHOLDER} 
                  alt={speaker.name} 
                  className="w-full h-full object-cover rounded-full bg-gray-100"
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
