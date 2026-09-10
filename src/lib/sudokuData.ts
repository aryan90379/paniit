export type SudokuPuzzle = {
  id: string;
  name: string;
  difficulty: string;
  initialGrid: (number | null)[][];
};

export const puzzles: SudokuPuzzle[] = [
  {
    id: "1",
    name: "Morning Coffee",
    difficulty: "Easy",
    initialGrid: [
      [5, 3, null, null, 7, null, null, null, null],
      [6, null, null, 1, 9, 5, null, null, null],
      [null, 9, 8, null, null, null, null, 6, null],
      [8, null, null, null, 6, null, null, null, 3],
      [4, null, null, 8, null, 3, null, null, 1],
      [7, null, null, null, 2, null, null, null, 6],
      [null, 6, null, null, null, null, 2, 8, null],
      [null, null, null, 4, 1, 9, null, null, 5],
      [null, null, null, null, 8, null, null, 7, 9],
    ],
  },
  {
    id: "2",
    name: "Lunch Break",
    difficulty: "Medium",
    initialGrid: [
      [null, 2, null, 6, null, 8, null, null, null],
      [5, 8, null, null, null, 9, 7, null, null],
      [null, null, 7, null, 4, null, null, 2, 8],
      [3, 7, null, 4, null, 1, 5, null, null],
      [6, null, null, null, 8, null, null, null, null],
      [null, null, 8, null, null, null, null, 1, 3],
      [null, 5, 2, null, null, null, null, 8, null],
      [null, null, 6, null, null, 7, null, null, 5],
      [4, null, null, 8, null, 5, null, 6, 9],
    ],
  },
  {
    id: "3",
    name: "Evening Challenge",
    difficulty: "Hard",
    initialGrid: [
      [null, null, null, 6, null, null, 4, null, null],
      [7, null, null, null, null, 3, 6, null, null],
      [null, null, null, null, 9, 1, null, 8, null],
      [null, 0, null, null, null, null, 0, null, null], // using null since 0 isn't valid for a blank cell, let's fix below
      [null, 5, null, 1, 8, null, null, null, 3],
      [null, null, null, 3, null, 6, null, 4, 5],
      [null, 4, null, 2, null, null, null, 6, null],
      [9, null, 3, null, null, null, null, null, null],
      [null, 2, null, null, null, null, 1, null, null],
    ].map(row => row.map(cell => cell === 0 ? null : cell)),
  },
  {
    id: "4",
    name: "Date Night",
    difficulty: "Expert",
    initialGrid: [
      [null, null, 5, 3, null, null, null, null, null],
      [8, null, null, null, null, null, null, 2, null],
      [null, 7, null, null, 1, null, 5, null, null],
      [4, null, null, null, null, 5, 3, null, null],
      [null, 1, null, 7, null, null, null, null, 6],
      [null, null, 3, 2, null, null, null, 8, null],
      [null, 6, null, 5, null, null, null, null, 9],
      [null, null, 4, null, null, null, null, 3, null],
      [null, null, null, null, null, 9, 7, null, null],
    ],
  },
];
