export type ThemeColor = "ludic" | "energy" | "space" | "retention";

export interface IslandPoint {
  id: string;
  title: string;
  description: string;
  x: number; // position in percent
  y: number; // position in percent
  theme: ThemeColor;
  icon?: string;
}

export interface Section {
  id: string;
  title: string;
  description: string;
  theme: ThemeColor;
  path: string;
}

export interface CardData {
  id: string;
  title: string;
  description: string;
  image?: string;
  theme?: ThemeColor;
}
