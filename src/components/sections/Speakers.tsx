'use client';

import { motion } from 'framer-motion';
import ChromaGrid, { ChromaItem } from '../ChromaGrid';

const PLACEHOLDER = "https://img.magnific.com/free-photo/close-up-portrait-young-bearded-man-white-shirt-jacket-posing-camera-with-broad-smile-isolated-gray_171337-629.jpg?semt=ais_hybrid&w=740&q=80";

const SPEAKER_ITEMS: ChromaItem[] = [
  // Key Guests
  { image: PLACEHOLDER, title: 'Sri Nara Chandra Babu Naidu', subtitle: "Hon'ble Chief Minister of AP", borderColor: '#1e3a8a', gradient: 'linear-gradient(145deg, #1e3a8a1a, #0a0a0a)' },
  { image: PLACEHOLDER, title: 'Shri Kinjarapu Rammohan Naidu', subtitle: "Hon'ble Minister of Civil Aviation", borderColor: '#dc2626', gradient: 'linear-gradient(180deg, #dc26261a, #0a0a0a)' },
  { image: PLACEHOLDER, title: 'Sri Nara Lokesh', subtitle: "Hon'ble Minister for IT", borderColor: '#3b82f6', gradient: 'linear-gradient(210deg, #3b82f61a, #0a0a0a)' },
  { image: PLACEHOLDER, title: 'Sri Sai Prasad Guttapalli', subtitle: 'Chief Secretary of AP', borderColor: '#ef4444', gradient: 'linear-gradient(135deg, #ef44441a, #0a0a0a)' },
  { image: PLACEHOLDER, title: 'Dr. Sunil Kumar Barnwal', subtitle: 'CEO, National Health Authority', borderColor: '#1e3a8a', gradient: 'linear-gradient(165deg, #1e3a8a1a, #0a0a0a)' },
  // Academic Leaders
  { image: PLACEHOLDER, title: 'Prof. V. Kamakoti', subtitle: 'Director, IIT Madras', borderColor: '#dc2626', gradient: 'linear-gradient(195deg, #dc26261a, #0a0a0a)' },
  { image: PLACEHOLDER, title: 'Prof. K N Satyanarayana', subtitle: 'Director, IIT Tirupati', borderColor: '#3b82f6', gradient: 'linear-gradient(145deg, #3b82f61a, #0a0a0a)' },
  { image: PLACEHOLDER, title: 'Prof. B. S. Murthy', subtitle: 'Director, IIT Hyderabad', borderColor: '#ef4444', gradient: 'linear-gradient(225deg, #ef44441a, #0a0a0a)' },
  { image: PLACEHOLDER, title: 'Prof. Sukumar Mishra', subtitle: 'Director, IIT (ISM) Dhanbad', borderColor: '#1e3a8a', gradient: 'linear-gradient(135deg, #1e3a8a1a, #0a0a0a)' },
  { image: PLACEHOLDER, title: 'Dr. A. Seshadri Sekhar', subtitle: 'Director, IIT Palakkad', borderColor: '#dc2626', gradient: 'linear-gradient(165deg, #dc26261a, #0a0a0a)' },
  { image: PLACEHOLDER, title: 'Prof. Suhas Joshi', subtitle: 'Director, IIT Indore', borderColor: '#3b82f6', gradient: 'linear-gradient(210deg, #3b82f61a, #0a0a0a)' },
  { image: PLACEHOLDER, title: 'Prof. Shalivahan', subtitle: 'Director, IIPE Vizag', borderColor: '#ef4444', gradient: 'linear-gradient(180deg, #ef44441a, #0a0a0a)' },
  { image: PLACEHOLDER, title: 'Prof. Balaram Ravindran', subtitle: 'Head of Data Science, IIT Madras', borderColor: '#1e3a8a', gradient: 'linear-gradient(145deg, #1e3a8a1a, #0a0a0a)' },
  { image: PLACEHOLDER, title: 'Prof. Arun Tangirala', subtitle: 'Dean, CDO, IIT Tirupati', borderColor: '#dc2626', gradient: 'linear-gradient(180deg, #dc26261a, #0a0a0a)' },
  // Industry Leaders
  { image: PLACEHOLDER, title: 'Sri Lalit Agarwal', subtitle: 'India Head, Schlumberger', borderColor: '#3b82f6', gradient: 'linear-gradient(210deg, #3b82f61a, #0a0a0a)' },
  { image: PLACEHOLDER, title: 'Sri Yaram Vijay Kumar', subtitle: 'India MD, Honeywell Aerospace', borderColor: '#ef4444', gradient: 'linear-gradient(135deg, #ef44441a, #0a0a0a)' },
  { image: PLACEHOLDER, title: 'Sri Hitesh Garg', subtitle: 'India MD, NXP Semiconductors', borderColor: '#1e3a8a', gradient: 'linear-gradient(165deg, #1e3a8a1a, #0a0a0a)' },
  { image: PLACEHOLDER, title: 'Arun Ramchandani', subtitle: 'Sr VP, L&T', borderColor: '#dc2626', gradient: 'linear-gradient(195deg, #dc26261a, #0a0a0a)' },
  { image: PLACEHOLDER, title: 'Sri Amit Singhee', subtitle: 'Director, IBM Research India', borderColor: '#3b82f6', gradient: 'linear-gradient(145deg, #3b82f61a, #0a0a0a)' },
  { image: PLACEHOLDER, title: 'Sri C Sridhar', subtitle: 'Director, APSQM', borderColor: '#ef4444', gradient: 'linear-gradient(225deg, #ef44441a, #0a0a0a)' },
  { image: PLACEHOLDER, title: 'Dr. Giridhar Parvatam', subtitle: 'Head, CFTRI', borderColor: '#1e3a8a', gradient: 'linear-gradient(135deg, #1e3a8a1a, #0a0a0a)' },
  { image: PLACEHOLDER, title: 'Dr. Jitendra Sharma', subtitle: 'CEO, AMTZ', borderColor: '#dc2626', gradient: 'linear-gradient(165deg, #dc26261a, #0a0a0a)' },
  { image: PLACEHOLDER, title: 'Sri Ankit Todi', subtitle: 'Chief Sustainability Officer, Mahindra', borderColor: '#3b82f6', gradient: 'linear-gradient(210deg, #3b82f61a, #0a0a0a)' },
  { image: PLACEHOLDER, title: 'Sri BH. V. Seshagiri Rao', subtitle: 'CEO Retd, HAL', borderColor: '#ef4444', gradient: 'linear-gradient(180deg, #ef44441a, #0a0a0a)' },
  { image: PLACEHOLDER, title: 'Sri Shekar Reddy', subtitle: 'CMD, Crux Biotech', borderColor: '#1e3a8a', gradient: 'linear-gradient(145deg, #1e3a8a1a, #0a0a0a)' },
  { image: PLACEHOLDER, title: 'Sri Ram Bandi', subtitle: 'Founder & CEO, Styrax', borderColor: '#dc2626', gradient: 'linear-gradient(180deg, #dc26261a, #0a0a0a)' },
  { image: PLACEHOLDER, title: 'Dr. Vidhya Sagar', subtitle: 'FCMD, Avantel', borderColor: '#3b82f6', gradient: 'linear-gradient(210deg, #3b82f61a, #0a0a0a)' },
];

export default function Speakers() {
  return (
    <section id="speakers" className="py-24 bg-[#0a0a0a] relative">
      
      {/* Convex curve bulging upwards into the previous white section */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none -translate-y-[calc(100%-2px)] z-10 pointer-events-none rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[40px] md:h-[80px]">
          <path d="M0,0 C600,120 1200,0 1200,0 L1200,0 L0,0 Z" className="fill-[#0a0a0a]"></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-20">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight"
          >
            Key Guests & Industry Leaders
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

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="w-full"
        >
          <ChromaGrid 
            items={SPEAKER_ITEMS}
            radius={400}
            damping={0.45}
            fadeOut={0.6}
            ease="power3.out"
          />
        </motion.div>

      </div>
    </section>
  );
}
