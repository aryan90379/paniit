export type SpeakerSource = 'panel' | 'roundtable' | 'both';
export type WebsiteSection = 'distinguished' | 'industry' | 'emerging' | 'investors';

export interface PreparedSpeaker {
  name: string;
  role: string;
  org: string;
  image: string;
  imageFocus?: string;
  listed?: boolean;
  source: SpeakerSource;
  section: WebsiteSection;
}

export const NEW_SPEAKERS: PreparedSpeaker[] = [
  {
    name: 'Sri K. Vijayanand, IAS',
    role: 'Former Chief Secretary and current Ex-Officio Special Chief Secretary, Energy',
    org: 'Government of Andhra Pradesh',
    image: 'https://d3liyurciwi0wb.cloudfront.net/speakers/k-vijayanand.jpg',
    imageFocus: 'object-[center_22%]',
    source: 'both',
    section: 'distinguished',
  },
  {
    name: 'Sri Bhaskar Katamneni, IAS',
    role: 'Secretary, ITE&C Department',
    org: 'Government of Andhra Pradesh',
    image: 'https://d3liyurciwi0wb.cloudfront.net/speakers/bhaskar-katamneni.jpg',
    source: 'panel',
    section: 'distinguished',
  },
  {
    name: 'Dr. R. Balamurali Krishnan',
    role: 'Director General',
    org: 'NSTL / DRDO',
    image: 'https://d3liyurciwi0wb.cloudfront.net/speakers/r-balamurali-krishnan.jpg',
    source: 'panel',
    section: 'distinguished',
  },
  {
    name: 'Dr. N. Yuvaraj, IAS',
    role: 'Secretary to Government for the Industries & Commerce and Food Processing Department',
    org: 'Government of Andhra Pradesh',
    image: 'https://d3liyurciwi0wb.cloudfront.net/speakers/n-yuvaraj.jpg',
    source: 'both',
    section: 'distinguished',
  },
  {
    name: 'Dr. Narayana Bharath Gupta, IAS',
    role: 'Commissioner, Higher Education',
    org: 'Government of Andhra Pradesh',
    image: 'https://d3liyurciwi0wb.cloudfront.net/speakers/narayana-bharath-gupta.jpg',
    source: 'panel',
    section: 'distinguished',
  },
  {
    name: 'Dr. P. Dhatri Reddy, IAS',
    role: 'CEO',
    org: 'Ratan Tata Innovation Hub',
    image: 'https://d3liyurciwi0wb.cloudfront.net/speakers/p-dhatri-reddy.png',
    source: 'roundtable',
    section: 'distinguished',
  },
  {
    name: 'Sri Vishwesha Manoharan',
    role: 'CEO',
    org: 'MSME Development Corporation',
    image: 'https://d3liyurciwi0wb.cloudfront.net/speakers/vishwesha-manoharan.jpg',
    imageFocus: 'object-[center_22%]',
    source: 'roundtable',
    section: 'distinguished',
  },
  {
    name: 'Shri J. Shyamala Rao, IAS',
    role: 'Special Chief Secretary, Higher Education',
    org: 'Government of Andhra Pradesh',
    image: 'https://d3liyurciwi0wb.cloudfront.net/speakers/j-shyamala-rao.jpg',
    source: 'roundtable',
    section: 'distinguished',
  },
  {
    name: 'Dr. Purushotham Hanumanthu',
    role: 'Secretary, Science, Technology & Innovation',
    org: 'Government of Andhra Pradesh',
    image: 'https://d3liyurciwi0wb.cloudfront.net/speakers/hanumanthu-purushotham.jpg',
    source: 'roundtable',
    section: 'distinguished',
  },
  {
    name: 'Ms. Yolynd Lobo',
    role: 'Director, Gov Affairs & Public Policy',
    org: 'Google India',
    image: 'https://d3liyurciwi0wb.cloudfront.net/speakers/yolynd-lobo.jpg',
    source: 'panel',
    section: 'industry',
  },
  {
    name: 'Dr. Suraj Rengarajan',
    role: 'Principal Technologist',
    org: 'Applied Materials',
    image: 'https://d3liyurciwi0wb.cloudfront.net/speakers/suraj-rengarajan.png',
    source: 'both',
    section: 'industry',
  },
  {
    name: 'Sri Deepak Sharma',
    role: 'MD & CEO',
    org: 'Schneider Electric India',
    image: 'https://d3liyurciwi0wb.cloudfront.net/speakers/deepak-sharma.jpg',
    source: 'roundtable',
    section: 'industry',
  },
  {
    name: 'Sri Mallik Tatipamula',
    role: 'CTO',
    org: 'Ericsson Silicon Valley',
    image: 'https://d3liyurciwi0wb.cloudfront.net/speakers/mallik-tatipamula.jpg',
    source: 'roundtable',
    section: 'industry',
  },
  {
    name: 'Smt. Suchitra Ella',
    role: 'Co-Founder & GMD',
    org: 'Bharat Biotech',
    image: 'https://d3liyurciwi0wb.cloudfront.net/speakers/suchitra-ella.jpg',
    source: 'roundtable',
    section: 'industry',
  },
  {
    name: 'Smt. Shweta Rai',
    role: 'India CEO',
    org: 'Bayer',
    image: 'https://d3liyurciwi0wb.cloudfront.net/speakers/shweta-rai.jpg',
    source: 'roundtable',
    section: 'industry',
  },
  {
    name: 'Sri Aditya Kandoi',
    role: 'Founder & CEO',
    org: 'RedCliffe Labs',
    image: 'https://d3liyurciwi0wb.cloudfront.net/speakers/aditya-kandoi.png',
    source: 'panel',
    section: 'emerging',
  },
  {
    name: 'Sri Anil Kumar S.G.',
    role: 'Founder & Chairman',
    org: 'Samunnati',
    image: 'https://d3liyurciwi0wb.cloudfront.net/speakers/anil-kumar-sg.jpg',
    source: 'panel',
    section: 'emerging',
  },
  {
    name: 'Sri T.C. Meenakshisundaram',
    role: 'Founder & Vice Chairman',
    org: 'Chiratae Ventures',
    image: 'https://d3liyurciwi0wb.cloudfront.net/speakers/tc-meenakshisundaram.png',
    imageFocus: 'object-[center_22%]',
    source: 'roundtable',
    section: 'investors',
  },
  {
    name: 'Sri Sudhir Rao',
    role: 'Managing Partner',
    org: 'Celesta Capital',
    image: 'https://d3liyurciwi0wb.cloudfront.net/speakers/sudhir-rao.jpg',
    source: 'roundtable',
    section: 'investors',
  },
  {
    name: 'Sri Karthik Reddy',
    role: 'Co-Founder & Managing Partner',
    org: 'Blume Ventures',
    image: 'https://d3liyurciwi0wb.cloudfront.net/speakers/karthik-reddy.jpg',
    source: 'roundtable',
    section: 'investors',
  },
  {
    name: 'Sri Vishesh Rajaram',
    role: 'Founding Partner',
    org: 'Speciale Invest',
    image: 'https://d3liyurciwi0wb.cloudfront.net/speakers/vishesh-rajaram.jpg',
    imageFocus: 'object-[center_22%]',
    source: 'roundtable',
    section: 'investors',
  },
  {
    name: 'Sri Manu Iyer',
    role: 'General Partner',
    org: 'Bluehill VC',
    image: 'https://d3liyurciwi0wb.cloudfront.net/speakers/manu-iyer.jpg',
    source: 'roundtable',
    section: 'investors',
  },
  {
    name: 'Sri Pankaj Raina',
    role: 'Managing Director',
    org: 'Zephyr Peacock',
    image: 'https://d3liyurciwi0wb.cloudfront.net/speakers/pankaj-raina.jpg',
    source: 'roundtable',
    section: 'investors',
  },
  {
    name: 'Smt. Vani Kola',
    role: 'Founder and MD',
    org: 'Kalaari Capital',
    image: 'https://d3liyurciwi0wb.cloudfront.net/speakers/vani-kola.png',
    source: 'roundtable',
    section: 'investors',
  },
  {
    name: 'Smt. Anjali Bansal',
    role: 'Founder & Partner',
    org: 'Avaana Capital',
    image: 'https://d3liyurciwi0wb.cloudfront.net/speakers/anjali-bansal.jpg',
    source: 'roundtable',
    section: 'investors',
  },
  {
    name: 'Sri Ashish Taneja',
    role: 'Founding Partner & CEO',
    org: 'GrowX Ventures',
    image: 'https://d3liyurciwi0wb.cloudfront.net/speakers/ashish-taneja.jpg',
    source: 'roundtable',
    section: 'investors',
  },
  {
    name: 'Sri Mayuresh Raut',
    role: 'Co-Founder & Managing Partner',
    org: 'Seafund',
    image: 'https://d3liyurciwi0wb.cloudfront.net/speakers/mayuresh-raut.jpg',
    source: 'roundtable',
    section: 'investors',
  },
  {
    name: 'Sri Sharad Bansal',
    role: 'Founding Partner',
    org: 'Warmup Ventures',
    image: 'https://d3liyurciwi0wb.cloudfront.net/speakers/sharad-bansal.png',
    source: 'roundtable',
    section: 'investors',
  },
];

export const speakersBySection = (section: WebsiteSection) =>
  NEW_SPEAKERS.filter((speaker) => speaker.section === section && speaker.listed !== false);

export const speakerRoleLine = (speaker: PreparedSpeaker) =>
  speaker.org ? `${speaker.role}\n${speaker.org}` : speaker.role;
