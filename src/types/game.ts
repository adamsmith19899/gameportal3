export interface Game {
  id: string;
  title: string;
  thumbnail: string;
  description?: string;
  category?: string;
  isNew?: boolean;
  controls?: {
    [key: string]: string;
  };
  instructions?: string;
}