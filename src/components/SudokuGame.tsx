'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { type SudokuPuzzle } from '@/lib/sudokuData';

interface SudokuGameProps {
  puzzle: SudokuPuzzle;
}

const Shape = ({ className = "shape-1" }: { className?: string }) => (
  <svg className={`shape ${className}`} viewBox="0 0 200 200" fill="none">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M100 0C100 55.2285 55.2285 100 0 100C55.2285 100 100 144.772 100 200C100 144.772 144.772 100 200 100C144.772 100 100 55.2285 100 0Z"
      fill="inherit"
    />
  </svg>
);

const IconButton = ({ isRound, icon, onClick, type = "button" }: { isRound?: boolean, icon: string, onClick?: () => void, type?: "button" | "submit" | "reset" }) => {
  const iconShape = isRound ? "round" : "squared";
  return (
    <button
      type={type}
      onClick={onClick}
      className={`icon-button flex-center ${iconShape}`}
    >
      <span className="material-icons-outlined">{icon}</span>
    </button>
  );
};

const NumberBtn = ({ text, isClear, onClick }: { text: string | number, isClear?: boolean, onClick: () => void }) => {
  const type = isClear ? "clear" : "number";
  return (
    <button onClick={onClick} className={`number-button flex-center ${type}`}>
      <span className="number-text">{text}</span>
    </button>
  );
};

const Time = ({ isSolved }: { isSolved: boolean }) => {
  const [totalSeconds, setTotalSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  const toggle = () => {
    if (!isSolved) setIsActive(!isActive);
  };

  useEffect(() => {
    setIsActive(true);
  }, []);

  useEffect(() => {
    if (isSolved) {
      setIsActive(false);
    }
  }, [isSolved]);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isActive && !isSolved) {
      interval = setInterval(() => {
        setTotalSeconds((s) => s + 1);
      }, 1000);
    } else if (!isActive && interval) {
      clearInterval(interval);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, isSolved]);

  return (
    <div className="time d-flex align-items-center cursor-pointer" onClick={toggle}>
      <span className="time-text">
        {minutes < 10 ? `0${minutes}` : minutes}:
        {seconds < 10 ? `0${seconds}` : seconds}
      </span>
      <IconButton
        onClick={toggle}
        icon={isActive ? "pause" : "play_arrow"}
        isRound
      />
    </div>
  );
};

export default function SudokuGame({ puzzle }: SudokuGameProps) {
  const router = useRouter();
  
  const [puzzleObj, setPuzzleObj] = useState<{ id: number, value: string, isPreFilled: boolean }[]>([]);
  const [solutionGrid, setSolutionGrid] = useState<number[][]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const [selectedInput, setSelectedInput] = useState<number | null>(null);
  const [selectedRow, setSelectedRow] = useState(0);
  const [selectedCol, setSelectedCol] = useState(0);
  const [isSolved, setIsSolved] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    // Generate on client so it's fresh every time
    import('@/lib/sudokuGenerator').then(({ generatePuzzle }) => {
      const { initialGrid, solutionGrid } = generatePuzzle(puzzle.difficulty);
      setSolutionGrid(solutionGrid);
      const initialFlat = initialGrid.flat();
      setPuzzleObj(
        initialFlat.map((item, id) => {
          return {
            id,
            value: item !== null ? String(item) : "",
            isPreFilled: item !== null
          };
        })
      );
      setIsLoading(false);
      setIsSolved(false);
      setSelectedInput(null);
      setSelectedRow(0);
      setSelectedCol(0);
    });
  }, [puzzle.id, puzzle.difficulty]);

  const checkWin = useCallback((currentGrid: typeof puzzleObj) => {
    if (currentGrid.some(cell => cell.value === "")) return false;
    for (let i = 0; i < 81; i++) {
      const row = Math.floor(i / 9);
      const col = i % 9;
      if (currentGrid[i].value !== String(solutionGrid[row][col])) {
        return false;
      }
    }
    return true;
  }, [solutionGrid]);

  const onHandleChange = useCallback((value: string, clearValue: boolean = false) => {
    if (isSolved || selectedInput === null) return;
    const isValueValid = (/^\d+$/.test(value) && value !== "0") || clearValue;

    setPuzzleObj((prevItems) => {
      const newItems = prevItems.map((item) =>
        isValueValid && !item.isPreFilled && item.id === selectedInput
          ? {
              id: item.id,
              value: clearValue ? "" : value,
              isPreFilled: false
            }
          : item
      );
      
      if (checkWin(newItems)) {
        setIsSolved(true);
        if (typeof window !== 'undefined' && (window as any).confetti) {
          (window as any).confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 }
          });
        }
      }
      return newItems;
    });
  }, [selectedInput, checkWin, isSolved]);

  const onHandleFocus = (isPreFilled: boolean, index: number) => {
    if (!isPreFilled) {
      const currSelectedRow = Math.ceil((index + 1) / 9);
      setSelectedRow(currSelectedRow);
      setSelectedCol(index + 1 - 9 * (currSelectedRow - 1));
      setSelectedInput(index);
    }
  };

  const onHint = () => {
    if (selectedInput !== null && !isSolved) {
      const r = Math.floor(selectedInput / 9);
      const c = selectedInput % 9;
      const correctVal = String(solutionGrid[r][c]);
      onHandleChange(correctVal);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key >= '1' && e.key <= '9') {
        onHandleChange(e.key);
      } else if (e.key === 'Backspace' || e.key === 'Delete') {
        onHandleChange("", true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onHandleChange]);

  if (isLoading) {
    return (
      <div className="neumorphic-wrapper flex-center" style={{ minHeight: '100vh', flexDirection: 'column' }}>
        <h2 style={{ color: 'var(--text-color)', marginBottom: '20px' }}>Generating Puzzle...</h2>
        <div style={{ width: '50px', height: '50px', border: '5px solid #c9cde7', borderTop: '5px solid #777d9c', borderRadius: '50%', animation: 'spin 1s linear infinite' }} />
        <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  return (
    <div className="neumorphic-wrapper">
      <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js"></script>
      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600&display=swap");
        @import url("https://fonts.googleapis.com/icon?family=Material+Icons+Outlined");
      `}</style>
      <div className="neo-container">
        
        {/* Header */}
        <header className="d-flex align-items-center">
          <IconButton icon="keyboard_backspace" onClick={() => router.push('/samiya/sudoku')} />
          <div className="ml-auto">
            <IconButton icon="refresh" onClick={() => {
              setIsLoading(true);
              import('@/lib/sudokuGenerator').then(({ generatePuzzle }) => {
                const { initialGrid, solutionGrid } = generatePuzzle(puzzle.difficulty);
                setSolutionGrid(solutionGrid);
                const initialFlat = initialGrid.flat();
                setPuzzleObj(
                  initialFlat.map((item, id) => {
                    return { id, value: item !== null ? String(item) : "", isPreFilled: item !== null };
                  })
                );
                setIsLoading(false);
                setIsSolved(false);
                setSelectedInput(null);
                setSelectedRow(0);
                setSelectedCol(0);
              });
            }} />
          </div>
        </header>

        {/* Sub Header */}
        <div className="sub-header d-flex align-items-center">
          <h1 className="sub-header-title">{puzzle.name}</h1>
          <span className="ml-auto mistake-text" style={{ color: '#ff7043', fontWeight: 600 }}>
            {puzzle.difficulty}
          </span>
        </div>

        {isSolved && (
          <div style={{ padding: '1rem', marginBottom: '2rem', borderRadius: '15px', background: '#d4edda', color: '#155724', textAlign: 'center', fontWeight: 'bold' }}>
            You did it! ❤️ Brilliant as always.
          </div>
        )}

        {/* Game Board */}
        <div className="game-container">
          {[...Array(4)].map((_, index) => {
            return <Shape key={index} className={`shape-${index + 1}`} />;
          })}
          <div
            className={`game-wrapper select-row-${selectedRow} select-col-${selectedCol}`}
          >
            {puzzleObj.map(({ value, isPreFilled }, index) => {
              const row = Math.floor(index / 9);
              const col = index % 9;
              const isWrong = !isSolved && value !== "" && value !== String(solutionGrid[row][col]);
              
              return (
                <input
                  key={index}
                  value={value}
                  readOnly={isPreFilled}
                  tabIndex={isPreFilled ? -1 : 0}
                  className={`game-input ${isPreFilled ? "prefilled-text" : ""} ${isWrong ? "wrong-text" : ""}`}
                  type="text"
                  maxLength={1}
                  name={`game-input-${index}`}
                  onChange={(e) => onHandleChange(e.target.value)}
                  onFocus={() => {
                    onHandleFocus(isPreFilled, index);
                  }}
                  onBlur={() => {
                    setTimeout(() => {
                      if (document.activeElement?.tagName !== 'INPUT') {
                        setSelectedRow(0);
                        setSelectedCol(0);
                      }
                    }, 100);
                  }}
                  onClick={() => onHandleFocus(isPreFilled, index)}
                />
              );
            })}
          </div>
        </div>

        {/* Actions */}
        <div className="actions d-flex align-items-center">
          <IconButton icon="lightbulb" onClick={onHint} isRound />
          <div className="ml-auto">
            <Time isSolved={isSolved} />
          </div>
        </div>

        {/* Numpad */}
        <div className="numbers">
          {[...Array(9)].map((_, index) => {
            return (
              <NumberBtn
                key={index}
                text={index + 1}
                onClick={() => {
                  onHandleChange(String(index + 1));
                }}
              />
            );
          })}
          <NumberBtn onClick={() => onHandleChange("", true)} text="&#10005;" isClear />
        </div>

      </div>
    </div>
  );
}
