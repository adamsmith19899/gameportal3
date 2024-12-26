import React from 'react';
import { Fullscreen, ThumbsUp, Share2 } from 'lucide-react';

interface GameActionsProps {
  onFullscreen: () => void;
  onLike: () => void;
  onShare: () => void;
}

export function GameActions({ onFullscreen, onLike, onShare }: GameActionsProps) {
  return (
    <div className="flex items-center gap-4 py-4">
      <button
        onClick={onFullscreen}
        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/80 hover:text-white transition-all"
      >
        <Fullscreen className="w-4 h-4" />
        <span>Fullscreen</span>
      </button>
      <button
        onClick={onLike}
        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/80 hover:text-white transition-all"
      >
        <ThumbsUp className="w-4 h-4" />
        <span>Like</span>
      </button>
      <button
        onClick={onShare}
        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/80 hover:text-white transition-all"
      >
        <Share2 className="w-4 h-4" />
        <span>Share</span>
      </button>
    </div>
  );
}