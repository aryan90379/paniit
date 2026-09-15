'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Calendar, Sparkles } from 'lucide-react';

export default function Schedule() {
  return (
    <section id="schedule" className="py-20 md:py-28 bg-white text-gray-900 relative border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-[#06206A] mb-4 tracking-tight uppercase"
          >
            Summit Agenda
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E3F0FA] border border-[#C6E1F8] text-[#06206A] text-xs md:text-sm font-bold uppercase tracking-wider shadow-xs"
          >
            <Calendar className="w-3.5 h-3.5 text-[#06206A]" />
            <span>3rd October, 2026 • Vijayawada, Andhra Pradesh</span>
          </motion.div>
        </div>

        {/* 2-Column Showcase (Matching PanIIT Summit Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Summit Agenda Preview Flyer Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 flex justify-center"
          >
            <Link 
              href="/agenda"
              className="group relative block w-full max-w-[540px] rounded-3xl overflow-hidden shadow-2xl hover:shadow-[0_20px_50px_rgba(6,32,106,0.18)] transition-all duration-500 border border-gray-200/80 bg-linear-to-b from-gray-50 to-white cursor-pointer"
            >
              {/* Preview Banner Graphic */}
              <div className="relative aspect-4/3 w-full overflow-hidden bg-slate-100">
                <img 
                  src="https://wabflow.b-cdn.net/paniit/landing/image_2026-09-15_120838444.png"
                  alt="PanIIT Andhra Pradesh Summit 2026 Agenda Preview"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
              </div>

              {/* Floating Pill Action Button */}
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between pointer-events-none">
                <span className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full bg-black/70 backdrop-blur-md text-white font-bold text-xs sm:text-sm shadow-xl border border-white/20 group-hover:bg-[#06206A] group-hover:border-[#06206A] transition-all duration-300">
                  <span>Explore the Full Schedule</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-[#06206A] font-bold text-xs shadow-md">
                  <Sparkles className="w-3.5 h-3.5 text-[#DD1D21]" />
                  PDF Viewer
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Right Column: Title, Description & Action CTA */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-6 flex flex-col justify-center space-y-6"
          >
            <div>
              <div className="flex items-center gap-2 text-[#DD1D21] font-bold text-xs uppercase tracking-widest mb-2">
                <span className="w-2 h-2 rounded-full bg-[#DD1D21]" />
                Official Summit Schedule
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#06206A] tracking-tight leading-tight">
                PanIIT Andhra Pradesh Summit 2026
              </h3>
            </div>

            <div className="space-y-4 text-gray-600 text-base md:text-lg leading-relaxed">
              <p>
                Explore the complete summit agenda featuring keynote sessions, ministerial addresses, panel discussions, innovation showcases, networking opportunities, and cultural experiences.
              </p>
              <p>
                The day brings together leaders, entrepreneurs, technologists, and the IIT alumni community for meaningful conversations around AI, innovation, startups, and India&apos;s future.
              </p>
            </div>

            {/* Summit Quick Highlights Chips */}
            <div className="pt-2 flex flex-wrap gap-2.5 text-xs font-semibold text-gray-700">
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
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/agenda"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#06206A] hover:bg-[#082a8a] text-white font-bold text-sm sm:text-base shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>View Complete Agenda</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="/PanIIT_AP_Summit_2026_Agenda.pdf"
                download="PanIIT_AP_Summit_2026_Agenda.pdf"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-gray-50 text-gray-800 font-bold text-sm sm:text-base border border-gray-300 hover:border-gray-400 shadow-xs hover:shadow-sm transition-all duration-200"
              >
                <Download className="w-4 h-4 text-[#DD1D21]" />
                <span>Download Agenda (PDF)</span>
              </a>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
