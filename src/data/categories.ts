import { Gamepad, Car, Trophy, Blocks, Users2, Sword, CircuitBoard, Brain } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Category {
  icon: LucideIcon;
  name: string;
  path: string;
  color: string;
}

export const categories: Category[] = [
  { icon: Gamepad, name: 'Action', path: '/category/action', color: 'from-red-500 to-orange-500' },
  { icon: Car, name: 'Racing', path: '/category/racing', color: 'from-blue-500 to-cyan-500' },
  { icon: Trophy, name: 'Sports', path: '/category/sports', color: 'from-green-500 to-emerald-500' },
  { icon: Blocks, name: 'Puzzle', path: '/category/puzzle', color: 'from-purple-500 to-pink-500' }, // Changed from PuzzlePiece to Blocks
  { icon: Users2, name: '2 Player', path: '/category/2player', color: 'from-yellow-500 to-amber-500' },
  { icon: Sword, name: 'Adventure', path: '/category/adventure', color: 'from-indigo-500 to-violet-500' },
  { icon: CircuitBoard, name: 'Arcade', path: '/category/arcade', color: 'from-rose-500 to-pink-500' },
  { icon: Brain, name: 'Strategy', path: '/category/strategy', color: 'from-teal-500 to-cyan-500' }
];