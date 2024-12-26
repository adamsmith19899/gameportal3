import React from 'react';
import { GameGrid } from '../../components/sections/GameGrid';
import { games } from '../../data/games';

const categories = [
  'action',
  'racing',
  'sports',
  'puzzle',
  '2player',
  'adventure',
  'arcade',
  'strategy'
];

export function AllCategories() {
  return (
    <div className="pt-24 px-4">
      <h1 className="text-3xl font-bold text-white mb-8">All Categories</h1>
      {categories.map(category => {
        const categoryGames = games.featured.concat(games.popular)
          .filter(game => game.category === category);
        
        return categoryGames.length > 0 && (
          <GameGrid 
            key={category}
            title={`${category.charAt(0).toUpperCase() + category.slice(1)} Games`}
            games={categoryGames}
          />
        );
      })}
    </div>
  );
}