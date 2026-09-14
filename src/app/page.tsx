import Navbar from '@/components/sections/Navbar';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import VisionMission from '@/components/sections/VisionMission';
import AdvantageLegacy from '@/components/sections/AdvantageLegacy';
import Highlights from '@/components/sections/Highlights';
import Speakers from '@/components/sections/Speakers';
import PastEminentSpeakers from '@/components/sections/PastEminentSpeakers';
import Sponsors from '@/components/sections/Sponsors';
import Schedule from '@/components/sections/Schedule';
import Partnership from '@/components/sections/Partnership';
import Glimpses from '@/components/sections/Glimpses';
import Committee from '@/components/sections/Committee';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen selection:bg-blue-500/30 selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <VisionMission />
      <AdvantageLegacy />
      <Schedule />
      <Speakers />
      <PastEminentSpeakers />
      <Sponsors />
      <Highlights />
      <Partnership />
      <Glimpses />
      <Committee />
      <Footer />
    </main>
  );
}
