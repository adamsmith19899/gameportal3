import React from 'react';
import { GameCard } from '../ui/GameCard';
import type { Game } from '../../types/game';

interface RelatedGamesProps {
  currentGame: Game;
  games: Game[];
}

export function RelatedGames({ currentGame, games }: RelatedGamesProps) {
  const relatedGames = games
    .filter(game => 
      game.id !== currentGame.id && 
      game.category === currentGame.category
    )
    .slice(0, 6);

  return (
    <div className="bg-white/5 rounded-lg p-6">
      <h3 className="text-lg font-semibold text-white mb-4">Similar Games</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {relatedGames.map(game => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
}