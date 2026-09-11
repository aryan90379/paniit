'use client';

import { motion } from 'framer-motion';

const SCHEDULE = [
  { time: "08:30 AM", end: "09:30 AM", title: "Registration & Networking Breakfast" },
  { time: "09:30 AM", end: "10:30 AM", title: "Inaugural Ceremony & Lighting of Lamp" },
  { time: "10:30 AM", end: "11:30 AM", title: "Panel 1: AI & The Future of Governance" },
  { time: "11:30 AM", end: "11:45 AM", title: "Networking Tea Break", isBreak: true },
  { time: "11:45 AM", end: "12:45 PM", title: "Panel 2: DeepTech & Quantum Leap" },
  { time: "12:45 PM", end: "01:45 PM", title: "Panel 3: Building a Global Startup Ecosystem" },
  { time: "01:45 PM", end: "02:45 PM", title: "Executive Lunch & Networking", isBreak: true },
  { time: "02:45 PM", end: "03:45 PM", title: "Panel 4: Green Energy & Sustainability" },
  { time: "03:45 PM", end: "04:45 PM", title: "Panel 5: Skilling the Youth for 2047" },
  { time: "04:45 PM", end: "05:00 PM", title: "High Tea", isBreak: true },
  { time: "05:00 PM", end: "06:00 PM", title: "Valedictory Session & Hon'ble CM Address" },
  { time: "06:00 PM", end: "Onwards", title: "Closing Networking & Dinner" }
];

export default function Schedule() {
  return (
    <section id="schedule" className="py-24 bg-gray-50 text-gray-900 relative border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        
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

        <div className="relative border-l border-gray-300 pl-6 md:pl-8 ml-4 md:ml-0">
          {SCHEDULE.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.05 }}
              className="relative mb-10 last:mb-0"
            >
              <div className={`absolute -left-[31px] md:-left-[39px] w-3 h-3 rounded-full mt-1.5 ${item.isBreak ? 'bg-gray-400' : 'bg-red-500 shadow-[0_0_10px_rgba(220,38,38,0.4)]'}`} />
              
              <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-8">
                <div className="md:w-48 shrink-0">
                  <div className={`text-sm md:text-base font-bold ${item.isBreak ? 'text-gray-500' : 'text-blue-600'}`}>
                    {item.time} — {item.end}
                  </div>
                </div>
                
                <div className={`p-5 rounded-xl border flex-1 ${item.isBreak ? 'bg-gray-100 border-gray-200' : 'bg-white border-gray-200 shadow-sm hover:border-blue-300 transition-colors'}`}>
                  <h4 className={`text-lg md:text-xl font-bold ${item.isBreak ? 'text-gray-500' : 'text-gray-900'}`}>
                    {item.title}
                  </h4>
                  {!item.isBreak && (
                    <p className="text-gray-500 text-sm mt-2">
                      Speakers & detailed agenda to be announced.
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
