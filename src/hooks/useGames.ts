import { useState } from 'react';
import { games as initialGames } from '../data/games';
import type { Game } from '../types/game';

export function useGames() {
  const [games, setGames] = useState(initialGames);

  const addGame = (game: Game) => {
    setGames(prev => ({
      ...prev,
      featured: [...prev.featured, game]
    }));
  };

  const updateGame = (game: Game) => {
    setGames(prev => ({
      ...prev,
      featured: prev.featured.map(g => g.id === game.id ? game : g),
      new: prev.new.map(g => g.id === game.id ? game : g),
      popular: prev.popular.map(g => g.id === game.id ? game : g)
    }));
  };

  const deleteGame = (id: string) => {
    setGames(prev => ({
      ...prev,
      featured: prev.featured.filter(g => g.id !== id),
      new: prev.new.filter(g => g.id !== id),
      popular: prev.popular.filter(g => g.id !== id)
    }));
  };

  return { games, addGame, updateGame, deleteGame };
}