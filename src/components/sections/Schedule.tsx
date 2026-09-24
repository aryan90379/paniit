'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

export default function Schedule() {
  return (
    <section id="schedule" className="py-20 md:py-24 bg-paper text-gray-900 relative">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        
        <SectionHeading
          eyebrow="3rd October, 2026 · Vijayawada"
          title="Summit Agenda"
          className="mb-12 md:mb-16"
        />

        {/* 2-Column Showcase (Matching PanIIT Summit Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Summit Agenda Preview Flyer Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1, margin: "0px 0px -50px 0px" }} style={{ WebkitTransform: "translateZ(0)", willChange: "transform, opacity" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 flex justify-center w-full"
          >
            <Link prefetch={false} 
              href="/agenda"
              className="group relative block w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-xl hover:shadow-[0_20px_50px_rgba(6,32,106,0.18)] transition-all duration-500 border border-gray-200/80 bg-white cursor-pointer"
            >
              <div className="relative w-full bg-slate-50">
                <img 
                  src="/agenda/schedule.jpeg"
                  alt="PanIIT Andhra Pradesh Summit 2026 Program Schedule"
                  className="w-full h-auto object-contain block group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                />
              </div>

              {/* Floating Pill Action Button */}
              <div className="absolute bottom-3.5 left-3.5 sm:bottom-4 sm:left-4 pointer-events-none">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-black/60 backdrop-blur-md text-white font-semibold text-xs sm:text-sm shadow-md border border-white/20 group-hover:bg-[#06206A] group-hover:border-[#06206A] transition-all duration-300">
                  <span>Explore the Full Schedule</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Right Column: Title, Description & Action CTA */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1, margin: "0px 0px -50px 0px" }} style={{ WebkitTransform: "translateZ(0)", willChange: "transform, opacity" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-6 flex flex-col justify-center space-y-6 text-center lg:text-left items-center lg:items-start"
          >
            <div className="flex flex-col items-center lg:items-start">
              <div className="flex items-center justify-center lg:justify-start gap-2 text-[#06206A] font-semibold text-xs uppercase tracking-[0.18em] mb-2">
                Official Summit Schedule
              </div>
              <h3 className="font-serif font-medium text-2xl sm:text-3xl md:text-4xl text-[#06206A] tracking-tight leading-tight">
                PanIIT Andhra Pradesh Summit 2026
              </h3>
            </div>

            <div className="space-y-4 text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl">
              <p>
                Explore the complete summit agenda featuring keynote sessions, ministerial addresses, panel discussions, innovation showcases, networking opportunities, and cultural experiences.
              </p>
              <p>
                The day brings together leaders, entrepreneurs, technologists, and the IIT alumni community for meaningful conversations around AI, innovation, startups, and India&apos;s future.
              </p>
            </div>

            {/* Summit Quick Highlights Chips */}
            <div className="pt-2 flex flex-wrap justify-center lg:justify-start gap-2.5 text-xs font-semibold text-gray-700">
              <span className="px-3.5 py-1.5 bg-gray-100 rounded-full border border-gray-200">
                Keynotes & Fireside Chats
              </span>
              <span className="px-3.5 py-1.5 bg-gray-100 rounded-full border border-gray-200">
                Deep Tech & AI Panels
              </span>
              <span className="px-3.5 py-1.5 bg-gray-100 rounded-full border border-gray-200">
                Startup Showcases
              </span>
              <span className="px-3.5 py-1.5 bg-gray-100 rounded-full border border-gray-200">
                Alumni Networking
              </span>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap justify-center lg:justify-start items-center gap-4">
              <Link prefetch={false}
                href="/agenda"
                className="inline-flex items-center justify-center gap-2.5 min-h-11 px-8 py-3 rounded-full bg-[#06206A] hover:bg-[#081a52] text-white font-semibold text-sm sm:text-base transition-colors"
              >
                <span>View Complete Agenda</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="/agenda/PanIIT-AP-Summit-brochure-2026.pdf"
                download="PanIIT AP Summit brochure 2026.pdf"
                className="inline-flex items-center justify-center gap-2 min-h-11 px-6 py-3 rounded-full bg-transparent text-[#06206A] font-semibold text-sm sm:text-base border border-[#06206A]/30 hover:border-[#06206A] hover:bg-white/60 transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Download Agenda (PDF)</span>
              </a>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
