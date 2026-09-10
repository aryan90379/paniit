import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sudoku for Samiya ❤️',
  description: 'A beautiful little Sudoku collection made just for you. Take your pick and have fun!',
  openGraph: {
    title: 'Sudoku for Samiya ❤️',
    description: 'A beautiful little Sudoku collection made just for you.',
    type: 'website',
  },
};

export default function SamiyaSudokuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
