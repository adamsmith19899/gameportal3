import React from 'react';
import { useParams } from 'react-router-dom';
import { GameGrid } from '../components/sections/GameGrid';
import { games } from '../data/games';
import { getCategoryGames, formatCategoryTitle } from '../utils/categoryUtils';

export function CategoryPage() {
  const { category } = useParams();
  const categoryGames = getCategoryGames(games, category || '');
  const categoryTitle = formatCategoryTitle(category || '');

  return (
    <div className="pt-24 px-4 max-w-7xl mx-auto">
      <GameGrid title={`${categoryTitle} Games`} games={categoryGames} />
    </div>
  );
}