'use client';

import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Grid } from 'lucide-react';

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
  { image: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Carl_Bass_Autodesk.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original', name: 'Sri Carl Bass', desc: 'Former President & CEO, Autodesk' },
  { image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8c/Nitin_Jairam_Gadkari.jpg/250px-Nitin_Jairam_Gadkari.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail', name: 'Sri Nitin Gadkari', desc: 'Union Minister, Road Transport & Highways' },
  { image: 'https://etimg.etb2bimg.com/photo/125431002.cms', name: 'Sri Piyush Goyal', desc: 'Union Minister, Commerce and Industry of India' },
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
  const [showAll, setShowAll] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -350, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };

  return (
    <section id="speakers-legacy-section" className="py-24 bg-white relative border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-[#06206A] mb-4 tracking-tight uppercase"
          >
            Legacy of Eminent Speakers
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 font-medium max-w-2xl mx-auto"
          >
            PanIIT summits have previously hosted global leaders, honoring our legacy of tech, policy, and innovation leadership.
          </motion.p>
        </div>

        {!showAll ? (
          <div className="relative">
            {/* Carousel Navigation */}
            <button 
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center z-20 text-[#06206A] hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={scrollRight}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center z-20 text-[#06206A] hover:bg-gray-50 transition-colors"
            >
              <ChevronRight size={24} />
            </button>

            {/* Carousel Container */}
            <div 
              ref={carouselRef}
              className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 pt-4 hide-scrollbar px-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {PAST_SPEAKERS.slice(0, 10).map((speaker, i) => (
                <div 
                  key={i}
                  className="snap-start shrink-0 w-[260px] md:w-[280px] flex flex-col items-center text-center group p-6 rounded-[30px] bg-white transition-all duration-300 relative border border-gray-100/50 hover:shadow-[0_15px_40px_-10px_rgba(99,102,241,0.2)]"
                >
                  <div className="relative w-32 h-32 md:w-40 md:h-40 mb-6 group-hover:-translate-y-2 transition-transform duration-300">
                    <div className="absolute inset-[-15%] bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-15 blur-xl rounded-full transition-opacity duration-300 pointer-events-none" />
                    <img 
                      src={speaker.image || PLACEHOLDER} 
                      alt={speaker.name} 
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover rounded-full relative z-10 bg-white border border-gray-100 shadow-sm"
                    />
                  </div>
                  <h3 className="font-bold text-[#06206A] text-base md:text-lg leading-snug mb-2 relative z-10 group-hover:text-indigo-600 transition-colors">{speaker.name}</h3>
                  {speaker.desc && (
                    <p className="text-xs md:text-sm text-gray-500 relative z-10 font-medium">{speaker.desc}</p>
                  )}
                </div>
              ))}
            </div>
            
            {/* View All Button */}
            <div className="flex justify-center mt-6">
              <button 
                onClick={() => setShowAll(true)}
                className="group flex items-center gap-2 px-8 py-3 bg-[#06206A] text-white rounded-full font-semibold hover:bg-indigo-600 transition-all shadow-md hover:shadow-lg"
              >
                <Grid size={18} />
                View All Speakers
              </button>
            </div>
          </div>
        ) : (
          <div className="relative">
            {/* Grid Container */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-10 md:gap-x-6 md:gap-y-12 pb-8 pt-4">
              {PAST_SPEAKERS.map((speaker, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i % 5) * 0.05 }}
                  className="flex flex-col items-center text-center group p-4 md:p-6 rounded-[30px] hover:bg-white transition-all duration-300 relative hover:shadow-[0_15px_40px_-10px_rgba(99,102,241,0.2)]"
                >
                  <div className="relative w-28 h-28 md:w-32 md:h-32 mb-5 group-hover:-translate-y-1 transition-transform duration-300">
                    <div className="absolute inset-[-15%] bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-15 blur-xl rounded-full transition-opacity duration-300 pointer-events-none" />
                    <img 
                      src={speaker.image || PLACEHOLDER} 
                      alt={speaker.name} 
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover rounded-full relative z-10 bg-white border border-gray-100 shadow-sm"
                    />
                  </div>
                  <h3 className="font-bold text-[#06206A] text-sm md:text-base leading-snug mb-1.5 relative z-10 group-hover:text-indigo-600 transition-colors">{speaker.name}</h3>
                  {speaker.desc && (
                    <p className="text-[11px] md:text-xs text-gray-500 relative z-10 font-medium">{speaker.desc}</p>
                  )}
                </motion.div>
              ))}
            </div>
            
            {/* View Less Button */}
            <div className="flex justify-center mt-10">
              <button 
                onClick={() => {
                    setShowAll(false);
                    setTimeout(() => {
                        const el = document.getElementById('speakers-legacy-section');
                        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }, 100);
                }}
                className="group flex items-center gap-2 px-8 py-3 bg-gray-200 text-[#06206A] rounded-full font-semibold hover:bg-gray-300 transition-all shadow-sm"
              >
                Hide Full List
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}