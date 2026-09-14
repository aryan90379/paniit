'use client';

import { motion } from 'framer-motion';

const PLACEHOLDER = "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22%23cbd5e1%22%3E%3Cpath%20d%3D%22M12%2012c2.21%200%204-1.79%204-4s-1.79-4-4-4-4%201.79-4%204%201.79%204%204%204zm0%202c-2.67%200-8%201.34-8%204v2h16v-2c0-2.66-5.33-4-8-4z%22%2F%3E%3C%2Fsvg%3E";

const PAST_SPEAKERS = [
  { image: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/The_official_portrait_of_Shri_Narendra_Modi%2C_the_Prime_Minister_of_the_Republic_of_India.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=thumbnail_unscaled', name: 'Sri Narendra Modi', desc: "Hon'ble Prime Minister, India" },
  { image: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/A._P._J._Abdul_Kalam.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original', name: 'Dr. APJ Abdul Kalam', desc: 'Former President, India' },
  { image: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Official_Portrait_of_the_Prime_Minister_Dr._Manmohan_Singh_%283x4_cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original', name: 'Dr. Manmohan Singh', desc: 'Former Prime Minister, India' },
  { image: 'https://gurudev.artofliving.org/wp-content/uploads/Spiritual_teacher_2048.jpg', name: 'Gurudev Sri Sri Ravi Shankar', desc: '' },
  { image: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Bill_Clinton.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original', name: 'Sri Bill Clinton', desc: 'Former President, USA' },
  { image: 'https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg', name: 'Sri Bill Gates', desc: 'Chairman, Gates Foundation' },
  { image: 'https://www.infosys.com/content/dam/infosys-web/en/global-resource/photos/nrn.jpg', name: 'Sri NR Narayana Murthy', desc: 'Founder, Infosys' },
  { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5vWYzcDoB_OIh2rekg-EueJydi3WBGaLCqelxRT_JR-dStZ-s6LY4Hx0&s=10', name: 'Sri Manohar Parrikar', desc: 'Former Chief Minister, Goa' },
  { image: 'https://upload.wikimedia.org/wikipedia/commons/3/35/Amartya_Sen_20071128_cologne_cropped.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original', name: 'Sri Amartya Sen', desc: 'Nobel Prize Winner and Professor, Harvard' },
  { image: 'https://upload.wikimedia.org/wikipedia/commons/6/62/Nandan_M._Nilekani.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original', name: 'Sri Nandan M. Nilekani', desc: 'Co-Founder & Chairman, Infosys' },
  { image: 'https://static.indiatvnews.com/ins-web/images/thawar-chand-gehlot-1559204649.jpg', name: 'Sri Thawar Chand Gehlot', desc: 'Governor of Karnataka' },
  { image: 'https://upload.wikimedia.org/wikipedia/commons/3/37/Vinod_Khosla%2C_Web_2.0_Conference.jpg?utm_source=www.wikidata.org&utm_campaign=index&utm_content=thumbnail_unscaled', name: 'Sri Vinod Khosla', desc: 'Founder & MD, Khosla Ventures' },
  { image: 'https://upload.wikimedia.org/wikipedia/commons/b/be/Askiran.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original', name: 'Sri A S Kiran Kumar', desc: 'Former Chairman, ISRO' },
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
