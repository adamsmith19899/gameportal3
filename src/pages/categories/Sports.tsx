import React from 'react';
import { GameGrid } from '../../components/sections/GameGrid';
import { games } from '../../data/games';

export function SportsGames() {
  const sportsGames = games.featured.concat(games.popular).filter(game => 
    game.category === 'sports'
  );

  return (
    <div className="pt-24 px-4">
      <h1 className="text-3xl font-bold text-white mb-8">Sports Games</h1>
      <GameGrid title="Popular Sports Games" games={sportsGames} />
    </div>
  );
}