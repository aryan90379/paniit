'use client';

import { motion } from 'framer-motion';
import { MapPin, Calendar, Clock, Phone, Mail, ExternalLink, Building2 } from 'lucide-react';

const CONTACTS = [
  {
    name: 'Swadeep Pillarisetti',
    role: 'Summit Chair',
    phone: '+91 89716 97285',
  },
  {
    name: 'Rajesh Kumar Dasari',
    role: 'Summit Co-Chair',
    phone: '+91 98450 65733',
  },
  {
    name: 'Sudhakar Gande',
    role: 'Summit Co-Chair',
    phone: '+91 97691 80508',
  },
  {
    name: 'Padmini Padhy',
    role: 'PanIIT Secretariat',
    phone: '+91 97111 95445',
    email: 'secretariat@paniit.org',
  },
];

export default function EventDetails() {
  return (
    <section id="contact" className="py-20 md:py-24 bg-white text-gray-900 relative border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        
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
              viewport={{ once: true }}
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
              viewport={{ once: true }}
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
              viewport={{ once: true }}
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CONTACTS.map((item, idx) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
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
    </section>
  );
}
