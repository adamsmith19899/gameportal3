import React, { useRef } from 'react';
import { useFullscreen } from '../../hooks/useFullscreen';

interface GameEmbedProps {
  id: string;
  title: string;
}

export function GameEmbed({ id, title }: GameEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { enterFullscreen } = useFullscreen();

  const handleFullscreen = () => {
    if (containerRef.current) {
      enterFullscreen(containerRef.current);
    }
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full aspect-[4/3] bg-black/20 rounded-lg overflow-hidden group"
    >
      <iframe
        src={`/games/${id}/index.html`}
        title={title}
        className="absolute inset-0 w-full h-full border-0"
        allow="fullscreen; autoplay; gamepad"
        loading="lazy"
      />
      <button
        onClick={handleFullscreen}
        className="absolute top-4 right-4 px-4 py-2 bg-black/50 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
      >
        Fullscreen
      </button>
    </div>
  );
}