import React from 'react';

interface GameFrameProps {
  gameId: string;
}

export function GameFrame({ gameId }: GameFrameProps) {
  return (
    <div className="w-full aspect-[4/3] bg-black/20 rounded-lg overflow-hidden">
      <iframe
        src={`/games/${gameId}/index.html`}
        className="w-full h-full border-0"
        title="Game Frame"
        allow="fullscreen; autoplay"
      />
    </div>
  );
}