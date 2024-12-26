import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { GameEmbed } from '../components/game/GameEmbed';
import { GameInfo } from '../components/game/GameInfo';
import { GameControls } from '../components/game/GameControls';
import { SimilarGames } from '../components/game/SimilarGames';
import { games } from '../data/games';

export function GamePage() {
  const { id } = useParams();
  const allGames = Object.values(games).flat();
  const game = allGames.find(g => g.id === id);

  if (!game) {
    return <Navigate to="/" replace />;
  }

  const categoryGames = allGames.filter(g => g.category === game.category);

  const defaultControls = {
    'Arrow Keys': 'Move',
    'Spacebar': 'Action',
    'Enter': 'Start/Pause'
  };

  return (
    <div className="pt-24 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr,380px] gap-8">
        <div className="space-y-8">
          <GameEmbed id={game.id} title={game.title} />
          <GameInfo game={game} />
        </div>
        
        <aside className="space-y-6">
          <GameControls controls={game.controls || defaultControls} />
          <SimilarGames currentGame={game} games={categoryGames} />
        </aside>
      </div>
    </div>
  );
}