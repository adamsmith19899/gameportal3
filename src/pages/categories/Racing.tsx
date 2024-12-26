import React from 'react';
import { GameGrid } from '../../components/sections/GameGrid';
import { games } from '../../data/games';

export function RacingGames() {
  const racingGames = games.featured.concat(games.popular).filter(game => 
    game.category === 'racing'
  );

  return (
    <div className="pt-24 px-4">
      <h1 className="text-3xl font-bold text-white mb-8">Racing Games</h1>
      <GameGrid title="Popular Racing Games" games={racingGames} />
    </div>
  );
}