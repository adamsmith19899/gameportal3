import React from 'react';
import { Link } from 'react-router-dom';
import type { Game } from '../../types/game';

interface GameCardProps {
  game: Game;
}

export function GameCard({ game }: GameCardProps) {
  return (
    <Link
      to={`/game/${game.id}`}
      className="group relative aspect-square overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm transition-all hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20"
    >
      <img
        src={game.thumbnail}
        alt={game.title}
        className="w-full h-full object-cover"
        loading="lazy"
      />
      {game.isNew && (
        <span className="absolute top-2 right-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs px-3 py-1 rounded-full font-medium">
          NEW
        </span>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
        <span className="absolute bottom-3 left-3 text-white text-sm font-medium">
          {game.title}
        </span>
      </div>
    </Link>
  );
}