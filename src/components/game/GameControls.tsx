import React from 'react';
import { Gamepad2, Keyboard } from 'lucide-react';

interface GameControlsProps {
  controls: { [key: string]: string };
}

export function GameControls({ controls }: GameControlsProps) {
  return (
    <div className="bg-white/5 rounded-lg p-6">
      <h3 className="flex items-center gap-2 text-lg font-semibold text-white mb-4">
        <Keyboard className="w-5 h-5" />
        Game Controls
      </h3>
      <div className="grid grid-cols-2 gap-4">
        {Object.entries(controls).map(([key, action]) => (
          <div key={key} className="flex items-center gap-3">
            <kbd className="px-2 py-1 bg-white/10 rounded text-sm text-white/80">
              {key}
            </kbd>
            <span className="text-white/60">{action}</span>
          </div>
        ))}
      </div>
    </div>
  );
}