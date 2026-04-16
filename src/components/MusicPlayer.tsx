import React from 'react';
import { Play, Pause, SkipBack, SkipForward } from 'lucide-react';
import { TRACKS } from '../constants';
import { useMusic } from './MusicContext';

export const PlaylistSidebar: React.FC = () => {
  const { currentTrackIndex, playTrack } = useMusic();

  return (
    <aside className="bg-[#050505] p-10 flex flex-col border-r border-[#1a1a1a] h-full overflow-y-auto">
      <div className="text-[10px] uppercase tracking-[2px] text-[#888888] mb-6 font-bold">
        Playlist / {TRACKS.length.toString().padStart(2, '0')} Tracks
      </div>
      <ul className="list-none">
        {TRACKS.map((track, index) => (
          <li 
            key={track.id}
            onClick={() => playTrack(index)}
            className={`py-4 border-b border-[#1a1a1a] cursor-pointer flex items-center gap-3 group transition-colors ${
              currentTrackIndex === index ? 'text-[#ff00ff]' : 'text-white hover:text-[#00f3ff]'
            }`}
          >
            <div className={`w-1.5 h-1.5 rounded-full transition-all ${
              currentTrackIndex === index 
                ? 'bg-[#ff00ff] shadow-[0_0_8px_#ff00ff]' 
                : 'bg-[#333] group-hover:bg-[#00f3ff]'
            }`} />
            <div>
              <div className="font-semibold text-[14px]">{track.title}</div>
              <div className="text-[12px] text-[#888888] mt-1">{track.artist}</div>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export const MusicControlsFooter: React.FC = () => {
  const { currentTrack, isPlaying, togglePlay, nextTrack, prevTrack, progressPercent, currentTime, duration } = useMusic();

  const formatTime = (time: number) => {
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <footer className="bg-[#050505] border-t-2 border-[#1a1a1a] flex items-center justify-between px-10 h-full">
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-8">
          <button onClick={prevTrack} className="cursor-pointer opacity-60 hover:opacity-100 transition-opacity">
            <SkipBack size={20} fill="white" />
          </button>
          <button 
            onClick={togglePlay}
            className="w-[50px] h-[50px] rounded-full bg-white text-black flex items-center justify-center cursor-pointer hover:scale-105 transition-transform"
          >
            {isPlaying ? <Pause size={24} fill="black" /> : <Play size={24} fill="black" className="ml-1" />}
          </button>
          <button onClick={nextTrack} className="cursor-pointer opacity-60 hover:opacity-100 transition-opacity">
            <SkipForward size={20} fill="white" />
          </button>
        </div>
        
        <div className="ml-4">
          <div className="text-[14px] font-bold">{currentTrack.title}</div>
          <div className="text-[11px] text-[#888888]">
            {formatTime(currentTime)} / {formatTime(duration)}
          </div>
        </div>
      </div>

      <div className="relative w-[400px] h-1 bg-[#222] rounded-full overflow-hidden">
        <div 
          className="absolute top-0 left-0 h-full bg-[#00f3ff] shadow-[0_0_8px_#00f3ff] transition-all duration-300"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      <div className="text-[12px] tracking-[1px] text-[#888888] uppercase font-bold">
        Snake Speed: 1.0x
      </div>
    </footer>
  );
};

