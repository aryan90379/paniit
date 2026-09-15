'use client';

import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

const SCHEDULE = [
  { time: "08:00 AM – 09:00 AM", title: "Registration, Networking & Tea", subtitle: "Welcome delegates" },
  { time: "09:00 AM – 09:15 AM", title: "Lighting of the Lamp & Welcome Address", subtitle: "Opening of the summit" },
  { 
    time: "09:15 AM – 10:00 AM", 
    title: "Inaugural Ceremony", 
    subtitle: "Guest of Honour:\nShri Kinjarapu Rammohan Naidu — Hon'ble Minister of Civil Aviation, Government of India\nSri Nara Lokesh — Hon'ble Minister for Information Technology, Electronics and Communications, Andhra Pradesh" 
  },
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
  const sidebarNavRef = useRef<HTMLElement | null>(null);
  const sidebarItemRefs = useRef<(HTMLLIElement | null)[]>([]);

  // Smooth click scroll to specific card with navbar offset
  const handleNavClick = (i: number) => {
    const target = sectionRefs.current[i];
    if (!target) return;
    const navbarHeight = 145;
    const targetTop = target.getBoundingClientRect().top + window.scrollY - navbarHeight;
    window.scrollTo({ top: targetTop, behavior: 'smooth' });
    setActiveIdx(i);
  };

  // Robust RAF scroll listener to accurately track active card relative to navbar
  useEffect(() => {
    let rafId = 0;

    const handleScroll = () => {
      const navbarHeight = 145;
      const triggerY = navbarHeight + 80;
      let currentIdx = 0;
      let minDistance = Infinity;

      sectionRefs.current.forEach((ref, idx) => {
        if (!ref) return;
        const rect = ref.getBoundingClientRect();
        // Distance of card's top edge from the reading line
        const distance = Math.abs(rect.top - triggerY);
        // If the card is currently spanning or closest to reading line
        if (rect.top <= triggerY + 120 && rect.bottom >= triggerY - 80) {
          if (distance < minDistance) {
            minDistance = distance;
            currentIdx = idx;
          }
        }
      });

      setActiveIdx(currentIdx);
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  // Auto-scroll the sidebar list so active item stays in view
  useEffect(() => {
    const activeItem = sidebarItemRefs.current[activeIdx];
    if (activeItem && sidebarNavRef.current) {
      activeItem.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [activeIdx]);

  return (
    <section id="schedule" className="py-24 bg-white text-gray-900 relative border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-[#06206A] mb-4 tracking-tight uppercase"
          >
            Program Schedule
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="inline-block px-4 py-1.5 rounded-full bg-[#E3F0FA] border border-[#C6E1F8] text-[#06206A] text-xs font-bold uppercase tracking-wider shadow-sm"
          >
            3rd October, 2026 • Tentative / Subject to change
          </motion.div>
        </div>

        {/* Mobile Horizontal Quick-Jump Bar */}
        <div className="md:hidden sticky top-[95px] z-20 bg-white/95 backdrop-blur-md py-3 -mx-4 px-4 border-y border-gray-200 flex gap-2 overflow-x-auto hide-scrollbar mb-8 shadow-xs">
          {SCHEDULE.map((item, i) => {
            const startTime = item.time.split(' – ')[0].split(' ')[0] + ' ' + item.time.split(' – ')[0].split(' ')[1];
            const isActive = activeIdx === i;
            return (
              <button
                key={i}
                onClick={() => handleNavClick(i)}
                className={`shrink-0 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  isActive 
                    ? 'bg-[#DD1D21] text-white shadow-sm scale-105' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {startTime}
              </button>
            );
          })}
        </div>

        <div className="flex flex-col md:flex-row relative gap-8 md:gap-12 items-start">
          
          {/* Sticky Sidebar Nav (Desktop) */}
          <div className="hidden md:block w-1/3 relative self-start">
            <nav 
              ref={sidebarNavRef}
              className="sticky top-40 max-h-[calc(100vh-200px)] overflow-y-auto hide-scrollbar pr-3"
            >
              <div className="text-[11px] font-black uppercase tracking-wider text-gray-400 mb-4 pl-3">
                Schedule Timeline
              </div>
              <ul className="list-none border-l-2 border-gray-200 pl-3 py-1 space-y-2">
                {SCHEDULE.map((item, i) => {
                  const startTime = item.time.split(' – ')[0].split(' ')[0] + ' ' + item.time.split(' – ')[0].split(' ')[1];
                  const isActive = activeIdx === i;
                  return (
                    <li 
                      key={i} 
                      ref={(el) => { sidebarItemRefs.current[i] = el; }}
                      className={`cursor-pointer transition-all duration-200 rounded-xl p-3 -ml-3 ${
                        isActive 
                          ? 'bg-red-50 text-[#DD1D21] font-bold border-l-4 border-[#DD1D21] pl-3.5 shadow-sm' 
                          : 'text-gray-500 hover:text-[#06206A] hover:bg-gray-50'
                      }`}
                      onClick={() => handleNavClick(i)}
                    >
                      <div className="text-sm font-bold flex items-center justify-between">
                        <span>{startTime}</span>
                        {isActive && <span className="w-2 h-2 rounded-full bg-[#DD1D21]" />}
                      </div>
                      <div className={`text-xs truncate max-w-[210px] mt-0.5 ${isActive ? 'text-red-700 font-semibold' : 'text-gray-400'}`}>
                        {item.title}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>

          {/* Main Content Scroll Area */}
          <div className="w-full md:w-2/3 space-y-6">
            {SCHEDULE.map((item, i) => (
              <div 
                key={i} 
                ref={(el) => {
                  sectionRefs.current[i] = el;
                }}
                data-index={i}
                className="scroll-mt-40 transition-all duration-300"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                  className={`p-6 md:p-8 rounded-[2rem] border transition-all duration-300 ${
                    activeIdx === i 
                      ? 'bg-white border-red-200 shadow-[0_10px_40px_rgba(220,38,38,0.08)] ring-1 ring-red-100' 
                      : 'bg-white/70 border-gray-100 shadow-xs hover:border-gray-200'
                  }`}
                >
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <div className="inline-block px-3 py-1 bg-red-50 text-[#DD1D21] font-bold rounded-lg text-xs md:text-sm border border-red-100 shadow-2xs">
                      {item.time}
                    </div>
                    {activeIdx === i && (
                      <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-[#DD1D21] uppercase tracking-wider">
                        <span className="w-2 h-2 rounded-full bg-[#DD1D21] animate-pulse" />
                        Active Session
                      </span>
                    )}
                  </div>
                  
                  <h3 className={`text-2xl md:text-3xl font-bold mb-3 tracking-tight transition-colors duration-300 ${
                    activeIdx === i ? 'text-gray-900' : 'text-gray-700'
                  }`}>
                    {item.title}
                  </h3>
                  {item.subtitle && (
                    <p className="text-sm md:text-base font-medium text-gray-600 leading-relaxed whitespace-pre-line">
                      {item.subtitle}
                    </p>
                  )}
                  
                  {activeIdx === i && (
                    <div className="h-1 w-12 bg-[#DD1D21] mt-6 rounded-full" />
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
