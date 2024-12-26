import React from 'react';
import { GameGrid } from '../../components/sections/GameGrid';
import { games } from '../../data/games';

export function TwoPlayerGames() {
  const multiplayerGames = games.featured.concat(games.popular).filter(game => 
    game.category === '2player'
  );

  return (
    <div className="pt-24 px-4">
      <h1 className="text-3xl font-bold text-white mb-8">2 Player Games</h1>
      <GameGrid title="Popular 2 Player Games" games={multiplayerGames} />
    </div>
  );
}