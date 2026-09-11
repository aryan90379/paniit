'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Download, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-black border-t border-white/10 pt-24 pb-12 overflow-hidden relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* Brand & Registration */}
          <div className="lg:col-span-5">
            <div className="text-3xl font-bold tracking-tighter text-white mb-4">
              <span className="text-blue-500">PanIIT</span> AP Summit 2026
            </div>
            <p className="text-gray-400 mb-8 max-w-md">
              Andhra's DeepTech Decade. Join us in shaping the future of innovation, investment, and talent.
            </p>
            
            <div id="register" className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
              <h4 className="text-xl font-bold text-white mb-2">Register your interest</h4>
              <p className="text-sm text-gray-400 mb-4">This is an invite-only event. Request an invitation.</p>
              <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Enter your work email" 
                  className="px-4 py-3 rounded-lg bg-black/50 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                />
                <button className="px-4 py-3 rounded-lg bg-red-600 hover:bg-red-500 text-white font-medium flex items-center justify-center gap-2 transition-colors">
                  Apply to Attend <ArrowRight size={18} />
                </button>
              </form>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 lg:col-start-7">
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Navigation</h4>
            <ul className="space-y-3">
              {['About', 'Advantage', 'Speakers', 'Schedule', 'Partnership', 'Committee'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-gray-400 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contact Secretariat</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <Mail size={20} className="text-blue-400 shrink-0 mt-0.5" />
                <span>
                  <div className="font-medium text-gray-300">Padmini Padhy</div>
                  <a href="mailto:secretariat@paniit.org" className="hover:text-white transition-colors">secretariat@paniit.org</a>
                </span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <Phone size={20} className="text-blue-400 shrink-0 mt-0.5" />
                <span>+91 97111 95445</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin size={20} className="text-blue-400 shrink-0 mt-0.5" />
                <span>Dr. B. R. Ambedkar Kala Vedika,<br/>Vijayawada, Andhra Pradesh</span>
              </li>
            </ul>
            
            <a href="#" className="inline-flex items-center gap-2 mt-8 text-red-400 hover:text-red-300 font-medium transition-colors">
              <Download size={18} />
              Download Brochure
            </a>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <div>
            &copy; {new Date().getFullYear()} PanIIT Alumni India. All rights reserved.
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
