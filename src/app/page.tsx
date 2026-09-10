import AeroShards from '@/components/AeroShards';

export default function Home() {
  return (
    <main className="relative w-full h-screen bg-[#120F17] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <AeroShards
          backgroundColor="#120F17"
          shardColor="#896ABD"
          accentColor="#A855F7"
          placement="full"
          flow="stream"
          material="pearl"
          detail="balanced"
          effect="none"
          scale={1}
          spread={1}
          depth={1}
          speed={1}
          spin={1}
          interaction="repel"
          density={1.5}
          shardSize={1.1}
          stretch={1}
          turbulence={1}
          glow={1}
          edgeSoftness={2}
          bloom={0.5}
          grain={0.05}
          chromaticAberration={0.0075}
          transitionDuration={1}
          interactionRadius={1.5}
          interactionStrength={0.5}
          rippleIntensity={1}
          holdToGather
          paused={false}
        />
      </div>
      <div className="z-10 text-center pointer-events-none">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight drop-shadow-lg">
          Welcome to Pan IIT
        </h1>
        <p className="text-xl md:text-2xl text-purple-200 opacity-80">
          Website coming soon
        </p>
      </div>
    </main>
  );
}
