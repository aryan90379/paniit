'use client';

import { motion } from 'framer-motion';

const PLACEHOLDER = "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22%23cbd5e1%22%3E%3Cpath%20d%3D%22M12%2012c2.21%200%204-1.79%204-4s-1.79-4-4-4-4%201.79-4%204%201.79%204%204%204zm0%202c-2.67%200-8%201.34-8%204v2h16v-2c0-2.66-5.33-4-8-4z%22%2F%3E%3C%2Fsvg%3E";

const CHIEF_GUEST = {
  image: 'https://wabflow.b-cdn.net/paniit/dignitaries%20pictures/Sri%20Nara%20Chandrababu%20Naidu.jpg',
  name: 'Sri Nara Chandra Babu Naidu',
  role: "Hon'ble Chief Minister",
  org: "of Andhra Pradesh",
  desc: "A nationally recognised visionary leader, widely acknowledged for championing technology, digital transformation, innovation and inclusive economic development."
};

const GUESTS_OF_HONOUR = [
  {
    image: 'https://wabflow.b-cdn.net/paniit/dignitaries%20pictures/Pawan%20Kalyan.jpg',
    name: 'Sri Pawan Kalyan',
    role: "Hon'ble Deputy Chief Minister",
    org: "Andhra Pradesh"
  },
  {
    image: 'https://wabflow.b-cdn.net/paniit/dignitaries%20pictures/Sri%20Kinjarapu%20%20Rammohan%20Naidu.png',
    name: 'Shri Kinjarapu Rammohan Naidu',
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

const DISTINGUISHED_GUESTS = [
  {
    image: 'https://wabflow.b-cdn.net/paniit/dignitaries%20pictures/Sri%20S.%20Krishnan%20Secretary%2C%20Ministry%20of%20Electronics%20and%20Information%20Technology.png',
    name: 'Sri S. Krishnan, IAS',
    role: 'Secretary',
    org: 'Ministry of Electronics and IT'
  },
  {
    image: 'https://wabflow.b-cdn.net/paniit/dignitaries%20pictures/IAS%20Vishwanadhan%20-%20Director%2C%20I%26PR.webp',
    name: 'Sri Vishwanadhan, IAS',
    role: 'Director',
    org: 'I&PR'
  },
  {
    image: 'https://wabflow.b-cdn.net/paniit/dignitaries%20pictures/IAS%20Kantilal%20Dande%20-%20Principal%20Secretary.jpeg',
    name: 'Sri Kantilal Dande, IAS',
    role: 'Principal Secretary',
    org: 'Government of Andhra Pradesh'
  },
  {
    image: 'https://wabflow.b-cdn.net/paniit/dignitaries%20pictures/IAS%20Krishna%20Teja%20-%20Commissioner%2C%20Panchayati%20Raj.jpeg',
    name: 'Sri Krishna Teja, IAS',
    role: 'Commissioner',
    org: 'Panchayati Raj'
  },
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
  }
];

const KEY_GUESTS = [
  { image: 'https://wabflow.b-cdn.net/paniit/dignitaries%20pictures/Prof.%20V.%20Kamakoti%20Director%2C%20IIT%20Madras.jpg', name: 'Prof. V. Kamakoti', role: 'Director\nIIT Madras' },
  { image: 'https://wabflow.b-cdn.net/paniit/dignitaries%20pictures/Prof.%20Satyamnarayana_%20IIT%20Tirupathi%20director.jpeg', name: 'Prof.\nK N Satyamnarayana', role: 'Director\nIIT Tirupati' },
  { image: 'https://wabflow.b-cdn.net/paniit/dignitaries%20pictures/Prof.%20Budaraju%20Srinivasa%20Murty_%20IITH%20director.jpeg', name: 'Prof.\nB. S. Murthy', role: 'Director\nIIT Hyderabad' },
  { image: 'https://wabflow.b-cdn.net/paniit/dignitaries%20pictures/Prof.%20%20Sukumar%20Mishra%20Director%20%20IIT%20%20(ISM)%20Dhanbad.jpg', name: 'Prof.\nSukumar Mishra', role: 'Director\nIIT (ISM) Dhanbad' },
  { image: 'https://wabflow.b-cdn.net/paniit/dignitaries%20pictures/prof%20a%20seshadri%20sekhar%20director%20iit%20palakkad-Picsart-AiImageEnhancer.jpg', name: 'Dr. A. Seshadri Sekhar', role: 'Director\nIIT Palakkad' },
  { image: 'https://wabflow.b-cdn.net/paniit/dignitaries%20pictures/Prof.%20Suhas%20Joshi%2C%20Director%2C%20IIT%20Indore.jpg', name: 'Prof. Suhas Joshi', role: 'Director\nIIT Indore' },
  { image: PLACEHOLDER, name: 'Prof.\nShalivahan', role: 'Director, Indian Institute of\nPetroleum & Energy, Vizag' },
  { image: PLACEHOLDER, name: 'Prof. Balaram\nRavindran', role: 'Head of Department of Data Science\nand AI at IIT Madras, WSAI, RBCDSAI &\nCeRAI at IIT Madras.' },
  { image: 'https://wabflow.b-cdn.net/paniit/dignitaries%20pictures/Prof.%20Arun%20Tangirala.jpg', name: 'Prof. Arun Tangirala', role: 'Dean, CDO, PI, AI Based Agritech\nIIT Tirupati' }
];

const INDUSTRY_LEADERS = [
  { image: 'https://wabflow.b-cdn.net/paniit/dignitaries%20pictures/Sri%20Ajai%20Chowdhry%2C%20Co-founder%20HCL.jpg', name: 'Sri Ajai Chowdhry', role: 'Co-founder\nHCL' },
  { image: 'https://wabflow.b-cdn.net/paniit/dignitaries%20pictures/DR%20SURESH%20PODE%20%2C%20President%2C%20LAURUS%20LABS.jpeg', name: 'Dr. Suresh Pode', role: 'President\nLaurus Labs' },
  { image: 'https://wabflow.b-cdn.net/paniit/dignitaries%20pictures/LALIT%20AGARWAL.jpg', name: 'Sri Lalit Agarwal', role: 'India Head\nSchlumberger India' },
  { image: 'https://wabflow.b-cdn.net/paniit/dignitaries%20pictures/Sri%20Yaram%20Vijay%20%20Kumar.jpg', name: 'Sri Yaram Vijay\nKumar', role: 'India MD\nHoneywell Aerospace' },
  { image: 'https://wabflow.b-cdn.net/paniit/dignitaries%20pictures/Hitesh%20Garg%20(India%20MD)%20NXP_Semiconductors.jpg', name: 'Sri Hitesh Garg', role: 'India MD\nNXP Semiconductors' },
  { image: PLACEHOLDER, name: 'Arun Ramchandani', role: 'Sr Vice President &\nHead, L&T - Precision Engineering &\nSystems' },
  { image: 'https://wabflow.b-cdn.net/paniit/dignitaries%20pictures/Sri%20Amit%20Singhee.jpg', name: 'Sri Amit Singhee', role: 'Director, IBM Research India & IBM\nSoftware Innovation Lab; CTO, IBM\nIndia & South Asia.' },
  { image: "https://wabflow.b-cdn.net/paniit/dignitaries%20pictures/C%20V%20Sridhar_%20Director%20of%20the%20Andhra%20Pradesh%20State%20Quantum%20Mission%20(APSQM).jpeg", name: 'Sri C Sridhar', role: 'Director of the Andhra Pradesh State\nQuantum Mission (APSQM) and the\nAmaravati Quantum Valley' },
  { image: "https://wabflow.b-cdn.net/paniit/dignitaries%20pictures/Dr.%20Giridhar%20Parvatam.jpg", name: 'Dr. Giridhar\nParvatam', role: 'Head, CFTRI' },
  { image: PLACEHOLDER, name: 'Dr. Jitendra\nSharma', role: 'CEO, AMTZ' },
  { image: PLACEHOLDER, name: 'Sri Ankit Todi', role: 'Chief Sustainability Officer\nMahindra Group' },
  { image: 'https://wabflow.b-cdn.net/paniit/dignitaries%20pictures/Sheshagiri%20Rao%20IIT%20M%20%2C%20CEO(%20X)%20HAL%20NASIK.jpeg', name: 'Sri BH. V. Seshagiri\nRao', role: 'CEO( MC) Retd, HAL, NASIK' },
  { image: PLACEHOLDER, name: 'Sri Shekar Reddy', role: 'CMD\nCrux Biotech & SRI CHAKRA' },
  { image: PLACEHOLDER, name: 'Sri Ram Bandi', role: 'Founder & CEO\nStyrax Instruments India Pvt Ltd\nHyderabad' },
  { image: PLACEHOLDER, name: 'Dr. Vidhya Sagar', role: 'FCMD, Avantel' }
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
      <div className="absolute inset-[-15%] bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 blur-2xl rounded-full transition-opacity duration-300 pointer-events-none" />
      <img 
        src={speaker.image || PLACEHOLDER} 
        alt={speaker.name} 
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
      
      {/* Chief Guest */}
      <div className="py-20 border-b border-gray-100 relative overflow-hidden ">
        <div className="container mx-auto px-4">
          <SectionTitle title="Chief Guest" />
          <div className="max-w-2xl mx-auto flex flex-col items-center">
            <div className="flex flex-col items-center text-center group p-8 md:p-12 rounded-[40px] hover:bg-white transition-all duration-300 relative">
              <div className="absolute inset-0 rounded-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" 
                   style={{ boxShadow: '0 20px 60px -15px rgba(99, 102, 241, 0.5)' }} />
                   
              <div className="relative w-64 h-64 md:w-80 md:h-80 mb-8 group-hover:-translate-y-2 transition-transform duration-300">
                <div className="absolute inset-[-15%] bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 blur-3xl rounded-full transition-opacity duration-300 pointer-events-none" />
                <img src={CHIEF_GUEST.image} alt={CHIEF_GUEST.name} className="w-full h-full object-cover rounded-full relative z-10 bg-white border border-gray-100 shadow-xl" />
              </div>
              <h3 className="text-2xl md:text-4xl font-bold text-[#06206A] mb-2 relative z-10 group-hover:text-indigo-600 transition-colors">{CHIEF_GUEST.name}</h3>
              <p className="text-lg md:text-xl text-gray-500 relative z-10 font-medium">
                {CHIEF_GUEST.role}<br/>{CHIEF_GUEST.org}
              </p>
              <p className="mt-6 text-sm md:text-base text-gray-400 italic font-medium max-w-2xl mx-auto relative z-10">
                {CHIEF_GUEST.desc}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Guest of Honour */}
      <div className="py-20 border-b border-gray-100 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <SectionTitle title="Guest of Honour" />
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {GUESTS_OF_HONOUR.map((guest, i) => (
              <div key={i} className="flex flex-col items-center text-center group p-6 md:p-8 rounded-3xl hover:bg-white transition-all duration-300 relative">
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" 
                     style={{ boxShadow: '0 15px 50px -15px rgba(99, 102, 241, 0.4)' }} />
                     
                <div className="relative w-40 h-40 md:w-56 md:h-56 mb-6 group-hover:-translate-y-2 transition-transform duration-300">
                  <div className="absolute inset-[-15%] bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 blur-2xl rounded-full transition-opacity duration-300 pointer-events-none" />
                  <img src={guest.image} alt={guest.name} className="w-full h-full object-cover rounded-full relative z-10 bg-white border border-gray-100 shadow-md" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#06206A] mb-2 relative z-10 group-hover:text-indigo-600 transition-colors">{guest.name}</h3>
                <p className="text-sm md:text-base text-gray-500 relative z-10 whitespace-pre-line font-medium">
                  {guest.role}<br/>{guest.org}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

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
                  <div className="absolute inset-[-15%] bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 blur-2xl rounded-full transition-opacity duration-300 pointer-events-none" />
                  <img src={guest.image} alt={guest.name} className="w-full h-full object-cover rounded-full relative z-10 bg-white border border-gray-100 shadow-md" />
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
          <SectionTitle title="Key Guests and Speakers" />
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
