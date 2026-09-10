'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { type SudokuPuzzle } from '@/lib/sudokuData';
import GhostFibers from '@/components/GhostFibers';

interface SudokuGameProps {
  puzzle: SudokuPuzzle;
}

export default function SudokuGame({ puzzle }: SudokuGameProps) {
  // Store the grid in state.
  const [grid, setGrid] = useState<(number | null)[][]>(puzzle.initialGrid.map(row => [...row]));
  const [selectedCell, setSelectedCell] = useState<[number, number] | null>(null);
  const [isSolved, setIsSolved] = useState(false);

  // Deep check if game is solved
  const checkWin = (currentGrid: (number | null)[][]) => {
    // Check if fully filled
    for (let r = 0; r < 9; r++) {
      for (let c = 0; c < 9; c++) {
        if (currentGrid[r][c] === null) return false;
      }
    }

    // Check rows and columns
    for (let i = 0; i < 9; i++) {
      const rowSet = new Set();
      const colSet = new Set();
      for (let j = 0; j < 9; j++) {
        const rowVal = currentGrid[i][j];
        const colVal = currentGrid[j][i];
        if (rowSet.has(rowVal) || colSet.has(colVal)) return false;
        rowSet.add(rowVal);
        colSet.add(colVal);
      }
    }

    // Check 3x3 boxes
    for (let boxRow = 0; boxRow < 3; boxRow++) {
      for (let boxCol = 0; boxCol < 3; boxCol++) {
        const boxSet = new Set();
        for (let r = 0; r < 3; r++) {
          for (let c = 0; c < 3; c++) {
            const val = currentGrid[boxRow * 3 + r][boxCol * 3 + c];
            if (boxSet.has(val)) return false;
            boxSet.add(val);
          }
        }
      }
    }
    
    return true;
  };

  const handleNumberInput = useCallback((num: number | null) => {
    if (!selectedCell || isSolved) return;
    const [r, c] = selectedCell;

    // Don't modify initial given numbers
    if (puzzle.initialGrid[r][c] !== null) return;

    const newGrid = grid.map(row => [...row]);
    newGrid[r][c] = num;
    setGrid(newGrid);

    if (checkWin(newGrid)) {
      setIsSolved(true);
    }
  }, [selectedCell, isSolved, grid, puzzle.initialGrid]);

  // Keyboard support for those on desktop (though optimized for phone)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key >= '1' && e.key <= '9') {
        handleNumberInput(parseInt(e.key));
      } else if (e.key === 'Backspace' || e.key === 'Delete') {
        handleNumberInput(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedCell, isSolved, grid, handleNumberInput]);

  return (
    <div className="relative w-full min-h-screen bg-[#070514] text-white flex flex-col items-center justify-start pt-8 pb-12 px-4 overflow-x-hidden">
      {/* Background Component */}
      <div className="absolute inset-0 z-0">
        <GhostFibers
          lineColor="#ffb6c1"
          glowColor="#ff69b4"
          speed={0.15}
          scale={2.5}
          rotation={0}
          layers={3}
          waveAmplitude={0.01}
          twist={0.1}
          twistFrequency={2}
          glowFalloff={14}
          glowIntensity={1.5}
          brightness={2}
          blueBoost={1.2}
          vignette={0.8}
        />
      </div>

      <div className="relative z-10 w-full max-w-sm flex flex-col items-center space-y-6">
        <div className="w-full flex items-center justify-between">
          <Link href="/samiya/sudoku" className="text-pink-300 hover:text-white transition-colors flex items-center gap-1 bg-white/10 px-3 py-1.5 rounded-full backdrop-blur-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium">Back</span>
          </Link>
          <div className="text-right">
            <h2 className="text-xl font-bold text-white drop-shadow-md">{puzzle.name}</h2>
            <p className="text-xs text-pink-300 uppercase tracking-widest">{puzzle.difficulty}</p>
          </div>
        </div>

        {isSolved && (
          <div className="w-full bg-green-500/20 border border-green-500/50 backdrop-blur-md text-green-100 p-4 rounded-xl text-center shadow-[0_0_15px_rgba(34,197,94,0.3)] animate-pulse">
            <p className="font-bold text-lg">You did it! ❤️</p>
            <p className="text-sm opacity-90 mt-1">Brilliant as always.</p>
          </div>
        )}

        {/* Sudoku Board */}
        <div className="w-full aspect-square bg-white/5 backdrop-blur-md border-[3px] border-pink-400/60 rounded-xl p-1 shadow-[0_0_30px_rgba(255,105,180,0.15)] flex flex-col">
          {grid.map((row, r) => (
            <div key={r} className="flex flex-1">
              {row.map((cell, c) => {
                const isGiven = puzzle.initialGrid[r][c] !== null;
                const isSelected = selectedCell?.[0] === r && selectedCell?.[1] === c;
                
                // Styling borders for 3x3 grid separation
                const borderRight = c % 3 === 2 && c !== 8 ? 'border-r-2 border-pink-400/40' : 'border-r border-white/10';
                const borderBottom = r % 3 === 2 && r !== 8 ? 'border-b-2 border-pink-400/40' : 'border-b border-white/10';
                const borderTop = r === 0 ? '' : '';
                const borderLeft = c === 0 ? '' : '';

                return (
                  <div
                    key={`${r}-${c}`}
                    onClick={() => setSelectedCell([r, c])}
                    className={`
                      flex-1 flex items-center justify-center text-lg sm:text-xl font-medium transition-colors
                      ${borderRight} ${borderBottom} ${borderTop} ${borderLeft}
                      ${isSelected ? 'bg-pink-500/40' : ''}
                      ${!isGiven && !isSelected ? 'hover:bg-white/10' : ''}
                      ${isGiven ? 'text-white bg-black/20' : 'text-pink-200 cursor-pointer'}
                      ${!isGiven && cell !== null && !isSelected ? 'text-pink-100' : ''}
                    `}
                  >
                    {cell !== null ? cell : ''}
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        {/* Numpad */}
        <div className="w-full grid grid-cols-5 gap-2 mt-2">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
            <button
              key={num}
              onClick={() => handleNumberInput(num)}
              className="bg-white/10 hover:bg-white/20 active:bg-pink-500/50 backdrop-blur-md border border-white/10 rounded-lg py-4 text-xl font-bold text-white transition-all transform active:scale-95 shadow-sm"
            >
              {num}
            </button>
          ))}
          <button
            onClick={() => handleNumberInput(null)}
            className="bg-white/5 hover:bg-white/10 active:bg-red-500/40 backdrop-blur-md border border-white/10 rounded-lg py-4 text-sm font-bold text-pink-200 transition-all transform active:scale-95 flex items-center justify-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z" />
            </svg>
          </button>
        </div>
        
      </div>
    </div>
  );
}
