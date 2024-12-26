import { Game } from '../types/game';

const bitLifeGame: Game = {
  id: 'bitlife',
  title: 'BitLife',
  description: 'Live another life, make your own choices, and see how your virtual life plays out in this addictive life simulator game.',
  thumbnail: 'https://images.unsplash.com/photo-1633355444132-695d5876cd00?auto=format&fit=crop&q=80&w=1000',
  category: 'simulation',
  isNew: true
};

const generateGames = (category: string, count: number, startIndex: number = 0): Game[] => {
  const timestamp = Date.now();
  return Array.from({ length: count }, (_, i) => ({
    id: `${category}-${timestamp}-${startIndex + i + 1}`, // Make IDs unique with timestamp
    title: `${category.charAt(0).toUpperCase() + category.slice(1)} Game ${startIndex + i + 1}`,
    thumbnail: `https://images.unsplash.com/photo-${1500000000000 + (startIndex + i) * 1000}?auto=format&fit=crop&q=80&w=1000`,
    category,
    isNew: i < 5
  }));
};

// Create separate game collections for each category
const actionGames = generateGames('action', 30);
const racingGames = generateGames('racing', 30);
const sportsGames = generateGames('sports', 30);
const puzzleGames = generateGames('puzzle', 30);
const twoPlayerGames = generateGames('2player', 30);
const adventureGames = generateGames('adventure', 30);
const arcadeGames = generateGames('arcade', 30);
const strategyGames = generateGames('strategy', 30);

export const games = {
  featured: [
    bitLifeGame,
    ...actionGames.slice(0, 5),
    ...racingGames.slice(0, 5),
    ...sportsGames.slice(0, 5)
  ],
  new: [
    ...actionGames.slice(5, 13),
    ...puzzleGames.slice(0, 8),
    ...racingGames.slice(5, 12),
    ...sportsGames.slice(5, 12)
  ],
  popular: [
    ...twoPlayerGames.slice(0, 10),
    ...arcadeGames.slice(0, 10),
    ...strategyGames.slice(0, 10)
  ],
  action: actionGames,
  racing: racingGames,
  sports: sportsGames,
  puzzle: puzzleGames,
  twoPlayer: twoPlayerGames,
  adventure: adventureGames,
  arcade: arcadeGames,
  strategy: strategyGames
};