'use client';

import { motion } from 'framer-motion';
import { MapPin, Calendar, Clock, Phone, Mail, ExternalLink, Building2 } from 'lucide-react';

const CONTACTS = [
  {
    name: 'Padmini Padhy',
    role: 'PanIIT Secretariat',
    phone: '+91 97111 95445',
    email: 'secretariat@paniit.org',
  },
  {
    name: 'Sanskreeti Raj',
    role: 'PanIIT Secretariat',
    phone: '+91 98354 19705',
    email: 'sanskreeti.raj@paniit.org',
  },
  {
    name: 'Sai Teja Duggempudi',
    role: '',
    phone: '+91 84189 44154',
  },
  {
    name: 'Gadi Akhil Sai Ram',
    role: '',
    phone: '+91 94910 80512',
  },
  {
    name: 'Thejaswini Kalasamudram',
    role: '',
    phone: '+91 78937 96502',
  },
];

export default function EventDetails() {
  return (
    <section id="contact" className="pt-20 md:pt-24 pb-0 bg-[#F8FAFC] text-gray-900 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
        
        {/* EVENT DETAILS BLOCK */}
        <div className="mb-14">
          <div className="flex items-center gap-2.5 mb-8">
            <span className="w-1.5 h-7 bg-[#DD1D21] rounded-full" />
            <h2 className="text-2xl md:text-3xl font-black text-[#06206A] tracking-wide uppercase">
              Event Details
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Venue Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1, margin: "0px 0px -50px 0px" }} style={{ WebkitTransform: "translateZ(0)", willChange: "transform, opacity" }}
              className="bg-[#F8FAFC] rounded-2xl p-6 border border-gray-200/80 shadow-xs flex items-start gap-4 hover:border-gray-300 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center shrink-0 text-[#DD1D21]">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-bold tracking-wider text-[#06206A] uppercase block">
                  Venue
                </span>
                <div className="text-base font-bold text-gray-900 leading-snug">
                  Dr. B. R. Ambedkar Kala Vedika
                </div>
                <div className="text-xs text-gray-600">
                  Buckingham Peta, Vijayawada, Andhra Pradesh
                </div>
              </div>
            </motion.div>

            {/* Date Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1, margin: "0px 0px -50px 0px" }} style={{ WebkitTransform: "translateZ(0)", willChange: "transform, opacity" }}
              transition={{ delay: 0.1 }}
              className="bg-[#F8FAFC] rounded-2xl p-6 border border-gray-200/80 shadow-xs flex items-start gap-4 hover:border-gray-300 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center shrink-0 text-[#DD1D21]">
                <Calendar className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-bold tracking-wider text-[#06206A] uppercase block">
                  Date
                </span>
                <div className="text-base font-bold text-gray-900 leading-snug">
                  3rd October, 2026
                </div>
                <div className="text-xs text-gray-600">
                  Saturday • Full Day Summit
                </div>
              </div>
            </motion.div>

            {/* Organized By Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1, margin: "0px 0px -50px 0px" }} style={{ WebkitTransform: "translateZ(0)", willChange: "transform, opacity" }}
              transition={{ delay: 0.2 }}
              className="bg-[#F8FAFC] rounded-2xl p-6 border border-gray-200/80 shadow-xs flex items-start gap-4 hover:border-gray-300 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center shrink-0 text-[#DD1D21]">
                <Building2 className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-bold tracking-wider text-[#06206A] uppercase block">
                  Organised By
                </span>
                <div className="text-base font-bold text-gray-900 leading-snug">
                  PanIIT Alumni India
                </div>
                <div className="text-xs text-gray-600">
                  In collaboration with Govt. of Andhra Pradesh
                </div>
              </div>
            </motion.div>

          </div>
        </div>

        {/* CONTACT BLOCK */}
        <div>
          <div className="flex items-center gap-2.5 mb-8">
            <span className="w-1.5 h-7 bg-[#DD1D21] rounded-full" />
            <h2 className="text-2xl md:text-3xl font-black text-[#06206A] tracking-wide uppercase">
              Contact
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {CONTACTS.map((item, idx) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1, margin: "0px 0px -50px 0px" }} style={{ WebkitTransform: "translateZ(0)", willChange: "transform, opacity" }}
                transition={{ delay: idx * 0.08 }}
                className="bg-[#F8FAFC] rounded-2xl p-6 border border-gray-200/80 shadow-xs hover:shadow-md hover:border-gray-300 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-base font-extrabold text-[#06206A] leading-snug">
                    {item.name}
                  </h3>
                  <p className="text-xs text-gray-500 italic mt-0.5 mb-4">
                    {item.role}
                  </p>
                </div>

                <div className="space-y-2 pt-2">
                  <a
                    href={`tel:${item.phone.replace(/\s+/g, '')}`}
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DD1D21] hover:bg-red-700 text-white text-xs font-bold tracking-wide transition-colors shadow-xs"
                  >
                    <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                      <Phone className="w-3 h-3 fill-current" />
                    </span>
                    <span>{item.phone}</span>
                  </a>

                  {item.email && (
                    <div className="pt-1">
                      <a
                        href={`mailto:${item.email}`}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#DD1D21] hover:underline"
                      >
                        <Mail className="w-3.5 h-3.5" />
                        <span>{item.email}</span>
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* Smooth Morphing & Multi-layer Gradient Transition into Footer */}
      <div className="relative w-full mt-12 md:mt-16 pointer-events-none select-none">
        {/* Multi-layered Organic Morphing Waves */}
        <div className="relative w-full overflow-hidden leading-none">
          <svg
            className="relative block w-full h-24 sm:h-32 md:h-44 lg:h-52"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="waveGradBack" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#06206A" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#06206A" stopOpacity="0.4" />
              </linearGradient>
              <linearGradient id="waveGradMid" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#091A42" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#050C1D" stopOpacity="0.9" />
              </linearGradient>
              <linearGradient id="waveGradFront" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#0B132B" />
                <stop offset="40%" stopColor="#050505" />
                <stop offset="100%" stopColor="#050505" />
              </linearGradient>
            </defs>

            {/* Back Wave: Subtle PanIIT Navy ambient curve */}
            <path
              d="M0,96 C240,170 480,40 720,110 C960,180 1200,70 1440,130 L1440,320 L0,320 Z"
              fill="url(#waveGradBack)"
            />

            {/* Mid Wave: Deeper Navy Morphing Curve */}
            <path
              d="M0,160 C320,80 560,230 840,160 C1120,90 1320,190 1440,170 L1440,320 L0,320 Z"
              fill="url(#waveGradMid)"
            />

            {/* Front Wave: Seamless transition to pure footer color (#050505) */}
            <path
              d="M0,224 C280,180 520,270 800,210 C1080,150 1280,240 1440,220 L1440,320 L0,320 Z"
              fill="url(#waveGradFront)"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
