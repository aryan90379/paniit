'use client';

import { motion } from 'framer-motion';
import ChromaGrid from '../ChromaGrid';

const FEATURED_GUESTS = [
  {
    name: "Sri Nara Chandrababu Naidu",
    title: "Hon'ble Chief Minister",
    org: "Andhra Pradesh",
    role: "Chief Guest"
  },
  {
    name: "Sri Nara Lokesh",
    title: "Hon'ble Minister",
    org: "Govt. of Andhra Pradesh",
    role: "Guest of Honour"
  },
  {
    name: "Sri Kinjarapu Rammohan Naidu",
    title: "Hon'ble Minister",
    org: "Govt. of India",
    role: "Guest of Honour"
  },
  {
    name: "Sri Ajai Chowdhry",
    title: "Co-Founder",
    org: "HCL",
    role: "Featured Guest"
  },
  {
    name: "Sri Sunil Kumar Barnwal",
    title: "Principal Secretary",
    org: "Higher Education",
    role: "Featured Guest"
  }
];

const SPEAKER_ITEMS = Array.from({ length: 11 }).map((_, i) => ({
  image: `https://i.pravatar.cc/300?img=${(i % 70) + 1}`,
  title: `Speaker Name ${i + 1}`,
  subtitle: "Eminent Leader / IIT Director",
  handle: "Industry / Academia",
  borderColor: ["#1e3a8a", "#dc2626", "#3b82f6", "#ef4444"][i % 4],
  gradient: `linear-gradient(${120 + i * 15}deg, ${["#1e3a8a1a", "#dc26261a", "#3b82f61a", "#ef44441a"][i % 4]}, #000)`,
}));

// Add the "+ Many More" card
SPEAKER_ITEMS.push({
  image: `https://ui-avatars.com/api/?name=%2B&background=111&color=fff&size=300`,
  title: "Many More",
  subtitle: "To be announced",
  handle: "Stay tuned",
  borderColor: "#ffffff",
  gradient: "linear-gradient(145deg, #ffffff1a, #000)",
});

export default function Speakers() {
  return (
    <section id="speakers" className="py-24 bg-[#050505] relative border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight"
          >
            Key Guests & Speakers
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-gray-400 font-light max-w-2xl mx-auto"
          >
            Hear from policymakers, industry titans, and global academia shaping the DeepTech revolution.
          </motion.p>
        </div>

        {/* Featured Guests */}
        <div className="flex flex-wrap justify-center gap-6 mb-20">
          {FEATURED_GUESTS.map((guest, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`flex flex-col items-center text-center p-6 rounded-2xl bg-white/[0.02] border ${i === 0 ? 'border-blue-500/50 shadow-[0_0_30px_rgba(37,99,235,0.15)] bg-blue-900/10' : 'border-white/10'} w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]`}
            >
              <div className="text-xs font-bold uppercase tracking-widest text-red-400 mb-6">
                {guest.role}
              </div>
              <div className="w-32 h-32 rounded-full bg-gray-800 border-4 border-gray-700 mb-6 overflow-hidden relative group">
                <div className="absolute inset-0 flex items-center justify-center text-gray-600 text-xs text-center p-2">
                  [TBD Photo]
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-1">{guest.name}</h3>
              <p className="text-gray-300 font-medium">{guest.title}</p>
              <p className="text-gray-500 text-sm">{guest.org}</p>
            </motion.div>
          ))}
        </div>

        {/* ChromaGrid for Speakers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <ChromaGrid 
            items={SPEAKER_ITEMS}
            radius={400}
            damping={0.45}
            fadeOut={0.6}
            ease="power3.out"
            columns={4}
          />
        </motion.div>

      </div>
    </section>
  );
}
