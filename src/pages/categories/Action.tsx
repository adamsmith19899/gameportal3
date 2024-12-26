import React from 'react';
import { GameGrid } from '../../components/sections/GameGrid';
import { games } from '../../data/games';

export function ActionGames() {
  const actionGames = games.featured.concat(games.popular).filter(game => 
    game.category === 'action'
  );

  return (
    <div className="pt-24 px-4">
      <h1 className="text-3xl font-bold text-white mb-8">Action Games</h1>
      <GameGrid title="Popular Action Games" games={actionGames} />
    </div>
  );
}