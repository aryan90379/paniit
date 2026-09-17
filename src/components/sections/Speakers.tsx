'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';

const PLACEHOLDER = "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22%23cbd5e1%22%3E%3Cpath%20d%3D%22M12%2012c2.21%200%204-1.79%204-4s-1.79-4-4-4-4%201.79-4%204%201.79%204%204%204zm0%202c-2.67%200-8%201.34-8%204v2h16v-2c0-2.66-5.33-4-8-4z%22%2F%3E%3C%2Fsvg%3E";











const DISTINGUISHED_GUESTS = [
  {
    image: 'https://wabflow.b-cdn.net/paniit/dignitaries%20pictures/Sri%20Sai%20Prasad%20Guttapalli%20Chief%20Secretary%20of%20Andhra%20Pradesh.png',
    name: 'Sri Sai Prasad Guttapalli',
    role: "Chief Secretary of\nAndhra Pradesh",
    org: ""
  },
  {
    image: 'https://wabflow.b-cdn.net/paniit/dignitaries%20pictures/Dr.%20Sunil%20Kumar%20Barnwal.jpg',
    name: 'Dr. Sunil Kumar Barnwal',
    role: "Chief Executive Officer,\nNational Health Authority,\nMinistry of Health and\nFamily Welfare, Government\nof India",
    org: ""
  },
];

const KEY_GUESTS = [
  { image: 'https://wabflow.b-cdn.net/paniit/dignitaries%20pictures/Prof.%20V.%20Kamakoti%20Director%2C%20IIT%20Madras.jpg', name: 'Prof. V. Kamakoti', role: 'Director\nIIT Madras' },
  { image: 'https://d3liyurciwi0wb.cloudfront.net/dignitaries/Prof,%20Shireesh%20Kedare-Picsart-AiImageEnhancer_11zon.webp', name: 'Prof. Shireesh Kedare', role: 'Director\nIIT Bombay' },
  { image: 'https://wabflow.b-cdn.net/paniit/dignitaries%20pictures/Prof.%20Satyamnarayana_%20IIT%20Tirupathi%20director.jpeg', name: 'Prof. K N Satyamnarayana', role: 'Director\nIIT Tirupati' },
  { image: 'https://wabflow.b-cdn.net/paniit/dignitaries%20pictures/Prof.%20Budaraju%20Srinivasa%20Murty_%20IITH%20director.jpeg', name: 'Prof. B. S. Murthy', role: 'Director\nIIT Hyderabad' },
  { image: 'https://wabflow.b-cdn.net/paniit/dignitaries%20pictures/Prof.%20%20Sukumar%20Mishra%20Director%20%20IIT%20%20(ISM)%20Dhanbad.jpg', name: 'Prof. Sukumar Mishra', role: 'Director\nIIT (ISM) Dhanbad' },
  { image: 'https://wabflow.b-cdn.net/paniit/dignitaries%20pictures/Prof.%20Suhas%20Joshi%2C%20Director%2C%20IIT%20Indore.jpg', name: 'Prof. Suhas Joshi', role: 'Director\nIIT Indore' },
  { image: 'https://wabflow.b-cdn.net/paniit/dignitaries%20pictures/prof%20a%20seshadri%20sekhar%20director%20iit%20palakkad-Picsart-AiImageEnhancer.jpg', name: 'Dr. A. Seshadri Sekhar', role: 'Director\nIIT Palakkad' },
  { image: 'https://d3liyurciwi0wb.cloudfront.net/dignitaries/Prof.%20Laxmidhar%20Behera.jpeg', name: 'Prof. Laxmidhar Behera', role: 'Director\nIIT Mandi' },
  { image: 'https://d3liyurciwi0wb.cloudfront.net/dignitaries/Prof,%20K,%20V,%20Krishna%20Rao-Picsart-AiImageEnhancer.jpeg', name: 'Prof. K. V. Krishna Rao', role: 'Director\nNIT Andhra Pradesh' },
  { image: 'https://d3liyurciwi0wb.cloudfront.net/dignitaries/shalivahan.png', name: 'Prof. Shalivahan Srivastava', role: 'Director, Indian Institute of\nPetroleum & Energy, Vizag' },
  { image: 'https://d3liyurciwi0wb.cloudfront.net/dignitaries/balaram%20ravindran.png', name: 'Prof. Balaram Ravindran', role: 'Head of Department of Data Science\nand AI at IIT Madras, WSAI, RBCDSAI &\nCeRAI at IIT Madras.' },
  { image: 'https://wabflow.b-cdn.net/paniit/dignitaries%20pictures/Prof.%20Arun%20Tangirala.jpg', name: 'Prof. Arun Tangirala', role: 'Dean, CDO, PI, AI Based Agritech\nIIT Tirupati' }
];

const INDUSTRY_LEADERS = [
  { image: 'https://d3liyurciwi0wb.cloudfront.net/dignitaries/lalit%20agarwal.png', name: 'Sri Lalit Agarwal', role: 'Managing Director, India Region\nSchlumberger India' },
  { image: 'https://d3liyurciwi0wb.cloudfront.net/dignitaries/Sri%20Yaram%20Vijay%20Kumar.png', name: 'Sri Yaram Vijay Kumar', role: 'Country Leader - India\nHoneywell Aerospace' },
  { image: 'https://d3liyurciwi0wb.cloudfront.net/dignitaries/Hitesh%20Garg%20(India%20MD)%20NXP_Semiconductors%20(2)%20(1).jpg', name: 'Sri Hitesh Garg', role: 'Vice President and India Country Manager\nNXP Semiconductors' },
  { image: 'https://d3liyurciwi0wb.cloudfront.net/dignitaries/arum%20ramchandani.png', name: 'Sri Arun T. Ramchandani', role: 'Senior VP & Head\nL&T Precision Engineering & Systems' },
  { image: 'https://d3liyurciwi0wb.cloudfront.net/dignitaries/amith%20Singhee.png', name: 'Sri Amith Singhee', role: 'Chief Technology Officer\nIBM India and South Asia' },
  { image: 'https://d3liyurciwi0wb.cloudfront.net/dignitaries/C%20V%20Sridhar.png', name: 'Sri C V Sridhar', role: 'Mission Director\nAndhra Pradesh State Quantum Mission (APSQM) and the Amaravati Quantum Valley' },
  { image: 'https://wabflow.b-cdn.net/paniit/dignitaries%20pictures/Dr.%20Giridhar%20Parvatam.jpg', name: 'Dr. Giridhar Parvatam', role: 'Head\nCFTRI' },
  { image: 'https://d3liyurciwi0wb.cloudfront.net/dignitaries/jitendra%20sharma.png', name: 'Dr. Jitendra Sharma', role: 'CEO\nAMTZ' },
  { image: 'https://d3liyurciwi0wb.cloudfront.net/dignitaries/ankit%20todi.png', name: 'Sri Ankit Todi', role: 'Chief Sustainability Officer\nMahindra Group' },
];

const EMERGING_VENTURES = [
  { image: 'https://d3liyurciwi0wb.cloudfront.net/dignitaries/naga%20bharath%20daka.png', name: 'Naga Bharath Daka', role: 'Co-founder & CTO\nSkyroot Aerospace' },
  { image: 'https://d3liyurciwi0wb.cloudfront.net/dignitaries/suyash%20singh.png', name: 'Suyash Singh', role: 'Co-founder & CEO\nGalaxEye' },
  { image: 'https://d3liyurciwi0wb.cloudfront.net/dignitaries/ramesh%20hariharan.png', name: 'Dr. Ramesh Hariharan', role: 'CEO & Co-Founder\nStrand Life Sciences' },
  { image: 'https://d3liyurciwi0wb.cloudfront.net/dignitaries/taslimarif%20saiyed.png', name: 'Dr. Taslimarif Saiyed, PhD', role: 'Director and CEO\nC-CAMP' },
  { image: 'https://d3liyurciwi0wb.cloudfront.net/dignitaries/Kaustubh%20Dhonde.png', name: 'Kaustubh Dhonde', role: 'Co-founder & CEO\nAutoNxt' },
  { image: 'https://d3liyurciwi0wb.cloudfront.net/dignitaries/shailesh%20kumar.png', name: 'Shailesh Kumar', role: 'Head of AI\nJio' },
  { image: 'https://d3liyurciwi0wb.cloudfront.net/dignitaries/ganesh%20ramakrishnan.png', name: 'Prof. Ganesh Ramakrishnan', role: 'Founding Director, BharatGen' },
  { image: 'https://d3liyurciwi0wb.cloudfront.net/dignitaries/shekar%20reddy.png', name: 'Sri G C Shekar Reddy', role: 'Director\nCompany:CRUX Bio eathnol\nIndia pvt Ltd.\nSri chakra poly plast (I) pvt Ltd' },
  { image: 'https://d3liyurciwi0wb.cloudfront.net/dignitaries/ram%20bandi.png', name: 'Sri Ram Bandi', role: 'Founder & CEO\nStyrax Instruments India Pvt Ltd\nHyderabad' },
  { image: 'https://d3liyurciwi0wb.cloudfront.net/dignitaries/vidhya%20sagar.png', name: 'Vidya Sagar Abburi', role: 'Founder & CMD\nAvantel' }
];

const SpeakerCard = ({ speaker }: { speaker: { image?: string; name: string; role: string } }) => (
  <motion.div
    initial={{ opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    className="group flex flex-col items-center text-center p-4 md:p-6 relative h-full"
  >
    <div className="relative w-28 h-28 md:w-40 md:h-40 mb-5">
      <img 
        src={speaker.image || PLACEHOLDER} 
        alt={speaker.name} 
        loading="lazy"
        decoding="async"
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).src = PLACEHOLDER;
        }}
        className="w-full h-full object-cover rounded-full bg-white portrait-ring"
      />
    </div>
    <h3 className="font-semibold text-[#06206A] text-sm md:text-lg leading-snug mb-1.5 whitespace-pre-line">{speaker.name}</h3>
    <p className="text-sm md:text-base text-slate-500 whitespace-pre-line">{speaker.role}</p>
  </motion.div>
);

export default function Speakers() {
  return (
    <section id="speakers" className="bg-white relative">

      <div className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <SectionHeading eyebrow="Confirmed Speakers" title="Distinguished Guests" className="mb-12 md:mb-16" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 max-w-3xl mx-auto">
            {DISTINGUISHED_GUESTS.map((guest, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group flex flex-col items-center text-center p-4 md:p-6"
              >
                <div className="relative w-32 h-32 md:w-44 md:h-44 mb-6">
                  <img src={guest.image} alt={guest.name} loading="lazy" decoding="async" className="w-full h-full object-cover rounded-full bg-white portrait-ring" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-[#06206A] mb-2">{guest.name}</h3>
                <p className="text-sm md:text-base text-slate-500 whitespace-pre-line">
                  {guest.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-20 md:py-24 bg-paper">
        <div className="container mx-auto px-4 max-w-6xl">
          <SectionHeading title="IIT Directors and Academicians" className="mb-12 md:mb-16" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-12 md:gap-x-8 md:gap-y-16">
            {KEY_GUESTS.map((speaker, i) => (
              <SpeakerCard key={i} speaker={speaker} />
            ))}
          </div>
        </div>
      </div>

      <div className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <SectionHeading title="Industry Leaders" className="mb-12 md:mb-16" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-12 md:gap-x-8 md:gap-y-16">
            {INDUSTRY_LEADERS.map((speaker, i) => (
              <SpeakerCard key={i} speaker={speaker} />
            ))}
          </div>
        </div>
      </div>

      <div className="py-20 md:py-24 bg-paper">
        <div className="container mx-auto px-4 max-w-6xl">
          <SectionHeading title="Emerging Ventures & Unicorns" className="mb-12 md:mb-16" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-12 md:gap-x-8 md:gap-y-16">
            {EMERGING_VENTURES.map((speaker, i) => (
              <SpeakerCard key={i} speaker={speaker} />
            ))}
            <div className="flex flex-col justify-center items-center h-full min-h-[200px] p-4">
              <div className="font-serif text-xl md:text-2xl font-medium text-[#06206A]">+ Many More</div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
