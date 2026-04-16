import React, { useState } from 'react';
import { SnakeGame } from './components/SnakeGame';
import { PlaylistSidebar, MusicControlsFooter } from './components/MusicPlayer';
import { MusicProvider } from './components/MusicContext';

export default function App() {
  const [highScore, setHighScore] = useState(0);

  const handleScoreChange = (score: number) => {
    if (score > highScore) {
      setHighScore(score);
    }
  };

  return (
    <MusicProvider>
      <div className="h-screen w-screen overflow-hidden grid grid-cols-[320px_1fr] grid-rows-[80px_1fr_100px] bg-[#222] gap-[1px] font-sans">
        {/* Header */}
        <header className="col-span-2 bg-[#050505] flex items-center px-10 border-b-2 border-[#1a1a1a]">
          <h1 className="text-[32px] font-black tracking-[-1px] text-[#00f3ff] uppercase shadow-[0_0_10px_rgba(0,243,255,0.4)]">
            Synth & Snake
          </h1>
          <div className="ml-auto flex items-center gap-6">
            <div className="text-right">
              <div className="text-[10px] uppercase tracking-[2px] text-[#888888] font-bold">High Score</div>
              <div className="text-xl font-black text-white">{highScore.toLocaleString()}</div>
            </div>
          </div>
        </header>

        {/* Sidebar */}
        <PlaylistSidebar />

        {/* Main Game Area */}
        <main className="bg-[#111111] relative overflow-hidden">
          <SnakeGame onScoreChange={handleScoreChange} />
        </main>

        {/* Footer Controls */}
        <div className="col-span-2">
          <MusicControlsFooter />
        </div>
      </div>
    </MusicProvider>
  );
}


