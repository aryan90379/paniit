'use client';

import { motion } from 'framer-motion';


interface Sponsor {
  name: string;
  logo?: string;
  scale?: number;
}

const PAST_SPONSORS: Sponsor[] = [
  { name: 'Ayana Woods', logo: 'https://d3liyurciwi0wb.cloudfront.net/gold%20past%20/ayana%20woods.png', scale: 1.8 },
  { name: 'Groww', logo: 'https://d3liyurciwi0wb.cloudfront.net/gold%20past%20/groww.png', scale: 0.9 },
  { name: 'Kuku FM', logo: 'https://kukufm.com/appLogos/kuku-logo.png', scale: 0.75 },
  { name: 'SAP', logo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/59/SAP_2011_logo.svg/1280px-SAP_2011_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=thumbnail', scale: 0.75 },
  { name: 'HDFC Mutual Fund', logo: 'https://seekvectorlogo.com/wp-content/uploads/2019/02/hdfc-mutual-fund-vector-logo.png', scale: 0.8 },
  { name: 'Cashfree Payments', logo: 'https://cashfreelogo.cashfree.com/website/landings/homepage/cashfreeLogo.png', scale: 0.8 },
  { name: 'Harness', logo: 'https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/3/harness-p6edn6642eebbkd9dajc.png/harness-tzgna80n4t7uh6lzkfrtv.png?_a=DATAiZAAZAA0', scale: 1.5 },
  { name: 'Bharat Ke Super Founders', logo: 'https://bharatkesuperfounders.com/og-image.png', scale: 1.4 },
  { name: 'Rupeezy', logo: 'https://rupeezy.in/assets/header/rupeezy_logo.webp', scale: 0.8 },
  { name: 'Tally Solutions', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/09/Tally_-_Logo.png', scale: 0.8 },
  { name: 'VisionIAS', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh4RvBHT9yDb2Qsm8pneDijXn51o2j9Kz-uIeSixSafXrt0rUNqDgjVQM&s=10', scale: 1.5 },
  { name: 'Astravion' },
  { name: 'BAC Infratech', logo: 'https://www.bacinfratech.com/assets/images/header-logo.webp', scale: 0.8 },
  { name: 'Brihaspathi Technologies', logo: 'https://brihaspathi.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhighbtlogo-tm-1.bba8b8c1.png&w=640&q=75', scale: 0.8 },
  { name: 'Renova Hospitals', logo: 'https://renovahospitals.com/build/assets/logo-DwB5j4pz.jpg', scale: 0.9 },
  { name: 'SSG', logo: 'https://www.ssgbd.com/backend/system-images/logos/1-20260623010535-1547392810-435037727.png', scale: 0.8 },
  { name: 'Constella', logo: 'https://speedinfra.in/wp-content/uploads/2022/08/Constella_Logo-150.png', scale: 0.8 },
  { name: 'Taal', logo: 'https://media.licdn.com/dms/image/v2/D560BAQGwsKQMWKZfow/company-logo_200_200/company-logo_200_200/0/1726382060783/taalaviation_logo?e=2147483647&v=beta&t=h7YzdCo1o-566aOyPYSTUmsG3E95YaoMWec5M3VwD98', scale: 0.9 },
  { name: 'Terrum', logo: 'https://d3liyurciwi0wb.cloudfront.net/gold%20past%20/terrum%20(1).png', scale: 1.0 },
  { name: 'Vasavi Group', logo: 'https://play-lh.googleusercontent.com/v-dX8DbWVi5q1vYdeiC-qqyDPlen-yXnEp2tk8Uv9h-dVpcEMf2BJlRF29LvxA3Izuvi_BF_8_KKe-8Kj4YhIA=w240-h480-rw', scale: 1.1 },
  { name: 'Lexicon Infotech', logo: 'https://media.licdn.com/dms/image/v2/C510BAQFJwb3t848TQw/company-logo_200_200/company-logo_200_200/0/1631415127022/lexicon_infotech_ltd_logo?e=2147483647&v=beta&t=5pzxMglqIy671IdXHeIAqO96XoJTJHKMPx1eAsxJpZE', scale: 2.2 },
];

export default function PastSponsors() {
  return (
    <section id="past-sponsors" className="py-24 bg-white relative border-t border-gray-100 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        
        {/* Section Heading */}
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1, margin: "0px 0px -50px 0px" }} style={{ WebkitTransform: "translateZ(0)", willChange: "transform, opacity" }}
            className="inline-block px-4 py-1 rounded-full border border-blue-200 bg-[#E3F0FA] text-[#43AAF0] text-sm font-medium mb-4 uppercase tracking-widest"
          >
            Partnerships & Legacy
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1, margin: "0px 0px -50px 0px" }} style={{ WebkitTransform: "translateZ(0)", willChange: "transform, opacity" }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-black text-[#06206A] tracking-tight uppercase"
          >
            Past Sponsors
          </motion.h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto font-medium">
            Acknowledging the distinguished organizations and partners who championed previous editions of the PanIIT Summit.
          </p>
        </div>

        {/* SPONSORS GRID */}
        <div className="mb-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
            {PAST_SPONSORS.map((sponsor, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1, margin: "0px 0px -50px 0px" }} style={{ WebkitTransform: "translateZ(0)", willChange: "transform, opacity" }}
                transition={{ delay: (i % 5) * 0.04 }}
                className="flex items-center justify-center text-center group min-h-[100px] hover:-translate-y-2 transition-transform duration-300"
              >
                {sponsor.logo ? (
                  <img src={sponsor.logo} alt={sponsor.name} loading="lazy" style={{ transform: sponsor.scale ? `scale(${sponsor.scale})` : 'none' }} className="max-w-[90%] max-h-[80px] object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-105" />
                ) : (
                  <span className="font-extrabold text-lg md:text-xl text-gray-800 tracking-tight group-hover:text-[#06206A] transition-colors leading-snug">
                    {sponsor.name}
                  </span>
                )}
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
