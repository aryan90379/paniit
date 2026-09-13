'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Download, ArrowRight } from 'lucide-react';
import GradientWaves from '../GradientWaves';

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#050505] border-t border-white/10 pt-24 pb-12 overflow-hidden relative">
      
      {/* Immersive Wave Background - HIGH VISIBILITY */}
      <div className="absolute inset-0 z-0">
        <GradientWaves
          horizonColor="#000000" 
          waveColor="#153063" // PanIIT Navy Blue
          crestColor="#E13926" // PanIIT Red
          speed={0.4}
          amplitude={2.5}
          waveScale={0.6}
          waveRatio={0.9}
          swell={35}
          turbulence={20}
          tilt={1.11}
          zoom={1}
          height={5.5}
          fogDepth={15}
          detail="high"
          brightness={1.5}
          opacity={1}
          mouseInteraction={true}
          parallaxStrength={0.5}
          grain={true}
          grainIntensity={0.05}
        />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#050505] to-transparent pointer-events-none" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* Brand & Registration */}
          <div className="lg:col-span-5">
            <div className="text-3xl font-bold tracking-tighter text-white mb-4">
              <span className="text-blue-500 drop-shadow-md">PanIIT</span> AP Summit 2026
            </div>
            <p className="text-white font-medium mb-8 max-w-md drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              Andhra's DeepTech Decade. Join us in shaping the future of innovation, investment, and talent.
            </p>
            
            <div id="register" className="p-6 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/20 shadow-[0_0_40px_rgba(30,58,138,0.3)] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
              <div className="relative z-10">
                <h4 className="text-xl font-bold text-white mb-2">Register for the Summit</h4>
                <p className="text-sm text-gray-200 mb-4 font-medium">Join us in shaping the future of innovation, investment, and talent.</p>
                <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
                  <input 
                    type="email" 
                    placeholder="Enter your work email" 
                    className="px-4 py-3 rounded-lg bg-black/80 border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors backdrop-blur-sm"
                  />
                  <button className="px-4 py-3 rounded-lg bg-[#E13926] hover:bg-red-500 text-white font-bold flex items-center justify-center gap-2 transition-colors shadow-lg">
                    Register Now <ArrowRight size={18} />
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 lg:col-start-7">
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm drop-shadow-lg">Navigation</h4>
            <ul className="space-y-3">
              {['About', 'Advantage', 'Speakers', 'Schedule', 'Partnership', 'Committee'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-white hover:text-blue-300 transition-colors drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] font-semibold">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm drop-shadow-lg">Contact Secretariat</h4>
            <ul className="space-y-4">
              
              <li className="flex items-start gap-3 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] font-semibold">
                <Mail size={20} className="text-blue-400 shrink-0 mt-0.5 drop-shadow-lg" />
                <span>
                  <div className="font-bold text-white mb-1">PanIIT Secretariat</div>
                  <a href="mailto:secretariat@paniit.org" className="hover:text-blue-300 transition-colors block">secretariat@paniit.org</a>
                </span>
              </li>

              <li className="flex items-start gap-3 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] font-semibold mt-4">
                <Phone size={20} className="text-blue-400 shrink-0 mt-0.5 drop-shadow-lg" />
                <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                  <div>
                    <div className="text-gray-300 text-xs">Padmini Padhy</div>
                    <div>+91 97111 95445</div>
                  </div>
                  <div>
                    <div className="text-gray-300 text-xs">Sanskreeti Raj</div>
                    <div>+91 98354 19705</div>
                  </div>
                  <div>
                    <div className="text-gray-300 text-xs">Sai Teja</div>
                    <div>+91 84189 44154</div>
                  </div>
                  <div>
                    <div className="text-gray-300 text-xs">Gadi Akhil</div>
                    <div>+91 94910 80512</div>
                  </div>
                </div>
              </li>

              <li className="flex items-start gap-3 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] font-semibold mt-4">
                <MapPin size={20} className="text-blue-400 shrink-0 mt-0.5 drop-shadow-lg" />
                <span>Dr. B. R. Ambedkar Kala Vedika, Buckingham Peta, Vijayawada</span>
              </li>
            </ul>
            
            <a href="#" className="inline-flex items-center gap-2 mt-8 text-red-400 hover:text-red-300 font-bold transition-colors drop-shadow-lg bg-black/40 backdrop-blur-md px-4 py-2 rounded-lg border border-red-500/30">
              <Download size={18} />
              Download Brochure
            </a>
          </div>

        </div>

        <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white drop-shadow-lg font-semibold backdrop-blur-xl bg-black/40 py-4 px-6 rounded-2xl border border-white/10">
          <div>
            &copy; {new Date().getFullYear()} PanIIT Alumni India. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-blue-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
