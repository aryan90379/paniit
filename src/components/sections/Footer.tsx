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
          
          {/* Brand & Contact (Left Column) */}
          <div className="lg:col-span-4 flex flex-col gap-12">
            <div>
              <div className="text-3xl font-bold tracking-tighter text-white mb-4">
                <span className="text-blue-500 drop-shadow-md">PanIIT</span> AP Summit 2026
              </div>
              <p className="text-white font-medium max-w-md drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                Andhra's DeepTech Decade. Join us in shaping the future of innovation, investment, and talent.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm drop-shadow-lg">Contact Secretariat</h4>
              <ul className="space-y-5">
                <li className="flex items-start gap-3 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] font-semibold">
                  <Mail size={20} className="text-blue-400 shrink-0 mt-0.5 drop-shadow-lg" />
                  <span>
                    <div className="font-bold text-white mb-1">PanIIT Secretariat</div>
                    <a href="mailto:secretariat@paniit.org" className="hover:text-blue-300 transition-colors block">secretariat@paniit.org</a>
                  </span>
                </li>

                <li className="flex items-start gap-3 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] font-semibold">
                  <Phone size={20} className="text-blue-400 shrink-0 mt-0.5 drop-shadow-lg" />
                  <div className="flex flex-col gap-3 w-full">
                    <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
                      <div>
                        <div className="text-gray-300 text-xs">Padmini Padhy</div>
                        <div className="text-sm">+91 97111 95445</div>
                      </div>
                      <div>
                        <div className="text-gray-300 text-xs">Sanskreeti Raj</div>
                        <div className="text-sm">+91 98354 19705</div>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
                      <div>
                        <div className="text-gray-300 text-xs">Sai Teja</div>
                        <div className="text-sm">+91 84189 44154</div>
                      </div>
                      <div>
                        <div className="text-gray-300 text-xs">Gadi Akhil</div>
                        <div className="text-sm">+91 94910 80512</div>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="flex items-start gap-3 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] font-semibold">
                  <MapPin size={20} className="text-blue-400 shrink-0 mt-0.5 drop-shadow-lg" />
                  <span className="leading-snug">Dr. B. R. Ambedkar Kala Vedika,<br/>Buckingham Peta, Vijayawada</span>
                </li>
              </ul>
              
              <a href="#" className="inline-flex items-center gap-2 mt-8 text-red-400 hover:text-red-300 font-bold transition-colors drop-shadow-lg bg-black/40 backdrop-blur-md px-5 py-2.5 rounded-xl border border-red-500/30">
                <Download size={18} />
                Download Brochure
              </a>
            </div>
          </div>

          {/* Quick Links (Middle Column) */}
          <div className="lg:col-span-3 lg:col-start-6">
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm drop-shadow-lg">Navigation</h4>
            <ul className="space-y-4">
              {['About', 'Advantage', 'Speakers', 'Schedule', 'Partnership', 'Committee'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-white/90 hover:text-white transition-colors drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] font-semibold flex items-center gap-2">
                    <ArrowRight size={14} className="text-blue-400" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Registration (Right Column) */}
          <div className="lg:col-span-4 md:col-span-2">
            <div id="register" className="p-8 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/20 shadow-[0_0_50px_rgba(30,58,138,0.2)] relative overflow-hidden h-full flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
              <div className="relative z-10 flex-grow flex flex-col justify-center">
                <h4 className="text-2xl font-black text-white mb-3">Register for the Summit</h4>
                <p className="text-sm text-gray-200 mb-6 font-medium leading-relaxed">Secure your spot at Andhra's premier DeepTech event. Join industry leaders, innovators, and investors.</p>
                <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-gray-300 uppercase tracking-wider pl-1">Work Email</label>
                    <input 
                      type="email" 
                      placeholder="hello@company.com" 
                      className="px-5 py-3.5 rounded-xl bg-black/80 border border-white/30 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors backdrop-blur-sm text-sm"
                    />
                  </div>
                  <button className="px-5 py-4 rounded-xl bg-[#E13926] hover:bg-red-500 text-white font-black uppercase tracking-wide flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-red-500/25 mt-2">
                    Register Now <ArrowRight size={18} />
                  </button>
                </form>
              </div>
            </div>
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
