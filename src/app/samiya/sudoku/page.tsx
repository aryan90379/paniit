'use client';

import Link from 'next/link';
import GhostFibers from '@/components/GhostFibers';
import { puzzles } from '@/lib/sudokuData';

export default function SudokuMenu() {
  return (
    <div className="relative w-full min-h-screen bg-[#070514] text-white overflow-hidden flex flex-col items-center justify-center p-6">
      {/* Background Component */}
      <div className="absolute inset-0 z-0">
        <GhostFibers
          lineColor="#ffb6c1"
          glowColor="#ff69b4"
          speed={0.3}
          scale={2}
          rotation={0}
          layers={5}
          waveAmplitude={0.02}
          twist={0.15}
          twistFrequency={3}
          glowFalloff={12}
          glowIntensity={2}
          brightness={2.5}
          blueBoost={1.5}
          vignette={0.7}
        />
      </div>

      <div className="relative z-10 max-w-md w-full flex flex-col items-center space-y-8">
        <div className="text-center space-y-4 bg-black/40 p-6 rounded-3xl backdrop-blur-sm border border-white/10 shadow-2xl">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-400 drop-shadow-sm">
            Hey Samiya ❤️
          </h1>
          <p className="text-pink-100/90 text-lg leading-relaxed font-medium">
            I made this little Sudoku collection just for you. Take your pick and have fun!
          </p>
        </div>

        <div className="w-full grid gap-4">
          {puzzles.map((puzzle) => (
            <Link
              href={`/samiya/sudoku/${puzzle.id}`}
              key={puzzle.id}
              className="block group"
            >
              <div className="bg-black/40 hover:bg-black/60 transition-all duration-300 p-5 rounded-2xl border border-white/10 hover:border-pink-400/50 backdrop-blur-md shadow-[0_0_15px_rgba(0,0,0,0.5)] transform hover:-translate-y-1">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-xl font-bold text-white group-hover:text-pink-100 drop-shadow-md">
                      {puzzle.name}
                    </h2>
                    <span className="text-sm font-bold text-pink-300 uppercase tracking-wider mt-1 block drop-shadow-sm">
                      {puzzle.difficulty}
                    </span>
                  </div>
                  <div className="text-pink-300 opacity-60 group-hover:opacity-100 transition-opacity">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
