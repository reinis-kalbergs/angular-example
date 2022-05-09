export interface CharacterApiResponse {
  info: Pagination;
  results: Character[];
}

interface Pagination {
  count: number;
  pages: number;
  next: string;
  prev: string;
}

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: CharacterOrigin;
  location: any;
  image: string;
  episodes: string[];
  created: string;
}

interface CharacterOrigin {
  name: string;
  url: string;
}

interface CharacterLocation extends CharacterOrigin {
}
