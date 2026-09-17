import Navbar from '@/components/sections/Navbar';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Dignitaries from '@/components/sections/Dignitaries';
import Engagement from '@/components/sections/Engagement';
import VisionMission from '@/components/sections/VisionMission';
import AdvantageLegacy from '@/components/sections/AdvantageLegacy';
import Highlights from '@/components/sections/Highlights';
import Speakers from '@/components/sections/Speakers';
import PastEminentSpeakers from '@/components/sections/PastEminentSpeakers';
import Schedule from '@/components/sections/Schedule';
import Glimpses from '@/components/sections/Glimpses';
import PastSponsors from '@/components/sections/PastSponsors';
import OurPartners from '@/components/sections/OurPartners';
import Committee from '@/components/sections/Committee';
import EventDetails from '@/components/sections/EventDetails';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="bg-paper text-[#171717] min-h-screen selection:bg-[#06206A]/15 selection:text-[#06206A]">
      <Navbar />
      <Hero />
      <About />
      <Dignitaries />
      <Engagement />
      <VisionMission />
      <AdvantageLegacy />
      <Schedule />
      <Speakers />
      <PastEminentSpeakers />
      <Highlights />
      <Glimpses />
      <PastSponsors />
      <OurPartners />
      <Committee />
      <EventDetails />
      <Footer />
    </main>
  );
}
