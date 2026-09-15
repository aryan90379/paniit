'use client';

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

const SectionTitle = ({ title }: { title: string }) => (
  <div className="flex flex-col items-center mb-16 pt-12">
    <h2 className="text-3xl md:text-5xl font-black text-[#06206A] uppercase tracking-wide text-center">
      {title}
    </h2>
    <div className="w-16 h-1.5 bg-[#DD1D21] mt-4"></div>
  </div>
);

export default function Dignitaries() {
  return (
    <section className="bg-white relative">

      {/* Chief Guest */}
      <div className="py-20 border-b border-gray-100 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <SectionTitle title="Chief Guest" />
          <div className="max-w-2xl mx-auto flex flex-col items-center">
            <div className="flex flex-col items-center text-center group p-8 md:p-12 rounded-[40px] hover:bg-white transition-all duration-300 relative">
              <div className="absolute inset-0 rounded-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                   style={{ boxShadow: '0 20px 60px -15px rgba(99, 102, 241, 0.5)' }} />
              <div className="relative w-64 h-64 md:w-80 md:h-80 mb-8 group-hover:-translate-y-2 transition-transform duration-300">
                <div className="absolute inset-[-15%] bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 blur-xl rounded-full transition-opacity duration-300 pointer-events-none" />
                <img src={CHIEF_GUEST.image} alt={CHIEF_GUEST.name} loading="lazy" decoding="async" className="w-full h-full object-cover rounded-full relative z-10 bg-white border border-gray-100 shadow-xl" />
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
                  <div className="absolute inset-[-15%] bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 blur-xl rounded-full transition-opacity duration-300 pointer-events-none" />
                  <img src={guest.image} alt={guest.name} loading="lazy" decoding="async" className="w-full h-full object-cover rounded-full relative z-10 bg-white border border-gray-100 shadow-md" />
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

    </section>
  );
}
