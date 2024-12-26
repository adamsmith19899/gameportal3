import { Game } from '../types/game';

export function getCategoryGames(games: Record<string, Game[]>, category: string): Game[] {
  return Object.values(games)
    .flat()
    .filter(game => game.category?.toLowerCase() === category?.toLowerCase());
}

export function formatCategoryTitle(category: string): string {
  return category ? category.charAt(0).toUpperCase() + category.slice(1) : '';
}