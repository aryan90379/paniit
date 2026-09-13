'use client';

import { motion } from 'framer-motion';

const PLACEHOLDER = "https://img.magnific.com/free-photo/close-up-portrait-young-bearded-man-white-shirt-jacket-posing-camera-with-broad-smile-isolated-gray_171337-629.jpg?semt=ais_hybrid&w=740&q=80";

const PAST_SPEAKERS = [
  { image: 'https://upload.wikimedia.org/wikipedia/commons/c/c0/Official_Photograph_of_Prime_Minister_Narendra_Modi_Portrait.png', name: 'Sri Narendra Modi', desc: "Hon'ble Prime Minister, India" },
  { image: 'https://upload.wikimedia.org/wikipedia/commons/b/b0/A.P.J._Abdul_Kalam.jpg', name: 'Dr. APJ Abdul Kalam', desc: 'Former President, India' },
  { image: 'https://upload.wikimedia.org/wikipedia/commons/e/eb/Manmohan_Singh_Portrait_1300x1500.jpg', name: 'Dr. Manmohan Singh', desc: 'Former Prime Minister, India' },
  { image: 'https://upload.wikimedia.org/wikipedia/commons/0/07/Sri_Sri_Ravi_Shankar_%2845347209351%29_%28cropped%29.jpg', name: 'Gurudev Sri Sri Ravi Shankar', desc: '' },
  { image: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Bill_Clinton.jpg', name: 'Sri Bill Clinton', desc: 'Former President, USA' },
  { image: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Bill_Gates_2018.jpg', name: 'Sri Bill Gates', desc: 'Chairman, Gates Foundation' },
  { image: 'https://upload.wikimedia.org/wikipedia/commons/0/0d/N_R_Narayana_Murthy.jpg', name: 'Sri NR Narayana Murthy', desc: 'Founder, Infosys' },
  { image: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/Manohar_Parrikar.jpg', name: 'Sri Manohar Parrikar', desc: 'Former Chief Minister, Goa' },
  { image: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Amartya_Sen_2022.jpg', name: 'Sri Amartya Sen', desc: 'Nobel Prize Winner and Professor, Harvard' },
  { image: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Nandan_Nilekani.jpg', name: 'Sri Nandan M. Nilekani', desc: 'Co-Founder & Chairman, Infosys' },
  { image: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Thawar_Chand_Gehlot.jpg', name: 'Sri Thawar Chand Gehlot', desc: 'Governor of Karnataka' },
  { image: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/Vinod_Khosla.jpg', name: 'Sri Vinod Khosla', desc: 'Founder & MD, Khosla Ventures' },
  { image: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/Aluru_Seelin_Kiran_Kumar.jpg', name: 'Sri A S Kiran Kumar', desc: 'Former Chairman, ISRO' },
  { image: 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Carl_Bass_2012.jpg', name: 'Sri Carl Bass', desc: 'Former President & CEO, Autodesk' },
  { image: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Nitin_Gadkari_official_portrait_%281%29.jpg', name: 'Sri Nitin Gadkari', desc: 'Union Minister, Road Transport & Highways' },
  { image: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Piyush_Goyal_in_2022.jpg', name: 'Sri Piyush Goyal', desc: 'Union Minister, Commerce and Industry of India' },
  { image: 'https://upload.wikimedia.org/wikipedia/commons/7/75/Abhay_Karandikar.jpg', name: 'Sri Abhay Karandikar', desc: 'Member, NITI Aayog' },
  { image: 'https://upload.wikimedia.org/wikipedia/commons/9/9b/M._K._Stalin_2022_%28cropped%29.jpg', name: 'Sri MK Stalin', desc: 'Chief Minister, Tamil Nadu' },
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
