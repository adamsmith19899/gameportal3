import React from 'react';

interface Game {
  id: string;
  title: string;
  thumbnail: string;
  isNew?: boolean;
}

interface GameGridProps {
  title: string;
  games: Game[];
}

export function GameGrid({ title, games }: GameGridProps) {
  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold text-white mb-6">{title}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {games.map((game) => (
          <a
            key={game.id}
            href={`#game/${game.id}`}
            className="group relative aspect-square overflow-hidden rounded-lg bg-purple-900/30 transition-transform hover:scale-105"
          >
            <img
              src={game.thumbnail}
              alt={game.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            {game.isNew && (
              <span className="absolute top-2 right-2 bg-purple-600 text-white text-xs px-2 py-1 rounded-full">
                NEW
              </span>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="absolute bottom-2 left-2 text-white text-sm font-medium">
                {game.title}
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}