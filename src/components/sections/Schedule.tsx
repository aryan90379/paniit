'use client';

import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

const SCHEDULE = [
  { time: "08:30 AM", title: "Registration & Breakfast", subtitle: "Welcome delegates and networking." },
  { time: "09:30 AM", title: "Inaugural Ceremony", subtitle: "Lighting of Lamp & Opening Remarks." },
  { time: "10:30 AM", title: "Panel 1: AI in Governance", subtitle: "Transforming public infrastructure." },
  { time: "11:30 AM", title: "Networking Tea Break", subtitle: "Connect with peers." },
  { time: "11:45 AM", title: "Panel 2: Quantum Leap", subtitle: "DeepTech's next frontier." },
  { time: "12:45 PM", title: "Panel 3: Startup Ecosystem", subtitle: "Fostering unicorn growth." },
  { time: "01:45 PM", title: "Executive Lunch", subtitle: "Exclusive networking sessions." },
  { time: "02:45 PM", title: "Panel 4: Green Energy", subtitle: "Sustainable tech for the future." },
  { time: "03:45 PM", title: "Panel 5: Skilling 2047", subtitle: "Empowering the next generation." },
  { time: "04:45 PM", title: "High Tea", subtitle: "Evening refreshments." },
  { time: "05:00 PM", title: "Valedictory Session", subtitle: "Hon'ble CM's Closing Address." },
  { time: "06:00 PM", title: "Dinner & Networking", subtitle: "End of Summit." }
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
      { rootMargin: '-20% 0px -60% 0px' } // Triggers when element is in the top 20-40% of viewport
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="schedule" className="py-24 bg-gray-50 text-gray-900 relative border-t border-gray-200">
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
                {SCHEDULE.map((item, i) => (
                  <li 
                    key={i} 
                    className={`cursor-pointer transition-all duration-300 origin-left border-b border-dotted pb-2 ${
                      activeIdx === i 
                        ? 'text-red-600 font-bold scale-110 border-transparent' 
                        : 'text-gray-400 hover:text-gray-900 border-gray-300'
                    }`}
                    onClick={() => {
                      sectionRefs.current[i]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }}
                  >
                    {item.time}
                  </li>
                ))}
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
                  {/* Mobile Time Badge (only shows on mobile since desktop has sidebar) */}
                  <div className="md:hidden inline-block px-3 py-1 bg-red-50 text-red-600 font-bold rounded-lg mb-4 text-sm">
                    {item.time}
                  </div>
                  
                  <h3 className={`text-3xl md:text-5xl font-bold mb-4 tracking-tight transition-colors duration-500 ${
                    activeIdx === i ? 'text-gray-900' : 'text-gray-600'
                  }`}>
                    {item.title}
                  </h3>
                  <p className="text-xl md:text-2xl font-light text-gray-500 leading-relaxed">
                    {item.subtitle}
                  </p>
                  
                  {activeIdx === i && (
                    <motion.div 
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "3rem" }}
                      className="h-1 bg-red-600 mt-8 rounded-full"
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
