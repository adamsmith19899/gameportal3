import React from 'react';
import { Link } from 'react-router-dom';
import type { Game } from '../../types/game';

interface SimilarGamesProps {
  currentGame: Game;
  games: Game[];
}

export function SimilarGames({ currentGame, games }: SimilarGamesProps) {
  const similarGames = games
    .filter(game => game.id !== currentGame.id)
    .slice(0, 6);

  return (
    <div className="bg-white/5 rounded-lg p-6">
      <h3 className="text-lg font-semibold text-white mb-4">Similar Games</h3>
      <div className="grid grid-cols-2 gap-4">
        {similarGames.map(game => (
          <Link
            key={game.id}
            to={`/game/${game.id}`}
            className="group relative aspect-square overflow-hidden rounded-lg bg-white/5"
          >
            <img
              src={game.thumbnail}
              alt={game.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all">
              <span className="absolute bottom-2 left-2 text-white text-sm font-medium">
                {game.title}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}