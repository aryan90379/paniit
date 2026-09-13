'use client';

import { motion } from 'framer-motion';
import ChromaGrid, { ChromaItem } from '../ChromaGrid';

const PLACEHOLDER = "https://img.magnific.com/free-photo/close-up-portrait-young-bearded-man-white-shirt-jacket-posing-camera-with-broad-smile-isolated-gray_171337-629.jpg?semt=ais_hybrid&w=740&q=80";

const COMMITTEE_ITEMS: ChromaItem[] = [
  // Office Bearers
  { image: PLACEHOLDER, title: 'Prabhat Kumar, IRS', subtitle: 'Chairman', borderColor: '#1e3a8a', gradient: 'linear-gradient(145deg, #1e3a8a1a, #ffffff)' },
  { image: PLACEHOLDER, title: 'Dr. Amitabh Ranjan', subtitle: 'Vice Chairman', borderColor: '#dc2626', gradient: 'linear-gradient(180deg, #dc26261a, #ffffff)' },
  { image: PLACEHOLDER, title: 'Rajeev Singh', subtitle: 'General Secretary', borderColor: '#3b82f6', gradient: 'linear-gradient(210deg, #3b82f61a, #ffffff)' },
  { image: PLACEHOLDER, title: 'Ashish Kela', subtitle: 'Treasurer', borderColor: '#ef4444', gradient: 'linear-gradient(135deg, #ef44441a, #ffffff)' },
  // Advisors
  { image: PLACEHOLDER, title: 'Prof. V. Kamakoti', subtitle: 'Director, IIT Madras', borderColor: '#1e3a8a', gradient: 'linear-gradient(165deg, #1e3a8a1a, #ffffff)' },
  { image: PLACEHOLDER, title: 'Dr. K. N. Satyanarayana', subtitle: 'Director, IIT Tirupati', borderColor: '#dc2626', gradient: 'linear-gradient(195deg, #dc26261a, #ffffff)' },
  { image: PLACEHOLDER, title: 'Prof. Mahesh Panchagnula', subtitle: 'Ex Dean, IIT Madras', borderColor: '#3b82f6', gradient: 'linear-gradient(145deg, #3b82f61a, #ffffff)' },
  // Core Committee
  { image: PLACEHOLDER, title: 'Swadeep Pillarisetti', subtitle: 'Chair', borderColor: '#ef4444', gradient: 'linear-gradient(225deg, #ef44441a, #ffffff)' },
  { image: PLACEHOLDER, title: 'Rajesh Kumar Dasari', subtitle: 'Co-Chair', borderColor: '#1e3a8a', gradient: 'linear-gradient(135deg, #1e3a8a1a, #ffffff)' },
  { image: PLACEHOLDER, title: 'Sudhakar Gande', subtitle: 'Core Committee', borderColor: '#dc2626', gradient: 'linear-gradient(165deg, #dc26261a, #ffffff)' },
  { image: PLACEHOLDER, title: 'M S Reddy', subtitle: 'Core Committee', borderColor: '#3b82f6', gradient: 'linear-gradient(210deg, #3b82f61a, #ffffff)' },
  { image: PLACEHOLDER, title: 'Dr. Ramunaidu Randhi', subtitle: 'Core Committee', borderColor: '#ef4444', gradient: 'linear-gradient(180deg, #ef44441a, #ffffff)' },
  { image: PLACEHOLDER, title: 'Dr. Gundala Nagaraju', subtitle: 'Core Committee', borderColor: '#1e3a8a', gradient: 'linear-gradient(145deg, #1e3a8a1a, #ffffff)' },
  // Others
  { image: PLACEHOLDER, title: 'Prof. Murali Krishna Iyyanki', subtitle: 'Committee Member', borderColor: '#dc2626', gradient: 'linear-gradient(180deg, #dc26261a, #ffffff)' },
  { image: PLACEHOLDER, title: 'Rajesh Rathi', subtitle: 'Committee Member', borderColor: '#3b82f6', gradient: 'linear-gradient(210deg, #3b82f61a, #ffffff)' },
  { image: PLACEHOLDER, title: 'Neeraj Kumar', subtitle: 'Committee Member', borderColor: '#ef4444', gradient: 'linear-gradient(135deg, #ef44441a, #ffffff)' },
  { image: PLACEHOLDER, title: 'Praveen Kumar', subtitle: 'Committee Member', borderColor: '#1e3a8a', gradient: 'linear-gradient(165deg, #1e3a8a1a, #ffffff)' },
  { image: PLACEHOLDER, title: 'Phani Arega', subtitle: 'Committee Member', borderColor: '#dc2626', gradient: 'linear-gradient(195deg, #dc26261a, #ffffff)' },
  { image: PLACEHOLDER, title: 'Sai Teja Duggempudi', subtitle: 'Committee Member', borderColor: '#3b82f6', gradient: 'linear-gradient(145deg, #3b82f61a, #ffffff)' },
  { image: PLACEHOLDER, title: 'Tejavath Jagadeesh', subtitle: 'Committee Member', borderColor: '#ef4444', gradient: 'linear-gradient(225deg, #ef44441a, #ffffff)' },
  { image: PLACEHOLDER, title: 'Dr. Anjanna Matta', subtitle: 'Committee Member', borderColor: '#1e3a8a', gradient: 'linear-gradient(135deg, #1e3a8a1a, #ffffff)' },
  { image: PLACEHOLDER, title: 'C P Madhusudan', subtitle: 'Committee Member', borderColor: '#dc2626', gradient: 'linear-gradient(165deg, #dc26261a, #ffffff)' },
  { image: PLACEHOLDER, title: 'Thejaswini Kalasamudram', subtitle: 'Committee Member', borderColor: '#3b82f6', gradient: 'linear-gradient(210deg, #3b82f61a, #ffffff)' },
  { image: PLACEHOLDER, title: 'Gadi Akhil Sai Ram', subtitle: 'Committee Member', borderColor: '#ef4444', gradient: 'linear-gradient(180deg, #ef44441a, #ffffff)' },
  { image: PLACEHOLDER, title: 'Kshitij Tiwari', subtitle: 'Committee Member', borderColor: '#1e3a8a', gradient: 'linear-gradient(145deg, #1e3a8a1a, #ffffff)' },
  { image: PLACEHOLDER, title: 'Sanskreeti Raj', subtitle: 'Committee Member', borderColor: '#dc2626', gradient: 'linear-gradient(180deg, #dc26261a, #ffffff)' },
  { image: PLACEHOLDER, title: 'Vishakh Agarwal', subtitle: 'Committee Member', borderColor: '#3b82f6', gradient: 'linear-gradient(210deg, #3b82f61a, #ffffff)' },
  { image: PLACEHOLDER, title: 'Vishal Bhandari', subtitle: 'Committee Member', borderColor: '#ef4444', gradient: 'linear-gradient(135deg, #ef44441a, #ffffff)' }
];

export default function Committee() {
  return (
    <section id="committee" className="py-24 bg-[#050505] relative">
      
      {/* Downward convex curve from the black section above (if any). Since we don't know the exact order, let's keep it simple. */}
      
      <div className="container mx-auto px-4 md:px-6 relative z-20">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight"
          >
            Organising Committee
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-gray-400 font-light max-w-2xl mx-auto"
          >
            The visionaries and leaders working behind the scenes to bring the PanIIT Andhra Pradesh Summit 2026 to life.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="w-full"
        >
          {/* Note: In a light theme context, ChromaGrid text defaults to white, so we might need a custom class or just let it be. Let's see. ChromaGrid handles colors. */}
          <div>
            <ChromaGrid 
              items={COMMITTEE_ITEMS}
              radius={400}
              damping={0.45}
              fadeOut={0.6}
              ease="power3.out"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
