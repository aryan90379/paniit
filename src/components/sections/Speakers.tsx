'use client';

import { motion } from 'framer-motion';
import ChromaGrid, { ChromaItem } from '../ChromaGrid';

const SPEAKER_ITEMS: ChromaItem[] = [
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXF3r7htkMJP7WU4GABsucEM8hSo4YjWOTq7SYrZbwbWlpouO83Wgzz14&s=10',
    title: 'Sri Nara Chandrababu Naidu',
    subtitle: "Hon'ble Chief Minister",
    location: 'Andhra Pradesh',
    borderColor: '#1e3a8a',
    gradient: 'linear-gradient(145deg, #1e3a8a1a, #0a0a0a)',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXF3r7htkMJP7WU4GABsucEM8hSo4YjWOTq7SYrZbwbWlpouO83Wgzz14&s=10',
    title: 'Sri Nara Lokesh',
    subtitle: "Hon'ble Minister",
    location: 'Govt. of Andhra Pradesh',
    borderColor: '#dc2626',
    gradient: 'linear-gradient(180deg, #dc26261a, #0a0a0a)',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXF3r7htkMJP7WU4GABsucEM8hSo4YjWOTq7SYrZbwbWlpouO83Wgzz14&s=10',
    title: 'Sri Kinjarapu Rammohan Naidu',
    subtitle: "Hon'ble Minister",
    location: 'Govt. of India',
    borderColor: '#3b82f6',
    gradient: 'linear-gradient(210deg, #3b82f61a, #0a0a0a)',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXF3r7htkMJP7WU4GABsucEM8hSo4YjWOTq7SYrZbwbWlpouO83Wgzz14&s=10',
    title: 'Dr. Pemmasani Chandra Sekhar',
    subtitle: "Hon'ble Minister of State",
    location: 'Govt. of India',
    borderColor: '#ef4444',
    gradient: 'linear-gradient(135deg, #ef44441a, #0a0a0a)',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXF3r7htkMJP7WU4GABsucEM8hSo4YjWOTq7SYrZbwbWlpouO83Wgzz14&s=10',
    title: 'Sundar Pichai',
    subtitle: 'CEO',
    handle: 'Alphabet & Google',
    borderColor: '#1e3a8a',
    gradient: 'linear-gradient(165deg, #1e3a8a1a, #0a0a0a)',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXF3r7htkMJP7WU4GABsucEM8hSo4YjWOTq7SYrZbwbWlpouO83Wgzz14&s=10',
    title: 'Satya Nadella',
    subtitle: 'Chairman & CEO',
    handle: 'Microsoft',
    borderColor: '#dc2626',
    gradient: 'linear-gradient(195deg, #dc26261a, #0a0a0a)',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXF3r7htkMJP7WU4GABsucEM8hSo4YjWOTq7SYrZbwbWlpouO83Wgzz14&s=10',
    title: 'Shantanu Narayen',
    subtitle: 'Chair & CEO',
    handle: 'Adobe',
    borderColor: '#3b82f6',
    gradient: 'linear-gradient(145deg, #3b82f61a, #0a0a0a)',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXF3r7htkMJP7WU4GABsucEM8hSo4YjWOTq7SYrZbwbWlpouO83Wgzz14&s=10',
    title: 'Arvind Krishna',
    subtitle: 'Chairman & CEO',
    handle: 'IBM',
    borderColor: '#ef4444',
    gradient: 'linear-gradient(225deg, #ef44441a, #0a0a0a)',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXF3r7htkMJP7WU4GABsucEM8hSo4YjWOTq7SYrZbwbWlpouO83Wgzz14&s=10',
    title: 'N. R. Narayana Murthy',
    subtitle: 'Founder',
    handle: 'Infosys',
    borderColor: '#1e3a8a',
    gradient: 'linear-gradient(135deg, #1e3a8a1a, #0a0a0a)',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXF3r7htkMJP7WU4GABsucEM8hSo4YjWOTq7SYrZbwbWlpouO83Wgzz14&s=10',
    title: 'Nandan Nilekani',
    subtitle: 'Co-founder',
    handle: 'Infosys',
    borderColor: '#dc2626',
    gradient: 'linear-gradient(165deg, #dc26261a, #0a0a0a)',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXF3r7htkMJP7WU4GABsucEM8hSo4YjWOTq7SYrZbwbWlpouO83Wgzz14&s=10',
    title: 'Vinod Khosla',
    subtitle: 'Founder',
    handle: 'Khosla Ventures',
    borderColor: '#3b82f6',
    gradient: 'linear-gradient(210deg, #3b82f61a, #0a0a0a)',
  },
  {
    image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiB2aWV3Qm94PSIwIDAgMzAwIDMwMCI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iIzFhMWExYSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSI0OCIgZmlsbD0iIzQ0NCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPis8L3RleHQ+PC9zdmc+',
    title: 'Many More Leaders',
    subtitle: 'Global Innovators',
    handle: '& Policymakers',
    borderColor: '#ef4444',
    gradient: 'linear-gradient(180deg, #ef44441a, #0a0a0a)',
  },
];

export default function Speakers() {
  return (
    <section id="speakers" className="py-24 bg-[#0a0a0a] relative ">
      
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

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="w-full"
        >
          {/* Note: The Tailwind ChromaGrid component natively handles responsiveness */}
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
