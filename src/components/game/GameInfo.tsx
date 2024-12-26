import React from 'react';
import { Info, Share2 } from 'lucide-react';
import type { Game } from '../../types/game';

interface GameInfoProps {
  game: Game;
}

export function GameInfo({ game }: GameInfoProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">{game.title}</h1>
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/80">
              {game.category}
            </span>
            {game.isNew && (
              <span className="px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-sm text-white">
                NEW
              </span>
            )}
          </div>
        </div>
        <button className="p-2 hover:bg-white/5 rounded-lg transition-colors">
          <Share2 className="w-5 h-5 text-white/60" />
        </button>
      </div>
      
      {game.description && (
        <p className="text-white/70 leading-relaxed">{game.description}</p>
      )}
      
      {game.instructions && (
        <div className="bg-white/5 rounded-lg p-6">
          <h3 className="flex items-center gap-2 text-lg font-semibold text-white mb-3">
            <Info className="w-5 h-5" />
            How to Play
          </h3>
          <p className="text-white/70">{game.instructions}</p>
        </div>
      )}
    </div>
  );
}