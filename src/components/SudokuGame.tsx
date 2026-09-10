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
  
  // Transform initialGrid to flat array format for neumorphic UI compatibility
  const initialFlat = puzzle.initialGrid.flat();
  const [puzzleObj, setPuzzleObj] = useState(
    initialFlat.map((item, id) => {
      return {
        id,
        value: item !== null ? String(item) : "",
        isPreFilled: item !== null
      };
    })
  );

  const [selectedInput, setSelectedInput] = useState<number | null>(null);
  const [selectedRow, setSelectedRow] = useState(0);
  const [selectedCol, setSelectedCol] = useState(0);
  const [isSolved, setIsSolved] = useState(false);

  const checkWin = useCallback((currentGrid: typeof puzzleObj) => {
    // Check if fully filled
    if (currentGrid.some(cell => cell.value === "")) return false;

    // Convert back to 9x9 for easy validation
    const grid2D: string[][] = Array.from({ length: 9 }, () => Array(9).fill(""));
    for (let i = 0; i < 81; i++) {
      grid2D[Math.floor(i / 9)][i % 9] = currentGrid[i].value;
    }

    // Check rows and columns
    for (let i = 0; i < 9; i++) {
      const rowSet = new Set();
      const colSet = new Set();
      for (let j = 0; j < 9; j++) {
        const rowVal = grid2D[i][j];
        const colVal = grid2D[j][i];
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
            const val = grid2D[boxRow * 3 + r][boxCol * 3 + c];
            if (boxSet.has(val)) return false;
            boxSet.add(val);
          }
        }
      }
    }
    
    return true;
  }, []);

  const onHandleChange = useCallback((value: string, clearValue: boolean = false) => {
    if (isSolved) return;
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

  // Keyboard support
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

  return (
    <div className="neumorphic-wrapper">
      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600&display=swap");
        @import url("https://fonts.googleapis.com/icon?family=Material+Icons+Outlined");
      `}</style>
      <div className="neo-container">
        
        {/* Header */}
        <header className="d-flex align-items-center">
          <IconButton icon="keyboard_backspace" onClick={() => router.push('/samiya/sudoku')} />
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
              return (
                <input
                  key={index}
                  value={value}
                  readOnly={isPreFilled}
                  tabIndex={isPreFilled ? -1 : 0}
                  className={`game-input ${isPreFilled ? "prefilled-text" : ""}`}
                  type="text"
                  maxLength={1}
                  name={`game-input-${index}`}
                  onChange={(e) => onHandleChange(e.target.value)}
                  onFocus={() => {
                    onHandleFocus(isPreFilled, index);
                  }}
                  onBlur={() => {
                    // Slight delay to allow clicks on numpad before losing selection styling
                    setTimeout(() => {
                      // Only clear if active element is not an input
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
        <div className="actions d-flex align-items-center justify-content-end">
          <Time isSolved={isSolved} />
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
