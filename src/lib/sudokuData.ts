export type SudokuPuzzle = {
  id: string;
  name: string;
  difficulty: 'Easy' | 'Medium' | 'Hard' | 'Expert';
};

export const puzzles: SudokuPuzzle[] = [
  {
    id: "1",
    name: "Morning Coffee",
    difficulty: "Easy",
  },
  {
    id: "2",
    name: "Lunch Break",
    difficulty: "Medium",
  },
  {
    id: "3",
    name: "Evening Challenge",
    difficulty: "Hard",
  },
  {
    id: "4",
    name: "Night Owl",
    difficulty: "Expert",
  },
];
