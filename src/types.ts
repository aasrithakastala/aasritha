export interface Track {
  id: string;
  title: string;
  artist: string;
  url: string;
  cover: string;
}

export type GameState = 'IDLE' | 'PLAYING' | 'GAME_OVER';

export interface Point {
  x: number;
  y: number;
}
