'use client';

import { motion } from 'framer-motion';
import DriftWall from '@/components/ui/DriftWall';

// The two actual glimpse images provided, mixed with some relevant high-quality event placeholders
// to ensure the DriftWall has enough tiles to look amazing.
const items = [
  { image: '/extracted_images/glimpse_p22_0.jpeg', title: 'PanIIT Glimpse 1' },
  { image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop', title: 'Audience' },
  { image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=2070&auto=format&fit=crop', title: 'Panel' },
  { image: '/extracted_images/glimpse_p23_0.jpeg', title: 'PanIIT Glimpse 2' },
  { image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop', title: 'Networking' },
  { image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?q=80&w=2070&auto=format&fit=crop', title: 'Stage' },
  { image: '/extracted_images/glimpse_p22_0.jpeg', title: 'PanIIT Glimpse 3' },
  { image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop', title: 'Tech Talk' },
  { image: 'https://images.unsplash.com/photo-1475721025592-229bac54c546?q=80&w=2070&auto=format&fit=crop', title: 'Innovation' },
  { image: '/extracted_images/glimpse_p23_0.jpeg', title: 'PanIIT Glimpse 4' },
];

export default function Glimpses() {
  return (
    <section className="py-24 bg-[#0a0a0a] text-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl mb-12">
        <div className="text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 rounded-full border border-gray-700 bg-gray-800 text-gray-300 text-sm font-medium mb-4 uppercase tracking-widest"
          >
            Past Events
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight uppercase"
          >
            Glimpses From The Past
          </motion.h2>
        </div>
      </div>

      {/* Desktop View: Full-width immersive DriftWall */}
      <div className="hidden md:block w-full h-[600px] lg:h-[700px]">
        <DriftWall
          items={items}
          columns={6}
          tileWidth={280}
          tileHeight={180}
          gap={18}
          tilt={12}
          turn={-10}
          perspective={1200}
          depth={120}
          speed={35}
          direction="up"
          variance={0.5}
          parallax={0.7}
          lift={50}
          fade={0.6}
          dim={0.55}
          overlayColor="#0a0a0a"
          radius={16}
          roll={0}
          pauseOnHover={true}
          grayscale={false}
        />
      </div>

      {/* Mobile View: Horizontal Swipeable Carousel to save vertical space */}
      <div className="md:hidden w-full pl-4 pb-8">
        <div className="flex overflow-x-auto gap-4 hide-scrollbar snap-x snap-mandatory pr-4">
          {items.map((item, i) => (
            <div 
              key={i} 
              className="min-w-[85vw] sm:min-w-[70vw] snap-center shrink-0 rounded-2xl overflow-hidden border border-gray-800"
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-[250px] object-cover"
              />
            </div>
          ))}
        </div>
        
        {/* Swipe Indicator */}
        <div className="flex justify-center mt-6 gap-2 opacity-50">
          <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
          <div className="w-2 h-2 rounded-full bg-gray-600" />
          <div className="w-2 h-2 rounded-full bg-gray-600" />
        </div>
      </div>
      
    </section>
  );
}
