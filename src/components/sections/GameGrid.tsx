import React from 'react';
import { GameCard } from '../ui/GameCard';
import type { Game } from '../../types/game';

interface GameGridProps {
  title: string;
  games: Game[];
}

export function GameGrid({ title, games }: GameGridProps) {
  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold text-white mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
        {title}
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </section>
  );
}