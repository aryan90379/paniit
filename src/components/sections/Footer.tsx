'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Download, ArrowRight } from 'lucide-react';
import GradientWaves from '../GradientWaves';

export default function Footer() {
  return (
    <footer id="footer" className="bg-[#050505] pt-8 md:pt-14 pb-12 overflow-hidden relative">
      
      {/* Immersive Wave Background - HIGH VISIBILITY */}
      <div className="hidden md:block absolute inset-0 z-0">
        <GradientWaves
          horizonColor="#000000" 
          waveColor="#06206A" // PanIIT Navy Blue
          crestColor="#DD1D21" // PanIIT Red
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
          detail="medium"
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 md:gap-12 lg:gap-8 mb-20">
          
          {/* Brand & Contact (Left Column) */}
          <div className="lg:col-span-4 flex flex-col gap-12">
            <div>
              <div className="mb-6 inline-block bg-white p-3 rounded-xl shadow-[0_0_15px_rgba(255,255,255,0.1)] border border-white/20">
                <div className="flex items-center gap-4">
                  <img 
                    src="https://wabflow.b-cdn.net/paniit/logos/PanIIT%20Logo.jpeg" 
                    alt="PanIIT Alumni India" 
                    className="h-12 object-contain mix-blend-multiply" 
                  />
                  <div className="w-px h-10 bg-[#06206A]/20"></div>
                  <img 
                    src="https://wabflow.b-cdn.net/paniit/logos/PanIIT%20AP%20Logo.jpeg" 
                    alt="PanIIT AP Summit" 
                    className="h-12 object-contain mix-blend-multiply" 
                  />
                </div>
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
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5 w-full">
                    <div>
                      <div className="text-gray-300 text-xs uppercase tracking-wider mb-0.5">Padmini Padhy</div>
                      <div className="text-sm font-mono">+91 97111 95445</div>
                    </div>
                    <div>
                      <div className="text-gray-300 text-xs uppercase tracking-wider mb-0.5">Sanskreeti Raj</div>
                      <div className="text-sm font-mono">+91 98354 19705</div>
                    </div>
                    <div>
                      <div className="text-gray-300 text-xs uppercase tracking-wider mb-0.5">Sai Teja</div>
                      <div className="text-sm font-mono">+91 84189 44154</div>
                    </div>
                    <div>
                      <div className="text-gray-300 text-xs uppercase tracking-wider mb-0.5">Gadi Akhil</div>
                      <div className="text-sm font-mono">+91 94910 80512</div>
                    </div>
                  </div>
                </li>

                <li className="flex items-start gap-3 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] font-semibold">
                  <MapPin size={20} className="text-blue-400 shrink-0 mt-0.5 drop-shadow-lg" />
                  <span className="leading-snug">Dr. B. R. Ambedkar Kala Vedika,<br/>Buckingham Peta, Vijayawada</span>
                </li>
              </ul>
              
              
            </div>
          </div>

          {/* Quick Links (Middle Column) */}
          <div className="lg:col-span-3 lg:col-start-6">
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm drop-shadow-lg">Navigation</h4>
            <ul className="space-y-4">
              {['About', 'Advantage', 'Speakers', 'Schedule', 'Committee'].map((link) => (
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
            <div id="register" className="p-8 md:p-10 rounded-[2rem] bg-black/60 backdrop-blur-xl border border-white/20 shadow-[0_0_50px_rgba(30,58,138,0.2)] relative overflow-hidden h-full flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
              <div className="relative z-10 flex-grow flex flex-col justify-center">
                <h4 className="text-2xl font-black text-white mb-3">Register for the Summit</h4>
                <p className="text-sm text-gray-200 mb-6 font-medium leading-relaxed">Secure your spot at Andhra's premier DeepTech event. Join industry leaders, innovators, and investors.</p>
                <div className="mt-4">
                  <a href="https://www.paniit.org/events/21873" target="_blank" rel="noopener noreferrer" className="w-full py-4 rounded-xl bg-[#DD1D21] hover:bg-red-500 text-white font-black uppercase tracking-wide flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-red-500/25">
                    Register Now <ArrowRight size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
        </div>

        <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-white drop-shadow-lg font-semibold backdrop-blur-xl bg-black/40 py-4 px-6 rounded-2xl border border-white/10">
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
