'use client';

import { motion } from 'framer-motion';

const PLACEHOLDER = "https://img.magnific.com/free-photo/close-up-portrait-young-bearded-man-white-shirt-jacket-posing-camera-with-broad-smile-isolated-gray_171337-629.jpg?semt=ais_hybrid&w=740&q=80";

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
    <h2 className="text-3xl md:text-5xl font-black text-[#153063] uppercase tracking-wide text-center">
      {title}
    </h2>
    <div className="w-16 h-1.5 bg-[#E13926] mt-4"></div>
  </div>
);

const SpeakerCard = ({ speaker }: { speaker: any }) => (
  <div className="flex flex-col bg-white h-full shadow-md hover:shadow-xl transition-shadow duration-300">
    <div className="aspect-[4/5] w-full relative overflow-hidden bg-[#e6ebf5]">
      <div className="absolute inset-0 bg-gradient-to-t from-[#153063]/40 via-transparent to-transparent z-10 mix-blend-multiply pointer-events-none" />
      <img src={speaker.image} alt={speaker.name} className="w-full h-full object-cover object-top relative z-0" />
    </div>
    <div className="bg-white pt-4 pb-6 px-4 border-b-[4px] border-[#153063] flex-grow flex flex-col justify-start">
      <h3 className="text-lg font-black text-[#153063] leading-tight whitespace-pre-line">{speaker.name}</h3>
      <div className="w-8 h-0.5 bg-[#E13926] mt-3 mb-3"></div>
      <p className="text-[0.65rem] md:text-xs font-bold text-[#153063] uppercase leading-relaxed whitespace-pre-line tracking-wide opacity-90">
        {speaker.role}
      </p>
    </div>
  </div>
);

export default function Speakers() {
  return (
    <section id="speakers" className="bg-white relative">
      
      {/* Chief Guest */}
      <div className="py-20 border-b border-gray-100 relative overflow-hidden bg-gradient-to-b from-white to-[#fff9f0]">
        <div className="container mx-auto px-4">
          <SectionTitle title="Chief Guest" />
          <div className="max-w-2xl mx-auto flex flex-col items-center">
            <div className="w-64 md:w-96 aspect-square relative mb-8">
              <div className="absolute inset-0 bg-[#fde68a] blur-[60px] opacity-40 rounded-full" />
              <img src={CHIEF_GUEST.image} alt={CHIEF_GUEST.name} className="w-full h-full object-cover relative z-10 drop-shadow-xl" />
            </div>
            <div className="text-center bg-white w-full border-t-[4px] border-[#f59e0b] shadow-xl p-8 -mt-20 relative z-20">
              <h3 className="text-2xl md:text-4xl font-bold text-[#153063] mb-2">{CHIEF_GUEST.name}</h3>
              <div className="w-16 h-1 bg-[#E13926] mx-auto mt-4 mb-4"></div>
              <p className="text-xl md:text-2xl text-[#153063] leading-tight font-medium">
                {CHIEF_GUEST.role}<br/>{CHIEF_GUEST.org}
              </p>
              <p className="mt-8 text-sm md:text-base text-[#e67e22] italic font-medium max-w-lg mx-auto">
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
          <div className="flex flex-wrap justify-center gap-12 md:gap-20">
            {GUESTS_OF_HONOUR.map((guest, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="w-full max-w-[300px] aspect-square relative mb-6">
                  <div className="absolute inset-0 bg-[#fde68a] blur-[50px] opacity-30 rounded-full" />
                  <img src={guest.image} alt={guest.name} className="w-full h-full object-cover relative z-10 shadow-lg" />
                </div>
                <div className="w-full max-w-[350px] border-b-[4px] border-[#f59e0b] pb-6 px-2 flex flex-col items-center">
                  <h3 className="text-xl md:text-2xl font-bold text-[#153063] mb-3">{guest.name}</h3>
                  <div className="w-8 h-0.5 bg-[#E13926] mb-3"></div>
                  <p className="text-sm md:text-base text-[#153063] font-bold whitespace-pre-line leading-snug">
                    {guest.role}<br/>{guest.org}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Distinguished Guests */}
      <div className="py-20 border-b border-gray-100 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <SectionTitle title="Distinguished Guests" />
          <div className="flex flex-wrap justify-center gap-12 md:gap-20">
            {DISTINGUISHED_GUESTS.map((guest, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="w-full max-w-[300px] aspect-square relative mb-6">
                  <div className="absolute inset-0 bg-[#fde68a] blur-[50px] opacity-30 rounded-full" />
                  <img src={guest.image} alt={guest.name} className="w-full h-full object-cover relative z-10 shadow-lg" />
                </div>
                <div className="w-full max-w-[350px] border-b-[4px] border-[#f59e0b] pb-6 px-2 flex flex-col items-center">
                  <h3 className="text-xl md:text-2xl font-bold text-[#153063] mb-3">{guest.name}</h3>
                  <div className="w-8 h-0.5 bg-[#E13926] mb-3"></div>
                  <p className="text-sm md:text-base text-[#153063] font-bold whitespace-pre-line leading-snug">
                    {guest.role}
                  </p>
                </div>
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
      <div className="py-24 bg-[#fafbfc]">
        <div className="container mx-auto px-4 max-w-6xl">
          <SectionTitle title="Industry Leaders" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-12 md:gap-x-8 md:gap-y-16">
            {INDUSTRY_LEADERS.map((speaker, i) => (
              <SpeakerCard key={i} speaker={speaker} />
            ))}
            <div className="flex flex-col justify-center items-center h-full min-h-[250px] border-b-[4px] border-[#153063] bg-white shadow-md">
              <div className="text-xl md:text-2xl font-black text-[#153063]">+ Many More</div>
              <div className="w-12 h-1 bg-[#E13926] mt-4"></div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
