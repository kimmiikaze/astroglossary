export interface GlossaryEntry {
  id: string;
  term: string;
  definition: string;
  category: string;
  relatedTerms?: string[];
  etymology?: string;
  examples?: string[];
  tags?: string[];
}

export interface GlossaryCategory {
  id: string;
  name: string;
  description: string;
  color: string;
}

export interface ChartData {
  id: string;
  name: string;
  birthDate: Date;
  birthTime: string;
  birthPlace: {
    city: string;
    state?: string;
    country: string;
    latitude: number;
    longitude: number;
    timezone: string;
  };
  planets: PlanetPosition[];
  houses: HousePosition[];
  aspects: Aspect[];
}

export interface PlanetPosition {
  planet: string;
  sign: string;
  degree: number;
  house: number;
  isRetrograde: boolean;
}

export interface HousePosition {
  house: number;
  sign: string;
  degree: number;
}

export interface Aspect {
  planet1: string;
  planet2: string;
  type: string;
  orb: number;
  isExact: boolean;
}

export interface SearchResult {
  entry: GlossaryEntry;
  relevance: number;
  matchType: 'term' | 'definition' | 'tag';
}