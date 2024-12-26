import React from 'react';
import { GameCard } from '../ui/GameCard';
import type { Game } from '../../types/game';

interface HeroSectionProps {
  featuredGame: Game;
}

export function HeroSection({ featuredGame }: HeroSectionProps) {
  return (
    <section className="relative h-[500px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={featuredGame.thumbnail}
          alt={featuredGame.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-indigo-950 via-indigo-950/80 to-transparent" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-bold text-white mb-4">{featuredGame.title}</h2>
          <p className="text-lg text-white/80 mb-6">
            Experience the most popular unblocked game of 2024!
          </p>
          <a
            href={`#game/${featuredGame.id}`}
            className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium hover:from-purple-500 hover:to-pink-500 transition-all"
          >
            Play Now
          </a>
        </div>
      </div>
    </section>
  );
}