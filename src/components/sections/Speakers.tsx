'use client';

import { motion } from 'framer-motion';

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
  {
    image: '/dr_purushotham.jpg',
    name: 'Dr Purushotham Hanumanthu',
    role: "Secretary to the Government\nDepartment of Science, Technology & Innovation,\nGovernment of Andhra Pradesh",
    org: "Department of Science, Technology & Innovation, Government of Andhra Pradesh"
  }
];

const KEY_GUESTS = [
  { image: 'https://wabflow.b-cdn.net/paniit/dignitaries%20pictures/Prof.%20V.%20Kamakoti%20Director%2C%20IIT%20Madras.jpg', name: 'Prof. V. Kamakoti', role: 'Director\nIIT Madras' },
  { image: 'https://wabflow.b-cdn.net/paniit/dignitaries%20pictures/Prof.%20Satyamnarayana_%20IIT%20Tirupathi%20director.jpeg', name: 'Prof. K N Satyamnarayana', role: 'Director\nIIT Tirupati' },
  { image: 'https://wabflow.b-cdn.net/paniit/dignitaries%20pictures/Prof.%20Budaraju%20Srinivasa%20Murty_%20IITH%20director.jpeg', name: 'Prof. B. S. Murthy', role: 'Director\nIIT Hyderabad' },
  { image: 'https://wabflow.b-cdn.net/paniit/dignitaries%20pictures/Prof.%20%20Sukumar%20Mishra%20Director%20%20IIT%20%20(ISM)%20Dhanbad.jpg', name: 'Prof. Sukumar Mishra', role: 'Director\nIIT (ISM) Dhanbad' },
  { image: 'https://wabflow.b-cdn.net/paniit/dignitaries%20pictures/prof%20a%20seshadri%20sekhar%20director%20iit%20palakkad-Picsart-AiImageEnhancer.jpg', name: 'Dr. A. Seshadri Sekhar', role: 'Director\nIIT Palakkad' },
  { image: 'https://wabflow.b-cdn.net/paniit/dignitaries%20pictures/Prof.%20Suhas%20Joshi%2C%20Director%2C%20IIT%20Indore.jpg', name: 'Prof. Suhas Joshi', role: 'Director\nIIT Indore' },
  { image: 'https://d3liyurciwi0wb.cloudfront.net/dignitaries/Prof,%20Shireesh%20Kedare-Picsart-AiImageEnhancer_11zon.webp', name: 'Prof. Shireesh Kedare', role: 'Director\nIIT Bombay' },
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
  { image: 'https://d3liyurciwi0wb.cloudfront.net/dignitaries/ganesh%20ramakrishnan.png', name: 'Prof. Ganesh Ramakrishnan', role: 'Founding Director\nBharatGen' },
  { image: 'https://d3liyurciwi0wb.cloudfront.net/dignitaries/suyash%20singh.png', name: 'Suyash Singh', role: 'Co-founder & CEO\nGalaxEye' },
  { image: 'https://d3liyurciwi0wb.cloudfront.net/dignitaries/naga%20bharath%20daka.png', name: 'Naga Bharath Daka', role: 'Co-founder & CTO\nSkyroot Aerospace' },
  { image: 'https://d3liyurciwi0wb.cloudfront.net/dignitaries/ramesh%20hariharan.png', name: 'Dr. Ramesh Hariharan', role: 'CEO & Co-Founder\nStrand Life Sciences' },
  { image: 'https://d3liyurciwi0wb.cloudfront.net/dignitaries/taslimarif%20saiyed.png', name: 'Dr. Taslimarif Saiyed, PhD', role: 'Director and CEO\nC-CAMP' },
  { image: 'https://d3liyurciwi0wb.cloudfront.net/dignitaries/Kaustubh%20Dhonde.png', name: 'Kaustubh Dhonde', role: 'Co-founder & CEO\nAutoNxt' },
  { image: 'https://d3liyurciwi0wb.cloudfront.net/dignitaries/shailesh%20kumar.png', name: 'Shailesh Kumar', role: 'Head of AI\nJio' },
  { image: 'https://wabflow.b-cdn.net/paniit/dignitaries%20pictures/Sheshagiri%20Rao%20IIT%20M%20%2C%20CEO(%20X)%20HAL%20NASIK.jpeg', name: 'Sri BH. V. Seshagiri Rao', role: 'CEO( MC) Retd\nHAL, NASIK' },
  { image: PLACEHOLDER, name: 'Sri Shekar Reddy', role: 'CMD\nCrux Biotech & SRI CHAKRA' },
  { image: PLACEHOLDER, name: 'Sri Ram Bandi', role: 'Founder & CEO\nStyrax Instruments India Pvt Ltd Hyderabad' },
  { image: PLACEHOLDER, name: 'Dr. Vidhya Sagar', role: 'FMCD\nAvantel' }
];

const SectionTitle = ({ title }: { title: string }) => (
  <div className="flex flex-col items-center mb-16 pt-12">
    <h2 className="text-3xl md:text-5xl font-black text-[#06206A] uppercase tracking-wide text-center">
      {title}
    </h2>
    <div className="w-16 h-1.5 bg-[#DD1D21] mt-4"></div>
  </div>
);

const SpeakerCard = ({ speaker }: { speaker: any }) => (
  <div className="flex flex-col items-center text-center group p-4 md:p-6 rounded-3xl hover:bg-white transition-all duration-300 relative h-full">
    <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" 
         style={{ boxShadow: '0 10px 40px -10px rgba(99, 102, 241, 0.4)' }} />
         
    <div className="relative w-32 h-32 md:w-48 md:h-48 mb-5 group-hover:-translate-y-1 transition-transform duration-300">
      <div className="absolute inset-[-15%] bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 blur-xl rounded-full transition-opacity duration-300 pointer-events-none" />
      <img 
        src={speaker.image || PLACEHOLDER} 
        alt={speaker.name} 
        loading="lazy"
        decoding="async"
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).src = PLACEHOLDER;
        }}
        className="w-full h-full object-cover rounded-full relative z-10 bg-white border border-gray-100"
      />
    </div>
    <h3 className="font-bold text-[#06206A] text-sm md:text-lg leading-snug mb-1.5 relative z-10 group-hover:text-indigo-600 transition-colors whitespace-pre-line">{speaker.name}</h3>
    <p className="text-xs md:text-sm text-gray-500 relative z-10 whitespace-pre-line font-medium">{speaker.role}</p>
  </div>
);

export default function Speakers() {
  return (
    <section id="speakers" className="bg-white relative">
      


      {/* Distinguished Guests */}
      <div className="py-20 border-b border-gray-100 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <SectionTitle title="Distinguished Guests" />
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {DISTINGUISHED_GUESTS.map((guest, i) => (
              <div key={i} className="flex flex-col items-center text-center group p-6 md:p-8 rounded-3xl hover:bg-white transition-all duration-300 relative">
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" 
                     style={{ boxShadow: '0 15px 50px -15px rgba(99, 102, 241, 0.4)' }} />
                     
                <div className="relative w-36 h-36 md:w-48 md:h-48 mb-6 group-hover:-translate-y-2 transition-transform duration-300">
                  <div className="absolute inset-[-15%] bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 blur-xl rounded-full transition-opacity duration-300 pointer-events-none" />
                  <img src={guest.image} alt={guest.name} loading="lazy" decoding="async" className="w-full h-full object-cover rounded-full relative z-10 bg-white border border-gray-100 shadow-md" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-[#06206A] mb-2 relative z-10 group-hover:text-indigo-600 transition-colors">{guest.name}</h3>
                <p className="text-xs md:text-sm text-gray-500 relative z-10 whitespace-pre-line font-medium">
                  {guest.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Key Guests and Speakers */}
      <div className="py-24 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <SectionTitle title="IIT Directors and Academicians" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-12 md:gap-x-8 md:gap-y-16">
            {KEY_GUESTS.map((speaker, i) => (
              <SpeakerCard key={i} speaker={speaker} />
            ))}
          </div>
        </div>
      </div>

      {/* Industry Leaders */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <SectionTitle title="Industry Leaders" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-12 md:gap-x-8 md:gap-y-16">
            {INDUSTRY_LEADERS.map((speaker, i) => (
              <SpeakerCard key={i} speaker={speaker} />
            ))}
            <div className="flex flex-col justify-center items-center h-full min-h-[250px] p-4 md:p-6 rounded-3xl bg-white hover:bg-white transition-all duration-300 group cursor-pointer relative">
               <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" 
                 style={{ boxShadow: '0 10px 40px -10px rgba(99, 102, 241, 0.4)' }} />
              <div className="text-xl md:text-2xl font-bold text-gray-400 group-hover:text-indigo-600 transition-colors relative z-10">+ Many More</div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
