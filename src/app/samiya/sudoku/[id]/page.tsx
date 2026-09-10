import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { puzzles } from '@/lib/sudokuData';
import SudokuGame from '@/components/SudokuGame';
import '@/components/SudokuGame.css';

type Props = {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const puzzle = puzzles.find(p => p.id === resolvedParams.id);
  
  if (!puzzle) {
    return { title: 'Puzzle Not Found' };
  }

  return {
    title: `${puzzle.name} - Sudoku for Samiya ❤️`,
    description: `Difficulty: ${puzzle.difficulty}. A beautiful little Sudoku collection made just for you!`,
    openGraph: {
      title: `${puzzle.name} - Sudoku`,
      description: `Difficulty: ${puzzle.difficulty}. Dive into this Sudoku challenge!`,
    },
  };
}

export default async function SudokuPage({ params }: Props) {
  const resolvedParams = await params;
  const puzzle = puzzles.find(p => p.id === resolvedParams.id);
  
  if (!puzzle) {
    notFound();
  }

  return <SudokuGame puzzle={puzzle} />;
}
