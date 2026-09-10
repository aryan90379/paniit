import { notFound } from 'next/navigation';
import { puzzles } from '@/lib/sudokuData';
import SudokuGame from '@/components/SudokuGame';

export default async function SudokuPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const puzzle = puzzles.find(p => p.id === resolvedParams.id);
  
  if (!puzzle) {
    notFound();
  }

  return <SudokuGame puzzle={puzzle} />;
}
