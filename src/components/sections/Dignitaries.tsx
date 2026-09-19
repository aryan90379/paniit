'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';

const CHIEF_GUEST = {
  image: 'https://wabflow.b-cdn.net/paniit/dignitaries%20pictures/Sri%20Nara%20Chandrababu%20Naidu.jpg',
  name: 'Sri Nara Chandra Babu Naidu',
  role: "Hon'ble Chief Minister",
  org: "of Andhra Pradesh",
  desc: "A nationally recognised visionary leader, widely acknowledged for championing technology, digital transformation, innovation and inclusive economic development."
};

const GUESTS_OF_HONOUR = [
  {
    image: 'https://wabflow.b-cdn.net/paniit/dignitaries%20pictures/Sri%20Kinjarapu%20%20Rammohan%20Naidu.png',
    name: 'Shri Kinjarapu Ram Mohan Naidu',
    role: "Hon'ble Minister of Civil Aviation,",
    org: "Government of India"
  },
  {
    image: 'https://wabflow.b-cdn.net/paniit/dignitaries%20pictures/Sri%20Nara%20Lokesh.jpg',
    name: 'Sri Nara Lokesh',
    role: "Hon'ble Minister for Information Technology,\nElectronics and Communications,",
    org: "Andhra Pradesh"
  }
];

export default function Dignitaries() {
  return (
    <section className="bg-paper relative">

      <div className="py-20 md:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <SectionHeading eyebrow="Summit Dignitaries" title="Chief Guest" className="mb-12 md:mb-16" />
          <div className="max-w-2xl mx-auto flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="group flex flex-col items-center text-center p-6 md:p-10"
            >
              <div className="relative w-56 h-56 md:w-72 md:h-72 mb-8">
                <img src={CHIEF_GUEST.image} alt={CHIEF_GUEST.name} loading="lazy" decoding="async" className="w-full h-full object-cover rounded-full bg-white portrait-ring" />
              </div>
              <h3 className="font-serif font-medium text-2xl md:text-4xl text-[#06206A] mb-2">{CHIEF_GUEST.name}</h3>
              <p className="text-base md:text-lg text-slate-500 font-medium">
                {CHIEF_GUEST.role}<br/>{CHIEF_GUEST.org}
              </p>
              <p className="mt-6 text-base md:text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto">
                {CHIEF_GUEST.desc}
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="py-20 md:py-24 bg-white border-y border-[#06206A]/8">
        <div className="container mx-auto px-4 max-w-5xl">
          <SectionHeading title="Guests of Honour" className="mb-12 md:mb-16" />
          <div className="flex flex-wrap justify-center gap-8 md:gap-14">
            {GUESTS_OF_HONOUR.map((guest, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group flex flex-col items-center text-center p-4 md:p-6 max-w-sm"
              >
                <div className="relative w-36 h-36 md:w-52 md:h-52 mb-6">
                  <img src={guest.image} alt={guest.name} loading="lazy" decoding="async" className="w-full h-full object-cover rounded-full bg-white portrait-ring" />
                </div>
                <h3 className="font-serif font-medium text-xl md:text-2xl text-[#06206A] mb-2">{guest.name}</h3>
                <p className="text-base md:text-lg text-slate-500 whitespace-pre-line font-medium">
                  {guest.role}<br/>{guest.org}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
