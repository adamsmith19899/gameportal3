import React from 'react';
import { HeroSection } from '../components/sections/HeroSection';
import { CategoriesSection } from '../components/sections/CategoriesSection';
import { GameGrid } from '../components/sections/GameGrid';
import { games } from '../data/games';

export function HomePage() {
  return (
    <main className="max-w-7xl mx-auto px-4 space-y-12">
      <HeroSection featuredGame={games.featured[0]} />
      <CategoriesSection />
      <GameGrid title="Popular Action Games" games={games.action.slice(0, 12)} />
      <GameGrid title="Racing Games" games={games.racing.slice(0, 12)} />
      <GameGrid title="Sports Games" games={games.sports.slice(0, 12)} />
      <GameGrid title="Puzzle Games" games={games.puzzle.slice(0, 12)} />
      <GameGrid title="2 Player Games" games={games.twoPlayer.slice(0, 12)} />
      <GameGrid title="Adventure Games" games={games.adventure.slice(0, 12)} />
      <GameGrid title="Arcade Games" games={games.arcade.slice(0, 12)} />
      <GameGrid title="Strategy Games" games={games.strategy.slice(0, 12)} />
    </main>
  );
}