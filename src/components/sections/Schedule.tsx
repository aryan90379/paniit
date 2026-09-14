'use client';

import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

const SCHEDULE = [
  { time: "08:00 AM – 09:00 AM", title: "Registration, Networking & Tea", subtitle: "Welcome delegates" },
  { time: "09:00 AM – 09:15 AM", title: "Lighting of the Lamp & Welcome Address", subtitle: "Opening of the summit" },
  { time: "09:15 AM – 10:00 AM", title: "Inaugural Ceremony", subtitle: "Guest of Honour: Shri Kinjarapu Rammohan Naidu & Sri Lokesh Nara" },
  { time: "10:00 AM – 10:45 AM", title: "PANEL 1: Energy & Fuel Cost Optimisation", subtitle: "Swachh Andhra" },
  { time: "10:45 AM – 11:30 AM", title: "PANEL 2: Deep Tech in All Walks of Life", subtitle: "Quantum, Semiconductors & AI" },
  { time: "11:30 AM – 12:15 PM", title: "PANEL 3: Space & Defence Mfg", subtitle: "Product Perfection" },
  { time: "12:15 PM – 01:00 PM", title: "PANEL 4: BioValley", subtitle: "Health Access & Screening at Scale" },
  { time: "01:00 PM – 02:00 PM", title: "Networking Lunch", subtitle: "" },
  { time: "02:00 PM", title: "Hon'ble Chief Minister of AP Arrival", subtitle: "Arrival at Venue" },
  { time: "02:00 PM – 02:30 PM", title: "CM's Visit to Pavilions & Exhibition", subtitle: "" },
  { time: "02:00 PM – 02:45 PM", title: "PANEL 5: Agri Tech", subtitle: "Farmers & Water Security" },
  { time: "02:45 PM – 03:00 PM", title: "Skilling & Entrepreneurship", subtitle: "by IIT Madras Pravarthak" },
  { time: "03:00 PM – 03:30 PM", title: "AI in Governance", subtitle: "Addresses & Talks" },
  { time: "03:30 PM – 04:00 PM", title: "Networking Tea", subtitle: "" },
  { time: "04:00 PM – 05:00 PM", title: "Summary Presentations", subtitle: "Insights from all 5 panels" },
  { time: "05:00 PM – 06:00 PM", title: "CM Closing Block", subtitle: "Proceedings on Main Stage; HCM joins" },
  { time: "06:00 PM Onwards", title: "Closing Ceremony", subtitle: "National Anthem" }
];

export default function Schedule() {
  const [activeIdx, setActiveIdx] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute('data-index'));
            setActiveIdx(idx);
          }
        });
      },
      { rootMargin: '-20% 0px -60% 0px' }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="schedule" className="py-24 bg-[#F4ECE4] text-gray-900 relative border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight"
          >
            Program Schedule
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="inline-block px-4 py-1.5 rounded-full bg-white border border-gray-200 text-gray-600 text-sm font-medium shadow-sm"
          >
            Tentative / Subject to change
          </motion.div>
        </div>

        <div className="flex flex-col md:flex-row relative gap-8 md:gap-16">
          
          {/* Sticky Sidebar Nav (Desktop) */}
          <div className="hidden md:block w-1/3 relative">
            <nav className="sticky top-32">
              <ul className="list-none border-l-2 border-gray-200/60 pl-6 py-4 space-y-6">
                {SCHEDULE.map((item, i) => {
                  const startTime = item.time.split(' – ')[0].split(' ')[0] + ' ' + item.time.split(' – ')[0].split(' ')[1];
                  return (
                    <li 
                      key={i} 
                      className={`cursor-pointer transition-all duration-300 origin-left border-b border-dotted pb-2 ${
                        activeIdx === i 
                          ? 'text-[#DD1D21] font-bold scale-110 border-transparent' 
                          : 'text-gray-400 hover:text-gray-900 border-gray-300'
                      }`}
                      onClick={() => {
                        sectionRefs.current[i]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                      }}
                    >
                      {startTime}
                    </li>
                  )
                })}
              </ul>
            </nav>
          </div>

          {/* Main Content Scroll Area */}
          <div className="w-full md:w-2/3">
            {SCHEDULE.map((item, i) => (
              <div 
                key={i} 
                ref={(el) => {
                  sectionRefs.current[i] = el;
                }}
                data-index={i}
                className="min-h-[40vh] md:min-h-[50vh] flex flex-col justify-center py-12 md:py-24"
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-100px" }}
                  transition={{ duration: 0.5 }}
                  className={`p-8 md:p-12 rounded-[2rem] border transition-colors duration-500 ${
                    activeIdx === i 
                      ? 'bg-white border-red-100 shadow-[0_10px_40px_rgba(220,38,38,0.08)]' 
                      : 'bg-white/50 border-gray-100 shadow-sm opacity-50'
                  }`}
                >
                  <div className="inline-block px-3 py-1 bg-red-50 text-[#DD1D21] font-bold rounded-lg mb-4 text-sm border border-red-100 shadow-sm">
                    {item.time}
                  </div>
                  
                  <h3 className={`text-3xl md:text-5xl font-bold mb-4 tracking-tight transition-colors duration-500 ${
                    activeIdx === i ? 'text-gray-900' : 'text-gray-600'
                  }`}>
                    {item.title}
                  </h3>
                  {item.subtitle && (
                    <p className="text-xl md:text-2xl font-light text-gray-500 leading-relaxed">
                      {item.subtitle}
                    </p>
                  )}
                  
                  {activeIdx === i && (
                    <motion.div 
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "3rem" }}
                      className="h-1 bg-[#DD1D21] mt-8 rounded-full"
                    />
                  )}
                </motion.div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
