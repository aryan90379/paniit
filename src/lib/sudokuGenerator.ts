// Translated from the user's C++ backtracking algorithm

export function isValid(board: string[][], row: number, col: number, numStr: string): boolean {
  for (let i = 0; i < 9; i++) {
    if (board[i][col] === numStr) {
      return false;
    }
  }
  for (let i = 0; i < 9; i++) {
    if (board[row][i] === numStr) {
      return false;
    }
  }

  const startRow = Math.floor(row / 3) * 3;
  const startCol = Math.floor(col / 3) * 3;

  for (let i = startRow; i < startRow + 3; i++) {
    for (let j = startCol; j < startCol + 3; j++) {
      if (board[i][j] === numStr) {
        return false;
      }
    }
  }

  return true;
}

export function solveSudoku(board: string[][]): boolean {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (board[row][col] === '.') {
        for (let num = 1; num <= 9; num++) {
          const numStr = num.toString();
          if (isValid(board, row, col, numStr)) {
            board[row][col] = numStr;
            if (solveSudoku(board)) {
              return true;
            }
            board[row][col] = '.';
          }
        }
        return false;
      }
    }
  }
  return true;
}

// Utility to count solutions to ensure puzzle has a unique solution
function countSolutions(board: string[][], count = { val: 0 }) {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (board[row][col] === '.') {
        for (let num = 1; num <= 9; num++) {
          const numStr = num.toString();
          if (isValid(board, row, col, numStr)) {
            board[row][col] = numStr;
            countSolutions(board, count);
            board[row][col] = '.';
          }
        }
        return count.val;
      }
    }
  }
  count.val++;
  return count.val;
}

function shuffle<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

export function generateFullGrid(): string[][] {
  const board: string[][] = Array.from({ length: 9 }, () => Array(9).fill('.'));
  
  function fill(row: number, col: number): boolean {
    if (row === 9) return true;
    const nextRow = col === 8 ? row + 1 : row;
    const nextCol = col === 8 ? 0 : col + 1;
    
    if (board[row][col] !== '.') return fill(nextRow, nextCol);
    
    const nums = shuffle(['1','2','3','4','5','6','7','8','9']);
    for (const num of nums) {
      if (isValid(board, row, col, num)) {
        board[row][col] = num;
        if (fill(nextRow, nextCol)) return true;
        board[row][col] = '.';
      }
    }
    return false;
  }
  
  fill(0, 0);
  return board;
}

export function generatePuzzle(difficulty: 'Easy' | 'Medium' | 'Hard' | 'Expert'): { initialGrid: (number | null)[][], solutionGrid: number[][] } {
  const fullGrid = generateFullGrid();
  
  // Keep a copy of the solution
  const solutionGrid = fullGrid.map(row => row.map(cell => parseInt(cell, 10)));
  
  const puzzleGrid = fullGrid.map(row => [...row]);
  
  let cellsToRemove = 0;
  switch (difficulty) {
    case 'Easy': cellsToRemove = 30; break;
    case 'Medium': cellsToRemove = 40; break;
    case 'Hard': cellsToRemove = 50; break;
    case 'Expert': cellsToRemove = 60; break;
  }
  
  // Randomly remove cells
  let attempts = 5; // To prevent infinite loops if we get stuck finding unique cells to remove
  
  while (cellsToRemove > 0 && attempts > 0) {
    const row = Math.floor(Math.random() * 9);
    const col = Math.floor(Math.random() * 9);
    
    if (puzzleGrid[row][col] !== '.') {
      const backup = puzzleGrid[row][col];
      puzzleGrid[row][col] = '.';
      
      const copy = puzzleGrid.map(r => [...r]);
      const solutions = countSolutions(copy, { val: 0 });
      
      if (solutions !== 1) {
        puzzleGrid[row][col] = backup; // Put it back if it ruins uniqueness
        attempts--;
      } else {
        cellsToRemove--;
        attempts = 5; // Reset attempts after successful removal
      }
    }
  }

  const initialGrid = puzzleGrid.map(row => row.map(cell => cell === '.' ? null : parseInt(cell, 10)));
  
  return { initialGrid, solutionGrid };
}
